import ActPreferidaRepository from '../repositories/actPreferida-repository.js';

export default class ActPreferidaService
{
    getByIdUsuarioAsync = async (id_usuario) =>
    {
        const repo = new ActPreferidaRepository();
        const returnArray = await repo.getByIdUsuarioAsync(id_usuario);
        return returnArray;
    }

    createAsync = async (entity) =>
    {
        const repo = new ActPreferidaRepository();
        const returnArray = await repo.createAsync(entity);
        return returnArray;
    }

    deleteByIdAsync = async (id) =>
    {
        const repo = new ActPreferidaRepository();
        const returnArray = await repo.deleteByIdAsync(id);
        return returnArray;
    }
}