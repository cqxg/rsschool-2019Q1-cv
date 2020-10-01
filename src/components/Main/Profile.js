import React from 'react';
import { useTranslation } from 'react-i18next';

import Intelico from '../../assets/jobScreens/intelico.png';

const Profile = () => {
    const { t } = useTranslation();

    return (
        <div id="content_container">
            <div className="block">
                <h2>{t('summary')}</h2>
                <blockquote className="profile_quote">
                    <p>{t('summaryDesc')}</p>
                </blockquote>
            </div>

            <div className="horizontal_line">
                <div className="line_left" />
                <div className="left_circle" />
                <div className="central_circle" />
                <div className="right_circle" />
                <div className="line_right" />
            </div>

            <div className='block'>
                <h2>{t('skills')}</h2>
                <div className='skills_wrap'>
                    <p className='skill_wrap'>HTML</p>
                    <p className='skill_wrap'>CSS</p>
                    <p className='skill_wrap'>SCSS</p>
                    <p className='skill_wrap'>JavaScript</p>
                    <p className='skill_wrap'>Webpack</p>
                    <p className='skill_wrap'>React</p>
                    <p className='skill_wrap'>Redux</p>
                    <p className='skill_wrap'>Jest</p>
                    <p className='skill_wrap'>Enzyme</p>
                    <p className='skill_wrap'>Node.js</p>
                    <p className='skill_wrap'>Express</p>
                    <p className='skill_wrap'>WebSocket</p>
                    <p className='skill_wrap'>REST</p>
                    <p className='skill_wrap'>Scrum</p>
                    <p className='skill_wrap'>Agile</p>
                    <p className='skill_wrap'>Git</p>
                    <p className='skill_wrap'>Jira</p>
                    <p className='skill_wrap'>Confluence</p>
                    <p className='skill_wrap'>Code review</p>
                </div>
            </div>

            <div className="horizontal_line">
                <div className="line_left"></div>
                <div className="left_circle"></div>
                <div className="central_circle"></div>
                <div className="right_circle"></div>
                <div className="line_right"></div>
            </div>

            <div className="block">
                <h2>{t('job')}</h2>
                <p>{t('intelico')}</p>
                <a href="https://intelico.pro/" target='_blank' rel='noopener noreferrer'><img src={Intelico} alt="" /></a>
            </div>
        </div>
    )
};

export default Profile;