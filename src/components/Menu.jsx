import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  // Clases base para los enlaces del menú.
  // 'text-xl' para móvil (más pequeño), 'md:text-4xl' para escritorio (más grande).
  // 'block' para que cada enlace ocupe su propia línea en móvil.
  // 'text-center' para centrar el texto en móvil.
  const baseLinkClass =
    "block text-white text-xl md:text-2xl font-bold hover:text-blue-400 transition-colors duration-300 py-2 px-2 rounded-md focus:outline-none md:shadow-lg md:shadow-purple-400 m-2 text-center";
  // Las clases 'md:shadow-lg' y 'md:shadow-purple-400' aseguran que la sombra
  // solo se aplique en pantallas medianas (md) y superiores (escritorio),
  // y no en pantallas más pequeñas (móviles).

  return (
    <nav className="">
      {/* Fondo oscuro y sombra para la barra de navegación */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:space-x-8">
        {/* Aquí puedes añadir un logo o título para tu portafolio, si lo deseas */}
        {/* <div className="text-white text-3xl font-extrabold mb-4 md:mb-0">Mi Portafolio</div> */}

        {/* Contenedor de enlaces del menú:
            - 'flex flex-col' por defecto para que los enlaces se apilen verticalmente en móviles.
            - 'md:flex-row' para que los enlaces se muestren horizontalmente en escritorio.
            - 'md:space-x-8' para el espaciado horizontal entre elementos en escritorio.
            - 'w-full md:w-auto' para que ocupe todo el ancho en móvil si es necesario, y auto en escritorio.
            - 'mt-4 md:mt-0' añade un pequeño margen superior en móvil si no hay logo/título, y lo quita en escritorio.
        */}
        <div className="flex flex-col md:flex-row items-center md:space-x-8 w-full md:w-auto mt-4 md:mt-0">
          <Link to="/home" className={`${baseLinkClass} md:mt-15 `}>
            Inicio
          </Link>
          <Link to="/projects" className={`${baseLinkClass} md:mt-15 `}>
            Proyectos
          </Link>
          <Link to="/contact" className={`${baseLinkClass} md:mt-15 `}>
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
