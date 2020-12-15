import React from "react";

import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import telegram from "../../assets/icons/telegram.svg";
import photo from "../../assets/photos/photo.jpg";

import "./LeftCol.scss";

const LeftCol = ({ t }) => (
  <div className="left-col">
    <div className="left-col__photo">
      <img alt="i am" src={photo} />
    </div>

    <div className="left-col__hello">
      <h2>{t("hello")}</h2>
      <p>{t("greeting")}</p>
    </div>

    <div className="left-col__contacts">
      <h2>{t("contact")}</h2>

      <p>{t("adress")}</p>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.google.by/maps/place/Minsk/@53.8845585,27.453286,11z/data=!3m1!4b1!4m5!3m4!1s0x46dbcfd35b1e6ad3:0xb61b853ddb570d9!8m2!3d53.9006011!4d27.558972"
      >
        {t("place")}
      </a>

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

    <div className="left-col__social">
      <h2>{t("social")}</h2>

      <div className="left-col__icons">
        <a
          target="_blank"
          className="github"
          rel="noopener noreferrer"
          href="https://github.com/cqxg"
        >
          <img alt="github" src={github} />
        </a>

        <a
          target="_blank"
          className="telegram"
          rel="noopener noreferrer"
          href="tg://resolve?domain=cqxxxg"
        >
          <img alt="telegram" src={telegram} />
        </a>

        <a
          target="_blank"
          className="linkedin"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/ihar-ivaniuk/"
        >
          <img alt="linkedin" src={linkedin} />
        </a>
      </div>
    </div>
  </div>
);

export default LeftCol;
