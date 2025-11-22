const API_URL = "http://localhost:5000/api/reviews";

export const getReviewsByGame = async (gameId) => {
  try {
    const res = await fetch(`${API_URL}/game/${gameId}`);
    return await res.json();
  } catch (error) {
    console.error("Error al obtener reviews:", error);
    return [];
  }
};

export const crearReviewJuego = async (reviewData) => {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewData),
    });
    if (!res.ok) throw new Error("Error al crear la reseña");
    return await res.json();
  } catch (error) {
    console.error("Error en crearReviewJuego:", error);
    throw error;
  }
};

export const eliminarReview = async (id) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Error al eliminar la reseña");
    return await res.json();
  } catch (error) {
    console.error("Error en eliminarReview:", error);
    throw error;
  }
};
