import React, { useState, useEffect } from "react";
import "../../../styles/pages-styles/LibraryStyles/JuegosGET/ModalJuego.css";
import "../../../styles/pages-styles/LibraryStyles/JuegosGET/UpdateModal.css";
import { updateJuego } from "../../../services/juegoService";

const ModalJuego = ({ juego, onClose, onUpdated }) => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [horas, setHoras] = useState(0);
  const [estado, setEstado] = useState("not playing");

  useEffect(() => {
    if (juego) {
      setHoras(juego.horasJugadas || 0);
      setEstado(juego.estado || "not playing");
    }
  }, [juego]);

  if (!juego) return null;

  const goToResena = () => {
    window.location.href = `/resena/${juego._id}`;
  };

  const handleSave = async () => {
    const updated = await updateJuego(juego._id, {
      horasJugadas: Number(horas),
      estado,
    });

    if (onUpdated) onUpdated(updated);

    setShowUpdateModal(false);
  };

  return (
    <div className="ModalOverlay" onClick={onClose}>
      <div className="ModalContent" onClick={(e) => e.stopPropagation()}>

        <button className="ModalClose" onClick={onClose}>✕</button>

        <div className="ModalHeader">
          <img src={juego.imagenPortada} alt={juego.titulo} className="ModalImg" />

          <div className="ModalInfo">
            <h2>{juego.titulo}</h2>
            <p><strong>Género:</strong> {juego.genero}</p>
            <p><strong>Plataforma:</strong> {juego.plataforma}</p>
            <p><strong>Año:</strong> {juego.añoLanzamiento}</p>
          </div>
        </div>

        <div className="MiniCardsContainer">
          <div className="MiniCard">
            <h4>⏱ Horas jugadas</h4>
            <p>{juego.horasJugadas || 0} hrs</p>
          </div>

          <div className="MiniCard">
            <h4>🎮 Estado</h4>
            <p>
              {juego.estado === "playing"
                ? "En progreso"
                : juego.estado === "completed"
                ? "Completado"
                : "No jugando"}
            </p>
          </div>
        </div>

        <div className="ModalButtons">
          <button className="ResenaBtn" onClick={goToResena}>
            ✍ Añadir reseña
          </button>

          <button className="UpdateBtn" onClick={() => setShowUpdateModal(true)}>
            🔄 Actualizar datos
          </button>
        </div>

        {showUpdateModal && (
          <div className="InnerOverlay">
            <div className="InnerModal">
              <h3>Actualizar datos</h3>

              <label>Horas jugadas:</label>
              <input
                type="number"
                min="0"
                value={horas}
                onChange={(e) => setHoras(e.target.value)}
              />

              <label>Estado del juego:</label>
              <select value={estado} onChange={(e) => setEstado(e.target.value)}>
                <option value="not playing">No jugando</option>
                <option value="playing">En progreso</option>
                <option value="completed">Completado</option>
              </select>

              <div className="InnerButtons">
                <button className="SaveBtn" onClick={handleSave}>💾 Guardar</button>
                <button className="CancelBtn" onClick={() => setShowUpdateModal(false)}>
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ModalJuego;
