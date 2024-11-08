import ActPreferidaRepository from '../repositories/actPreferida-repository.js';

const repo = new ActPreferidaRepository();
export default class ActPreferidaService
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

    deleteAsync = async (idAct, idUsuario) =>
    {
        const returnArray = await repo.deleteAsync(idAct, idUsuario);
        return returnArray;
    }
}