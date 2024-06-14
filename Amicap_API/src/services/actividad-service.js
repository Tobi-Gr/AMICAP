import ActividadRepository from '../repositories/actividad-repository.js';

export default class ActividadService
{
    createAsync = async (entity) =>
    {
        const repo = new ActividadRepository();
        const returnArray = await repo.createAsync(entity);
        return returnArray;
    }

    updateAsync = async (entity) =>
    {
        const repo = new ActividadRepository();
        const returnArray = await repo.updateAsync(entity);
        return returnArray;
    }

    deleteByIdAsync = async (id) =>
    {
        const repo = new ActividadRepository();
        const returnArray = await repo.deleteByIdAsync(id);
        return returnArray;
    }
}