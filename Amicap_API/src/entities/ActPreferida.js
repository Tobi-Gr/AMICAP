class ActPreferida{
    id;
    id_usuario;
    id_actividad;
}

constructor(id, id_usuario, id_actividad)
{
    this.id = id;
    this.id_usuario = id_usuario;
    this.id_actividad = id_actividad;
}

constructor(id_usuario, id_actividad)
{
    this.id_usuario = id_usuario;
    this.id_actividad = id_actividad;
}

export default ActPreferida;