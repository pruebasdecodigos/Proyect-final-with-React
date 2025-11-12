import React, { useState, useEffect } from "react";
import ResenaForm from "./ResenaForm.jsx";
import ResenaCard from "./ResenaCard.jsx";
import Modal from "./Modal.jsx";
import * as api from "../../api/ResenasAPI.js";
import "../../styles/resenas.css";

export default function Resenas() {
  const [resenas, setResenas] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    juegoId: "",
    juego: "",
    puntuacion: "",
    textoResena: "",
    horasJugadas: 0,
    dificultad: "Normal",
    recomendaria: false,
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // Obtener reseñas del backend
  const fetchResenas = async () => {
    try {
      const data = await api.getResenas();
      setResenas(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("❌ Error al obtener reseñas:", err);
      setResenas([]);
    }
  };

  useEffect(() => {
    fetchResenas();
  }, []);

  // Crear o actualizar reseñas
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.id) {
        await api.updateResena(formData.id, formData);
        setModalMessage("✅ Reseña actualizada correctamente!");
      } else {
        await api.crearResena(formData);
        setModalMessage("🎉 Reseña guardada correctamente!");
      }

      setModalOpen(true);
      setFormData({
        id: "",
        juegoId: "",
        juego: "",
        puntuacion: "",
        textoResena: "",
        horasJugadas: 0,
        dificultad: "Normal",
        recomendaria: false,
      });

      fetchResenas();
    } catch (err) {
      console.error("❌ Error al guardar la reseña:", err);
      setModalMessage("Error al guardar la reseña.");
      setModalOpen(true);
    }
  };

  // Editar reseña
  const handleEdit = (resena) => {
    setFormData(resena);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Eliminar reseña
  const handleDelete = async (id) => {
    if (window.confirm("¿Eliminar esta reseña?")) {
      try {
        await api.deleteResena(id);
        setModalMessage("🗑️ Reseña eliminada correctamente!");
        setModalOpen(true);
        fetchResenas();
      } catch (err) {
        console.error("❌ Error al eliminar la reseña:", err);
        setModalMessage("Error al eliminar la reseña.");
        setModalOpen(true);
      }
    }
  };

  return (
    <div className="resenas-container">
      {modalOpen && (
        <Modal message={modalMessage} onClose={() => setModalOpen(false)} />
      )}

      <ResenaForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
      />

      <div className="resenas-list">
        {resenas.length === 0 ? (
          <p>No hay reseñas aún.</p>
        ) : (
          resenas.map((r) => (
            <ResenaCard
              key={r._id}
              resena={r}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
}
