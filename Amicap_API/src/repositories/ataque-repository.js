import DataBaseHelper from '../helpers/bdHelper.js';
const pgHelper = new DataBaseHelper;

export default class AtaqueRepository
{
    //Devuelve los ataque del usuario
    getByIdUsuarioAsync = async (id_usuario) =>
    {
        let returnArray = null;
        const sql = `
        SELECT A.id, A.fecha
        FROM "Ataque" as A
        WHERE A.id_usuario = $1
        ORDER BY A.fecha DESC;`;
        const values = [id_usuario]
        returnArray = await pgHelper.requestValues(sql, values);
        return returnArray;
    }

    //Devuelve un ataque segun el id
    getByIdAtaqueAsync = async (id) =>
    {
        let returnArray = null;
        const sql = `
        SELECT A.fecha, L.nombre, 
        json_build_object('nombre', C.nombre) as causas
        FROM "Ataque" as A
        LEFT JOIN "Ataque-Causa" as AC on A.id = AC.id_ataque
        LEFT JOIN "Causa" as C On C.id = AC.id_causa
        LEFT JOIN "Lugar" as L On L.id = A.id_lugar
        WHERE A.id = $1
        ORDER BY A.fecha DESC;`;
        const values = [id]
        returnArray = await pgHelper.requestOne(sql, values);
        return returnArray;
    }

    //Crea un ataque con el id del usuario y la fecha
    createAsync = async (id_usuario) => {
        let returnArray = null;
        const sql = `Insert into "Ataque"(id_usuario, fecha) Values ($1, CURRENT_TIMESTAMP)`;
        const values = [id_usuario];
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }
    

    //Elimina un ataque por id
    deleteByIdAsync = async (id) =>
    {
        let returnArray = null;
        const sql = `Delete FROM "Ataque" where id = $1`;
        const values = [id]
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }
    
    //Modifica el lugar de un ataque
    updateLugarAsync = async (entity) =>
    {
        let returnArray = null;
        const sql = `Update "Ataque" Set id_lugar= $2 Where id = $1`;
        const values = [entity.id, entity.id_lugar]
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }

    //Agrega una causas de un ataque
    createCausaAsync = async (entity) =>
    {
        let returnArray = null;
        const sql = `Insert into "Ataque-Causa"(id_ataque, id_causa) Values ($1,$2)`;
        const values = [entity.id_ataque, entity.id_causa]
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }

    //Elimina una causa de un ataque
    deleteCausaAsync = async (id) =>
    {
        let returnArray = null;
        const sql = `Delete FROM "Ataque-Causa" where id = $1`;
        const values = [id]
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }
}