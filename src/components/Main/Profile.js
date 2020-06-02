import React from 'react';
import { useTranslation } from 'react-i18next';

import Intelico from '../../assets/jobScreens/Intelico.png';

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

            <div className="block">
                <h2>{t('skills')}</h2>
                <div className="philosophy_content">
                    <p>{t('languages')}</p>
                    <ul>
                        <li>{t('languagesDesc')}</li>
                    </ul>

                    <p>{t('frameworks')}</p>
                    <ul>
                        <li>{t('frameworksDesc')}</li>
                    </ul>

                    <p>{t('other')}</p>
                    <ul>
                        <li>{t('otherDesc')}</li>
                    </ul>

                    <p>{t('tools')}</p>
                    <ul>
                        <li>{t('toolsDesc')}</li>
                    </ul>

                    <p>{t('practices')}</p>
                    <ul>
                        <li>{t('practicesDesc')}</li>
                    </ul>
                    <div className="clear" />
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
                <a href="https://intelico.pro/" target='_blank' rel='noopener noreferrer'><img src={Intelico} alt="" /></a>
            </div>
        </div>
    )
};

export default Profile;
