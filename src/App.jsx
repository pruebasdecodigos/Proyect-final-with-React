import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import MainLayout from "./pages/MainLayout";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/main" element={<MainLayout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;