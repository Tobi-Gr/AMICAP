import DataBaseHelper from '../helpers/bdHelper.js';
const pgHelper = new DataBaseHelper;
import jwt from 'jsonwebtoken';

const KEY = 'claveToken';

export default class UsuarioRepository
{
    LoginAsync = async (entity) =>
    {
        let returnArray = null;
        try
        {
            const options =
            {
                expiresIn: '1h'
            };
            const sql = `select id, username, email From "Usuarios" Where email = $1 And contrasena = $2`;
            const values = [entity.email, entity.contrasena];
            const consulta = await pgHelper.requestOne(sql, values);
            if(consulta != null)
            {
                const user =
                {
                    id: consulta.id,
                    username: consulta.username, //null
                    email: consulta.email // null
                };
                const token = jwt.sign(user, KEY, options);
                const result =
                {
                    succcess: true,
                    message: 'success',
                    token: token
                }
                returnArray = result;
            }
        }
        catch (error)
        {
            console.log(error);
        }
        return returnArray;
    }

    RegisterAsync = async (entity) =>
    {
        let returnArray = null;
        let sql = `select id From "Usuarios" Where email = $2`;
        let values = [entity.email];
        repetido = pgHelper.requestOne(sql, values);
        if(repetido != null) return null;
        sql = `Insert into "Usuarios"(username, email, contrasena) Values ($1,$2,$3)`;
        values = [entity.username, entity.email, entity.contrasena];
        returnArray = await pgHelper.requestCount(sql, values);
        if (returnArray > 0)
        {
            sql = `select id From "Usuarios" Where username = $1, email = $2 And contrasena = $3`;
            const usuario = pgHelper.requestOne(sql, values);
            console.log('register usuario: ', usuario);
            if (usuario != null)
            {
                sql = `select id From "Actividades" Where default = true`;
                const actividades = pgHelper.request(sql);
                console.log('register actividades: ', actividades);
                actividades.forEach(item => {
                    sql = `Insert into "actPreferidas"(id_usuario, id_actividad) Values ($1,$2)`;
                    values = [usuario, item.id];
                    const hecho = pgHelper.requestCount(sql, values);
                });
            }
        }
        return returnArray;
    }

    updateAsync = async (entity) =>
    {
        let returnArray = null;
        const sql = `Update "Usuarios" Set username = $2, email = $3, contrasena = $4 Where id = $1`;
        const values = [entity.id, entity.username, entity.email, entity.contrasena]
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }

    VerificarUsuarioAsync = async (token) =>
    {
        let returnArray = null;
        const Token = token;
        try
        {
            returnArray = jwt.verify(Token, KEY);
        }
        catch (error)
        {
            console.log(error);
        }
        return returnArray;
    }
}