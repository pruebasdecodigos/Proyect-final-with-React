const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); 

const MONGO_URL = "mongodb+srv://duvan_userAdmin:Duvan2026@clausterjc.psfn5q9.mongodb.net/?appName=ClausterJC";

// Conexión a MongoDB
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("✅ Mongo conectado"))
  .catch((err) => console.log("❌ Error de conexión:", err));

// Esquema y modelo
const Skill = mongoose.model("Skill", {
  name: { type: String, required: true },
  level: { type: String, default: "beginner" },
});

app.post("/skill", async (req, res) => {
  try {
    const nuevoSkill = new Skill(req.body); // ejemplo body: { "name": "JS", "level": "Advanced" }
    await nuevoSkill.save();
    res.json(nuevoSkill);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get("/skill", async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/skill/:id", async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) return res.status(404).json({ message: "Skill no encontrada" });
    res.json(skill);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.put("/skill/:id", async (req, res) => {
  try {
    const updatedSkill = await Skill.findByIdAndUpdate(
      req.params.id, 
      req.body,    
      { new: true }   
    );

    if (!updatedSkill) {
      return res.status(404).json({ message: "Skill no encontrada" });
    }

    res.json(updatedSkill);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete("/skill/:id", async (req, res) => {
  try {
    const deleted = await Skill.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Skill no encontrada" });
    res.json({ message: "Skill eliminada correctamente" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


//Iniciar servidor
app.listen(port, () => console.log(`🌍 Servidor corriendo en http://localhost:${port}`));
