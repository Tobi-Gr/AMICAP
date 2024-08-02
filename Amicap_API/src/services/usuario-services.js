import UsersRepository from '../repositories/users-repositories.js';

const repo = new UsersRepository();
export default class UsuarioServices
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