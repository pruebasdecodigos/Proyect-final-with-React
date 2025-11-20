import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Home";
import Home from "./pages/Biblioteca";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

/* =================
 Terminado :D
==================*/
