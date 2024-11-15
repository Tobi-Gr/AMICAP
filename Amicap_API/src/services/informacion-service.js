import InformacionRepository from '../repositories/informacion-repository.js';

const repo = new InformacionRepository();
export default class InformacionService
{
    //Devuelve la informacion
    getAllAsync = async () =>
    {
        const returnArray = await repo.getAllAsync();
        return returnArray;
    }
}