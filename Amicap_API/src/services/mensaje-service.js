import MensajeRepository from '../repositories/mensaje-repository.js';

const repo = new MensajeRepository();
export default class MensajeService
{
    //Devuelve el mensaje del usuario
    getByIdUsuarioAsync = async (id_usuario) =>
    {
        const returnArray = await repo.getByIdUsuarioAsync(id_usuario);
        return returnArray;
    }

    //Crea un mensaje nuevo
    createAsync = async (entity) =>
    {
        const returnArray = await repo.createAsync(entity);
        return returnArray;
    }

    //Modifica un mensaje
    updateAsync = async (entity) =>
    {
        const returnArray = await repo.updateAsync(entity);
        return returnArray;
    }

    //Elimina un mensaje
    deleteByIdAsync = async (id) =>
    {
        const returnArray = await repo.deleteByIdAsync(id);
        return returnArray;
    }
}