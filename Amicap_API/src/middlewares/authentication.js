import AutheticationHelper from '../helpers/autheticationHelper.js'; 

class AutenticationMiddleware {
    removeBearer = (header) => {
        let returnValue = header;
        if(header && header.startsWith('Bearer ')) {
            returnValue = header.slice(7);
        }
        return returnValue;
    }

    AuthMiddleware = async (req, res, next) => {
        let authHeader = req.headers.authorization;
        console.log('authHeader: \n', authHeader);
        let payload;
        let authService;
        if(!authHeader) {
            res.status(401).send('401 Unauthorized, no iniciaste sesión.');
        } else {
            authHeader = this.removeBearer(authHeader);
            authService = new AutheticationHelper();
            payload = await authService.decryptToken(authHeader);
            console.log('payload: ', payload);
            if(payload != null){
                req.user = payload;
                next();
            } else{
                res.status(401).send('401 Unauthorized, token inválido.');
            }
        }
    }
}

export default AutenticationMiddleware;