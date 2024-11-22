import DBConfig from './../configs/dbConfig.js';
import pkg from 'pg';
const {Client} = pkg;

export default class DataBaseHelper
{
    //Devuelve un solo objeto
    requestOne = async (sql, values) => {
        let data = null;
        const client = new Client(DBConfig);
        try {
            await client.connect();
            const result = await client.query(sql, values);
            await client.end();
            if (result.rowCount > 0){
                data = result.rows[0];
            }
        }
        catch (error){
            console.log(error);
        }
        return data;
    }

    //Devuelve las filas modificadas
    requestCount = async (sql, values) => {
        let data = null;
        const client = new Client(DBConfig);
        try {
            await client.connect();
            const result = await client.query(sql, values);
            await client.end();
            if (result.rowCount > 0){
                data = result.rowCount;
            }
        }
        catch (error){
            console.log(error);
        }
        return data;
    }

    //Hace un put y devuelve la respuesta del endpoint
    update = async (sql, values) => {
        let data = null;
        const client = new Client(DBConfig);
        try {
            const result = await client.query(sql, values);
            await client.end();
            if (result.rowCount > 0) {
                data = result.result;
            }
        } catch (error) {
            console.log(error);
        }
        return result;
    };

    //Devuelve varios objetos segun un parametro
    requestValues = async (sql, values) => {
        let data = null;
        const client = new Client(DBConfig);
        try {
            await client.connect();
            const result = await client.query(sql, values);
            await client.end();
            if (result.rowCount > 0){
                data = result.rows;
            }
        }
        catch (error){
            console.log(error);
        }
        return data;
    }
    
    //Devuelve todos los objetos
    request = async (sql) => {
        let data = null;
        const client = new Client(DBConfig);
        try {
            await client.connect();
            const result = await client.query(sql);
            await client.end();
            data = result.rows;
        }
        catch (error){
            console.log(error);
        }
        return data;
    }
}
