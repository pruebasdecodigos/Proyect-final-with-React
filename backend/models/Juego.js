const mongoose = require("mongoose");

const JuegoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  genero: String,
  plataforma: String,
  añoLanzamiento: Number,
  desarrollador: String,
  imagenPortada: String,
  descripcion: String,
  completado: Boolean,
  fechaCreacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Juego", JuegoSchema);
