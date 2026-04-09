const Producto = require("../models/producto.model");

class ProductoController {
    static createProducto = async(req, res) => {
        try {
            const datos = req.body;
            const newProducto = await Producto.create(datos);
            res.status(200).json(newProducto)
        } catch (error) {
            return res.status(400).send({message: "Error de conexion"})
        }
    }

    static obtenerDatos = async(req, res) => {
        try {
            const buscarProductos = await Producto.find();
            res.status(200).json(buscarProductos);
        } catch (error) {
            return res.status(400).send({message: "Error de Conexion"})
        }
    }

    static actualizarProducto = async (req, res) => {
        try {
            const id = req.params.id; 
            const datosNuevos = req.body; 
            
            const productoActualizado = await Producto.findByIdAndUpdate(id, datosNuevos, { returnDocument: 'after' });
            
            if (!productoActualizado) {
                return res.status(404).send({ message: "Producto no encontrado" });
            }
            res.status(200).json(productoActualizado);
        } catch (error) {
            console.log(error);
            return res.status(400).send({ message: "Error al actualizar el producto" });
        }
    }

    static eliminarProducto = async (req, res) => {
        try {
            const id = req.params.id; 
            const productoEliminado = await Producto.findByIdAndDelete(id);
            
            if (!productoEliminado) {
                return res.status(404).send({ message: "Producto no encontrado" });
            }
            res.status(200).json({ message: "Producto eliminado correctamente" });
        } catch (error) {
            console.log(error);
            return res.status(400).send({ message: "Error al eliminar el producto" });
        }
    }
}

module.exports = ProductoController;