import DBConfig from '../configs/dbConfig,js';
import pkg from 'pg';
const {Client, Pool} = pkg;

export default class ContactoRepository
{
    getByIdUsuarioAsync = async (id_usuario) =>
    {
        let returnArray = null;
        const client = new Client(DBConfig);
        try
        {
            await client.connect();
            const sql = `SELECT * FROM contactos where id_usuario = ${id_usuario}`;
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
            const sql = `Insert into contactos(id_usuario, numero, nombre) Values ($1,$2,$3)`;
            let values = [entity.id_usuario, entity.numero, entity.nombre]
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
            const sql = `Update contactos Set numero= $2, nombre= $3 Where id= $1`;
            let values = [entity.id, entity.numero, entity.nombre]
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

    deleteByIdAsync = async (id) =>
    {
        let returnArray = null;
        const client = new Client(DBConfig);
        try
        {
            await client.connect();
            const sql = `Delete FROM contactos where id = ${id}`;
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