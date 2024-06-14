import DBConfig from '../configs/dbConfig,js';
import pkg from 'pg';
const {Client, Pool} = pkg;

export default class ActividadRepository
{
    getByIdUsuarioAsync = async (id_usuario) =>
    {
        let returnArray = null;
        const client = new Client(DBConfig);
        try
        {
            await client.connect();
            const sql = `SELECT A.* FROM actividades as A inner join actPreferidas as P on A.id = P.id_actividad where P.id_usuario = ${id_usuario}`;
            const result = await client.query(sql);
            await client.end();
            returnArray = result;
        }
        catch (error)
        {
            console.log(error);
        }
        return returnArray;
    }

    createAsync = async (entity) =>
    {
        let returnArray = null;
        const client = new Client(DBConfig);
        try
        {
            await client.connect();
            const sql = `Insert into actPreferidas(id_usuario, id_actividad) Values ($1,$2)`;
            let values = [entity.id_usuario, entity.id_actividad]
            const result = await client.query(sql, values);
            await client.end();
            returnArray = result;
        }
        catch (error)
        {
            console.log(error);
        }
        return returnArray;
    }

    deleteByIdAsync = async (id) =>
    {
        let returnArray = null;
        const client = new Client(DBConfig);
        try
        {
            await client.connect();
            const sql = `Delete FROM actPreferidas where id = ${id}`;
            const result = await client.query(sql);
            await client.end();
            returnArray = result.rows;
        }
        catch (error)
        {
            console.log(error);
        }
        return returnArray;
    }
}