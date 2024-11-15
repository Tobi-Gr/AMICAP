import DataBaseHelper from '../helpers/bdHelper.js';
const pgHelper = new DataBaseHelper;

export default class LugarRepository
{
    //Devuelve los lugares que creo el usuario
    getByIdUsuarioAsync = async (id_usuario) =>
    {
        let returnArray = null;
        const sql = `SELECT * FROM "Lugar" where id_usuario = $1`;
        const values = [id_usuario]
        returnArray = await pgHelper.requestValues(sql, values);
        return returnArray;
    }

    //Crea un lugar
    createAsync = async (entity) =>
    {
        let returnArray = null;
        const sql = `Insert into "Lugar"(nombre, id_usuario) Values ($1,$2)`;
        const values = [entity.nombre, entity.id_usuario]
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }

    //Modifica un lugar
    updateAsync = async (entity) =>
    {
        let returnArray = null;
        const sql = `Update "Lugar" Set nombre= $2 Where id = $1`;
        const values = [entity.id, entity.nombre]
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }

    //Elimina un lugar
    deleteByIdAsync = async (id) =>
    {
        let returnArray = null;
        const sql = `Delete FROM "Lugar" where id = $1`;
        const values = [id]
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }
}