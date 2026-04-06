const express = require ("express");
const TacoController = require("../controllers/taco.controller")

const api = express.Router();

//Peticiones
api.post("/taco/create", TacoController.createTaco);
api.get("/taco/buscar", TacoController.obtenerDatos)

// NUEVAS Peticiones (PATCH y DELETE)
// Nota que agregamos "/:id" en la URL para saber a qué taco afectar
api.patch("/taco/actualizar/:id", TacoController.actualizarTaco);
api.delete("/taco/eliminar/:id", TacoController.eliminarTaco);

module.exports = api;