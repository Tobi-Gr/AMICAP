import {Router} from 'express';
import UsuarioService from '../services/usuario-service.js';
import ValidationHelper from '../helpers/validationHelper.js';
const router = Router();
const svc = new UsuarioService();
const hlp = new ValidationHelper;

router.get('/prueba', async (req, res) =>{
    return res.status(200).json('Hola, funciona el Ngrok');
});

//Login, devuelve el token
router.post('/login', async (req, res) =>{
    const entity = req.body;
    if (hlp.validarMail(entity.email)) return res.status(400).send('mail invalido');
    const returnArray = await svc.LoginAsync(entity);
    if (returnArray != null) return res.status(200).json(returnArray); 
    else return res.status(401).send('mail o contraseña invalida');
    
});

//Registro, crea un usuario
router.post('/register', async (req, res) =>{
    try {
        const entity = req.body;
        if (hlp.validarMail(entity.email)) return res.status(400).send('mail invalido');
        else if (!hlp.validarString(entity.username)) return res.status(400).send('username invalido');
        else if (!hlp.validarString(entity.contrasena)) return res.status(400).send('contraseña invalida');
        const returnArray = await svc.RegisterAsync(entity);
        if (returnArray != null) return res.status(201).json(returnArray);
        else return res.status(400).send('Error interno');
    } catch (e) {
        console.log(e);
    }
});

//Modifica el usuario
router.put('/update', async (req, res) =>{
    const entity = req.body;
    if (hlp.validarMail(entity.email)) return res.status(400).send('mail invalido');
    else if (!hlp.validarString(entity.username)) return res.status(400).send('username invalido');
    else if (!hlp.validarString(entity.contrasena)) return res.status(400).send('contraseña invalida');
    const returnArray = await svc.updateAsync(entity);
    if (returnArray != null) return res.status(200).send('');
    else return res.status(500).send('Error interno');
});


//Verifica el token y devuelve el usuario
router.get('/verify/:token', async (req, res) =>{
    try {
        const token = req.params.token;
        let returnArray;
        if (token != null)
        {
            returnArray = await svc.VerificarUsuarioAsync(token);
            if (returnArray != null)return res.status(201).json(returnArray);
            else return res.status(400).send('Error interno');
        }
    } catch (e) {
        console.log(e);
    }
});

//Elimina un usuario
router.delete('/:id', async (req, res) =>{
    let id = hlp.validarInt(req.params.id);
    const returnArray = await svc.deleteByIdAsync(id);
    if (returnArray != null)
    {
        return res.status(200).json(returnArray);
    }
    else return res.status(500).send('Error interno');
});

export default router;