import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import MainLayout from "./pages/MainLayout";
import Community from "./pages/Community";
import AddGame from "./pages/AddGame";
import Pruebas from "./pages/Pruebas";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<MainLayout />} />
        <Route path="/community" element={<Community />} />

        <Route path="/pruebas" element={<Pruebas />} />
      </Routes>
    </Router>
  );
}

export default App;
