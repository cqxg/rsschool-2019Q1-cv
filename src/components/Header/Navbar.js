import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul className="header_menu horizontal_list">
      <li><NavLink to="/profile" activeClassName='active'>Profile</NavLink></li>
      <li><NavLink to="/education" activeClassName='active'>Education</NavLink></li>
      <li><NavLink to="/projects" activeClassName='active'>Projects</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
