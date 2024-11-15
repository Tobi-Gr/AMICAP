import {Router} from 'express';
import CausaService from '../services/causa-service.js';
import ValidationHelper from '../helpers/validationHelper.js';
const router = Router();
const svc = new CausaService();
const hlp = new ValidationHelper;

//Devuelve las causas que creo el usuario
router.get('/:id_usuario', async (req, res) =>{
    let id_usuario = hlp.validarInt(req.params.id_usuario);
    const returnArray = await svc.getByIdUsuarioAsync(id_usuario);
    if (returnArray != null)
    {
        return res.status(200).json(returnArray);
    }
    else return res.status(404).send('No se encontro ningun resultado');
});

//Crea una causa
router.post('', async (req, res) =>{
    let respuesta;
    const entity = req.query;
    const returnArray = await svc.createAsync(entity);
    if (returnArray != null)
    {
        respuesta = res.status(200).send('');
    }
    else respuesta = res.status(500).send('Error interno');
    return respuesta;
});

//Modifica una causa
router.put('', async (req, res) =>{
    let respuesta;
    const entity = req.query;
    const returnArray = await svc.updateAsync(entity);
    if (returnArray != null)
    {
        respuesta = res.status(200).send('');
    }
    else respuesta = res.status(500).send('Error interno');
    return respuesta;
});

//Elimina una causa
router.delete('/:id', async (req, res) =>{
    let respuesta;
    let id = hlp.validarInt(req.params.id);
    const returnArray = await svc.deleteByIdAsync(id);
    if (returnArray != null)
    {
        respuesta = res.status(200).send('')
    }
    else respuesta = res.status(500).send('Error interno');
    return respuesta;
});

export default router;