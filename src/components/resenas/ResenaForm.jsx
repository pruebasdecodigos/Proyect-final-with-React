import React from "react";

export default function ResenaForm({ formData, setFormData, onSubmit }) {
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({ ...formData, [id]: type === "checkbox" ? checked : value });
  };

  return (
    <form className="resena-form" onSubmit={onSubmit}>
      <input type="hidden" id="id" value={formData.id} />
      <input type="hidden" id="juegoId" value={formData.juegoId} />

      <div className="field">
        <label>Juego</label>
        <input
          id="juego"
          value={formData.juego}
          onChange={handleChange}
          required
        />
      </div>

      <div className="field">
        <label>Puntuación</label>
        <select
          id="puntuacion"
          value={formData.puntuacion}
          onChange={handleChange}
          required
        >
          <option value="">--Seleccionar--</option>
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {"⭐".repeat(n)}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label>Horas jugadas</label>
        <input
          type="number"
          id="horasJugadas"
          value={formData.horasJugadas}
          onChange={handleChange}
          min="0"
        />
      </div>

      <div className="field">
        <label>Dificultad</label>
        <select
          id="dificultad"
          value={formData.dificultad}
          onChange={handleChange}
        >
          <option value="Fácil">Fácil</option>
          <option value="Normal">Normal</option>
          <option value="Difícil">Difícil</option>
        </select>
      </div>

      <div className="field checkbox-field">
        <label>¿Recomendarías?</label>
        <input
          type="checkbox"
          id="recomendaria"
          checked={formData.recomendaria}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label>Comentario</label>
        <textarea
          id="textoResena"
          value={formData.textoResena}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Guardar reseña</button>
    </form>
  );
}
