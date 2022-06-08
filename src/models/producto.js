// ,pdeña,ps eñ datp a guardar en la bd

import mongoose, { Schema } from "mongoose";

const productoSchema = new Schema({
  mane: {
    type: String,
    maxlength: 200,

    required: true,
  },
  edad: {
    type: String,
    maxlength: 100,
    required: true,
  },
  local: {
    type: String,
    unique: true,
    required: true,
  },
});

const Producto = mongoose.model("producto", productoSchema);

export default Producto;
