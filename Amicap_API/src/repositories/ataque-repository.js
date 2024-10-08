import DataBaseHelper from '../helpers/bdHelper.js';
const pgHelper = new DataBaseHelper;

export default class AtaqueRepository
{
    getByIdUsuarioAsync = async (id_usuario) =>
    {
        let returnArray = null;
        const sql = `SELECT A.fecha, L.nombre
        json_build_object('nombre', C.nombre) as causas
        FROM "Ataque" as A
        inner join "Ataque-Causa" as AC on A.id = AC.id_ataque
        inner join "Causa" as C On C.id = AC.id_causa
        inner join "Lugar" as L On L.id = A.id_lugar
        where A.id_usuario = $1 Order By A.id`;
        const values = [id_usuario]
        returnArray = await pgHelper.requestValues(sql, values);
        return returnArray;
    }

    createAsync = async (entity) =>
    {
        let returnArray = null;
        const sql = `Insert into "Ataque"(id_usuario, fecha) Values ($1,$2)`;
        const values = [entity.id_usuario, entity.fecha]
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }

    deleteByIdAsync = async (id) =>
    {
        let returnArray = null;
        const sql = `Delete FROM "Ataque" where id = $1`;
        const values = [id]
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }
    
    updateLugarAsync = async (entity) =>
    {
        let returnArray = null;
        const sql = `Update "Ataque" Set id_lugar= $2 Where id = $1`;
        const values = [entity.id, entity.id_lugar]
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }

    createCausaAsync = async (entity) =>
    {
        let returnArray = null;
        const sql = `Insert into "Ataque-Causa"(id_ataque, id_causa) Values ($1,$2)`;
        const values = [entity.id_ataque, entity.id_causa]
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }

    deleteCausaAsync = async (id) =>
    {
        let returnArray = null;
        const sql = `Delete FROM "Ataque-Causa" where id = $1`;
        const values = [id]
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }
}