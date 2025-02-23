const mongoose = require("mongoose");

/**
 * Esquema de precios especiales
 */
const priceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "usuariosDiaz19", required: true, index: true  },
  productId: { type: String, ref: "productos", required: true, index: true },
  precio: { type: Number, required: true },
},
{ timestamps: true });

const Prices = mongoose.model("preciosEspecialesDiaz19", priceSchema);

module.exports = Prices;
