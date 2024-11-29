import DataBaseHelper from '../helpers/bdHelper.js';
const pgHelper = new DataBaseHelper;

export default class RespiracionRepository
{
    //Devuelve la respiracion del usuario
    getByIdUsuarioAsync = async (id_usuario) =>
    {
        let returnArray = null;
        const sql = `SELECT * FROM "Respiracion" where id_usuario = $1`;
        const values = [id_usuario];
        returnArray = await pgHelper.requestOne(sql, values);
        return returnArray;
    }

    //Crea una respiracion nueva
    createAsync = async (entity) =>
    {
        let returnArray = null;
        const sql = `Insert into "Respiracion"(id_usuario, tinhalando, texhalando, tmanteniendo) Values ($1,$2,$3,$4)`;
        const values = [entity.id, entity.tinhalando, entity.texhalando, entity.tmanteniendo];
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }

    //Modifica una respiracion
    updateAsync = async (entity) =>
    {
        let returnArray = null;
        const sql = `Update "Respiracion" Set tinhalando=$2, texhalando=$3, tmanteniendo=$4 Where id_usuario= $1`;
        const values = [entity.id, entity.tinhalando, entity.texhalando, entity.tmanteniendo]
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }

    //Elimina una respiracion
    deleteByIdAsync = async (id) =>
    {
        let returnArray = null;
        const sql = `Delete FROM "Respiracion" where id = $1`;
        const values = [id]
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }
}