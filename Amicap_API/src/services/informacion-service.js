import InformacionRepository from '../repositories/informacion-repository.js';

const repo = new InformacionRepository();
export default class InformacionService
{
    getAllAsync = async () =>
    {
        const returnArray = await repo.getAllAsync();
        return returnArray;
    }
}