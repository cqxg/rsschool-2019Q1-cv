import React from 'react';
import { useTranslation } from 'react-i18next';

import University from '../../assets/educationScreens/university.png';
import ImproveJS from '../../assets/educationScreens/improve.png';
import RssNodeJS from '../../assets/educationScreens/rssnode.png';
import English  from '../../assets/educationScreens/english.png';
import BecomeJS from '../../assets/educationScreens/become.png';
import RssJsFe from '../../assets/educationScreens/rssfe.png'
import ReactJS from '../../assets/educationScreens/react.png';

const Education = () => {
    const { t } = useTranslation();

    return (
        <div id="content_container">
            <div className="block">
                <h2>{t('education')}</h2>
                <a href="http://bseu.by/english/" target='_blank' rel='noopener noreferrer'><img className='border' src={University} alt="" /></a>
                <p>{t('university')}
                    <a className="education_link" target='_blank' rel='noopener noreferrer' href="http://bseu.by/english/">{' '}{t('uniLocate')}</a>
                , 2014-2018</p>
                <p>{t('special')}</p>

                <div className="horizontal_line">
                    <div className="line_left" />
                </div>

                <p>{t('rssFE')}<a className="education_link" target='_blank' rel='noopener noreferrer' href="https://school.rollingscopes.com/">
                    {t('rssLink')}</a>, 02.2019 – 08.2019</p>

                <p>{t('rssCertificate')}</p>
                <a href="https://app.rs.school/certificate/cc6pbvqf" rel='noopener noreferrer' target='_blank'><img className='border' src={RssJsFe} alt="RSS JS/FE" /></a>

                <p>{t('rssNode')}<a className="education_link" target='_blank' rel='noopener noreferrer' href="https://school.rollingscopes.com/">
                    {t('rssLink')}</a>, 09.2020 – 11.2020</p>

                <p>{t('rssCertificate')}</p>
                <a href="https://app.rs.school/certificate/9gqtiad8" rel='noopener noreferrer' target='_blank'><img className='border' src={RssNodeJS} alt="RSS NodeJS" /></a>

                <div className="horizontal_line">
                    <div className="line_left" />
                </div>

                <p>{t('languageLevelCertificate')}</p>
                <a href="https://drive.google.com/file/d/1rUjNZc8Jxas-Be3kdV1z_gBOU5TYi6NZ/view?usp=sharing" rel='noopener noreferrer' target='_blank'><img className='border' src={English} alt="" /></a>

                <div className="horizontal_line">
                    <div className="line_left" />
                </div>

                <p>{t('linkedInCertificate')}</p>

                <p>({t('linkedInMore')} <a className="education_link" rel='noopener noreferrer' target='_blank' href="https://www.linkedin.com/in/ihar-ivaniuk/">
                    {t('linkedInLink')}</a>)</p>

                <a href="https://drive.google.com/file/d/13MmwFFVtxIIvQy-A9OD5c8EKhPfcDZGN/view?usp=sharing" rel='noopener noreferrer' target='_blank'><img className='border' src={BecomeJS} alt="" /></a>
                <a href="https://drive.google.com/file/d/1ChhH52JEvcQEjZw73d_irAGU0vFsnTuY/view?usp=sharing" rel='noopener noreferrer' target='_blank'><img className='border' src={ImproveJS} alt="" /></a>
                <a href="https://drive.google.com/file/d/1PaXNX-NPl1UvjqyPz3m9EoixK--y0XUv/view?usp=sharing" rel='noopener noreferrer' target='_blank'><img className='border' src={ReactJS} alt="" /></a>
            </div>
        </div>
    )
};

export default Education;