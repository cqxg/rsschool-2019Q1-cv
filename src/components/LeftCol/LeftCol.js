import React from 'react';

const LeftCol = () => (
    <div id="left_col">
        <div className="profile_frame" />
        <div className="hello_content">
            <h2>Hello!</h2>
            <p>I'm passionate about technology and self-development, hardworker and a fast-learner.</p>
        </div>
        <div className="contact_details_content">
            <h2>Contact details</h2>
            <p className="purple">Phone:</p>
            <a style={{textDecoration:'none'}} href="tel: +375 29 327 4039" type="tel">+375 29 327 4039</a>
            <p className="purple">Email:</p>
            <a style={{textDecoration:'none'}} href="mailto: cqxg@yandex.ru">cqxg@yandex.ru</a>
            <p className="purple">Adress:</p>
            <p>Rokossovskogo, 60/1</p>
            <p>Minsk, Belarus</p>
            <p>220095</p>
        </div>
        <a href="mailto:cqxg@yandex.ru" className="send_message_button">
            <span className="cut1" />
            <span className="cut2" />
            <span className="content">
                Send me a message
        <span className="fontawesome-double-angle-right" />
            </span>
        </a>
        <div className="get_social_content">
            <h2>Get social</h2>
            <ul className="social_icons horizontal_list">
                <li>
                    <a className="github" href="https://github.com/cqxg">
                        <span className="entypo-github-circled" />
                        <span className="invisible">GitHub</span>
                    </a>
                </li>
                <li>
                    <a className="linkedin" href="https://www.linkedin.com/in/ihar-ivaniuk/">
                        <span className="entypo-linkedin-circled" />
                        <span className="invisible">LinkedIn</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
);

export default LeftCol;
