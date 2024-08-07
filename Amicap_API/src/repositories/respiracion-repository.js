import DataBaseHelper from '../helpers/bdHelper.js';
const pgHelper = new DataBaseHelper;

export default class RespiracionRepository
{
    getByIdUsuarioAsync = async (id_usuario) =>
    {
        let returnArray = null;
        const sql = `SELECT * FROM "Respiracion" where id_usuario = $1 Order By id`;
        const values = [id_usuario];
        returnArray = await pgHelper.requestOne(sql, values);
        return returnArray;
    }

    createAsync = async (entity) =>
    {
        let returnArray = null;
        const sql = `Insert into "Respiracion"(id_usuario, inhalar, exhalar, contener, esperar) Values ($1,$2,$3,$4,$5)`;
        const values = [entity.id_usuario, entity.inhalar, entity.exhalar, entity.contener, entity.esperar];
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }

    updateAsync = async (entity) =>
    {
        let returnArray = null;
        const sql = `Update "Respiracion" Set inhalar=$2, exhalar=$3, contener=$4, esperar=$5 Where id_usuario= $1`;
        const values = [entity.id_usuario, entity.inhalar, entity.exhalar, entity.contener, entity.esperar]
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }
}