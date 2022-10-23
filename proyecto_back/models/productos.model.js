const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductosSchema = new Schema({
    producto_id:{type:String, required: true, max:60},
    producto:{type:String, required: true, max:60},
    precio:{type:Number, required: true, max:60},
    descripcion:{type:String, required: true, max:60}  
});

module.exports = mongoose.model("productos", ProductosSchema);