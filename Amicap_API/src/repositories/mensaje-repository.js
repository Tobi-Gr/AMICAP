import DataBaseHelper from '../helpers/bdHelper.js';
const pgHelper = new DataBaseHelper;

export default class MensajeRepository
{
    getByIdUsuarioAsync = async (id_usuario) =>
    {
        let returnArray = null;
        const sql = `SELECT * FROM "mensajeDefault" where id_usuario = $1`;
        const values = [id_usuario]
        returnArray = await pgHelper.requestValues(sql, values);
        return returnArray;
    }

    createAsync = async (entity) =>
    {
        let returnArray = null;
        const sql = `Insert into "mensajeDefault"(id_usuario, mensaje) Values ($1,$2) Order By id`;
        const values = [entity.id_usuario, entity.mensaje]
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }

    updateAsync = async (entity) =>
    {
        let returnArray = null;
        const sql = `Update "mensajeDefault" Set mensaje= $2 Where id = $1`;
        const values = [entity.id, entity.mensaje]
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }

    deleteByIdAsync = async (id) =>
    {
        let returnArray = null;
        const sql = `Delete FROM "mensajeDefault" where id = $1`;
        const values = [id]
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }
}