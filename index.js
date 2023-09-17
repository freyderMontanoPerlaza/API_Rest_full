const connection = require('./database/connection');
const express = require('express');
const cors = require('cors');


//mensaje de vienbenida
console.log('Api NODE  para RED SOCIAL corriendo!!');
//Conexion a bbdd
connection();


//Crear servidor node
const app = express();
const puerto = 8080;

//Configurar cors
app.use(cors());


//Convertir los datos del body a object js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Cargar corf rutas 

//Ruta de prueba
app.get('/ruta-prueba', (req, res)=>{
    return res.status(200).json({

        "id":1,
        "nombre":"freyder",
        "curso":"node api rest full"
    });
})




//Poner servidor a escuchar peticion http

app.listen(puerto, () => {
    console.log(`Servidor de node corriendo en el puerto:${puerto}`);
});  