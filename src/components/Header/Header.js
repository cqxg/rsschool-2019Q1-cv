import React from 'react';
import { useTranslation, i18next } from 'react-i18next';

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
    };

    const activateEn = (e) => {
        const ru = document.querySelector('.ru');
        const en = document.querySelector('.en');
        
        if (e.currentTarget.classList.contains('en')) {
            en.classList.add("active");
            ru.classList.remove("active");
        };
    };

    return (
        <div id="header">
            <div className="header_logotype_container">
                <h1 className="logotype_name">{t('fullName.name')}<span className="purple"> {t('fullName.surname')}</span></h1>
                <h2 className="logotype_occupation">{t('currentPosition.position')}</h2>
            </div>
            <div className="header_menu_container">
                <div className='locale'>
                    <div className='en active' onClickCapture={() => i18n.changeLanguage('en')}
                        onClick={(e) => activateEn(e)}>EN</div>
                    <div className='ru' onClickCapture={() => i18n.changeLanguage('ru')}
                        onClick={(e) => activateRu(e)}>RU</div>
                </div>
                <ul className="download_print_buttons horizontal_list">
                    <li><a href="./assets/Ihar_Ivaniuk_CV.pdf" download><span className="icon entypo-download" />Download CV</a></li>
                    <li onClick={() => goPrint()}><a className="print" href="#"><span className="icon entypo-print" />Print CV</a></li>
                </ul>
                <div className="clear" />
                <Navbar />
            </div>
        </div >
    );
};

export default Header;
