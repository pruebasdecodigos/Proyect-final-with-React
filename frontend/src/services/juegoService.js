export const getJuegos = async () => {
  const res = await fetch("http://localhost:5000/api/juegos");
  return await res.json();
};
