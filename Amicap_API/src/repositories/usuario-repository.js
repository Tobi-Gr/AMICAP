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
            const sql = `select username, email From "Usuarios" Where email = $1 And contrasena = $2`;
            const values = [entity.email, entity.contrasena];
            const consulta = await pgHelper.requestValues(sql, values);
            if(consulta != null)
            {
                const user =
                {
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
        const sql = `Insert into "Usuarios"(username, email, contrasena) Values ($1,$2,$3)`;
        const values = [entity.username, entity.email, entity.contrasena];
        returnArray = pgHelper.requestCount(sql, values);
        return returnArray;
    }

    VerificarUsuarioAsync = async (token) =>
    {
        let returnArray = null;
        const Token = token;
        console.log('Token: ', Token)
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