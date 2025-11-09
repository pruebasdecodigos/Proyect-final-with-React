import React, { useState } from "react";
import "../styles/pages-styles/AddGame.css";


function AddGame() {

  const [game, setGame] = useState({
    title: "",
    genre: "",
    hours: "",
    image: "",
    status: "pendiente",
  });

  // Actualizar estado al escribir
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGame({ ...game, [name]: value });
  };

  // Envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Juego agregado:", game);
    alert(`Juego "${game.title}" agregado correctamente 🎮`);
  };

  return (
    <section className="addgame-section">
      {/* Efecto visual del fondo */}
      {Array.from({ length: 150 }).map((_, i) => (
        <span key={i}></span>
      ))}

      <div className="signin">
        <div className="content">
          <h2>Agregar Juego 🎮</h2>

          <form className="form" onSubmit={handleSubmit}>
            <div className="inputBox">
              <input
                type="text"
                name="title"
                value={game.title}
                onChange={handleChange}
                required
              />
              <i>Nombre del juego</i>
            </div>

            <div className="inputBox">
              <input
                type="text"
                name="genre"
                value={game.genre}
                onChange={handleChange}
                required
              />
              <i>Género</i>
            </div>

            <div className="inputBox">
              <input
                type="number"
                name="hours"
                value={game.hours}
                onChange={handleChange}
              />
              <i>Horas jugadas</i>
            </div>

            <div className="inputBox">
              <input
                type="text"
                name="image"
                value={game.image}
                onChange={handleChange}
              />
              <i>URL de imagen o portada</i>
            </div>

            <div className="inputBox">
              <select
                name="status"
                value={game.status}
                onChange={handleChange}
                required
              >
                <option value="pendiente">Pendiente</option>
                <option value="jugando">Jugando</option>
                <option value="completado">Completado</option>
              </select>
              <i>Estado</i>
            </div>

            <div className="inputBox">
              <input type="submit" value="Guardar Juego" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}


export default AddGame;
