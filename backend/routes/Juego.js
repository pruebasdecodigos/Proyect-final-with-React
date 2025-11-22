const express = require("express");
const router = express.Router();
const Juego = require("../models/Juego");


//reset de horas

router.put("/reset/horas", async (req, res) => {
  try{
    //Actualizar todos los docs y poner "horasJugadas" en 0
    await Juego.updateMany({}, {$set: {horasJugadas: 0}});
    res.json ({message: "Horas reseteadas correctamente"});
  }catch (err) {
    res.status(500).json({msg: err.message})
  }
});

// Obtener todos los juegos
router.get("/", async (req, res) => {
  try {
    const juegos = await Juego.find().sort({ fechaCreacion: -1 });
    res.json(juegos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Crear un juego nuevo
router.post("/", async (req, res) => {
  try {
    const nuevo = new Juego(req.body);
    await nuevo.save();
    res.json(nuevo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Obtener un juego por ID
router.get("/:id", async (req, res) => {
  try {
    const juego = await Juego.findById(req.params.id);
    if (!juego) return res.status(404).json({ message: "Juego no encontrado" });
    res.json(juego);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Actualizar un juego
router.put("/:id", async (req, res) => {
  try {
    const updated = await Juego.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated)
      return res.status(404).json({ message: "Juego no encontrado" });

    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// Eliminar un juego
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Juego.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Juego no encontrado" });

    res.json({ message: "Juego eliminado correctamente" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
