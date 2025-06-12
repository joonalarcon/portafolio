import "./App.css";
import LogoAstro from "./assets/logos/LogoAstro";
import LogoGithub from "./assets/logos/LogoGithub";
import LogoReact from "./assets/logos/LogoReact";
import LogoTailwind from "./assets/logos/LogoTailwind";

function App() {
  const animationLogos =
    "transform transition duration-500 hover:scale-110 animate-bounce";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <header className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          Jonathan Alarcón
        </h1>
        <h3 className="text-xl sm:text-2xl font-semibold mt-2">
          Full Stack Developer
        </h3>
      </header>

      <button
        className="flex items-center justify-center bg-amber-100 hover:bg-amber-200 w-40 h-14 rounded-full shadow-md transition mb-6"
        onClick={() => window.open("https://github.com/joonalarcon", "_blank")}>
        <LogoGithub className="w-8 h-8" />
      </button>

      <div className="flex justify-center text-center mb-10 bg-gradient-to-l from-sky-500 via-purple-500/90 to-indigo-500 p-4 rounded-lg w-full max-w-md">
        <h2 className="text-xl sm:text-2xl font-bold text-black">
          Portafolio en construcción
        </h2>
      </div>

      <div className="flex justify-center gap-6 flex-wrap">
        <LogoAstro className={animationLogos} />
        <LogoTailwind className={animationLogos} />
        <LogoReact className={animationLogos} />
      </div>
    </div>
  );
}

export default App;
