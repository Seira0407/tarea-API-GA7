// Se inicia el módulo express para dar inicio al servidor
const express = require('express'); //se importa el paquete
const app = express();
/** SE CREAN LAS RUTAS */
app.get('/', (req, res) => {
    res.send('prueba 1, respuesta del servidor'); //ruta por defecto
});
//Se configura como va a escuchar el servidor las peticiones
app.listen(10000);