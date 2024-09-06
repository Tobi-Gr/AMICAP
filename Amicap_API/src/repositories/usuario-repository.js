import DataBaseHelper from '../helpers/bdHelper.js';
const pgHelper = new DataBaseHelper;
import jwt from 'jsonwebtoken';

export default class UsuarioRepository
{
    LoginAsync = async (entity) =>
    {
        let returnArray = null;
        const KEY = 'claveToken';
        try
        {
            const login =
            {
                email: entity.email,
                contrasena: entity.contrasena
            };
            const options =
            {
                expiresIn: '1h'
            };
            const sql = `select * From users Where email= $1 And contrasena= $2`;
            const values = [entity.email, entity.contrasena];
            const consulta = pgHelper.requestValues(sql, values);
            if(consulta != null)
            {
                const token = jwt.sign(login, KEY, options);
                const result =
                {
                    succcess: true,
                    message: '',
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
        const sql = `Insert into Users(username, email, contrasena) Values ($1,$2,$3)`;
        const values = [entity.username, entity.email, entity.contrasena];
        returnArray = pgHelper.requestCount(sql, values);
        return returnArray;
    }
}