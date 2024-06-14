class Usuario{
    id;
    username;
    contrasena;
    email;
}

constructor(id, username, contrasena, email)
{
    this.id = id;
    this.username = username;
    this.contrasena = contrasena;
    this.email = email;
}

constructor(username, contrasena, email)
{
    this.username = username;
    this.contrasena = contrasena;
    this.email = email;}

export default Usuario;