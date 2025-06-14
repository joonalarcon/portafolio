import { BrowserRouter, Routes, Route } from "react-router-dom"; // Ya no necesitas Link aquí

// Importa tus componentes de ruta desde src/routes
import Home from "./routes/Home";
import Contact from "./routes/Contact";

import Projects from "./routes/Projects";
import FooterReact from "./components/FooterReact";

// Importa el componente Menu desde src/components
import Menu from "./components/Menu"; // <-- ¡Nueva importación!

export default function App() {
  return (
    <BrowserRouter>
      {/* Usas el componente Menu aquí */}
      <Menu />
      <div className="p-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <FooterReact />
      </div>
    </BrowserRouter>
  );
}
