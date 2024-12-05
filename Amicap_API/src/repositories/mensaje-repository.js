import DataBaseHelper from '../helpers/bdHelper.js';
const pgHelper = new DataBaseHelper;

export default class MensajeRepository
{
    //Devuelve el mensaje del usuario
    getByIdUsuarioAsync = async (id_usuario) =>
    {
        let returnArray = null;
        const sql = `SELECT * FROM "mensajeDefault" where id_usuario = $1`;
        const values = [id_usuario];
        returnArray = await pgHelper.requestOne(sql, values);
        return returnArray;
    }

    //Crea un mensaje nuevo
    createAsync = async (entity) =>
    {
        let returnArray = null;
        const sql = `Insert into "mensajeDefault"(id_usuario, mensaje) Values ($1,$2) Order By id`;
        const values = [entity.id_usuario, entity.mensaje]
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }

    //Modifica un mensaje
    updateAsync = async (entity) =>
    {
        console.log('putMensaje: ', entity);
        let returnArray = null;
        const sql = `Update "mensajeDefault" Set mensaje=$2 Where id_usuario = $1`;
        const values = [entity.id, entity.mensaje]
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }

    //Elimina un mensaje
    deleteByIdAsync = async (id) =>
    {
        let returnArray = null;
        const sql = `Delete FROM "mensajeDefault" where id = $1`;
        const values = [id]
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }
}