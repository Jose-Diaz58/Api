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
            const {id} = req.params;
            const modProducto = req.body;

            const modificar = await Producto.findByIdAndUpdate({_id:id}, modProducto)
            res.status(200).send({message:"Datos Actualizados correctamente"}, modificar)
        } catch (error) {
            console.log(error);
            return res.status(400).send({ message: "Error al actualizar el producto" });
        }
    }

    static eliminarProducto = async (req, res) => {
        try {
            const {id} = req.params; 
            const productoEliminado = await Producto.findByIdAndDelete(id);
            res.status(200).json(productoEliminado)
        } catch (error) {
            return res.status(400).send({ message: "Error al eliminar el producto" });
        }
    }
}

module.exports = ProductoController;