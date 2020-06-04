import React from 'react';
import { useTranslation } from 'react-i18next';

import Download from '../../assets/icon/download.svg';
import Print from '../../assets/icon/print.svg';

import Navbar from './Navbar';

const Header = () => {
    const { t, i18n } = useTranslation();

    const goPrint = () => {
        window.print();
    };

    const activateRu = (e) => {
        const ru = document.querySelector('.ru');
        const en = document.querySelector('.en');

        if (e.currentTarget.classList.contains('ru')) {
            ru.classList.add("active");
            en.classList.remove("active");
        };

        i18n.changeLanguage('ru');
    };

    const activateEn = (e) => {
        const ru = document.querySelector('.ru');
        const en = document.querySelector('.en');

        if (e.currentTarget.classList.contains('en')) {
            en.classList.add("active");
            ru.classList.remove("active");
        };

        i18n.changeLanguage('en');
    };

    return (
        <div id="header">
            <div className="header_logotype_container">
                <h1 className="logotype_name">{t('name')}<span className="purple"> {t('surname')}</span></h1>
                <h2 className="logotype_occupation">{t('position')}</h2>
            </div>
            <div className="header_menu_container">
                <div className='locale'>
                    <div className='en active' onClick={(e) => activateEn(e)}>EN</div>
                    <div className='ru' onClick={(e) => activateRu(e)}>RU</div>
                </div>
                <ul className="download_print_buttons horizontal_list">
                    <li><a href="./assets/Ihar_Ivaniuk_CV.pdf" download><img className='download_print_icons' src={Download} />{t('dwnloadCV')}</a></li>
                    <li onClick={() => goPrint()}><a className="print" href="#"><img className="download_print_icons" src={Print} />{t('printCV')}</a></li>
                </ul>
                <div className="clear" />
                <Navbar />
            </div>
        </div>
    );
};

export default Header;