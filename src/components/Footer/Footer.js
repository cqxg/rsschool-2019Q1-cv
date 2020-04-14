import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div>
            <div className="clear" />
            <div id="footer">
                <p className="footer_name">{t('footer')}</p>
            </div>
        </div>
    )
};

export default Footer;