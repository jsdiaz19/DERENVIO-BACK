const mongoose = require("mongoose");
require('dotenv').config();

/**
 * Conexion de base de datos
 */
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Conectado a MongoDB");
  } catch (error) {
    console.error("❌ Error al conectar a MongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
