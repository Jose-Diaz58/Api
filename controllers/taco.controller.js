const Taco=require("../models/taco.model");

class TacoController{
    static createTaco= async(req, res)=>{
        try {
            const datos=req.body;
            const newtaco= await Taco.create(datos);
            res.status(200).json(newtaco)
        } catch (error) {
            return res.status(400).send({message:"Error de conexion"})
        }
    }

    static obtenerDatos = async(req, res)=> {
        try{
            const buscartaco = await Taco.find();
            res.status(200).json(buscartaco);
        }catch (error) {
            return res.status(400).send({message:"Error de Conexion"})
        }
    }

    // Función para actualizar (PATCH - Edición parcial)
    static actualizarTaco = async (req, res) => {
        try {
            const id = req.params.id; // Obtenemos el ID de la URL
            const datosNuevos = req.body; // Los campos que queremos cambiar
            
            // findByIdAndUpdate actualiza solo los campos enviados en datosNuevos
            // { new: true } nos devuelve el objeto ya modificado en la respuesta
            const tacoActualizado = await Taco.findByIdAndUpdate(id, datosNuevos, { new: true });
            
            if (!tacoActualizado) {
                return res.status(404).send({ message: "Taco no encontrado" });
            }
            
            res.status(200).json(tacoActualizado);
        } catch (error) {
            console.log(error);
            return res.status(400).send({ message: "Error al actualizar el taco" });
        }
    }

    // Función para borrar (DELETE)
    static eliminarTaco = async (req, res) => {
        try {
            const id = req.params.id; // Obtenemos el ID de la URL
            
            const tacoEliminado = await Taco.findByIdAndDelete(id);
            
            if (!tacoEliminado) {
                return res.status(404).send({ message: "Taco no encontrado" });
            }
            
            res.status(200).json({ message: "Taco eliminado correctamente" });
        } catch (error) {
            console.log(error);
            return res.status(400).send({ message: "Error al eliminar el taco" });
        }
    }
}

module.exports = TacoController;