import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  const baseLinkClass =
    "text-white text-2xl  font-bold hover:text-blue-400 transition-colors duration-300 p-1  focus:outline-none ";

  return (
    <nav className="text-white bg-black  ">
      <div className="flex flex-col items-center  md:flex-row md:justify-center ">
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
