import ContactoRepository from '../repositories/contacto-repository.js';

const repo = new ContactoRepository();
export default class ContactoService
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