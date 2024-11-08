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
            const sql = `select id, username, email From "Usuarios" Where email = $1 And contrasena = $2`; //busca el usuario
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
                const token = jwt.sign(user, KEY, options); //crea el token con la informacion de arriba
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
        let sql = `select id From "Usuarios" Where email = $1`;
        let values = [entity.email];
        returnArray = await pgHelper.requestOne(sql, values);
        if(returnArray != null) return console.log('email repetido');
        sql = `Insert into "Usuarios"(username, email, contrasena) Values ($1,$2,$3)`; //crea el usuario
        values = [entity.username, entity.email, entity.contrasena];
        returnArray = await pgHelper.requestCount(sql, values);
        if (returnArray > 0)
        {
            sql = `select id From "Usuarios" Where username = $1 And email = $2 And contrasena = $3`; //busca el usuario creado
            const usuario = await pgHelper.requestOne(sql, values);
            if (usuario != null)
            {
                let hecho = null;
                sql = `select id From "Actividad" Where defecto = true`; //busca las actividades predeterminadas
                const actividades = await pgHelper.request(sql);
                for (const item of actividades)
                {
                    sql = `Insert into "actPreferidas"(id_usuario, id_actividad) Values ($1, $2)`; //crea actPreferidas del usuario creado
                    values = [usuario.id, item.id];
                    hecho = await pgHelper.requestCount(sql, values);
                }

                sql = `Insert into "mensajeDefault"(id_usuario, mensaje) Values ($1, $2)`; //crea mensajeDefault del usuario creado
                values = [usuario.id, "Estoy teniendo un ataque de pánico."];
                hecho = await pgHelper.requestCount(sql, values);

                sql = `Insert into "Respiracion"(id_usuario, tinhalando, texhalando, tconteniendo, tesperando) Values ($1, $2, $3, $4, $5)`; //crea respiracion del usuario creado
                values = [usuario.id, 4, 4, 4, 4]; 
                hecho = await pgHelper.requestCount(sql, values);

                sql = `select id, username, email From "Usuarios" Where username = $1 And email = $2 And contrasena = $3`;
                values = [entity.username, entity.email, entity.contrasena];
                returnArray = await pgHelper.requestOne(sql, values);
            }
        }
        return returnArray;
    }

    updateAsync = async (entity) =>
    {
        let returnArray = null;
        let sql;
        let values = [entity.id];
        if (entity.username != '') {
            sql = `Update "Usuarios" Set username = $${values.length + 1}`;
            values.push(entity.username);
            if (entity.email != '') {
                sql = `${sql}, email = $${values.length + 1}`;
                values.push(entity.email);
            }
            if (entity.contrasena != '') {
                sql = `${sql}, contrasena = $${values.length + 1}`;
                values.push(entity.contrasena);
            }
        }
        else if (entity.email != '') {
            sql = `Update "Usuarios" Set email = $${values.length + 1}`;
            values.push(entity.email);
            if (entity.contrasena != '') {
                sql = `${sql}, contrasena = $${values.length + 1}`;
                values.push(entity.contrasena);
            }
        }
        else if (entity.contrasena != '') {
            sql = `Update "Usuarios" Set contrasena = $${values.length + 1}`;
            values.push(entity.contrasena);
        }
        else return returnArray;
        sql = `${sql} Where id = $1`;
        
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