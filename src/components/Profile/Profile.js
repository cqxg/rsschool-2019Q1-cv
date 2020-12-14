import React from "react";

import Cubes from "./Cubes/Cubes";
import Stars from "./Stars/Stars";

import freelance from "../../assets/screenshots/Work/freelance.svg";
import intelico from "../../assets/screenshots/Work/intelico.svg";
import rss from "../../assets/screenshots/Work/rss.svg";

import "./Profile.scss";

const Profile = ({ t }) => {
  return (
    <div className="content-container">
      <div className="content-container__block">
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

      <div className="content-container__block">
        <h2>{t("skills")}</h2>
        <Cubes />

        <h2>{t("anotherSkills")}</h2>
        <div className="content-container__another">
          <p>{t("research")}</p>
          <Stars filledStars={4} emptyStars={1} />
        </div>

        <div className="content-container__another">
          <p>{t("modeling")}</p>
          <Stars filledStars={3} emptyStars={2} />
        </div>

        <div className="content-container__another">
          <p>{t("management")}</p>
          <Stars filledStars={4} emptyStars={1} />
        </div>

        <div className="content-container__another">
          <p>{t("communication")}</p>
          <Stars filledStars={4} emptyStars={1} />
        </div>

        <div className="content-container__another">
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

      <div className="content-container__block">
        <div className="content-container__experience">
          <h2>{t("experience")}</h2>
          <h3>2014 - 2018</h3>
          <p>
            Research of the relationship between social, socio-economic,
            cultural and ideological processes, their impact on politics and
            economics;
          </p>
          <p>
            Practical research of interaction between business and government in
            the Republic of Belarus, conducting small own projects.
          </p>
          <p>
            Participation in projects of the Department of Entrepreneurship of
            the Ministry of Economy of the Republic of Belarus;
          </p>
          <p> Social activity.</p>

          <h3>2019 - 2020</h3>
          <img src={freelance} alt="freelance" />
          <p>
            Development of small commercial solutions and CRM integration.
            Development of small web applications using modern technologies.
          </p>

          <h3>2020 - Present</h3>
          <img src={intelico} alt="intelico" />
          <p>{t("intelico")}</p>
          <img src={rss} alt="rss" />
          <p>rss</p>
          <p>And also work on my own projects.</p>
        </div>
      </div>

      {/*     <div className="block">
                <h2>{t('volunteer')}</h2>
                <p>{t('rssVolunteer')}</p>
                <a href="https://rs.school/" target='_blank' rel='noopener noreferrer'><img className='border' src={RSS} alt="RSS Organization" /></a>
            </div> */}
    </div>
  );
};

export default Profile;
