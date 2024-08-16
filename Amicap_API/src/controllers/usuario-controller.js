import {Router} from 'express';
import UsuarioService from '../services/usuario-service.js';
import ValidationHelper from '../helpers/validationHelper.js';
const router = Router();
const svc = new UsuarioService();
const hlp = new ValidationHelper;

router.get('/prueba', async (req, res) =>{
        return res.status(200).json('Hola, funciona el Ngrok');
});

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