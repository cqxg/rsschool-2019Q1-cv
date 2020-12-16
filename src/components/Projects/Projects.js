import React, { useEffect } from "react";

import Joke from "./Joke/Joke";
import Notify from "./Notify/Notify";

import plat from "../../assets/screenshots/Work/plat.svg";

import "./Projects.scss";

const Projects = ({ t }) => {
  useEffect(() => {
    setTimeout(() => {
      document?.querySelector(".joke-wrapper")?.classList?.add("activate-joke");
    }, 2700);
    setTimeout(() => {
      document
        ?.querySelector(".joke-wrapper")
        ?.classList?.add("deactivate-joke");
    }, 4700);
  }, []);

  return (
    <div className="projects-container">
      <Joke t={t} />
      <div className="projects-container__block">
        <Notify t={t} />
        <h2>{t("projects")}</h2>

        <h4>
          Plat | Lead Distribution Platform (Feb 2020 - Present)
        </h4>
        <a href="https://dot818.com/plat/" target="_blank" rel="noreferrer">
          <img className="border" src={plat} alt="Plat" />
        </a>
        <p>{t("platDesc")}</p>
        <p>{t("platMoreDesc")}</p>

        <div className="env_wrap">
          <p className="highlight">{t("env")}</p>
          <p>JavaScript, React, Redux, Bootstrap, SCSS etc.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
