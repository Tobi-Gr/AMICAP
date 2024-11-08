import {Router} from 'express';
import ActPreferidaService from '../services/actPreferida-service.js';
import ValidationHelper from '../helpers/validationHelper.js';
const router = Router();
const svc = new ActPreferidaService();
const hlp = new ValidationHelper;

router.get('/:id_usuario', async (req, res) =>{
    const id_usuario = hlp.validarInt(req.params.id_usuario);
    const returnArray = await svc.getByIdUsuarioAsync(id_usuario);
    if (returnArray != null)
    {
        return res.status(200).json(returnArray);
    }
    else return res.status(404).send('No se encontro ningun resultado')
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
    let idAct = hlp.validarInt(req.query.idAct);
    let idUsuario = hlp.validarInt(req.query.idUsuario);
    const returnArray = await svc.deleteAsync(idAct, idUsuario);
    if (returnArray != null)
    {
        respuesta = res.status(200).send('')
    }
    else respuesta = res.status(500).send('Error interno')
    return respuesta;
});

export default router;