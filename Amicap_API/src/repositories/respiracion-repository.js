import DBConfig from '../configs/dbConfig,js';
import pkg from 'pg';
const {Client, Pool} = pkg;

export default class RespiracionRepository
{
    getByIdUsuarioAsync = async (id_usuario) =>
    {
        let returnArray = null;
        const client = new Client(DBConfig);
        try
        {
            await client.connect();
            const sql = `SELECT * FROM respiracion where id_usuario = ${id_usuario}`;
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
            const sql = `Insert into respiracion(id_usuario, inhalar, exhalar, contener, esperar) Values ($1,$2,$3,$4,$5)`;
            let values = [entity.id_usuario, entity.inhalar, entity.exhalar, entity.contener, entity.esperar]
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

    updateAsync = async (entity) =>
    {
        let returnArray = null;
        const client = new Client(DBConfig);
        try
        {
            await client.connect();
            const sql = `Update respiracion Set inhalar=$2, exhalar=$3, contener=$4, esperar=$5 Where id_usuario= $1`;
            let values = [entity.id_usuario, entity.inhalar, entity.exhalar, entity.contener, entity.esperar]
            const result = await client.query(sql, values);
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