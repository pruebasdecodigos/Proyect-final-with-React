import React, { useEffect, useState } from "react";
import { getJuegos } from "../../../services/juegoService.js";
import JuegoCard from "./JuegosCard.jsx";
import ModalJuego from "./ModalJuego.jsx";
import "../../../styles/pages-styles/LibraryStyles/JuegosGET/JuegosList.css";

const JuegosList = ({ filters, onStatsChange }) => {
  const [juegos, setJuegos] = useState([]);
  const [filtrados, setFiltrados] = useState([]);
  const [modalJuego, setModalJuego] = useState(null);
  const [reloadFlag, setReloadFlag] = useState(false);

  // Cargar juegos al iniciar
  useEffect(() => {
    const load = async () => {
      const data = await getJuegos();
      setJuegos(data);
      setFiltrados(data);

      if (onStatsChange) onStatsChange(data);  // 🔥 ACTUALIZA HéroCards
    };
    load();
  }, [reloadFlag]);

  //Escuchar al topbar cuando pida recarga

  useEffect(() => {
    if (filters.reload) {
      setReloadFlag((prev) => !prev) //Hace que recargue otra vez
    }
  }, [filters.reload]);


  // Filtrar en tiempo real
  useEffect(() => {
    const { searchText, genero, plataforma } = filters;
    let result = juegos;

    if (searchText)
      result = result.filter((j) =>
        j.titulo.toLowerCase().includes(searchText.toLowerCase())
      );

    if (genero) result = result.filter((j) => j.genero === genero);
    if (plataforma) result = result.filter((j) => j.plataforma === plataforma);

    setFiltrados(result);
  }, [filters, juegos]);


  // Cuando un juego se actualiza
  const handleUpdated = (updated) => {
    const newData = juegos.map((j) =>
      j._id === updated._id ? updated : j
    );

    setJuegos(newData);
    setFiltrados(newData);

    if (onStatsChange) onStatsChange(newData);   // 🔥 ACTUALIZA HeroCards

    setModalJuego(updated);
  };

  return (
    <>
      <div className="JuegosGrid">
        {filtrados.length === 0 ? (
          <p className="JuegosGrid__empty">No hay juegos disponibles.</p>
        ) : (
          filtrados.map((j) => (
            <JuegoCard
              key={j._id}
              juego={j}
              onOpenModal={setModalJuego}
            />
          ))
        )}
      </div>

      <ModalJuego
        juego={modalJuego}
        onClose={() => setModalJuego(null)}
        onUpdated={handleUpdated}
      />
    </>
  );
};

export default JuegosList;
