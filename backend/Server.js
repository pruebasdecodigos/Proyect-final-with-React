const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

// Middlewares
app.use(express.json());
app.use(cors());

// Conexión a MongoDB
const MONGO_URL = "mongodb+srv://duvan_userAdmin:Duvan2026@clausterjc.psfn5q9.mongodb.net/?appName=ClausterJC";

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("✅ Mongo conectado"))
  .catch((err) => console.log("❌ Error de conexión:", err));

//modelos

const Resena = mongoose.model("Resena", {
  juegoId: { type: String },
  juego: { type: String, required: true },
  puntuacion: { type: Number, required: true },
  textoResena: { type: String, required: true },
  horasJugadas: { type: Number, default: 0 },
  dificultad: { type: String, default: "Normal" },
  recomendaria: { type: Boolean, default: false },
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now },
});

// RUTAS DE RESEÑAS
app.get("/api/resenas", async (req, res) => {
  try {
    const resenas = await Resena.find().sort({ fechaCreacion: -1 });
    res.json(resenas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/resenas", async (req, res) => {
  try {
    const nueva = new Resena(req.body);
    await nueva.save();
    res.json(nueva);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get("/api/resenas/:id", async (req, res) => {
  try {
    const r = await Resena.findById(req.params.id);
    if (!r) return res.status(404).json({ message: "Reseña no encontrada" });
    res.json(r);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.put("/api/resenas/:id", async (req, res) => {
  try {
    const updated = await Resena.findByIdAndUpdate(
      req.params.id,
      { ...req.body, fechaActualizacion: new Date() },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Reseña no encontrada" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete("/api/resenas/:id", async (req, res) => {
  try {
    const deleted = await Resena.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Reseña no encontrada" });
    res.json({ message: "Reseña eliminada correctamente" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(port, () => console.log(`🌍 Servidor corriendo en http://localhost:${port}/api`));
