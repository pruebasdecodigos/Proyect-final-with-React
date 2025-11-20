import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Biblioteca from "./pages/Biblioteca";
import Reviews from "./pages/Reviews";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Biblioteca />} />
        <Route path="/reviews" element={<Reviews />}/>
      </Routes>
    </Router>
  );
}

export default App;

/* =================
 Terminado :D
==================*/
