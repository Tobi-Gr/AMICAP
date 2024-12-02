import {Router} from 'express';
import ActividadService from '../services/actividad-service.js';
import ValidationHelper from '../helpers/validationHelper.js';
const router = Router();
const svc = new ActividadService();
const hlp = new ValidationHelper;

//Devuelve todas las actividades
router.get('', async (req, res) =>{
    console.log("entra al endpoint get all");
    const returnArray = await svc.getAllAsync();
    if (returnArray != null)
    {
        return res.status(200).json(returnArray);
    }
    else return res.status(404).send('No se encontro ningun resultado');
});

//Crea una nueva actividad
router.post('', async (req, res) =>{
    const entity = req.body;
    const returnArray = await svc.createAsync(entity);
    if (returnArray != null)
    {
        return res.status(200).send('');
    }
    else return res.status(500).send('Error interno');
});

//Modifica una actividad
router.put('', async (req, res) =>{
    const entity = req.body;
    const returnArray = await svc.updateAsync(entity);
    if (returnArray != null)
    {
        return res.status(200).send('');
    }
    else return res.status(500).send('Error interno');
});

//Elimina una actividad
router.delete('', async (req, res) =>{
    let id = hlp.validarInt(req.query.id);
    const returnArray = await svc.deleteByIdAsync(id);
    if (returnArray != null)
    {
        return res.status(200).send('');
    }
    else return res.status(500).send('Error interno');
});

export default router;