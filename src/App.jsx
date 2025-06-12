import "./App.css";
import LogoGithub from "./assets/logos/LogoGithub";
import LogoReact from "./assets/logos/LogoReact";
import LogoTailwind from "./assets/logos/LogoTailwind";
import LogoVite from "./assets/logos/LogoVite";

function App() {
  const animationLogos =
    "transform transition duration-500 hover:scale-110";

  return (
    <>
      <div className="flex flex-col justify-center items-center animate-duration-[2000ms] animate-jump-in animate-ease-in-out">
        <h1 className="text-6xl font-bold">Jonathan Alarcon</h1>
        <h3 className="text-2xl font-bold mb-10">Full Stack Developer</h3>
      </div>

      {/* Botón centrado */}
      <div className="flex justify-center mb-10 transition-all duration-300 ease-in-out hover:scale-125 hover:rotate-6">
        <button
          className="flex items-center justify-center bg-amber-100 hover:bg-amber-200 w-40 h-20 rounded-full shadow-md transition"
          onClick={() =>
            window.open("https://github.com/joonalarcon", "_blank")
          }>
          <LogoGithub className="w-10 h-10" />
        </button>
      </div>

      <div className="flex animate-fade-up animate-ease-in-out justify-center mb-20 bg-gradient-to-l from-sky-500 via-purple-500/90 to-indigo-500 p-4 rounded-lg">
        <h1 className="text-3xl font-bold text-black ">
          Portafolio en construcción
        </h1>
      </div>

      <div className="flex justify-center gap-4 mt-10 animate-fade-down animate-ease-in-out">
        <a href="https://vitejs.dev/" target="_blank">
          {" "}
          <LogoVite className={animationLogos} />{" "}
        </a>
        <a href="https://react.dev/" target="_blank">
          <LogoReact className={animationLogos} />
        </a>
        <a href="https://tailwindcss.com/" target="_blank">
          <LogoTailwind className={animationLogos} />
        </a>
      </div>
    </>
  );
}

export default App;
