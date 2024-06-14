import DataBaseHelper from '../helpers/bdHelper.js';

export default class RespiracionRepository
{
    getByIdUsuarioAsync = async (id_usuario) =>
    {
        let returnArray = null;
        const sql = `SELECT * FROM respiracion where id_usuario = $1`;
        const values = [id_usuario];
        returnArray = DataBaseHelper.requestOne(sql, values);
        return returnArray;
    }

    createAsync = async (entity) =>
    {
        let returnArray = null;
        const sql = `Insert into respiracion(id_usuario, inhalar, exhalar, contener, esperar) Values ($1,$2,$3,$4,$5)`;
        const values = [entity.id_usuario, entity.inhalar, entity.exhalar, entity.contener, entity.esperar];
        returnArray = DataBaseHelper.requestCount(sql, values);
        return returnArray;
    }

    updateAsync = async (entity) =>
    {
        let returnArray = null;
        const sql = `Update respiracion Set inhalar=$2, exhalar=$3, contener=$4, esperar=$5 Where id_usuario= $1`;
        const values = [entity.id_usuario, entity.inhalar, entity.exhalar, entity.contener, entity.esperar]
        returnArray = DataBaseHelper.requestCount(sql, values);
        return returnArray;
    }
}