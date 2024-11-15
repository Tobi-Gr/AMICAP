import ActPreferidaRepository from '../repositories/actPreferida-repository.js';

const repo = new ActPreferidaRepository();
export default class ActPreferidaService
{
    //Devuelve las actividades que el usuario tiene como preferidas
    getByIdUsuarioAsync = async (id_usuario) =>
    {
        const returnArray = await repo.getByIdUsuarioAsync(id_usuario);
        return returnArray;
    }

    //Devuelve las filas de actsPreferidas que corresponden al usuario
    getAsync = async(id_usuario) =>
    {
        const returnArray = await repo.getAsync(id_usuario);
        return returnArray;
    }

    //Crea actividades preferidas
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