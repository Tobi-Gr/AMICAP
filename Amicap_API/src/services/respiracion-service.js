import RespiracionRepository from '../repositories/respiracion-repository.js';

export default class RespiracionService
{
    getByIUsuariodAsync = async (id_usuario) =>
    {
        const repo = new RespiracionRepository();
        const returnArray = await repo.getByIdUsuarioAsync(id_usuario);
        return returnArray;
    }

    createAsync = async (entity) =>
    {
        const repo = new RespiracionRepository();
        const returnArray = await repo.createAsync(entity);
        return returnArray;
    }

    updateAsync = async (entity) =>
    {
        const repo = new RespiracionRepository();
        const returnArray = await repo.updateAsync(entity);
        return returnArray;
    }
}