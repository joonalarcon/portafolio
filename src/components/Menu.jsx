import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  const baseLinkClass =
    "text-white text-2xl  font-bold hover:text-blue-400 transition-colors duration-300 px-3 py-2  focus:outline-none ";

  return (
    <nav className="text-white  bg-black p-6 rounded-b-lg mb-15">
      <div className="flex flex-col items-center space-y-2 md:flex-row md:justify-center md:space-x-4 md:space-y-0">
        <Link to="/" className={baseLinkClass}>
          INICIO
        </Link>
        <Link to="/projects" className={baseLinkClass}>
          PROYECTOS
        </Link>
        <Link to="/contact" className={baseLinkClass}>
          CONTACTO
        </Link>
      </div>
    </nav>
  );
}

export default Menu;
