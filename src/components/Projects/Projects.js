import React, { useEffect } from "react";

import Notify from "./Notify/Notify";

import joke from "../../assets/icons/joke.svg";

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
      <div className="joke-wrapper">
        <img className="joke" src={joke} />
        <div className="joke-desc">
          <span>{t("joke")}</span>
        </div>
      </div>
      <div className="projects-container__block">
        <Notify t={t} />
      </div>
    </div>
  );
};

export default Projects;
