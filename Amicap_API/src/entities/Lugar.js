class Lugar{
    id;
    nombre;
    id_usuario;
}

constructor(id, nombre, id_usuario)
{
    this.id = id;
    this.nombre = nombre;
    this.id_usuario = id_usuario;
}

constructor(nombre, id_usuario)
{
    this.nombre = nombre;
    this.id_usuario = id_usuario;
}

export default Lugar;