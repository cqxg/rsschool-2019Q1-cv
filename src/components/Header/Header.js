import React from "react";

import printer from "../../assets/icons/print.svg";
import downloader from "../../assets/icons/download.svg";

import "./Header.scss";

const Header = ({ t, i18n, activeLocale, changeLocale }) => {
  const print = () => window.print();

  const setLanguage = (language) => {
    i18n.changeLanguage(language);
    changeLocale(language);
  };

  return (
    <header>
      <div className="title-container">
        <h1 className="title-container__name">
          {t("name")}
          <span className="title-container__surname"> {t("surname")}</span>
        </h1>
        <h2 className="title-container__position">{t("position")}</h2>
      </div>
      <div className="menu-container">
        <div className="menu-container__locale">
          <div
            className={activeLocale === "en" ? "active" : ""}
            onClick={() => setLanguage("en")}
          >
            EN
          </div>
          <div
            className={activeLocale === "ru" ? "active" : ""}
            onClick={() => setLanguage("ru")}
          >
            RU
          </div>
        </div>
        <div className="clear" />
      </div>
    </header>
  );
};

export default Header;
