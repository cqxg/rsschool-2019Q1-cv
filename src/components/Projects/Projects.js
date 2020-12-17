import React, { useEffect } from "react";

import Joke from "./Joke/Joke";
import Notify from "./Notify/Notify";

import plat from "../../assets/screenshots/Projects/plat.svg";
import chat from "../../assets/screenshots/Projects/chat.svg";
import editor from "../../assets/screenshots/Projects/editor.svg";

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

        <h4>Plat | Lead Distribution Platform (Feb 2020 - Present)</h4>
        <a href="https://dot818.com/plat/" target="_blank" rel="noreferrer">
          <img src={plat} alt="Plat" />
        </a>
        <p>{t("platDesc")}</p>
        <p>{t("platMoreDesc")}</p>
        <div>
          <p>{t("env")}</p>
          <p>JavaScript, React, Redux, Bootstrap, SCSS etc.</p>
        </div>

        <h4>Animation Editor App (2019)</h4>
        <a
          href="https://cqxg.github.io/animation-app/dist/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={editor} alt="Animation Editor" />
        </a>
        <p>{t("editorDesc")}</p>
        <p>{t("deployment")}</p>

        <div>
          <p>{t("env")}</p>
          <p>HTML, CSS, JavaScript, Webpack, Canvas API.</p>
        </div>

        <h4>Websocket Chat (2019)</h4>
        <a
          href="https://cqxg-chat.netlify.com/"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <img src={chat} alt="Chat" />
          </div>
        </a>
        <p>{t("chatDesc")}</p>

        <p>{t("deployment")}</p>

        <div>
          <p>{t("env")}</p>
          <p>JavaScript, Node.js, React, SCSS, WebSocket.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
