import React from "react";

import univer from "../../assets/screenshots/Education/university.svg";
import rssjs from "../../assets/screenshots/Education/rssjs.svg";
import rssnode from "../../assets/screenshots/Education/rssnode.svg";
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
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://school.rollingscopes.com/"
        >
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
        <a
          target="_blank"
          rel="noreferrer"
          href="https://school.rollingscopes.com/"
        >
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
    </div>
  </div>
);

export default Education;
