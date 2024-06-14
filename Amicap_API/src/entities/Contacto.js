class Contacto{
    id;
    id_usuario;
    numero;
    nombre;
}

constructor(id, id_usuario, numero, nombre)
{
    this.id = id;
    this.id_usuario = id_usuario;
    this.numero = numero;
    this.nombre = nombre;
}

constructor(id_usuario, numero, nombre)
{
    this.id_usuario = id_usuario;
    this.numero = numero;
    this.nombre = nombre;
}

export default Contacto;