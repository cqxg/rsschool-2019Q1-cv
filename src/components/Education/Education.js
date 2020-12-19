import React from "react";

import rssjs from "../../assets/screenshots/Education/rssjs.svg";
import react from "../../assets/screenshots/Education/react.svg";
import become from "../../assets/screenshots/Education/become.svg";
import rssnode from "../../assets/screenshots/Education/rssnode.svg";
import improve from "../../assets/screenshots/Education/improve.svg";
import univer from "../../assets/screenshots/Education/university.svg";
import preinter from "../../assets/screenshots/Education/preinter.svg";

import "./Education.scss";

const Education = ({ t }) => (
  <div className="education-container">
    <div className="education-container__block">
      <h2>{t("education")}</h2>

      <a href="http://bseu.by/english/" target="_blank" rel="noreferrer">
        <img className="bseu" src={univer} alt="university" />
      </a>

      <p>
        {t("university")}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://bseu.by/english/"
        >
          {" "}
          {t("uniLocate")}
        </a>
        , 2014-2018
      </p>
      <p>{t("special")}</p>

      <div className="horizontal-line">
        <div className="line-left" />
      </div>

      <p>
        {t("rssFE")}
        <a target="_blank" rel="noopener noreferrer" href="https://rs.school">
          {t("rssLink")}
        </a>
        , 02.2019 – 08.2019
      </p>

      <p>{t("rssCertificate")}</p>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://app.rs.school/certificate/cc6pbvqf"
      >
        <img
          src={rssjs}
          alt="RSS JS/FE"
          className="rssjs"
          title="click to see credential"
        />
      </a>

      <p>
        {t("rssNode")}
        <a target="_blank" rel="noreferrer" href="https://rs.school">
          {t("rssLink")}
        </a>
        , 09.2020 – 11.2020
      </p>

      <p>{t("rssCertificate")}</p>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://app.rs.school/certificate/9gqtiad8"
      >
        <img
          src={rssnode}
          alt="RSS NodeJS"
          className="rssnode"
          title="click to see credential"
        />
      </a>

      <div className="horizontal-line">
        <div className="line-left" />
      </div>

      <p>{t("languageLevelCertificate")}</p>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://drive.google.com/file/d/1rUjNZc8Jxas-Be3kdV1z_gBOU5TYi6NZ/view?usp=sharing"
      >
        <img
          className="streamline"
          src={preinter}
          alt="streamline A2+"
          title="click to see credential"
        />
      </a>

      <div className="horizontal-line">
        <div className="line-left" />
      </div>

      <p>
        {t("linkedInCertificate")}{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/ihar-ivaniuk/"
        >
          {t("linkedInLink")}
        </a>
        :
      </p>

      <a
        target="_blank"
        rel="noreferrer"
        href="https://drive.google.com/file/d/13MmwFFVtxIIvQy-A9OD5c8EKhPfcDZGN/view?usp=sharing"
      >
        <img
          src={become}
          className="linkedin"
          alt="Become JS LinkedIn"
          title="click to see credential"
        />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://drive.google.com/file/d/1ChhH52JEvcQEjZw73d_irAGU0vFsnTuY/view?usp=sharing"
      >
        <img
          src={improve}
          className="linkedin"
          alt="Improve JS LinkedIn"
          title="click to see credential"
        />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://drive.google.com/file/d/1PaXNX-NPl1UvjqyPz3m9EoixK--y0XUv/view?usp=sharing"
      >
        <img
          src={react}
          className="linkedin"
          alt="React JS LinkedIn"
          title="click to see credential"
        />
      </a>
    </div>
  </div>
);

export default Education;
