import {Router} from 'express';
import ActPreferidaService from '../services/actPreferida-service.js';
import ValidationHelper from '../helpers/validationHelper.js';
const router = Router();
const svc = new ActPreferidaService();
const hlp = new ValidationHelper;

//Devuelve las actividades que el usuario tiene como preferidas
router.get('/:id_usuario', async (req, res) =>{
    const id_usuario = hlp.validarInt(req.params.id_usuario);
    const returnArray = await svc.getByIdUsuarioAsync(id_usuario);
    if (returnArray != null)
    {
        return res.status(200).json(returnArray);
    }
    else return res.status(404).send('No se encontro ningun resultado');
});

//Devuelve las filas de actsPreferidas que corresponden al usuario
router.get('/id/:id_usuario', async(req, res) =>{
    const id_usuario = hlp.validarInt(req.params.id_usuario);
    const returnArray = await svc.getAsync(id_usuario);
    if (returnArray != null)
    {
        return res.status(200).json(returnArray);
    }
    else return res.status(404).send('No se encontro ningun resultado')
})

//Crea actividades preferidas
router.post('', async (req, res) =>{
    const entity = req.query;
    const returnArray = await svc.createAsync(entity);
    if (returnArray != null)
    {
        return res.status(200).send('');
    }
    else return res.status(500).send('Error interno');
});

//Elimina una actividad preferida
router.delete('', async (req, res) =>{
    let idAct = hlp.validarInt(req.query.idAct);
    let idUsuario = hlp.validarInt(req.query.idUsuario);
    const returnArray = await svc.deleteAsync(idAct, idUsuario);
    if (returnArray != null)
    {
        return res.status(200).send('');
    }
    else return res.status(500).send('Error interno');
});

export default router;