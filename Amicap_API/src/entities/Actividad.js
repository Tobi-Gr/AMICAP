class Actividad{
    id;
    id_usuario;
    paso_uno;
    paso_dos;
    paso_tres;
    paso_cuatro;
    nombre;
}

constructor(id, id_usuario, paso_uno, paso_dos, paso_tres, paso_cuatro, nombre)
{
    this.id = id;
    this.id_usuario = id_usuario;
    this.paso_uno = paso_uno;
    this.paso_dos = paso_dos;
    this.paso_tres = paso_tres;
    this.paso_cuatro = paso_cuatro;
    this.nombre = nombre;
}

constructor(id_usuario, paso_uno, paso_dos, paso_tres, paso_cuatro, nombre)
{
    this.id_usuario = id_usuario;
    this.paso_uno = paso_uno;
    this.paso_dos = paso_dos;
    this.paso_tres = paso_tres;
    this.paso_cuatro = paso_cuatro;
    this.nombre = nombre;
}

export default Actividad;