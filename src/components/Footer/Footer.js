import React from "react";

import "./Footer.scss";

const Footer = ({ t }) => (
  <footer>
    <div className="clear" />
    <p>© {t("footer")}</p>
  </footer>
);

export default Footer;
