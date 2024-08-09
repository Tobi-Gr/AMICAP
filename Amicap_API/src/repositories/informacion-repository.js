import DataBaseHelper from '../helpers/bdHelper.js';
const pgHelper = new DataBaseHelper;

export default class InformacionRepository
{
    getAllAsync = async () =>
    {
        let returnArray = null;
        const sql = `SELECT * FROM "Informacion" Order By id`;
        returnArray = await pgHelper.request(sql);
        return returnArray;
    }
}