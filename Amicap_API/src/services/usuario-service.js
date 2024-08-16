import UsuarioRepository from '../repositories/usuario-repository.js';

const repo = new UsuarioRepository();
export default class UsuarioService
{
    LoginAsync = async (entity) =>
    {
        const returnArray = await repo.LoginAsync(entity);
        return returnArray;
    }
    RegisterAsync = async (entity) =>
    {
        const returnArray = await repo.LoginAsync(entity);
        return returnArray;
    }
}