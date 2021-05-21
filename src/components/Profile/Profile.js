import React from "react";
import freelance from "../../assets/screenshots/Work/freelance.svg";

// import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Cubes from "./Cubes/Cubes";
import RenderStarsGroup from "./Stars/Stars";
import Delimiter from "../../utils/delimiter";

import "./Profile.scss";

const Profile = ({ t }) => (
  <div className="profile-container">
    <div className="profile-container__block">
      <h2>{t("summary")}</h2>
      <blockquote>
        <p>{t("summaryDesc")}</p>
      </blockquote>
    </div>

    <Delimiter />

    <div className="profile-container__block">
      <h2>{t("skills")}</h2>
      <Cubes />
      <h2>{t("anotherSkills")}</h2>
      <RenderStarsGroup t={t} />
    </div>

    <div className="profile-container__block">
      <div className="profile-container__experience">
        <h2>{t("experience")}</h2>

        <VerticalTimeline>
          <VerticalTimelineElement
            icon=''
            date="2015 — 2018"
            dateClassName='timeline__data'
            iconStyle={{ background: '#202020', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #202020' }}
            contentStyle={{ background: '#202020', color: '#fff', border: '2px solid #48da9b' }}
          >
            <p>{t("experience2015p1")}</p>
            <p>{t("experience2015p2")}</p>
            <p>{t("experience2015p3")}</p>
            <p>{t("experience2015p4")}</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            icon=''
            date="2019 — 2020"
            dateClassName='timeline__data'
            className="vertical-timeline1"
            iconStyle={{ background: '#202020', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #202020' }}
            contentStyle={{ background: '#202020', color: '#fff', border: '2px solid #48da9b' }}
          >
            <a
              href="https://en.wikipedia.org/wiki/Freelancer"
              target="_blank"
              rel="noreferrer"
            >
              <img src={freelance} alt="freelance" />
            </a>
            <p>{t("experience2019p1")}</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon=''
          />
        </VerticalTimeline>

        {/* <h3>2015 — 2018</h3>
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

        <h3>{t("rightNow")}</h3>
        <a href="https://rs.school/" target="_blank" rel="noreferrer">
          <img src={rss} alt="rss" />
        </a>
        <p>{t("experienceRss")}</p>
        <p>{t("ownExperience")}</p> */}



      </div>
    </div>
  </div>
);

export default Profile;


{/* <Timeline lineColor={'#ffffff26'}>
          <TimelineItem
            key="001"
            dateText="04/2009 – 11/2010"
            dateComponent={(
              <div
                style={{
                  float: 'left',
                  color: '#04080b',
                  padding: '10px',
                  display: 'block',
                  background: '#48da9b',
                  boxShadow: '0px 0px 20px 5px rgba(0, 0, 0, 0.2)',
                }}
              >
                11/2008 – 04/2009
              </div>
            )}
            bodyContainerStyle={{
              border: 'none',
              padding: '20px',
              background: '#ffffff26',
              boxShadow: '0px 0px 20px 5px rgba(0, 0, 0, 0.2)',
            }}
          >
            <h3>Title, Company</h3>
            <h4>Subtitle</h4>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
              exercitation. Veniam velit adipisicing anim excepteur nostrud magna
              nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
              reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
              est.
    </p>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
              exercitation. Veniam velit adipisicing anim excepteur nostrud magna
              nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
              reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
              est.
    </p>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
              exercitation. Veniam velit adipisicing anim excepteur nostrud magna
              nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
              reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
              est.
    </p>
          </TimelineItem>
        </Timeline> */}