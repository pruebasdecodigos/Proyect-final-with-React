const API_URL = "http://localhost:5000/api/juegos";

// GET TODOS
export const getJuegos = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

// GET UNO
export const getJuego = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
};

// POST
export const createJuego = async (data) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return await res.json();
};

// PUT
export const updateJuego = async (id, data) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return await res.json();
};

// DELETE
export const deleteJuego = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return await res.json();
};
