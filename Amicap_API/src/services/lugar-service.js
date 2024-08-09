import LugarRepository from '../repositories/lugar-repository.js';

const repo = new LugarRepository();
export default class LugarService
{
    getByIdUsuarioAsync = async (id_usuario) =>
    {
        const returnArray = await repo.getByIdUsuarioAsync(id_usuario);
        return returnArray;
    }
    
    getByIdAtaqueAsync = async (id_ataque) =>
    {
        const returnArray = await repo.getByIdAtaqueAsync(id_ataque);
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