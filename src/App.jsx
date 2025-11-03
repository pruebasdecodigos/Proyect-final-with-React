import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import MainLayout from "./pages/MainLayout";
import Community from "./pages/Community"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<MainLayout />} />
        <Route path="/community" element={<Community />} /> 
      </Routes>
    </Router>
  );
}

export default App;
