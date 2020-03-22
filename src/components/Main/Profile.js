import React from 'react';
import Intelico from '../../assets/IntelicoEng.png';

const Profile = () => (
    <div id="content_container">
        <div className="block">
            <h1>Summary of Qualifications</h1>
            <blockquote className="profile_quote">
                <p>
                    Results- oriented, meticulous and innovative Web Developer with 1
                    years experience building various types of web application using
                    HTML, CSS, JavaScript, React, Redux and other technology.
                </p>
            </blockquote>
        </div>

        <div className="horizontal_line">
            <div className="line_left" />
            <div className="left_circle" />
            <div className="central_circle" />
            <div className="right_circle" />
            <div className="line_right" />
        </div>

        <div className="block">
            <h2>Technical Skills</h2>
            <div className="philosophy_content">
                <p>Programming languages and technologies:</p>
                <ul>
                    <li>JavaScript, HTML, CSS</li>
                </ul>

                <p>Frameworks and Libraries:</p>
                <ul>
                    <li>React, Redux, etc.</li>
                </ul>

                <p>Other skills:</p>
                <ul>
                    <li>GIT, Webpack, etc.</li>
                </ul>

                <p>Tools:</p>
                <ul>
                    <li>VS Code, Figma, PS, etc.</li>
                </ul>

                <p>Programming practices:</p>
                <ul>
                    <li>Agile, Kanban, Code review</li>
                </ul>
                <div className="clear" />
            </div>
        </div>

        <div class="horizontal_line">
            <div class="line_left"></div>
            <div class="left_circle"></div>
            <div class="central_circle"></div>
            <div class="right_circle"></div>
            <div class="line_right"></div>
        </div>

        <div className="block">
            <h2>Job Experience</h2>
            <a href="https://intelico.pro/" target='_blank'><img src={Intelico} alt="" /></a>
        </div>
    </div>
);

export default Profile;
