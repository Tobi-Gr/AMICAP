import express from"express";
import cors from"cors";
import actPreferidaRouter from"./src/controllers/actPreferida-controller.js";
import contactoRouter from"./src/controllers/contacto-controller.js";
import respiracionRouter from"./src/controllers/respiracion-controller.js";


const app=express();
const port=3000; //El puerto 3000 (http://localhost:3000)

//Agrego los Middlewares
app.use(cors()); //Middleware de CORS.
app.use(express.json()); //Middleware para parsear y comprender JSON.

//Endpoints (todos los Routers)
app.use("/api/actPreferida", actPreferidaRouter);
app.use("/api/contacto", contactoRouter);
app.use("/api/respiracion", respiracionRouter);

//Inicio el Server y lo pongo a escuchar.
app.listen(port,()=> {
    console.log(`Example app listening on port${port}`)
})