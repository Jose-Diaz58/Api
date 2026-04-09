//Son las librerias para el servidor y validacion
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");


// Importamos rutas
const ProductoRouter = require("./routes/producto.routes");
//Variable que obtiene los valores del express
const app = express();


//configurar los http para validar a traves del cors
app.use(cors());
//usar el bodyparser para pasar el JSON
app.use(bodyParser.json());
app.use(express.json());

// Aqui van las rutas (Y AQUÍ FALTABA ESTO)
app.use("/api/", ProductoRouter);

module.exports = app;