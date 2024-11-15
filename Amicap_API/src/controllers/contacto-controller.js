import {Router} from 'express';
import ContactoService from '../services/contacto-service.js';
import ValidationHelper from '../helpers/validationHelper.js';
const router = Router();
const svc = new ContactoService();
const hlp = new ValidationHelper;

//Devuelve contactos de un usuario
router.get('/:id_usuario', async (req, res) =>{
    const id_usuario = hlp.validarInt(req.params.id_usuario);
    const returnArray = await svc.getByIdUsuarioAsync(id_usuario);
    if (returnArray != null)
    {
        return res.status(200).json(returnArray);
    }
    else return res.status(404).send('No se encontro ningun resultado');
});

//Crea un contacto
router.post('', async (req, res) =>{
    const entity = req.body;
    const returnArray = await svc.createAsync(entity);
    if (returnArray != null)
    {
        return res.status(200).send('');
    }
    else return res.status(500).send('Error interno');
});

//Modifica un contacto
router.put('', async (req, res) =>{
    const entity = req.body;
    const returnArray = await svc.updateAsync(entity);
    if (returnArray != null)
    {
        return res.status(200).send('');
    }
    else return res.status(500).send('Error interno');
});

//Elimina un contacto
router.delete('/:id', async (req, res) =>{
    let id = hlp.validarInt(req.params.id);
    const returnArray = await svc.deleteByIdAsync(id);
    if (returnArray != null)
    {
        return res.status(200).send('');
    }
    else return res.status(500).send('Error interno');
});

export default router;