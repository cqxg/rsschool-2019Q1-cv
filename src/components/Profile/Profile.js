import React from "react";

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
      </div>

      <div className="horizontal-line">
        <div className="line-left" />
        <div className="left-circle" />
        <div className="central-circle" />
        <div className="right-circle" />
        <div className="line-right" />
      </div>

      {/*       <div className="block">
                <h2>{t('job')}</h2>
                <p>{t('intelico')}</p>
                <a href="https://intelico.pro/" target='_blank' rel='noopener noreferrer'><img className='border' src={Intelico} alt="intelico systems" /></a>
            </div>

            <div className="horizontal_line">
                <div className="line_left"></div>
            </div>

            <div className="block">
                <h2>{t('volunteer')}</h2>
                <p>{t('rssVolunteer')}</p>
                <a href="https://rs.school/" target='_blank' rel='noopener noreferrer'><img className='border' src={RSS} alt="RSS Organization" /></a>
            </div> */}
    </div>
  );
};

export default Profile;
