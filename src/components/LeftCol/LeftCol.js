import React from 'react';
import { useTranslation } from 'react-i18next';

import Github_icon from '../../assets/icon/github.svg';
import Linkedin_icon from '../../assets/icon/linkedin.svg'
import Telegram_icon from '../../assets/icon/telegram.svg';

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
                </span>
            </a>
            <div className="get_social_content">
                <h2>{t('social')}</h2>
                <ul className="social_icons horizontal_list">
                    <li>
                        <a className="telegram" target='_blank' rel='noopener noreferrer' href="tg://resolve?domain=cqxxxg">
                            <img alt='telegram' src={Telegram_icon} />
                            <span className="invisible">Telegram</span>
                        </a>
                    </li>
                    <li>
                        <a className="github" target='_blank' rel='noopener noreferrer' href="https://github.com/cqxg">
                            <img alt='github' src={Github_icon} />
                            <span className="invisible">GitHub</span>
                        </a>
                    </li>
                    <li>
                        <a className="linkedin" target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/ihar-ivaniuk/">
                            <img alt='linkedin' src={Linkedin_icon} />
                            <span className="invisible">LinkedIn</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default LeftCol;
