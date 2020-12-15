import React, { useEffect } from "react";

import joke from "../../assets/icons/joke.svg";

// import Plat from "../../assets/projectScreens/plat.png";
// import Chat from "../../assets/projectScreens/chat.gif";
// import Editor from "../../assets/projectScreens/editor.gif";
// import Culture from "../../assets/projectScreens/culture.gif";
// import ArrOfArr from "../../assets/projectScreens/arr.gif";

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
        <div className="projects-container__cbox">
          <input type="checkbox" />
          <p>
            {t("notyEnc")}
            <a
              className="education_link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/cqxg"
            >
              {" "}
              github
            </a>
            !
            <br />
            {t("notyDesc")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
