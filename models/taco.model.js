const mongoose = require ("mongoose");

const TacoSchema = mongoose.Schema({
    nombre: {type: String, require: true, uppercase: true},
    precio: {type: Number, require: true},
    categoria: {type: String, require: true, uppercase: true}
}, {timestamps:true})

module.exports = mongoose.model("taco", TacoSchema);