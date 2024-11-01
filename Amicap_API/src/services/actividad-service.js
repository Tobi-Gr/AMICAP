import ActividadRepository from '../repositories/actividad-repository.js';

const repo = new ActividadRepository();
export default class ActividadService
{
    //trae todas las actividades
    getAllAsync = async () =>
    {
        const returnArray = await repo.getAllAsync();
        return returnArray;
    }

    createAsync = async (entity) =>
    {
        const returnArray = await repo.createAsync(entity);
        return returnArray;
    }

    updateAsync = async (entity) =>
    {
        const returnArray = await repo.updateAsync(entity);
        return returnArray;
    }

    deleteByIdAsync = async (id) =>
    {
        const returnArray = await repo.deleteByIdAsync(id);
        return returnArray;
    }
}