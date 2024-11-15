import DataBaseHelper from '../helpers/bdHelper.js';
const pgHelper = new DataBaseHelper;

export default class ActPreferidaRepository
{
    getByIdUsuarioAsync = async (id_usuario) =>
    {
        let returnArray = null;
        const sql = `SELECT A.* FROM "Actividad" as A inner join "actPreferidas" as P on A.id = P.id_actividad where P.id_usuario = $1 Order By id`;
        const values = [id_usuario];
        returnArray = await pgHelper.requestValues(sql, values);
        return returnArray;
    }

    getAsync = async (id_usuario) =>
    {
        let returnArray = null;
        const sql = `SELECT * FROM "actPreferidas" where id_usuario = $1 Order By id`;
        const values = [id_usuario];
        returnArray = await pgHelper.requestValues(sql, values);
        return returnArray;
    }

    createAsync = async (entity) =>
    {
        let returnArray = null;
        const sql = `Insert into "actPreferidas"(id_usuario, id_actividad) Values ($1,$2)`;
        const values = [entity.id_usuario, entity.id_actividad];
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }

    deleteAsync = async (idAct, idUsuario) =>
    {
        let returnArray = null;
        const sql = `Delete FROM "actPreferidas" where id_actividad = $1 and id_actividad = $2`;
        const values = [idAct, idUsuario];
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }
}