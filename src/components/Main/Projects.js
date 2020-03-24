import React from 'react';

const Projects = () => (
    <div id="content_container">
        <div className="last block">
            <div class="input__content">
                <input class="cbox" type="checkbox" />
                <p className="back_highlight">
                    ! You can find many more interesting examples of my own projects on my
                <a className="education_link" href="https://github.com/cqxg"> Github</a> !
                Please, in order to avoid misunderstandings, carefully read the descriptions and ask your questions
            </p>
            </div>

            <h2>Projects</h2>

            <h4 className="highlight">Project: cqxg-chat (2020)</h4>
            <p>Link:<a className="project_link" href="https://cqxg-chat.netlify.com/">cqxg-chat.netlify.com</a></p>
            <p>The project goal is to create chat UI for given websocket URL on ReactJS.</p>
            <div className="env_wrap">
                <p className="highlight">Environment:</p>
                <p>JavaScript, ReactJS, HTML, CSS, Websocket.</p>
            </div>

            <div className="horizontal_line">
                <div className="line_left" />
            </div>

            <h4 className="highlight">Project: Animation Editor App (2019)</h4>
            <p>Link:<a className="project_link" href="https://cqxg.github.io/animation-editor/">cqxg.github.io/animation-editor</a></p>
            <p>The goal of the project is to create an application that will include tools for drawing, animation
                then and creating .gif or .png images for download.</p>
            <div className="env_wrap">
                <p className="highlight">Environment:</p>
                <p>HTML, CSS, JavaScript, Webpack, Canvas API.</p>
            </div>

            <div className="horizontal_line">
                <div className="line_left" />
            </div>

            <h4 className="highlight">Project: Culture Portal (2019)</h4>
            <p>Link: <a className="project_link" href="https://belarusian-directors.netlify.com/">belarusian-directors.netlify.com</a></p>
            <p>A small cultural portal about Belarusian directors. Made in a team with my friends.</p>
            <div className="env_wrap">
                <p className="highlight">Environment:</p>
                <p> JavaScript, GatsbyJS, HTML, CSS, Bootstrap</p>
            </div>

            <div className="horizontal_line">
                <div className="line_left" />
            </div>

            <h4 className="highlight">Project: Youtube client (2019)</h4>
            <p>Link: <a className="project_link" href="https://cqxg.github.io/search/">cqxg.github.io/search</a></p>
            <p>The project goal is to create UI for searching videos on YouTube, using YouTube API.</p>
            <div className="env_wrap">
                <p className="highlight">Environment:</p>
                <p>HTML, CSS, JavaScript, Webpack, Youtube API.</p>
            </div>
        </div>
    </div>
);

export default Projects;
