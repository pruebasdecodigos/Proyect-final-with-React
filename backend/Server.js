const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const juegosRoutes = require("./routes/Juego");
const reviewsRoutes = require("./routes/Review");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth")

dotenv.config();

const app = express();
const port = 5000;

// Middlewares
app.use(express.json());
app.use(cors());

// Conexión a Mongo
const MONGO_URL = "mongodb+srv://duvan_userAdmin:Duvan2026@clausterjc.psfn5q9.mongodb.net/?appName=ClausterJC";

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("✅ Mongo conectado"))
  .catch((err) => console.log("❌ Error de conexión:", err));

// Usar rutas
app.use("/api/juegos", juegosRoutes);
app.use("/api/reviews", reviewsRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Servidor funcionando ✅")
})

app.listen(port, () =>
  console.log(`🌍 Servidor corriendo en http://localhost:${port}/api`)
);


ss