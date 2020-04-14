import React from 'react';

import Chat from '../../assets/projectScreens/chat.gif';
import Editor from '../../assets/projectScreens/editor.gif';
import Culture from '../../assets/projectScreens/culture.gif';
import ArrOfArr from '../../assets/projectScreens/arr.gif';

const Projects = () => (
    <div id="content_container">
        <div className="last block">
            <div className="input__content">
                <input className="cbox" type="checkbox" />
                <p className="back_highlight">
                    ! You can find many more interesting examples of my own projects on my
                <a className="education_link" target='_blank' href="https://github.com/cqxg"> Github</a> !
                Please, in order to avoid misunderstandings, carefully read the descriptions and ask your questions
            </p>
            </div>

            <h2>Projects</h2>

            <h4 className="highlight">cqxg-chat (2020)</h4>
            <p>Repository:<a className="project_link" target='_blank' href="https://github.com/cqxg/cqxg_chat">github.com/cqxg/cqxg_chat</a></p>
            <a href="https://cqxg-chat.netlify.com/" target='_blank'><img src={Chat} alt="chat" /></a>
            <p>The project goal is to create chat UI for given websocket URL on ReactJS.</p>
            <p className="highlight">(Click on the pic, to see deployment)</p>

            <div className="env_wrap">
                <p className="highlight">Environment:</p>
                <p>JavaScript, ReactJS, SCSS, Websocket.</p>
            </div>

            <div className="horizontal_line">
                <div className="line_left" />
            </div>

            <h4 className="highlight">Animation Editor App (2019)</h4>
            <p>Repository:<a className="project_link" target='_blank' href="https://github.com/cqxg/animation-app">github.com/cqxg/animation-app</a></p>
            <a href="https://cqxg.github.io/animation-app/dist/" target='_blank'><img src={Editor} alt="editor" /></a>
            <p>The goal of the project is to create an application that will include tools for drawing, animation
                then and creating .gif or .png images for download.</p>
            <p className="highlight">(Click on the pic, to see deployment)</p>

            <div className="env_wrap">
                <p className="highlight">Environment:</p>
                <p>HTML, CSS, JavaScript, Webpack, Canvas API.</p>
            </div>

            <div className="horizontal_line">
                <div className="line_left" />
            </div>

            <h4 className="highlight">Culture Portal (2019)</h4>
            <p>Repository: <a className="project_link" target='_blank' href="https://github.com/cqxg/Culture-Portal">github.com/cqxg/Culture-Portal</a></p>
            <a href="https://belarusian-directors.netlify.com/" target='_blank'><img src={Culture} alt="culture" /></a>
            <p>A small cultural portal about Belarusian directors.
            The goal of this project was to try collaboration for the first time using a version control system and all collaboration methods.
                Made in a team with my friends.</p>
            <p className="highlight">(Click on the pic, to see deployment)</p>
            <div className="env_wrap">
                <p className="highlight">Environment:</p>
                <p> JavaScript, GatsbyJS, HTML, CSS, Bootstrap</p>
            </div>

            <div className="horizontal_line">
                <div className="line_left" />
            </div>

            <h4 className="highlight">Work with arrays (2019)</h4>
            <p>Repository: <a className="project_link" target='_blank' href="https://github.com/cqxg/Work_with_arrays">github.com/cqxg/Work_with_arrays</a></p>
            <a href="https://cqxg.github.io/Work_with_arrays/" target='_blank'><img src={ArrOfArr} alt="arrays" /></a>
            <p>This is a small, but rather entertaining application, was once created as a test task.
            Its purpose is to show the ability to work with arrays, and not impress the appearance of the interface.
            In this application, I read information (abstractly, "pseudo-coordinates") from the input.txt file,
                parsing them according to certain rules, and accordingly fill the arrays. By displaying them on the screen, I get a picture.</p>
            <p className="highlight">(Click on the pic, to see deployment)</p>
            <div className="env_wrap">
                <p className="highlight">Environment:</p>
                <p>HTML, CSS, JavaScript, Webpack, Youtube API.</p>
            </div>
        </div>
    </div>
);

export default Projects;
