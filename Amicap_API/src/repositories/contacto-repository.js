import DataBaseHelper from '../helpers/bdHelper.js';
const pgHelper = new DataBaseHelper;

export default class ContactoRepository
{
    //Devuelve contactos de un usuario
    getByIdUsuarioAsync = async (id_usuario) =>
    {
        let returnArray = null;
        const sql = `SELECT * FROM "Contactos" where id_usuario = $1 Order By id`;
        const values = [id_usuario];
        returnArray = await pgHelper.requestValues(sql, values);
        return returnArray;
    }

    //Crea un contacto
    createAsync = async (entity) =>
    {
        let returnArray = null;
        const sql = `Insert into "Contactos"(id_usuario, numero, nombre) Values ($1,$2,$3)`;
        const values = [entity.id_usuario, entity.numero, entity.nombre]
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }

    //Modifica un contacto
    updateAsync = async (entity) =>
    {
        let returnArray = null;
        const sql = `Update "Contactos" Set numero= $2, nombre= $3 Where id = $1`;
        const values = [entity.id, entity.numero, entity.nombre]
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }

    //Elimina un contacto
    deleteByIdAsync = async (id) =>
    {
        let returnArray = null;
        const sql = `Delete FROM "Contactos" where id = $1`;
        const values = [id]
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }
}