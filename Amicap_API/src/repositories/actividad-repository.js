import DataBaseHelper from '../helpers/bdHelper.js';

export default class ActividadRepository
{
    createAsync = async (entity) =>
    {
        let returnArray = null;
        const sql = `Insert into "Actividad"(id_usuario, paso_uno, paso_dos, paso_tres, paso_cuatro, nombre) Values ($1,$2,$3,$4,$5,$6)`;
        const values = [entity.id_usuario, entity.paso_uno, entity.paso_dos, entity.paso_tres, entity.paso_cuatro, entity.nombre]
        returnArray = DataBaseHelper.requestCount(sql, values);
        return returnArray;
    }

    updateAsync = async (entity) =>
    {
        let returnArray = null;
        const sql = `Update "Actividad" Set paso_uno=$2, paso_dos=$3, paso_tres=$4, paso_cuatro=$5, nombre=$6 Where id= $1`;
        const values = [entity.id, entity.paso_uno, entity.paso_dos, entity.paso_tres, entity.paso_cuatro, entity.nombre]
        returnArray = DataBaseHelper.requestCount(sql, values);
        return returnArray;
    }

    deleteByIdAsync = async (id) =>
    {
        let returnArray = null;
        const sql = `Delete FROM "Actividad" where id = $1`;
        const values = [id]
        returnArray = DataBaseHelper.requestCount(sql, values);
        return returnArray;
    }
}