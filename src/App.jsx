import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleOrientation = (event) => {
    const x = event.gamma; // izquierda/derecha
    const y = event.beta; // adelante/atrás
    setTilt({ x, y });
  };

  const requestPermission = async () => {
    if (
      typeof DeviceOrientationEvent !== "undefined" &&
      typeof DeviceOrientationEvent.requestPermission === "function"
    ) {
      const response = await DeviceOrientationEvent.requestPermission();
      if (response === "granted") {
        window.addEventListener("deviceorientation", handleOrientation);
      } else {
        alert("Permiso denegado para el sensor");
      }
    } else {
      window.addEventListener("deviceorientation", handleOrientation);
    }
  };

  useEffect(() => {
    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);

  const transformStyle = {
    transform: `translate(${tilt.x * 1.5}px, ${tilt.y * 1.5}px) rotateX(${
      tilt.y / 5
    }deg) rotateY(${tilt.x / 5}deg)`,
    transition: "transform 0.1s ease-out",
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold text-center">Portafolio Jonathan</h1>

      <button
        onClick={requestPermission}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
        Activar sensor
      </button>

      <button
        style={transformStyle}
        className="bg-blue-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg">
        Mueve tu celular ✨
      </button>
    </div>
  );
}

export default App;
