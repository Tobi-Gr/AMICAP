class Ataque{
    id;
    enunciado;
    nombre;
}

constructor(id, enunciado, nombre)
{
    this.id = id;
    this.enunciado = enunciado;
    this.nombre = nombre;
}

constructor(enunciado, nombre)
{
    this.enunciado = enunciado;
    this.nombre = nombre;
}

export default Ataque;