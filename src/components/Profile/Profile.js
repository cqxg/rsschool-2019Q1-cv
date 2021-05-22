import React from "react";

import Cubes from "./Cubes/Cubes";
import Timeline from "./Timeline/Timeline";
import RenderStarsGroup from "./Stars/Stars";

import "./Profile.scss";

const Profile = ({ t }) => (
  <div className="profile-container">
    <div className="profile-container__block">
      <h2>{t("summary")}</h2>
      <blockquote>
        <p>{t("summaryDesc")}</p>
      </blockquote>
    </div>

    <div className="profile-container__block">
      <h2>{t("skills")}</h2>
      <Cubes />
      <h2>{t("anotherSkills")}</h2>
      <RenderStarsGroup t={t} />
    </div>

    <div className="profile-container__block">
      <div className="profile-container__experience">
        <h2>{t("experience")}</h2>
        <Timeline t={t} />
      </div>
    </div>
  </div>
);

export default Profile;