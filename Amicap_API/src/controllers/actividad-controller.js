import {Router} from 'express';
import ActividadService from '../services/actividad-service.js';
import ValidationHelper from '../helpers/validationHelper.js';
const router = Router();
const svc = new ActividadService();
const hlp = new ValidationHelper;

router.post('', async (req, res) =>{
    let respuesta;
    const entity = req.query;
    const returnArray = await svc.createAsync(entity);
    console.log(returnArray);
    if (returnArray != null)
    {
        respuesta = res.status(200).send('');
    }
    else respuesta = res.status(500).send('Error interno')
    return respuesta;
});

router.put('', async (req, res) =>{
    let respuesta;
    const entity = req.query;
    const returnArray = await svc.updateAsync(entity);
    if (returnArray != null)
    {
        respuesta = res.status(200).send('');
    }
    else respuesta = res.status(500).send('Error interno')
    return respuesta;
});

router.delete('', async (req, res) =>{
    let respuesta;
    let id = hlp.validarInt(req.query.id);
    const returnArray = await svc.deleteByIdAsync(id);
    if (returnArray != null)
    {
        respuesta = res.status(200).send('')
    }
    else respuesta = res.status(500).send('Error interno')
    return respuesta;
});

export default router;