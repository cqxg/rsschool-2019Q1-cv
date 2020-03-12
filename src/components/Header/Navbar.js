import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul className="header_menu horizontal_list">
      <li><NavLink to="/profile" class="no_border purple">Profile</NavLink></li>
      <li><NavLink to="/education" href="https://github.com/cqxg">Education</NavLink></li>
      <li><NavLink to="/projects" href="https://github.com/cqxg">Projects</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
