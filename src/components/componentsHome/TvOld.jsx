import Tv from "../../assets/images/Tv.png";

function TvOld() {
  return (
    <div className="relative w-fit h-fit flex items-center justify-center">
      {/* Fondo responsivo detrás de la TV */}
      <div
        className="flex absolute bg-black rounded-xl -z-10 animate-fade animate-duration-[10000ms] justify-center items-center
        
        // Tamaño por defecto (Mobile)
        w-[245px] h-[200px]  mr-15

        // Pantallas pequeñas (≥640px)
        sm:w-[340px] sm:h-[260px]

        // Pantallas medianas (≥768px)
        md:w-[420px] md:h-[310px]

        // Pantallas grandes (≥1024px)
        lg:w-[475px] lg:h-[375px] lg:mr-30 mb-10"

      >
        <p className="text-green-400 animate-fade-up animate-duration-[5000ms] text-4xl font-bold">Jonathan Alarcon</p>
      </div>

      {/* Imagen de la TV */}
      <img
        src={Tv}
        alt="tvOld"
        className="rounded-xl animate-fade animate-duration-[900ms]"
      />
    </div>
  );
}

export default TvOld;
