import DataBaseHelper from '../helpers/bdHelper.js';
const pgHelper = new DataBaseHelper;

export default class ActividadRepository
{
    //Devuelve todas las actividades
    getAllAsync = async () =>
    {
        let returnArray = null;
        const sql = `SELECT * FROM "Actividad" Order By id`;
        returnArray = await pgHelper.request(sql);
        return returnArray;
    }

    //Crea una nueva actividad
    createAsync = async (entity) =>
    {
        let returnArray = null;
        const sql = `Insert into "Actividad"(id_usuario, nombre, paso_uno, paso_dos, paso_tres, paso_cuatro, defecto) Values ($1,$2,$3,$4,$5,$6, false)`;
        const values = [entity.id_usuario, entity.nombre, entity.paso_uno, entity.paso_dos, entity.paso_tres, entity.paso_cuatro]
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }

    //Modifica una actividad
    updateAsync = async (entity) =>
    {
        let returnArray = null;
        const sql = `Update "Actividad" Set nombre=$2, paso_uno=$3, paso_dos=$4, paso_tres=$5, paso_cuatro=$6,  Where id = $1`;
        const values = [entity.id, entity.nombre, entity.paso_uno, entity.paso_dos, entity.paso_tres, entity.paso_cuatro]
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }

    //Elimina una actividad
    deleteByIdAsync = async (id) =>
    {
        let returnArray = null;
        const sql = `Delete FROM "Actividad" where id = $1`;
        const values = [id]
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    }
}