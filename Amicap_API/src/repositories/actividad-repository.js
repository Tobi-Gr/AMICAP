import DBConfig from '../configs/dbConfig,js';
import pkg from 'pg';
const {Client, Pool} = pkg;

export default class ActividadRepository
{
    createAsync = async (entity) =>
    {
        let returnArray = null;
        const client = new Client(DBConfig);
        try
        {
            await client.connect();
            const sql = `Insert into actividades(id_usuario, paso_uno, paso_dos, paso_tres, paso_cuatro, nombre) Values ($1,$2,$3,$4,$5,$6)`;
            let values = [entity.id_usuario, entity.paso_uno, entity.paso_dos, entity.paso_tres, entity.paso_cuatro, entity.nombre]
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
            const sql = `Update actividades Set paso_uno=$2, paso_dos=$3, paso_tres=$4, paso_cuatro=$5, nombre=$6 Where id= $1`;
            let values = [entity.id, entity.paso_uno, entity.paso_dos, entity.paso_tres, entity.paso_cuatro, entity.nombre]
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
            const sql = `Delete FROM actividades where id = ${id}`;
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