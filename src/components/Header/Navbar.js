import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul className="header_menu horizontal_list">
      <li><NavLink to="/profile" activeClassName='active'>Profile</NavLink></li>
      <li><NavLink to="/education" activeClassName='active' href="https://github.com/cqxg">Education</NavLink></li>
      <li><NavLink to="/projects" activeClassName='active' href="https://github.com/cqxg">Projects</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
