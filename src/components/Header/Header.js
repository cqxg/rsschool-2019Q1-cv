import React from 'react';

const Header = () => (
    <div>
        <div id="header">
            <div class="header_logotype_container">
                <h1 class="logotype_name">Ihar <span class="purple">Ivaniuk</span></h1>
                <h2 class="logotype_occupation">Web Developer</h2>
            </div>
            <div class="header_menu_container">
                <ul class="download_print_buttons horizontal_list">
                    <li><a href="./assets/Ihar_Ivaniuk_CV.pdf" download><span
                        class="icon entypo-download"></span>Download CV</a></li>
                    <li><a class="print" href="#"><span class="icon entypo-print"></span>Print CV</a></li>
                </ul>
                <div class="clear"></div>
                <ul class="header_menu horizontal_list">
                    <li><a class="no_border purple" href="#">Profile</a></li>
                    <li><a href="https://github.com/cqxg">Github</a></li>
                </ul>
            </div>
        </div>
    </div>
);

export default Header;
