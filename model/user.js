const mongoose = require("mongoose");

/**
 * Esquema de usuarios
 */
const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true },
}, { timestamps: true });

const User = mongoose.model("usuariosDiaz19", userSchema);

module.exports = User;
