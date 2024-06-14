import DataBaseHelper from '../helpers/bdHelper.js';

export default class ActividadRepository
{
    getByIdUsuarioAsync = async (id_usuario) =>
    {
        let returnArray = null;
        const sql = `SELECT A.* FROM actividades as A inner join actPreferidas as P on A.id = P.id_actividad where P.id_usuario = $1`;
        const values = [id_usuario]
        returnArray = DataBaseHelper.requestValues(sql, values);
        return returnArray;
    }

    createAsync = async (entity) =>
    {
        let returnArray = null;
        const sql = `Insert into actPreferidas(id_usuario, id_actividad) Values ($1,$2)`;
        const values = [entity.id_usuario, entity.id_actividad]
        returnArray = DataBaseHelper.requestCount(sql, values);
        return returnArray;
    }

    deleteByIdAsync = async (id) =>
    {
        let returnArray = null;
        const sql = `Delete FROM actPreferidas where id = $1`;
        const values = [id]
        returnArray = DataBaseHelper.requestCount(sql, values);
        return returnArray;
    }
}