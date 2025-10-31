import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Saludo from "../Saludos/Saludo.jsx"
import Home from "./pages/home.jsx"
import Landing from "./pages/Landing"
import MainLayout from "./pages/MainLayout";

function App() {
  //Aqui van los const 

  return (
    <>
        <Router>
      <Routes>
        {/* Página inicial */}
        <Route path="/" element={<Landing />} />
        {/* Página principal con Navbar, Home y Footer */}
        <Route path="/main" element={<MainLayout />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;