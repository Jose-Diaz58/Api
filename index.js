const mongoose = require("mongoose");
const app = require ("./app");

const port = process.env.PORT || 4000;

const URI_NUBE = "mongodb+srv://BL4Z3:admintaco123@cluster0.qnafqwo.mongodb.netAdminTaco/?";

const conexionDB = process.env.MONGO_URI || URI_NUBE;

mongoose.connect(conexionDB)
.then(() => console.log("¡Conectado a MongoDB Atlas en la nube! 🚀"))
.catch(error => console.log("Error de conexión:", error));

// Aqui escucha al puerto el server de express
app.listen(port, ()=>{
    console.log("********************************")
    console.log("****En efecto, se ejecuta*******")
    console.log("********************************")
    console.log(`API corriendo en el puerto: ${port}`)
})