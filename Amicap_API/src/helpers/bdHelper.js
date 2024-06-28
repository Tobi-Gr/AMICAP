import DBConfig from './../configs/dbConfig.js';
import pkg from 'pg';
const {Client} = pkg;

export default class DataBaseHelper
{
    //este devuelve un objeto
    requestOne = async (sql, values) => {
        let data = null;
        const client = new Client(DBConfig);
        try {
            await client.connect();
            const result = await client.query(sql, values);
            await client.end();
            if (result.rows.length > 0){
                data = result.rows[0];
            }
        }
        catch (error){
            console.log(error);
        }
        return data;
    }
    //devuelve las row counts
    requestCount = async (sql, values) => {
        let data = null;
        const client = new Client(DBConfig);
        try {
            await client.connect();
            const result = await client.query(sql, values);
            await client.end();
            if (result.rows.length > 0){
                data = result.rowCount;
            }
        }
        catch (error){
            console.log(error);
        }
        return data;
    }
    // varios objetos
    requestValues = async (sql, values) => {
        let data = null;
        const client = new Client(DBConfig);
        try {
            await client.connect();
            const result = await client.query(sql, values);
            await client.end();
            if (result.rows.length > 0){
                data = result.rows;
            }
        }
        catch (error){
            console.log(error);
        }
        return data;
    }
    //Todos
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
