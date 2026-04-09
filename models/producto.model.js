const mongoose = require ("mongoose");

const ProductoSchema = mongoose.Schema({
    nombre: {type: String, require: true},
    precio: {type: Number, require: true},
    categoria: {type: String, require: true, uppercase: true}
}, {timestamps:true})

module.exports = mongoose.model("Productos", ProductoSchema);