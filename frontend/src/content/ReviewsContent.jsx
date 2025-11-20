// ReviewsContent.jsx
import React, { useState, useEffect } from "react";
import "../styles/pages-styles/ReviewsStyles/ReviewsStyle.css";

export default function ReviewsContent({ juegoId }) {
  const [resenas, setResenas] = useState([]);
  const [newUser, setNewUser] = useState("");
  const [puntuacion, setPuntuacion] = useState(5);
  const [textoResena, setTextoResena] = useState("");
  const [horasJugadas, setHorasJugadas] = useState(0);
  const [dificultad, setDificultad] = useState("Normal");
  const [recomendaria, setRecomendaria] = useState(null); // null para no seleccionado

  // Cargar reseñas del juego
  useEffect(() => {
    const fetchResenas = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/reviews/game/${juegoId}`);
        const data = await response.json();
        setResenas(data);
      } catch (err) {
        console.error(err);
      }
    };
    if (juegoId) fetchResenas();
  }, [juegoId]);

  // Agregar nueva reseña
  const handleAddResena = async () => {
    if (!textoResena || recomendaria === null) return;

    const nuevaResena = {
      juegoId,
      juego: newUser || "Anónimo",
      puntuacion,
      textoResena,
      horasJugadas,
      dificultad,
      recomendaria,
    };

    try {
      const response = await fetch("http://localhost:5000/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevaResena),
      });
      const data = await response.json();
      setResenas([data, ...resenas]);

      // Reset formulario
      setNewUser("");
      setPuntuacion(5);
      setTextoResena("");
      setHorasJugadas(0);
      setDificultad("Normal");
      setRecomendaria(null);
    } catch (err) {
      console.error(err);
    }
  };

  // Eliminar reseña
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/reviews/${id}`, { method: "DELETE" });
      setResenas(resenas.filter(r => r._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="ReviewsContainer">
      <h2>Reseñas del juego</h2>

      {/* Formulario */}
      <div className="ReviewForm">
        <input
          type="text"
          placeholder="Nombre del jugador"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <select value={puntuacion} onChange={(e) => setPuntuacion(Number(e.target.value))}>
          {[5, 4, 3, 2, 1].map(n => (
            <option key={n} value={n}>{'★'.repeat(n)+'☆'.repeat(5-n)}</option>
          ))}
        </select>
        <textarea
          placeholder="Escribe tu reseña..."
          value={textoResena}
          onChange={(e) => setTextoResena(e.target.value)}
        />
        <input
          type="number"
          min="0"
          placeholder="Horas jugadas"
          value={horasJugadas}
          onChange={(e) => setHorasJugadas(Number(e.target.value))}
        />
        <select value={dificultad} onChange={(e) => setDificultad(e.target.value)}>
          <option value="Facil">Fácil</option>
          <option value="Normal">Normal</option>
          <option value="Dificil">Difícil</option>
        </select>

        {/* Botones recomendación */}
        <div className="RecomendariaButtons">
          <span>¿Recomendarías este juego?</span>
          <div>
            <button
              className={recomendaria === true ? "selected" : ""}
              onClick={() => setRecomendaria(true)}
            >
              Sí ✅
            </button>
            <button
              className={recomendaria === false ? "selected" : ""}
              onClick={() => setRecomendaria(false)}
            >
              No ❌
            </button>
          </div>
        </div>

        <button onClick={handleAddResena}>Agregar reseña</button>
      </div>

      {/* Lista de reseñas */}
      <div className="ReviewsList">
        {resenas.length === 0 && <p>No hay reseñas aún.</p>}
        {resenas.map(r => (
          <div className="ReviewCard" key={r._id}>
            <div className="ReviewHeader">
              <strong>{r.juego}</strong>
              <span className="Stars">{'★'.repeat(r.puntuacion)+'☆'.repeat(5 - r.puntuacion)}</span>
            </div>
            <p>{r.textoResena}</p>
            <div className="ReviewMeta">
              <span>Horas jugadas: {r.horasJugadas}</span>
              <span>Dificultad: {r.dificultad}</span>
              <span>{r.recomendaria ? "Recomienda ✅" : "No recomienda ❌"}</span>
            </div>
            <button className="DeleteBtn" onClick={() => handleDelete(r._id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
}
