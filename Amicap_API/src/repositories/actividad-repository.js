import DataBaseHelper from '../helpers/bdHelper.js';
const pgHelper = new DataBaseHelper;

export default class ActividadRepository
{
    //Devuelve todas las actividades
    getAllAsync = async () =>
    {
        let returnArray = null;
        const sql = `select * From "Actividad" Where defecto = true Order By id`;
        returnArray = await pgHelper.request(sql);
        return returnArray;
    }

    //Crea una nueva actividad
    createAsync = async (entity) => {
        let returnArray = null;
        
        // Se inicializa el array de valores
        let values = [entity.id_usuario, entity.nombre];
        let pasos = ['paso_uno', 'paso_dos', 'paso_tres', 'paso_cuatro'];
    
        // Construcción de la consulta SQL
        let columnas = ['id_usuario', 'nombre'];
        let placeholders = ['$1', '$2'];
    
        // Recorremos los pasos, se incluyen solo si existen
        pasos.forEach((step, index) => {
            if (entity[step]) {
                columnas.push(step);
                placeholders.push(`$${values.length + 1}`);
                values.push(entity[step]);
            }
        });
    
        const sql = `INSERT INTO "Actividad"(${columnas.join(', ')}, defecto) VALUES (${placeholders.join(', ')}, false)`;
    
        returnArray = await pgHelper.requestCount(sql, values);
        return returnArray;
    };
    

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