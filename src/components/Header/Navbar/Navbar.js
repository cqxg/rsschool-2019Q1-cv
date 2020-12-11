import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";

const Navbar = ({ t }) => (
  <nav>
    <div>
      <NavLink to="/profile" activeClassName="active">
        {t("profile")}
      </NavLink>
    </div>
    <div>
      <NavLink to="/projects" activeClassName="active">
        {t("projects")}
      </NavLink>
    </div>
    <div>
      <NavLink to="/education" activeClassName="active">
        {t("education")}
      </NavLink>
    </div>
  </nav>
);

export default Navbar;
