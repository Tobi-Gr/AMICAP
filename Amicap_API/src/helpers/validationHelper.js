export default class ValidationHelper
{
    //Valida si es un int
    validarInt = (data, min, max) =>
    {
        if (!Number.isInteger(data))
        {
            throw new Error('Value is not an integer');
        }
        else if (data <= min && data >= max)
        {
            
        }
        else return data;
    }
}