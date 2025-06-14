import React from "react";

// Importación de logos
import LogoPython from "../../assets/logos/logosAbout/LogoPython";
import LogoNodejs from "../../assets/logos/logosAbout/LogoNode";
import LogoTypeScript from "../../assets/logos/logosAbout/LogoTypescript";
import LogoBash from "../../assets/logos/logosAbout/LogoBash";
import LogoJavascript from "../../assets/logos/logosAbout/LogoJavascript";
import LogoDocker from "../../assets/logos/logosAbout/LogoDocker";
import LogoReact from "../../assets/logos/logosAbout/LogoReact";
import LogoExpo from "../../assets/logos/logosAbout/LogoExpo";
import LogoMySql from "../../assets/logos/logosAbout/LogoMysql";
import LogoUbuntu from "../../assets/logos/logosAbout/LogoUbuntu";
import LogoExpressjs from "../../assets/logos/logosAbout/LogoExpress";
import LogoGit from "../../assets/logos/logosAbout/LogoGit";
import LogoVim from "../../assets/logos/logosAbout/LogoVim";
import LogoSqlServer from "../../assets/logos/logosAbout/LogoSqlServer";
import LogoHtml from "../../assets/logos/logosAbout/LogoHtml";
import LogoCss from "../../assets/logos/logosAbout/LogoCss";
import LogoSlack from "../../assets/logos/logosAbout/LogoSlack";
import LogoNotion from "../../assets/logos/logosAbout/LogoNotion";
import LogoAstro from "../../assets/logos/logosAbout/LogoAstro";
import LogoVite from "../../assets/logos/logosAbout/LogoVite";

function TecnologiasFavoritas() {
  const logosClass = "w-8 h-8 mr-2";

  const tecnologias = [
    { name: "Python", logo: LogoPython, href: "https://www.python.org/" },
    {
      name: "Typescript",
      logo: LogoTypeScript,
      href: "https://www.typescriptlang.org/",
    },
    { name: "Node", logo: LogoNodejs, href: "https://nodejs.org/" },
    { name: "Vite", logo: LogoVite, href: "https://vite.dev/" },
    { name: "React Native", logo: LogoReact, href: "https://reactnative.dev/" },
    {
      name: "Bash",
      logo: LogoBash,
      href: "https://www.gnu.org/software/bash/",
    },
    {
      name: "Javascript",
      logo: LogoJavascript,
      href: "https://developer.mozilla.org/docs/Web/JavaScript",
    },
    { name: "Docker", logo: LogoDocker, href: "https://www.docker.com/" },
    { name: "React", logo: LogoReact, href: "https://reactjs.org/" },
    { name: "Expo", logo: LogoExpo, href: "https://expo.dev/" },
    { name: "Mysql", logo: LogoMySql, href: "https://www.mysql.com/" },
    { name: "Ubuntu", logo: LogoUbuntu, href: "https://ubuntu.com/" },
    { name: "Express", logo: LogoExpressjs, href: "https://expressjs.com/" },
    { name: "Git", logo: LogoGit, href: "https://git-scm.com/" },
    { name: "Vim", logo: LogoVim, href: "https://www.vim.org/" },
    {
      name: "CSS",
      logo: LogoCss,
      href: "https://developer.mozilla.org/docs/Web/CSS",
    },
    {
      name: "HTML",
      logo: LogoHtml,
      href: "https://developer.mozilla.org/docs/Web/HTML",
    },
    {
      name: "SQL Server",
      logo: LogoSqlServer,
      href: "https://www.microsoft.com/sql-server",
    },
    { name: "Slack", logo: LogoSlack, href: "https://slack.com/" },
    { name: "Notion", logo: LogoNotion, href: "https://www.notion.com/" },
    { name: "Astro", logo: LogoAstro, href: "https://astro.build/" },
  ];

  return (
    <div className="flex flex-col items-center bg-black min-h-screen">
      <h1 className="text-3xl animate-fade-right animate-duration-[5000ms] font-bold mb-6 ">Tecnologías favoritas</h1>
      <div className="flex flex-wrap gap-6 lg:w-4/6 md:4/6 mb-10 justify-center ">
        {tecnologias.map(({ name, logo: Logo, href }, index) => (
          
          <div key={index} className="flex items-center animate-fade-left animate-duration-[5000ms] bg-gray-600/25 p-2 rounded-2xl shadow-sm transition-all duration-300 ease-in-out hover:scale-110 shadow-purple-400/70 ">
            {Logo && (
              <Logo
                className={`${logosClass}  `}
              />
            )}
            <a
              className="font-bold  "
              href={href}
              target="_blank"
              rel="noopener noreferrer">
              {name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TecnologiasFavoritas;
