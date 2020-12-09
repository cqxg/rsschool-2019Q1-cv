import React from "react";
import { useTranslation } from "react-i18next";

import Navbar from "../Navbar/Navbar";

import printer from "../../assets/icons/print.svg";
import downloader from "../../assets/icons/download.svg";

import "./Header.scss";

const Header = () => {
  const { t, i18n } = useTranslation();

  const print = () => window.print();

  return <header></header>;
};

export default Header;
