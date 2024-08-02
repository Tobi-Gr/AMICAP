import {Router} from 'express';
import UsuarioServices from '../services/usuario-services.js';
import ValidationHelper from '../helpers/validationHelper.js';
const router = Router();
const svc = new UsuarioServices();
const hlp = new ValidationHelper;

//login
router.post('/login', async (req, res) =>{
    let respuesta;
    const entity = req.body;
    const returnArray = await svc.LoginAsync(entity);
    if (hlp.validarMail(entity.username) ) return res.status(400).send('mail invalido');
    else if (returnArray != null)
    {
        return res.status(200).json(returnArray);
    }
    else return res.status(401).send('username o contraseña invalida');
});

//registro
router.post('/register', async (req, res) =>{
    try {
        const entity = req.body;
        const returnArray = await svc.RegisterAsync(entity);
        if (hlp.validarMail(entity.username))
        {
            return res.status(400).send('mail invalido');
        }
        else if (returnArray != null)
        {
            return res.status(201).json(returnArray);
        }
        else return res.status(400).send('Error interno');
    } catch (e) {
        console.log(e);
    }
});

export default router;