class Respiracion{
    id_usuario;
    inhalar;
    exhalar;
    contener;
    esperar;
}

constructor(id_usuario, inhalar, exhalar, contener, esperar)
{
    this.id_usuario = id_usuario;
    this.inhalar = inhalar;
    this.exhalar = exhalar;
    this.contener = contener;
    this.esperar = esperar
}

constructor(inhalar, exhalar, contener, esperar)
{
    this.inhalar = inhalar;
    this.exhalar = exhalar;
    this.contener = contener;
    this.esperar = esperar
}

export default Respiracion;