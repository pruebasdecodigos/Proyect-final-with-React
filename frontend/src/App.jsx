import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Biblioteca from "./pages/Biblioteca";
import Reviews from "./pages/Reviews";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Biblioteca />} />
        <Route path="/reviews" element={<Reviews />}/>
        <Route path="/login" element={<Login />} />     {/* Otra ruta a Login */}
        <Route path="/register" element={<Register />} /> {/* Registro */}
      </Routes>
    </Router>
  );
}

export default App;

/* =================
 Terminado :D
==================*/
