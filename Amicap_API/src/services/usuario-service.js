import UsuarioRepository from '../repositories/usuario-repository.js';

const repo = new UsuarioRepository();
export default class UsuarioService
{
    //Login, devuelve el token
    LoginAsync = async (entity) =>
    {
        const returnArray = await repo.LoginAsync(entity);
        return returnArray;
    }

    //Registro, crea un usuario
    RegisterAsync = async (entity) =>
    {
        const returnArray = await repo.RegisterAsync(entity);
        return returnArray;
    }

    //Modifica el usuario
    updateAsync = async (entity) =>
    {
        const returnArray = await repo.updateAsync(entity);
        return returnArray;
    }

    //Verifica el token y devuelve el usuario
    VerificarUsuarioAsync = async (token) =>
    {
        const returnArray = await repo.VerificarUsuarioAsync(token);
        return returnArray;
    }

    //Elimina un usuario
    deleteByIdAsync = async (id) =>
    {
        const returnArray = await repo.deleteByIdAsync(id);
        return returnArray;
    }
}