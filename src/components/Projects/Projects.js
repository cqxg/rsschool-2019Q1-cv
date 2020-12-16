import React, { useEffect } from "react";

import Joke from "./Joke/Joke";
import Notify from "./Notify/Notify";

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
      </div>
    </div>
  );
};

export default Projects;
