import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Biblioteca from "./pages/Biblioteca";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import ReviewsJuego from "./pages/ReviewsJuego.jsx"; // No cambia, sigue igual

function App() {
  return (
    <Router>
      <Routes>

        {/* RUTAS PÚBLICAS */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* RUTAS PRIVADAS */}
        <Route
          path="/main"
          element={
            <ProtectedRoute>
              <Biblioteca />
            </ProtectedRoute>
          }
        />

        {/* SOLO RESEÑAS DE UN JUEGO */}
        {/* Nota: usamos ":juegoId" para que coincida con el useParams de ReviewsJuego.jsx */}
        <Route
          path="/reseñas/:juegoId"
          element={
            <ProtectedRoute>
              <ReviewsJuego />
            </ProtectedRoute>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
