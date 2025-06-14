import { useState, useEffect } from "react";
import LogoTailwind from "../assets/logos/LogoTailwind";
import LogoVite from "../assets/logos/logosAbout/LogoVite";
import LogoReact from "../assets/logos/LogoReact";

function FooterReact() {
  const [startSpin, setStartSpin] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStartSpin(true);
    }, 1000); // espera 1 segundo (ajusta según duración del fade-up)
    return () => clearTimeout(timeout);
  }, []);

  return (
    <footer className="text-white p-4 bg-black justify-center items-center">
      <div className="text-center">


        <div className="mt-2 flex justify-center items-center gap-2">
          <p className="text-lg">Diseñado con</p>
          <LogoVite className="w-10 h-10 animate-fade-up" />
          <LogoReact
            className={`w-10 h-10 ${
              startSpin
                ? "animate-spin animate-duration-[5000ms]"
                : "animate-fade-up"
            }`}
          />
          <LogoTailwind className="w-10 h-10 animate-fade-up" />
        </div>
      </div>
    </footer>
  );
}

export default FooterReact;
