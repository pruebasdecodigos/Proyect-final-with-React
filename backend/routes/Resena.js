const express = require("express");
const Resena = require("../models/Resena");

const router = express.Router();

// GET todas las reseñas
router.get("/", async (req, res) => {
  try {
    const resenas = await Resena.find().sort({ fechaCreacion: -1 });
    res.json(resenas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST crear reseña
router.post("/", async (req, res) => {
  try {
    const nueva = new Resena(req.body);
    await nueva.save();
    res.json(nueva);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET una reseña por ID
router.get("/:id", async (req, res) => {
  try {
    const r = await Resena.findById(req.params.id);
    if (!r) return res.status(404).json({ message: "Reseña no encontrada" });
    res.json(r);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT actualizar reseña
router.put("/:id", async (req, res) => {
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

// DELETE reseña
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Resena.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Reseña no encontrada" });
    res.json({ message: "Reseña eliminada correctamente" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
