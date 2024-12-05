import AtaqueRepository from '../repositories/ataque-repository.js';

const repo = new AtaqueRepository();
export default class AtaqueService
{
    //Devuelve los ataque del usuario
    getByIdUsuarioAsync = async (id_usuario) =>
    {
        const returnArray = await repo.getByIdUsuarioAsync(id_usuario);
        return returnArray;
    }

    //Devuelve un ataque segun el id
    getByIdUsuarioAsync = async (id) =>
    {
        const returnArray = await repo.getByIdAtaqueAsync(id);
        return returnArray;
    }

    //Crea un ataque con el id del usuario y la fecha
    createAsync = async (id_usuario) =>
    {
        const returnArray = await repo.createAsync(id_usuario);
        return returnArray;
    }

    //Elimina un ataque por id
    deleteByIdAsync = async (id) =>
    {
        const returnArray = await repo.deleteByIdAsync(id);
        return returnArray;
    }

    //Modifica el lugar de un ataque
    updateLugarAsync = async (entity) =>
    {
        const returnArray = await repo.updateLugarAsync(entity);
        return returnArray;
    }

    //Agrega una causas de un ataque
    createCausaAsync = async (entity) =>
    {
        const returnArray = await repo.createCausaAsync(entity);
        return returnArray;
    }

    //Elimina una causa de un ataque
    deleteCausaAsync = async (id) =>
    {
        const returnArray = await repo.deleteCausaAsync(id);
        return returnArray;
    }
}