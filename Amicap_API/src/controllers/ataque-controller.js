import {Router} from 'express';
import AtaqueService from '../services/ataque-service.js';
import ValidationHelper from '../helpers/validationHelper.js';
const router = Router();
const svc = new AtaqueService();
const hlp = new ValidationHelper;

//devuelve los ataque del usuario
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

//crea un ataque con el id del usuario y la fecha
router.post('', async (req, res) =>{
    let respuesta;
    const entity = req.query;
    const returnArray = await svc.createAsync(entity);
    if (returnArray != null)
    {
        respuesta = res.status(200).send('');
    }
    else respuesta = res.status(500).send('Error interno')
    return respuesta;
});

//borra un ataque por id
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

//Modifica el lugar de un ataque
router.put('/lugar', async (req, res) =>{
    let respuesta;
    const entity = req.query;
    const returnArray = await svc.updateLugarAsync(entity);
    if (returnArray != null)
    {
        respuesta = res.status(200).send('');
    }
    else respuesta = res.status(500).send('Error interno')
    return respuesta;
});

//Agrega una causas de un ataque
router.post('/causa', async (req, res) =>{
    let respuesta;
    const entity = req.query;
    const returnArray = await svc.createCausaAsync(entity);
    if (returnArray != null)
    {
        respuesta = res.status(200).send('');
    }
    else respuesta = res.status(500).send('Error interno')
    return respuesta;
});

//borra una causa de un ataque
router.delete('/causa/:id', async (req, res) =>{
    let respuesta;
    let id = hlp.validarInt(req.params.id);
    const returnArray = await svc.deleteCausaAsync(id);
    if (returnArray != null)
    {
        respuesta = res.status(200).send('')
    }
    else respuesta = res.status(500).send('Error interno')
    return respuesta;
});

export default router;