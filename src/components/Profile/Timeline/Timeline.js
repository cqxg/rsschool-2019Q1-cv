import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import freelance from "../../../assets/screenshots/Work/freelance.svg";

import 'react-vertical-timeline-component/style.min.css';
import './Timeline.scss';

const Timeline = ({ t }) => (
    <VerticalTimeline>
        <VerticalTimelineElement
            date="2015 — 2018"
            iconStyle={{ background: '#202020', color: '#fff' }}
            contentArrowStyle={{ borderRight: '15px solid rgb(71 217 154)', marginLeft: '2px' }}
            contentStyle={{ background: '#202020', color: '#fff', border: '2px solid #48da9b' }}
        >
            <p>{t("experience2015p1")}</p>
            <p>{t("experience2015p2")}</p>
            <p>{t("experience2015p3")}</p>
            <p>{t("experience2015p4")}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            icon=''
            date="2015 — 2018"
            dateClassName='timeline__data'
            iconStyle={{ background: '#202020', color: '#fff' }}
            contentArrowStyle={{ borderRight: '15px solid rgb(71 217 154)', marginLeft: '2px' }}
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
)

export default Timeline;
