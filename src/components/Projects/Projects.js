import React, { useEffect } from "react";

import Joke from "./Joke/Joke";
import Notify from "./Notify/Notify";

import plat from "../../assets/screenshots/Projects/plat.svg";
import chat from "../../assets/screenshots/Projects/chat.svg";
import editor from "../../assets/screenshots/Projects/editor.svg";
import arrays from "../../assets/screenshots/Projects/arrays.svg";
import culture from "../../assets/screenshots/Projects/culture.svg";

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
          <img className="plat" src={plat} alt="Plat" title={t("deployment")} />
        </a>
        <p>{t("platDesc")}</p>
        <p>{t("platMoreDesc")}</p>
        <div>
          <p>{t("env")}</p>
          <p>JavaScript, React, Redux, Bootstrap, SCSS etc.</p>
        </div>

        <h4>Animation Editor App (2019)</h4>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://cqxg.github.io/animation-app/dist/"
        >
          <img
            src={editor}
            className="editor"
            alt="Animation Editor"
            title={t("deployment")}
          />
        </a>
        <p>{t("editorDesc")}</p>

        <div>
          <p>{t("env")}</p>
          <p>HTML, CSS, JavaScript, Webpack, Canvas API.</p>
        </div>

        <h4>Websocket Chat (2019)</h4>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://cqxg-chat.netlify.com/"
        >
          <div>
            <img
              src={chat}
              alt="Chat"
              className="chat"
              title={t("deployment")}
            />
          </div>
        </a>
        <p>{t("chatDesc")}</p>

        <div>
          <p>{t("env")}</p>
          <p>JavaScript, Node.js, React, SCSS, WebSocket.</p>
        </div>

        <h4>Culture Portal (2019)</h4>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://belarusian-directors.netlify.com/"
        >
          <img
            className="culture"
            src={culture}
            alt="Culture portal"
            title={t("deployment")}
          />
        </a>
        <p>{t("cultureDesc")}</p>

        <div>
          <p>{t("env")}</p>
          <p> JavaScript, GatsbyJS, HTML, CSS, Bootstrap.</p>
        </div>

        <h4>Work with arrays (2019)</h4>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://cqxg.github.io/Work_with_arrays/"
        >
          <img
            src={arrays}
            alt="arrays"
            className="arrays"
            title={t("deployment")}
          />
        </a>
        <p>{t("arrDesc")}</p>

        <div>
          <p>{t("env")}</p>
          <p>HTML, CSS, JavaScript.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
