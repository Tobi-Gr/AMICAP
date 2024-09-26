export default class ValidationHelper
{
    //Valida si es un int
    validarInt = (data, min = -9999, max= 9999) =>
    {
        if(!isNaN(data))//if (typeof data === "number" && isFinite(data) && Math.floor(data) === data)
        {
            if (data >= min && data <= max)
            {
                return data;
            }
            else return -1;
        }
        else return -1;
    }

    //Valida si es un mail
    validarMail = (data) =>
    {
        const mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!mail.test(data))
        {
            return true;
        }
        else return false;
    }

    //Valida si es un string
    validarString = (data, min = 1, max = 999) => {
        if (typeof data !== 'string') {
            return false;
        } else if (data.length < min || data.length > max) {
            return false;
        } else {
            return true;
        }
    };
}