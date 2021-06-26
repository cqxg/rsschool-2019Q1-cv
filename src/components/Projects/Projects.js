import React, { useEffect, useRef } from "react";

import { projectsData } from '../../utils/data';

import Joke from "./Joke/Joke";
import Notify from "./Notify/Notify";
import ProjectItem from "./ProjectItem";

import "./Projects.scss";

const Projects = ({ t }) => {
  const jokeWrapper = useRef(null);

  useEffect(() => {
    setTimeout(() => jokeWrapper?.current?.classList?.add("activate-joke"), 2700);
    setTimeout(() => jokeWrapper?.current?.classList?.add("deactivate-joke"), 4700);
  }, []);

  const renderProject = (item, index) => <ProjectItem key={index} t={t} item={item} />;
  const renderProjects = projectsData.map(renderProject);

  return (
    <div className="projects-container">
      <Joke t={t} jokeWrapper={jokeWrapper} />

      <div className="projects-container__block">
        <Notify t={t} />
        <h2>{t("projects")}</h2>
        {renderProjects}
      </div>
    </div>
  );
};

export default Projects;
