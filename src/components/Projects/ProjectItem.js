import React from 'react';

const ProjectItem = ({ t, item }) => <>
    <h4>{item.title}</h4>
    <a href={item.deployLink} target="_blank" rel="noreferrer">
        <img src={item.imgLink} alt={item.imgAlt} title={t("deployment")} />
    </a>
    <p>{t(item.description)}</p>
    <p>{t(item.moreDescription)}</p>
    <div>
        <p>{t("env")}</p>
        <p>{item.env}</p>
    </div>
</>

export default ProjectItem;