import React from 'react';

const Profile = () => (
    <div id="content_container">
        <div class="block">
            <h1>Summary of Qualifications</h1>
            <blockquote class="profile_quote">
                <p>Junior frontend-developer.</p>
                <p>
                    Eager to get working experience and to become a true professional in web development.
                    Confident knowledge of HTML, CSS, JavaScript, React, Redux, Git and some other technology
                    </p>
            </blockquote>
        </div>
        <div class="horizontal_line">
            <div class="line_left"></div>
            <div class="left_circle"></div>
            <div class="central_circle"></div>
            <div class="right_circle"></div>
            <div class="line_right"></div>
        </div>
        <div class="block">
            <h2>Technical Skills</h2>
            <div class="philosophy_content">
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
                <div class="clear"></div>
            </div>
        </div>
    </div>
);

export default Profile;
