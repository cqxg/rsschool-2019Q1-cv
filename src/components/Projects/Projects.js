import React, { useEffect } from "react";

import joke from "../../assets/icons/joke.svg";

// import Plat from "../../assets/projectScreens/plat.png";
// import Chat from "../../assets/projectScreens/chat.gif";
// import Editor from "../../assets/projectScreens/editor.gif";
// import Culture from "../../assets/projectScreens/culture.gif";
// import ArrOfArr from "../../assets/projectScreens/arr.gif";

import "./Projects.scss";

const Projects = ({ t }) => {
  //   useEffect(() => {
  //     setTimeout(() => {
  //       document.querySelector(".joke-wrapper").classList.add("activate-joke");
  //     }, 3000);
  //     setTimeout(() => {
  //       document.querySelector(".joke-wrapper").classList.add("deactivate-joke");
  //     }, 5000);
  //   }, []);

  return (
    <div className="projects-container">
      <div className="joke-wrapper">
        <img className="joke" src={joke} />
        <div className="joke-desc">
          <span>{t("joke")}</span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
