import {Router} from 'express';
import ContactoService from '../services/contacto-service.js';
import ValidationHelper from '../helpers/validationHelper.js';
const router = Router();
const svc = new ContactoService();
const hlp = new ValidationHelper;

router.get('/:id_usuario', async (req, res) =>{
    let respuesta;
    let id_usuario = hlp.validarInt(req.params.id_usuario);
    const returnArray = await svc.getByIdUsuarioAsync(id_usuario);
    if (returnArray != null)
    {
        respuesta = res.status(200).json(returnArray);
    }
    else respuesta = res.status(404).send('No se encontro ningun resultado')
    return respuesta;
});

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

router.delete('/:id', async (req, res) =>{
    let respuesta;
    let id = hlp.validarInt(req.params.id);
    const returnArray = await svc.deleteByIdAsync(id);
    if (returnArray != null)
    {
        respuesta = res.status(200).send('')
    }
    else respuesta = res.status(500).send('Error interno')
    return respuesta;
});

export default router;