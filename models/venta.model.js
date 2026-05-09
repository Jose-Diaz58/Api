const mongoose = require("mongoose")

const VentaSchema = mongoose.Schema({
    productos: [{
        nombre: String,
        precio: Number,
        cantidad: Number,
        emoji: String
    }],
    total: {type: Number, require: true},
    fecha: {type: Date, default: Date.now}
}, {timestamps: true});

module.exports = mongoose.model("Ventas", VentaSchema)