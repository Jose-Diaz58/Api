const mongoose = require ("mongoose");

const ProductoSchema = mongoose.Schema({
    nombre: {type: String, require: true},
    precio: {type: Number, require: true},
    categoria: {type: String, require: true, uppercase: true},
    emoji: {type:String, require: true, default:"🌮"}
}, {timestamps:true})

module.exports = mongoose.model("Productos", ProductoSchema);