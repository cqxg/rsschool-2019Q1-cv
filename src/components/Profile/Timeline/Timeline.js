import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import { profileTimelineData } from "../../../utils/data";

import 'react-vertical-timeline-component/style.min.css';
import './Timeline.scss';

const renderTimelineElements = (t) => profileTimelineData.map(({ date, title, p1, p2, link, img, bottomImg }) => {
    const linkRender = link &&
        <a target="_blank" rel="noreferrer" href={link}>
            {img && <img style={bottomImg && { marginTop: '10px' }} src={img} alt='' />}
        </a>

    return (
        <VerticalTimelineElement key={p1} className="vertical-timeline-element--work" date={date}>
            <h3 className="vertical-timeline-element-title">{t(title)}</h3>
            {!bottomImg && linkRender}
            <p>{t(p1)}</p>
            <p>{t(p2)}</p>
            {bottomImg && linkRender}
        </VerticalTimelineElement>
    )
});

const Timeline = ({ t }) => (
    <VerticalTimeline>
        {renderTimelineElements(t)}
    </VerticalTimeline>
)

export default Timeline;