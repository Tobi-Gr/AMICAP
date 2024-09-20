import express from"express";
import cors from"cors";
import actPreferidaRouter from './src/controllers/actPreferida-controller.js';
import ataqueRouter from './src/controllers/ataque-controller.js';
import contactoRouter from './src/controllers/contacto-controller.js';
import informacionRouter from './src/controllers/informacion-controller.js';
import respiracionRouter from './src/controllers/respiracion-controller.js';
import usuarioRouter from './src/controllers/usuario-controller.js';


const app=express();
const port=3000; //El puerto 3000 (http://localhost:3000)
//Este es el dominio del ngrok: https://gentle-pika-cunning.ngrok-free.app 

//Agrego los Middlewares
app.use(cors()); //Middleware de CORS.
app.use(express.json()); //Middleware para parsear y comprender JSON.

//Endpoints (todos los Routers)
app.use("/api/actPreferida", actPreferidaRouter);
app.use("/api/ataque", ataqueRouter);
app.use("/api/contacto", contactoRouter);
app.use("/api/info", informacionRouter);
app.use("/api/respiracion", respiracionRouter);
app.use("/api/usuario", usuarioRouter);

//Inicio el Server y lo pongo a escuchar.
app.listen(port,()=> {
    console.log(`Example app listening on port ${port}`)
})