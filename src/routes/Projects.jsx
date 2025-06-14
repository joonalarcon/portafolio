import React from 'react'

const Projects = () => {
  return (
    <div className="bg-black flex flex-col justify-center items-center animate-fade-down animate-duration-[4000ms] px-4 py-10">
      <h1 className="relative text-4xl md:text-7xl font-bold text-center animate-fade-right animate-duration-[5000ms] ">
        <span
          className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 blur-lg opacity-50 -z-10 scale-105"
          aria-hidden="true"
        />
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Proyectos
        </span>
      </h1>
    </div>
  );
}


export default Projects
