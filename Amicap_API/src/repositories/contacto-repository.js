import DataBaseHelper from '../helpers/bdHelper.js';

export default class ContactoRepository
{
    getByIdUsuarioAsync = async (id_usuario) =>
    {
        let returnArray = null;
        const sql = `SELECT * FROM contactos where id_usuario = $1`;
        const values = [id_usuario]
        returnArray = DataBaseHelper.requestValues(sql, values);
        return returnArray;
    }

    createAsync = async (entity) =>
    {
        let returnArray = null;
        const sql = `Insert into contactos(id_usuario, numero, nombre) Values ($1,$2,$3)`;
        const values = [entity.id_usuario, entity.numero, entity.nombre]
        returnArray = DataBaseHelper.requestCount(sql, values);
        return returnArray;
    }

    updateAsync = async (entity) =>
    {
        let returnArray = null;
        const sql = `Update contactos Set numero= $2, nombre= $3 Where id= $1`;
        const values = [entity.id, entity.numero, entity.nombre]
        returnArray = DataBaseHelper.requestCount(sql, values);
        return returnArray;
    }

    deleteByIdAsync = async (id) =>
    {
        let returnArray = null;
        const sql = `Delete FROM contactos where id = $1`;
        const values = [id]
        returnArray = DataBaseHelper.requestCount(sql, values);
        return returnArray;
    }
}