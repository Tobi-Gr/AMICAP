class Mensaje{
    mensaje;
    id_usuario;
}

constructor(mensaje, id_usuario)
{
    this.mensaje = mensaje;
    this.id_usuario = id_usuario;
}

constructor(id_usuario)
{
    this.id_usuario = id_usuario;
}

export default Mensaje;