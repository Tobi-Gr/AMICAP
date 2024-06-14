class Causa{
    id;
    nombre;
    id_usuario = 0;
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

constructor(nombre)
{
    this.nombre = nombre;
}

export default Causa;