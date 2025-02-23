const mongoose = require("mongoose");

/**
 * Esquema de productos
 */
const productSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
});

const Products = mongoose.model("productos", productSchema);

module.exports = Products;
