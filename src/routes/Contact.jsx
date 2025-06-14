import React, { useEffect, useState } from "react";
import Iphone from "../components/componentsContact/Iphone";
import { TbArrowBigDownFilled } from "react-icons/tb";

const Contact = () => {
  const firstText = "Contactemos para trabajar juntos.";
  const secondText = "Disponible para proyectos y colaboraciones.";
  const [showFirstText, setShowFirstText] = useState(true);
  const [fade, setFade] = useState(true); // para controlar la opacidad

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // inicia fade out
      setTimeout(() => {
        setShowFirstText((prev) => !prev); // cambia texto
        setFade(true); // fade in
      }, 1000); // duración del fade out
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Altura fija para el contenedor de texto, basada en el texto más largo
  const fixedHeight = "220px";

  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center animate-fade-down animate-duration-[4000ms] px-4 py-10">
      <h1 className="relative text-4xl md:text-7xl font-bold text-center animate-fade-right animate-duration-[5000ms] ">
        <span
          className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 blur-lg opacity-50 -z-10 scale-105"
          aria-hidden="true"
        />
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Trabajemos Juntos
        </span>
      </h1>

      <div
        className="p-6 rounded-lg text-3xl max-w-[900px] mx-auto text-center transition-opacity duration-500 overflow-hidden"
        style={{ opacity: fade ? 1 : 0, height: fixedHeight }}>
        {showFirstText ? firstText : secondText}
      </div>

      <div className="relative  animate-bounce animate-duration-[2000ms]">
        <span
          className="absolute inset-0 bg-gradient-to-r  from-purple-400 via-pink-500 to-red-500 blur-2xl opacity-50 "
          
        />
        <TbArrowBigDownFilled
        
          style={{
            fontSize: "8rem",
            fill: "url(#gradient)",
            
          }}
        />
        <svg width="0" height="0">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop stopColor="#a78bfa" offset="0%" />
              <stop stopColor="#ec4899" offset="50%" />
              <stop stopColor="#ef4444" offset="100%" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="">
        <Iphone />
      </div>
    </div>
  );
};

export default Contact;
