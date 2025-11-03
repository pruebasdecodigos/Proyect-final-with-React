import React from "react";

export default function ResenaCard({ resena, onEdit, onDelete }) {
  return (
    <div className="resena-card">
      <h3>{resena.juego}</h3>
      <p>
        <strong>Horas jugadas:</strong> {resena.horasJugadas} • <strong>Dificultad:</strong>{" "}
        {resena.dificultad}
      </p>
      <p>{"⭐".repeat(resena.puntuacion)}</p>
      <p>{resena.textoResena}</p>
      <p>{resena.recomendaria ? "👍 Recomendada" : "👎 No recomendada"}</p>
      <div className="card-actions">
        <button onClick={() => onEdit(resena)}>Editar</button>
        <button onClick={() => onDelete(resena._id)}>Eliminar</button>
      </div>
    </div>
  );
}
