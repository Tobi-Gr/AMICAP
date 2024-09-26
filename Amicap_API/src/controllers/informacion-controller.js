import {Router} from 'express';
import InformacionService from '../services/informacion-service.js';
import ValidationHelper from '../helpers/validationHelper.js';
const router = Router();
const svc = new InformacionService();
const hlp = new ValidationHelper;

router.get('', async (req, res) =>{
    const returnArray = await svc.getAllAsync();
    if (returnArray != null)
    {
        return res.status(200).json(returnArray);
    }
    else return res.status(404).send('No se encontro ningun resultado')
});

export default router;