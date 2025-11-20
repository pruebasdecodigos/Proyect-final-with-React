const express = require("express");
const router = express.Router();
const Review = require("../models/Review"); // Tu modelo actual

// ========================
// 📌 CREATE - Agregar nueva review
// ========================
router.post("/", async (req, res) => {
  try {
    const newReview = new Review(req.body);
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ========================
// 📌 READ - Obtener todas las reviews de un juego
// ========================
router.get("/game/:gameId", async (req, res) => {
  try {
    const { gameId } = req.params;
    const reviews = await Review.find({ juegoId: gameId }).sort({ fechaCreacion: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ========================
// 📌 READ - Obtener review por ID
// ========================
router.get("/:id", async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ message: "Review not found" });
    res.json(review);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ========================
// 📌 UPDATE - Actualizar review por ID
// ========================
router.put("/:id", async (req, res) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      { ...req.body, fechaActualizacion: Date.now() },
      { new: true }
    );
    if (!updatedReview) return res.status(404).json({ message: "Review not found" });
    res.json(updatedReview);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ========================
// 📌 DELETE - Eliminar review por ID
// ========================
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Review.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Review not found" });
    res.json({ message: "Review deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
