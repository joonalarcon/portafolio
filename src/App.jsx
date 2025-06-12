import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [isMoving, setIsMoving] = useState(false);
  const timeoutRef = useRef(null);

  const handleOrientation = () => {
    setIsMoving(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsMoving(false), 500);
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
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-4">
      <h1 className="text-4xl font-bold text-center">Portafolio Jonathan</h1>

      <button
        onClick={requestPermission}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
        Activar sensor
      </button>

      <button
        className={`${
          isMoving
            ? "bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500 animate-pulse"
            : "bg-blue-500"
        } text-white font-bold py-2 px-4 rounded transition-all duration-300`}>
        Get Started
      </button>
    </div>
  );
}

export default App;
