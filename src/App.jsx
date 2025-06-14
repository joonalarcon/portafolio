import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Importa tus componentes de ruta desde src/routes
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";
import FooterReact from "./components/FooterReact";

// Importa el componente Menu desde src/components
import Menu from "./components/Menu";

export default function App() {
  return (
    // ¡LA CLAVE ESTÁ AQUÍ! Añadimos la prop 'basename' a BrowserRouter
    // Esto le dice a React Router que todas las rutas internas deben ser relativas a '/portafolio'
    <BrowserRouter basename="/portafolio">
      {/* El menú se mostrará en todas las páginas porque está fuera de <Routes> */}
      <Menu />
      <div className="p-1">
        <Routes>
          {/* Esta es la ruta principal que define tu página de inicio.
            Cuando la URL es /home, se renderiza el componente Home. 
            Ahora, con basename, esto se traduce a /portafolio/home
          */}
          <Route path="/home" element={<Home />} />

          {/* Rutas para las otras secciones de tu aplicación */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

          {/* Esta línea sigue siendo importante para redirigir desde /portafolio/ a /portafolio/home
            Cuando alguien accede a la URL raíz del basename ("/portafolio"),
            lo redirige automáticamente a "/portafolio/home".
          */}
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* Opcional: Una ruta para manejar cualquier URL que no coincida con las anteriores.
            Esto es útil para mostrar una página 404 (Página no encontrada).
          */}
          <Route
            path="*"
            element={
              <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 text-red-800 p-8 rounded-lg shadow-lg">
                <h1 className="text-5xl font-bold mb-4">
                  404 - Página no encontrada
                </h1>
                <p className="text-xl text-center">
                  Lo sentimos, la página que buscas no existe.
                </p>
                <p className="text-lg text-center mt-2">
                  Verifica la URL o vuelve a la página principal.
                </p>
                {/* Utiliza Link de react-router-dom para una navegación adecuada dentro de la SPA */}
                {/* Asegúrate de importar Link si no lo has hecho ya en este archivo */}
                <a
                  href="/home"
                  className="mt-6 text-blue-600 hover:text-blue-800 text-xl font-semibold underline">
                  Volver al Inicio
                </a>
              </div>
            }
          />
        </Routes>
        <FooterReact />
      </div>
    </BrowserRouter>
  );
}
