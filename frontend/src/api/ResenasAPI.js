const API_URL = "http://localhost:5000/api/resenas";

export const getResenas = async () => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(`Error al obtener reseñas: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("❌ Error en getResenas:", err);
    return [];
  }
};

// Crear reseña
export const crearResena = async (resena) => {
  try {
    console.log("📦 Datos enviados al backend:", resena);
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(resena),
    });
    if (!res.ok) throw new Error(`Error al crear reseña: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("❌ Error en crearResena:", err);
    throw err;
  }
};

// Actualizar reseña
export const updateResena = async (id, resena) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(resena),
    });
    if (!res.ok) throw new Error(`Error al actualizar reseña: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("❌ Error en updateResena:", err);
    throw err;
  }
};

// Eliminar reseña
export const deleteResena = async (id) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error(`Error al eliminar reseña: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("❌ Error en deleteResena:", err);
    throw err;
  }
};