import ContactoRepository from '../repositories/contacto-repository.js';

export default class ContactoService
{
    getByIUsuariodAsync = async (id_usuario) =>
    {
        const repo = new ContactoRepository();
        const returnArray = await repo.getByIdUsuarioAsync(id_usuario);
        return returnArray;
    }

    createAsync = async (entity) =>
    {
        const repo = new ContactoRepository();
        const returnArray = await repo.createAsync(entity);
        return returnArray;
    }

    updateAsync = async (entity) =>
    {
        const repo = new ContactoRepository();
        const returnArray = await repo.updateAsync(entity);
        return returnArray;
    }

    deleteByIdAsync = async (id) =>
    {
        const repo = new ContactoRepository();
        const returnArray = await repo.deleteByIdAsync(id);
        return returnArray;
    }
}