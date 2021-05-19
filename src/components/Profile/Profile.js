import React from "react";

import Cubes from "./Cubes/Cubes";
import Stars from "./Stars/Stars";

import freelance from "../../assets/screenshots/Work/freelance.svg";
import intelico from "../../assets/screenshots/Work/intelico.svg";
import rss from "../../assets/screenshots/Work/rss.svg";

import "./Profile.scss";

const Profile = ({ t }) => (
  <div className="profile-container">
    <div className="profile-container__block">
      <h2>{t("summary")}</h2>
      <blockquote>
        <p>{t("summaryDesc")}</p>
      </blockquote>
    </div>

    <div className="horizontal-line">
      <div className="line-left" />
      <div className="left-circle" />
      <div className="central-circle" />
      <div className="right-circle" />
      <div className="line-right" />
    </div>

    <div className="profile-container__block">
      <h2>{t("skills")}</h2>
      <Cubes />

      <h2>{t("anotherSkills")}</h2>
      <div className="profile-container__another">
        <p>{t("research")}</p>
        <Stars filledStars={4} emptyStars={1} />
      </div>

      <div className="profile-container__another">
        <p>{t("modeling")}</p>
        <Stars filledStars={3} emptyStars={2} />
      </div>

      <div className="profile-container__another">
        <p>{t("management")}</p>
        <Stars filledStars={4} emptyStars={1} />
      </div>

      <div className="profile-container__another">
        <p>{t("communication")}</p>
        <Stars filledStars={4} emptyStars={1} />
      </div>

      <div className="profile-container__another">
        <p>{t("processes")}</p>
        <Stars filledStars={3} emptyStars={2} />
      </div>
    </div>

    <div className="horizontal-line">
      <div className="line-left" />
      <div className="left-circle" />
      <div className="central-circle" />
      <div className="right-circle" />
      <div className="line-right" />
    </div>

    <div className="profile-container__block">
      <div className="profile-container__experience">
        <h2>{t("experience")}</h2>
        <h3>2015 — 2018</h3>
        <p>{t("experience2015p1")}</p>
        <p>{t("experience2015p2")}</p>
        <p>{t("experience2015p3")}</p>
        <p>{t("experience2015p4")}</p>

        <h3>2019 — 2020</h3>
        <a
          href="https://en.wikipedia.org/wiki/Freelancer"
          target="_blank"
          rel="noreferrer"
        >
          <img src={freelance} alt="freelance" />
        </a>
        <p>{t("experience2019p1")}</p>

        <h3>2020 — 2021</h3>
        <a href="https://intelico.pro/" target="_blank" rel="noreferrer">
          <img src={intelico} alt="intelico" />
        </a>
        <p>{t("experienceIntelico")}</p>

        <a href="https://rs.school/" target="_blank" rel="noreferrer">
          <img src={rss} alt="rss" />
        </a>
        <p>{t("experienceRss")}</p>
        <p>{t("ownExperience")}</p>
      </div>
    </div>
  </div>
);

export default Profile;
