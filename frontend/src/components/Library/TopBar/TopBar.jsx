import { useState } from "react";
import "../../../styles/pages-styles/LibraryStyles/TopBar/TopBar.css";
import {resetHorasTodos} from "../../../services/juegoService.js"

export default function TopBar({ onFilterChange }) {
  const [showFilters, setShowFilters] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [genero, setGenero] = useState("");
  const [plataforma, setPlataforma] = useState("");

  // Cada vez que un filtro cambie → enviamos todo junto al padre
  const notifyChange = (extra = {}) => {
    onFilterChange({
      searchText,
      genero,
      plataforma,
      ...extra, //Aqui se manda el reload con los cambios extrass
    });
  };

  return (
    <div className="ContentHeader">

      {/* TOP BAR */}
      <div className="ContentHeader__top">
        <input
          type="text"
          placeholder="Buscar juegos por título..."
          className="ContentHeader__search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            notifyChange({ searchText: e.target.value });
          }}
        />

        <div className="ContentHeader__actions">
          <button
            className="ContentHeader__filterBtn"
            onClick={() => setShowFilters(!showFilters)}
          >
            Filtros
          </button>

        </div>
      </div>

      {/* FILTERS PANEL */}
      {showFilters && (
        <div className="ContentHeader__filters">

          <select
            value={plataforma}
            onChange={(e) => {
              setPlataforma(e.target.value);
              notifyChange({ plataforma: e.target.value });
            }}
          >
            <option value="">Todas las plataformas</option>
            <option value="PC">PC</option>
            <option value="PlayStation">PlayStation</option>
            <option value="Xbox">Xbox</option>
            <option value="Nintendo">Nintendo</option>
          </select>

          <select
            value={genero}
            onChange={(e) => {
              setGenero(e.target.value);
              notifyChange({ genero: e.target.value });
            }}
          >
            <option value="">Todos los géneros</option>
            <option value="RPG">RPG</option>
            <option value="Accion">Acción</option>
            <option value="Aventura">Aventura</option>
            <option value="Shooter">Shooter</option>
            <option value="Terror">Terror</option>
            <option value="MOBA">MOBA</option>
          </select>

          
          <button className="Hrs-btn-delete" onClick={async () => {
            if (!window.confirm("¿Seguro que quieres eliminar las horas de todos los juegos?")) 
              return;
              try {
                await resetHorasTodos(); //Llama al backend
                alert("Horas eliminadas correctamente");

                notifyChange({ reload: true}); //Esto es para recargar los jueogs
              }catch (e) {
                alert("Hubo un error al eliminar las horas");
                console.error(e);
              }
           }}> Eliminar Hrs</button>

        </div>
      )}
    </div>
  );
}
