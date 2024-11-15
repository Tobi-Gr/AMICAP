import {Router} from 'express';
import AtaqueService from '../services/ataque-service.js';
import ValidationHelper from '../helpers/validationHelper.js';
const router = Router();
const svc = new AtaqueService();
const hlp = new ValidationHelper;

//Devuelve los ataque del usuario
router.get('/:id_usuario', async (req, res) =>{
    let id_usuario = hlp.validarInt(req.params.id_usuario);
    const returnArray = await svc.getByIdUsuarioAsync(id_usuario);
    if (returnArray != null)
    {
        return res.status(200).json(returnArray);
    }
    else return res.status(404).send('No se encontro ningun resultado');
});

//Crea un ataque con el id del usuario y la fecha
router.post('', async (req, res) =>{
    const entity = req.query;
    const returnArray = await svc.createAsync(entity);
    if (returnArray != null)
    {
        return res.status(200).send('');
    }
    else return res.status(500).send('Error interno');
});

//Elimina un ataque por id
router.delete('/:id', async (req, res) =>{
    let id = hlp.validarInt(req.params.id);
    const returnArray = await svc.deleteByIdAsync(id);
    if (returnArray != null)
    {
        return res.status(200).send('')
    }
    else return res.status(500).send('Error interno');
});

//Modifica el lugar de un ataque
router.put('/lugar', async (req, res) =>{
    const entity = req.query;
    const returnArray = await svc.updateLugarAsync(entity);
    if (returnArray != null)
    {
        return res.status(200).send('');
    }
    else return res.status(500).send('Error interno');
});

//Agrega una causas de un ataque
router.post('/causa', async (req, res) =>{
    const entity = req.query;
    const returnArray = await svc.createCausaAsync(entity);
    if (returnArray != null)
    {
        return res.status(200).send('');
    }
    else return res.status(500).send('Error interno');
});

//Elimina una causa de un ataque
router.delete('/causa/:id', async (req, res) =>{
    let id = hlp.validarInt(req.params.id);
    const returnArray = await svc.deleteCausaAsync(id);
    if (returnArray != null)
    {
        return res.status(200).send('');
    }
    else return res.status(500).send('Error interno');
});

export default router;