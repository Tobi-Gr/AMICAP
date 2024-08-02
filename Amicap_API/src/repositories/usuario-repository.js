import DataBaseHelper from '../helpers/bdHelper.js';
const pgHelper = new DataBaseHelper;
import jwt from 'jsonwebtoken';

export default class UsersRepository
{
    LoginAsync = async (entity) =>
    {
        let returnArray = null;
        const KEY = 'claveToken';
        try
        {
            const login =
            {
                username: entity.username,
                password: entity.password
            };
            const options =
            {
                expiresIn: '1h'
            };
            const sql = `select * From users Where username= $1 And password= $2`;
            const values = [entity.username, entity.password];
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
        const sql = `Insert into Users(first_name, last_name, username, password) Values ($1,$2,$3,$4)`;
        const values = [entity.first_name, entity.last_name, entity.username, entity.password];
        returnArray = pgHelper.requestCount(sql, values);
        return returnArray;
    }
}