const mongoose = require("mongoose");

const ResenaSchema = new mongoose.Schema({
  juegoId: { type: String },
  juego: { type: String, required: true },
  puntuacion: { type: Number, required: true },
  textoResena: { type: String, required: true },
  horasJugadas: { type: Number, default: 0 },
  dificultad: { type: String, default: "Normal" },
  recomendaria: { type: Boolean, default: false },
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Resena", ResenaSchema);
