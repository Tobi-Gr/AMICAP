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
        const returnArray = await repo.RegisterAsync(entity);
        return returnArray;
    }
    updateAsync = async (entity) =>
    {
        const returnArray = await repo.updateAsync(entity);
        return returnArray;
    }
    VerificarUsuarioAsync = async (token) =>
    {
        const returnArray = await repo.VerificarUsuarioAsync(token);
        return returnArray;
    }
}