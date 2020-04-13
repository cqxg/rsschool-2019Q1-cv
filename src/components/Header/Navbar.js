import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t } = useTranslation();

    return (
        <nav>
            <ul className="header_menu horizontal_list">
                <li><NavLink to="/profile" activeClassName='active'>{t('profile')}</NavLink></li>
                <li><NavLink to="/projects" activeClassName='active'>{t('projects')}</NavLink></li>
                <li><NavLink to="/education" activeClassName='active'>{t('education')}</NavLink></li>
            </ul>
        </nav>
    )
};

export default Navbar;
