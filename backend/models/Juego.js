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

  // 🔥 CAMPOS QUE TU MODAL NECESITA
  horasJugadas: { type: Number, default: 0 },
  estado: { type: String, default: "not playing" },

  fechaCreacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Juego", JuegoSchema);
