import React from "react";

import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import telegram from "../../assets/icons/telegram.svg";
import photo from "../../assets/photos/photo.jpg";

import "./LeftCol.scss";

const LeftCol = ({ t }) => {
  return (
    <div className="left-col">
      <div className="left-col__photo">
        <img alt="photo" src={photo} />
      </div>

      <div className="left-col__hello">
        <h2>{t("hello")}</h2>
        <p>{t("greeting")}</p>
      </div>

      <div className="left-col__contacts">
        <h2>{t("contact")}</h2>
        <p>{t("phone")}</p>
        <a href="tel: +375 29 327 4039" type="tel">
          +375 29 327 4039
        </a>
        <p>{t("mail")}</p>
        <a href="mailto: cqxg@yandex.ru">cqxg@yandex.ru</a>
      </div>

      <a href="mailto:cqxg@yandex.ru" className="left-col__sendmessage">
        <span />
        <span />
        <span>{t("sendMeMess")}</span>
      </a>

      {/* 
      <div className="left-col__social">
        <h2>{t("social")}</h2>
        <ul className="social_icons horizontal_list">
          <li>
            <a
              className="telegram"
              target="_blank"
              rel="noopener noreferrer"
              href="tg://resolve?domain=cqxxxg"
            >
              <img alt="telegram" src={telegram} />
              <span className="invisible">Telegram</span>
            </a>
          </li>
          <li>
            <a
              className="github"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/cqxg"
            >
              <img alt="github" src={github} />
              <span className="invisible">GitHub</span>
            </a>
          </li>
          <li>
            <a
              className="linkedin"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/ihar-ivaniuk/"
            >
              <img alt="linkedin" src={linkedin} />
              <span className="invisible">LinkedIn</span>
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default LeftCol;
