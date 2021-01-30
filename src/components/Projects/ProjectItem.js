import React from 'react';

const ProjectItem = ({ t, item: { title, deployLink, imgLink, imgAlt, description, moreDescription, env } }) => <>
    <h4>{title}</h4>
    <a href={deployLink} target="_blank" rel="noreferrer">
        <img src={imgLink} alt={imgAlt} title={t("deployment")} />
    </a>
    <p>{t(description)}</p>
    <p>{t(moreDescription)}</p>
    <div>
        <p>{t("env")}</p>
        <p>{env}</p>
    </div>
</>

export default ProjectItem;