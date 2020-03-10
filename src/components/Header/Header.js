import React from 'react';

const Header = () => (
  <div>
    <div id="header">
      <div className="header_logotype_container">
        <h1 className="logotype_name">
                    Ihar
          <span className="purple">Ivaniuk</span>
        </h1>
        <h2 className="logotype_occupation">Web Developer</h2>
      </div>
      <div className="header_menu_container">
        <ul className="download_print_buttons horizontal_list">
          <li>
            <a href="./assets/Ihar_Ivaniuk_CV.pdf" download>
              <span className="icon entypo-download" />
              Download CV
            </a>
          </li>
          <li>
            <a className="print" href="#">
              <span className="icon entypo-print" />
Print CV
            </a>
          </li>
        </ul>
        <div className="clear" />
        <ul className="header_menu horizontal_list">
          <li><a className="no_border purple" href="#">Profile</a></li>
          <li><a href="https://github.com/cqxg">Github</a></li>
        </ul>
      </div>
    </div>
  </div>
);

export default Header;
