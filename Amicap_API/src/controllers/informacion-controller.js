import {Router} from 'express';
import InformacionService from '../services/informacion-service.js';
import ValidationHelper from '../helpers/validationHelper.js';
const router = Router();
const svc = new In();
const hlp = new ValidationHelper;

router.get('/', async (req, res) =>{
    let respuesta;
    const returnArray = await svc.getAllAsync();
    if (returnArray != null)
    {
        respuesta = res.status(200).json(returnArray);
    }
    else respuesta = res.status(404).send('No se encontro ningun resultado')
    return respuesta;
});

export default router;