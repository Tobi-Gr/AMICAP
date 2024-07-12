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
            throw new Error('Value is not a mail');
        }
        else return data;
    }

    //Valida si es un string
    validarString = (data, min = 0, max = 999) =>
    {
        if (!(data instanceof string))
        {
            throw new Error('Value is not an string');
        }
        else if (data.length <= min && data.length >= max)
        {
            throw new Error('Value is not in range of character');
        }
        else return data;
    }
}