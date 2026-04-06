const mongoose = require("mongoose");
const app = require ("./app");
const {DB_NAME, DB_HOST}=require ("./constantes")

const port = process.env.PORT || 4000;

//Conexion al gestor de monngodb
mongoose.connect(`mongodb://${DB_HOST}/${DB_NAME}`)
.then(mongoose=>console.log("Conectado a MongoDB"))
.catch(error=>console.log(error));

//Aqui escucha al puerto el server de express
app.listen(port, ()=>{
    console.log("********************************")
    console.log("****En efecto, se ejecuta*******")
    console.log("********************************")
    console.log(`http://localhost:${port}/api/`)
})