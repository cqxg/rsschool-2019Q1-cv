import React from 'react';

import Navbar from './Navbar';

const Header = () => {
  const goPrint = () => {
    window.print();
  };

  return (
    <div>
      <div id="header">
        <div className="header_logotype_container">
          <h1 className="logotype_name">
Ihar
            <span className="purple"> Ivaniuk</span>
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
            <li onClick={() => goPrint()}>
              <a className="print" href="#">
                <span className="icon entypo-print" />
Print CV
              </a>
            </li>
          </ul>
          <div className="clear" />
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
