import ActividadRepository from '../repositories/actividad-repository.js';

const repo = new ActividadRepository();
export default class ActividadService
{
    //Devuelve todas las actividades
    getAllAsync = async () =>
    {
        const returnArray = await repo.getAllAsync();
        return returnArray;
    }

    //Crea una nueva actividad
    createAsync = async (entity) =>
    {
        const returnArray = await repo.createAsync(entity);
        return returnArray;
    }

    //Modifica una actividad
    updateAsync = async (entity) =>
    {
        const returnArray = await repo.updateAsync(entity);
        return returnArray;
    }

    //Elimina una actividad
    deleteByIdAsync = async (id) =>
    {
        const returnArray = await repo.deleteByIdAsync(id);
        return returnArray;
    }
}