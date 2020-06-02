import React from 'react';
import { useTranslation } from 'react-i18next';

import Certificate from '../../assets/educationScreens/Certificate.png';
import University from '../../assets/educationScreens/university.png';
import BecomeJS from '../../assets/educationScreens/become.png';
import ImproveJS from '../../assets/educationScreens/improve.png';
import ReactJS from '../../assets/educationScreens/react.png';

const Education = () => {
    const { t } = useTranslation();

    return (
        <div id="content_container">
            <div className="block">
                <h2>{t('education')}</h2>
                <a href="http://bseu.by/english/" target='_blank' rel='noopener noreferrer'><img src={University} alt="" /></a>
                <p>{t('university')}
                    <a className="education_link" target='_blank' rel='noopener noreferrer' href="http://bseu.by/english/">{' '}{t('uniLocate')}</a>
                , 2014-2018</p>
                <p>{t('special')}</p>

                <div className="horizontal_line">
                    <div className="line_left" />
                </div>

                <p>{t('rss')}<a className="education_link" target='_blank' rel='noopener noreferrer' href="https://school.rollingscopes.com/">
                    {t('rssLink')}</a>, 02.2019 – 08.2019</p>

                <p>{t('rssCertificate')}</p>
                <a href="https://app.rs.school/certificate/cc6pbvqf" rel='noopener noreferrer' target='_blank'><img src={Certificate} alt="" /></a>

                <div className="horizontal_line">
                    <div className="line_left" />
                </div>

                <p>{t('linkedInCertificate')}</p>

                <p>({t('linkedInMore')} <a className="education_link" rel='noopener noreferrer' target='_blank' href="https://www.linkedin.com/in/ihar-ivaniuk/">
                    {t('linkedInLink')}</a>)</p>

                <a href="https://drive.google.com/file/d/13MmwFFVtxIIvQy-A9OD5c8EKhPfcDZGN/view?usp=sharing" rel='noopener noreferrer' target='_blank'><img src={BecomeJS} alt="" /></a>
                <a href="https://drive.google.com/file/d/1ChhH52JEvcQEjZw73d_irAGU0vFsnTuY/view?usp=sharing" rel='noopener noreferrer' target='_blank'><img src={ImproveJS} alt="" /></a>
                <a href="https://drive.google.com/file/d/1PaXNX-NPl1UvjqyPz3m9EoixK--y0XUv/view?usp=sharing" rel='noopener noreferrer' target='_blank'><img src={ReactJS} alt="" /></a>
            </div>
        </div>
    )
};

export default Education;