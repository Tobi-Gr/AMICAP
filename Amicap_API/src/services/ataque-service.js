import AtaqueRepository from '../repositories/ataque-repository.js';

const repo = new AtaqueRepository();
export default class AtaqueService
{
    getByIdUsuarioAsync = async (id_usuario) =>
    {
        const returnArray = await repo.getByIdUsuarioAsync(id_usuario);
        return returnArray;
    }

    createAsync = async (entity) =>
    {
        const returnArray = await repo.createAsync(entity);
        return returnArray;
    }

    deleteByIdAsync = async (id) =>
    {
        const returnArray = await repo.deleteByIdAsync(id);
        return returnArray;
    }

    updateLugarAsync = async (entity) =>
    {
        const returnArray = await repo.updateLugarAsync(entity);
        return returnArray;
    }

    createCausaAsync = async (entity) =>
    {
        const returnArray = await repo.createCausaAsync(entity);
        return returnArray;
    }

    deleteCausaAsync = async (id) =>
    {
        const returnArray = await repo.deleteCausaAsync(id);
        return returnArray;
    }
}