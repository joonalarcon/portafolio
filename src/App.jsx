import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Menu() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#333", color: "#fff" }}>
      <Link to="/" style={{ margin: "0 1rem", color: "inherit" }}>
        Home
      </Link>
      <Link to="/about" style={{ margin: "0 1rem", color: "inherit" }}>
        About
      </Link>
      <Link to="/services" style={{ margin: "0 1rem", color: "inherit" }}>
        Services
      </Link>
      <Link to="/contact" style={{ margin: "0 1rem", color: "inherit" }}>
        Contact
      </Link>
    </nav>
  );
}

function Home() {
  return <h2>Home - Bienvenido a la página principal</h2>;
}

function About() {
  return <h2>About - Aquí va información sobre nosotros</h2>;
}

function Services() {
  return <h2>Services - Estos son nuestros servicios</h2>;
}

function Contact() {
  return <h2>Contact - Contáctanos aquí</h2>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <div style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
