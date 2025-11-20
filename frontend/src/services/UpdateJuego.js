// Ya no se usa actualmente porque el modal interno lo reemplaza.
// Lo dejo intacto para que no te cause errores si lo importas en otro lugar.

import React, { useState } from "react";
import { updateJuego } from "../../../services/juegoService";
import "../../../styles/pages-styles/LibraryStyles/JuegosGET/UpdateJuego.css";

const UpdateJuego = ({ juego, onClose, onUpdated }) => {
  const [horas, setHoras] = useState(juego?.horasJugadas || 0);
  const [estado, setEstado] = useState(juego?.estado || "not playing");

  const handleSave = async () => {
    const updated = await updateJuego(juego._id, {
      horasJugadas: Number(horas),
      estado,
    });

    if (onUpdated) onUpdated(updated);
    onClose();
  };

  if (!juego) return null;

  return (
    <div className="UpdateOverlay" onClick={onClose}>
      <div className="UpdateCard" onClick={(e) => e.stopPropagation()}>
        <button className="UpdateClose" onClick={onClose}>✖</button>

        <h2 className="UpdateTitle">Actualizar Datos</h2>

        <div className="UpdateGroup">
          <label>Horas jugadas:</label>
          <input
            type="number"
            min="0"
            value={horas}
            onChange={(e) => setHoras(e.target.value)}
          />
        </div>

        <div className="UpdateGroup">
          <label>Estado:</label>
          <select value={estado} onChange={(e) => setEstado(e.target.value)}>
            <option value="not playing">No jugando</option>
            <option value="playing">En progreso</option>
            <option value="completed">Completado</option>
          </select>
        </div>

        <button className="UpdateSave" onClick={handleSave}>
          Guardar cambios
        </button>
      </div>
    </div>
  );
};

export default UpdateJuego;
