import ActPreferidaRepository from '../repositories/actPreferida-repository.js';

const repo = new ActPreferidaRepository();
export default class ActPreferidaService
{
    //Trae todas las actividades que el usuario prefiere, No los ids
    getByIdUsuarioAsync = async (id_usuario) =>
    {
        const returnArray = await repo.getByIdUsuarioAsync(id_usuario);
        return returnArray;
    }

    //Crea una actividad preferida
    createAsync = async (entity) =>
    {
        const returnArray = await repo.createAsync(entity);
        return returnArray;
    }

    //Elimina una actividad preferida
    deleteAsync = async (idAct, idUsuario) =>
    {
        const returnArray = await repo.deleteAsync(idAct, idUsuario);
        return returnArray;
    }
}