import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Categorias from "./pages/Categorias";
import NuevaCategoria from "./pages/NuevaCategoria";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/nueva-categoria" element={<NuevaCategoria />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
