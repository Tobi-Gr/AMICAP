import RespiracionRepository from '../repositories/respiracion-repository.js';

const repo = new RespiracionRepository();
export default class RespiracionService
{
    //Devuelve la respiracion del usuario
    getByIdUsuarioAsync = async (id_usuario) =>
    {
        const returnArray = await repo.getByIdUsuarioAsync(id_usuario);
        return returnArray;
    }

    //Crea una respiracion nueva
    createAsync = async (entity) =>
    {
        const returnArray = await repo.createAsync(entity);
        return returnArray;
    }

    //Modifica una respiracion
    updateAsync = async (entity) =>
    {
        const returnArray = await repo.updateAsync(entity);
        return returnArray;
    }

    //Elimina una respiracion
    deleteByIdAsync = async (id) =>
    {
        const returnArray = await repo.deleteByIdAsync(id);
        return returnArray;
    }
}