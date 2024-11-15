import DataBaseHelper from '../helpers/bdHelper.js';
const pgHelper = new DataBaseHelper;

export default class CausaRepository
{
    //Devuelve las causas que creo el usuario
    getByIdUsuarioAsync = async (id_usuario) =>
    {
        let returnArray = null;
        const sql = `SELECT * FROM "Causa" where id_usuario = $1`;
        const values = [id_usuario]
        returnArray = await pgHelper.requestValues(sql, values);
        return returnArray;
    }

    //Crea una causa
    createAsync = async (entity) =>
    {
        let returnArray = null;
        const sql = `Insert into "Causa"(nombre, id_usuario) Values ($1,$2)`;
        const values = [entity.nombre, entity.id_usuario]
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }

    //Modifica una causa
    updateAsync = async (entity) =>
    {
        let returnArray = null;
        const sql = `Update "Causa" Set nombre= $2 Where id = $1`;
        const values = [entity.id, entity.nombre]
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }

    //Elimina una causa
    deleteByIdAsync = async (id) =>
    {
        let returnArray = null;
        const sql = `Delete FROM "Causa" where id = $1`;
        const values = [id]
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }
}