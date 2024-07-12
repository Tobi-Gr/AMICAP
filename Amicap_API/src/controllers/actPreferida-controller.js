import {Router} from 'express';
import ActPreferidaService from '../services/actPreferida-service.js';
import ValidationHelper from '../helpers/validationHelper.js';
const router = Router();
const svc = new ActPreferidaService();
const hlp = new ValidationHelper;

router.get('/:id_usuario', async (req, res) =>{
    let respuesta;
    const id_usuario = hlp.validarInt(req.params.id_usuario);
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