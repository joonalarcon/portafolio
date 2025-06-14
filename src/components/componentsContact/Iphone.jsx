import React from "react";
import iphone from "../../assets/images/iphone.png";
import apple15 from "../../assets/images/apple15.jpeg";
import LogoGithub from "../../assets/logos/logosAbout/LogoGithub";
import LogoGmail from "../../assets/logos/logosAbout/LogoGmail";
import LogoWhatsApp from "../../assets/logos/logosAbout/LogoWhatsapp";
import LogoTelefono from "../../assets/logos/logosAbout/LogoTelefono";
import LogoLinkedIn from "../../assets/logos/logosAbout/LogoLinkedin";
import LogoInstagram from "../../assets/logos/logosAbout/LogoInstagram";
import LogoTelegram from "../../assets/logos/logosAbout/LogoTelegram";
import LogoTwitter from "../../assets/logos/logosAbout/LogoTwitter";
import LogoSlack from "../../assets/logos/logosAbout/LogoSlack";

const apps = [
  {
    name: "GitHub",
    link: "https://github.com/joonalarcon",
    color: "from-gray-800 to-gray-800",
    icon: LogoGithub,
  },
  {
    name: "Gmail",
    link: "https://mail.google.com/mail/u/0/#inbox",
    color: "from-gray-800 to-gray-800",
    icon: LogoGmail,
  },
  {
    name: "WhatsApp",
    link: "https://wa.me/56928810060",
    color: "from-gray-800 to-gray-800",
    icon: LogoWhatsApp,
  },
  {
    name: "Telefono",
    link: "https://wa.me/56928810060",
    color: "from-gray-800 to-gray-800",
    icon: LogoTelefono,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/joonalarcon/",
    color: "from-gray-800 to-gray-800",
    icon: LogoLinkedIn,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/joonalarcons/",
    color: "from-gray-800 to-gray-800",
    icon: LogoInstagram,
  },
  {
    name: "Telegram",
    link: "https://t.me/joonalarcon",
    color: "from-gray-800 to-gray-800",
    icon: LogoTelegram,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/joonalarcon",
    color: "from-gray-800 to-gray-800",
    icon: LogoTwitter,
  },
  {
    name: "Slack",
    link: "https://slack.com",
    color: "from-gray-800 to-gray-800",
    icon: LogoSlack
  }
];

const Iphone = () => {
  return (
    <>
      <style>{`
        @keyframes zoomInOut {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.3);
          }
        }

        .bg-zoom-container {
          position: relative;
          width: 300px;
          height: 570px;
          border-radius: 1.5rem; /* rounded-3xl */
          overflow: hidden;
          z-index: 0;
        }

        .bg-zoom-container::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url(${apple15});
          background-size: cover;
          background-position: center;
          animation: zoomInOut 50s ease-in-out infinite;
          transform-origin: center;
          will-change: transform;
        }
      `}</style>

      <div className="flex justify-center items-center mt-10 bg-black relative ">
        <div className="absolute w-[500px] h-[600px] bg-gradient-to-l  from-purple-500 via-red-500 to-indigo-500 rounded-full blur-3xl opacity-40 z-0" />

        <div className="relative w-[320px] h-[600px] bg-black/5 rounded-2xl z-10">
          {/* Fondo animado */}
          <div className="bg-zoom-container absolute top-4 left-4" />

          {/* Iconos */}
          <div className="absolute top-4 left-4 w-[280px] h-[570px] rounded-3xl z-10 flex flex-wrap content-start justify-center gap-4 p-4 pt-8 animate-fade-right animate-duration-[8000ms]">
            {apps.map(({ name, link, color, icon: Icon }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center w-16">
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-b ${color} hover:scale-110 transition-transform duration-300 ease-in-out shadow-lg`}>
                  {Icon && <Icon className="w-8 h-8 text-white" />}
                </div>
                <span className="text-xs text-white mt-1 text-center">
                  {name}
                </span>
              </a>
            ))}

            <a
              href="../../../public/archivos/Jonathan Alarcon cv.pdf" // Reemplaza con la ruta real de tu archivo
              download
              className="inline-block w-54 rounded-2xl bg-gradient-to-b from-gray-800 to-gray-700 hover:scale-110 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-800 hover:border-1 hover:border-gray-600 transition-transform duration-300 ease-in-out shadow-lg text-md font-bold text-center p-3">
              Descargar CV
            </a>
          </div>

          {/* Imagen del iPhone encima */}
          <img
            src={iphone}
            alt="iPhone"
            className="absolute top-0 left-0 w-[340px] h-[600px] z-20 pointer-events-none"
          />
        </div>
      </div>
    </>
  );
};

export default Iphone;
