import React, { useEffect } from "react";

import { projectsData } from '../../utils/data';

import Joke from "./Joke/Joke";
import Notify from "./Notify/Notify";
import ProjectItem from "./ProjectItem";

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

  const renderProject = (item, index) => <ProjectItem key={index} t={t} item={item} />;
  const renderProjects = projectsData.map(renderProject);

  return (
    <div className="projects-container">
      <Joke t={t} />

      <div className="projects-container__block">
        <Notify t={t} />
        <h2>{t("projects")}</h2>
        {renderProjects}
      </div>
    </div>
  );
};

export default Projects;
