import React from 'react';
import { useTranslation } from 'react-i18next';

const LeftCol = () => {
    const { t } = useTranslation();

    return (
        <div id="left_col">
            <div className="profile_frame" />
            <div className="hello_content">
                <h2>{t('hello')}</h2>
                <p>{t('greeting')}</p>
            </div>
            <div className="contact_details_content">
                <h2>{t('contact')}</h2>
                <p className="purple">{t('phone')}</p>
                <a style={{ textDecoration: 'none' }} href="tel: +375 29 327 4039" type="tel">+375 29 327 4039</a>
                <p className="purple">{t('mail')}</p>
                <a style={{ textDecoration: 'none' }} href="mailto: cqxg@yandex.ru">cqxg@yandex.ru</a>
                <p className="purple">{t('adress')}</p>
                <p>{t('street')}</p>
                <p>{t('place')}</p>
                <p>220095</p>
            </div>
            <a href="mailto:cqxg@yandex.ru" className="send_message_button">
                <span className="cut1" />
                <span className="cut2" />
                <span className="content">
                    {t('sendMeMess')}
                    <span className="fontawesome-double-angle-right" />
                </span>
            </a>
            <div className="get_social_content">
                <h2>{t('social')}</h2>
                <ul className="social_icons horizontal_list">
                    <li>
                        <a className="github" target='_blank' href="https://github.com/cqxg">
                            <span className="entypo-github-circled" />
                            <span className="invisible">GitHub</span>
                        </a>
                    </li>
                    <li>
                        <a className="linkedin" target='_blank' href="https://www.linkedin.com/in/ihar-ivaniuk/">
                            <span className="entypo-linkedin-circled" />
                            <span className="invisible">LinkedIn</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default LeftCol;
