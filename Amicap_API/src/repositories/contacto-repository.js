import DataBaseHelper from '../helpers/bdHelper.js';
const pgHelper = new DataBaseHelper;

export default class ContactoRepository
{
    getByIdUsuarioAsync = async (id_usuario) =>
    {
        let returnArray = null;
        const sql = `SELECT * FROM "Contactos" where id_usuario = $1 Order By id`;
        const values = [id_usuario];
        returnArray = await pgHelper.requestValues(sql, values);
        console.log(returnArray);
        return returnArray;
    }

    createAsync = async (entity) =>
    {
        let returnArray = null;
        const sql = `Insert into "Contactos"(id_usuario, numero, nombre) Values ($1,$2,$3) Order By id`;
        const values = [entity.id_usuario, entity.numero, entity.nombre]
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }

    updateAsync = async (entity) =>
    {
        let returnArray = null;
        const sql = `Update "Contactos" Set numero= $2, nombre= $3 Where id = $1`;
        const values = [entity.id, entity.numero, entity.nombre]
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }

    deleteByIdAsync = async (id) =>
    {
        let returnArray = null;
        const sql = `Delete FROM "Contactos" where id = $1`;
        const values = [id]
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }
}