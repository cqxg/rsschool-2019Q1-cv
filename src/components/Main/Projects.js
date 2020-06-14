import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Chat from '../../assets/projectScreens/chat.gif';
import Editor from '../../assets/projectScreens/editor.gif';
import Culture from '../../assets/projectScreens/culture.gif';
import ArrOfArr from '../../assets/projectScreens/arr.gif';
import Joke from '../../assets/projectScreens/joke.png';

const Projects = () => {
    const { t } = useTranslation();

    const [state, setState] = useState(false);

    const renderJoke1 = (
        <div className='joke__wrapper'>
            <div className='joke'></div>
            <div className='joke__desc'>
                <span>
                    {t('joke')}
                </span>
            </div>
        </div>);

    setTimeout(() => {
        setState(true)
    }, 5000)


    return (
        <div id="content_container">
            {state ? renderJoke1 : null}
            <div className="last block">
                <div className="input__content">
                    <input className="cbox" type="checkbox" />
                    <p className="back_highlight">
                        {t('notyEnc')}
                        <a className="education_link" target='_blank' rel='noopener noreferrer' href="https://github.com/cqxg"> Github</a> !
                        <br />
                        {t('notyDesc')}
                    </p>
                </div>

                <h2>{t('projects')}</h2>

                <h4 className="highlight">cqxg-chat (2020)</h4>
                <p>{t('repo')}<a className="project_link" target='_blank' rel='noopener noreferrer' href="https://github.com/cqxg/cqxg_chat">github.com/cqxg/cqxg_chat</a></p>
                <a href="https://cqxg-chat.netlify.com/" target='_blank' rel='noopener noreferrer'><img src={Chat} alt="chat" /></a>
                <p>{t('chatDesc')}</p>

                <p className="highlight ml5">{t('deployment')}</p>

                <div className="env_wrap">
                    <p className="highlight">{t('env')}</p>
                    <p>JavaScript, ReactJS, SCSS, Websocket.</p>
                </div>

                <div className="horizontal_line">
                    <div className="line_left" />
                </div>

                <h4 className="highlight">Animation Editor App (2019)</h4>
                <p>{t('repo')}<a className="project_link" target='_blank' rel='noopener noreferrer' href="https://github.com/cqxg/animation-app">github.com/cqxg/animation-app</a></p>
                <a href="https://cqxg.github.io/animation-app/dist/" target='_blank' rel='noopener noreferrer'><img src={Editor} alt="editor" /></a>
                <p>{t('editorDesc')}</p>
                <p className="highlight">{t('deployment')}</p>

                <div className="env_wrap">
                    <p className="highlight">{t('env')}</p>
                    <p>HTML, CSS, JavaScript, Webpack, Canvas API.</p>
                </div>

                <div className="horizontal_line">
                    <div className="line_left" />
                </div>

                <h4 className="highlight">Culture Portal (2019)</h4>
                <p>{t('repo')} <a className="project_link" target='_blank' rel='noopener noreferrer' href="https://github.com/cqxg/Culture-Portal">github.com/cqxg/Culture-Portal</a></p>
                <a href="https://belarusian-directors.netlify.com/" target='_blank' rel='noopener noreferrer'><img src={Culture} alt="culture" /></a>
                <p>{t('cultureDesc')}</p>

                <p className="highlight ml5">{t('deployment')}</p>

                <div className="env_wrap">
                    <p className="highlight">{t('env')}</p>
                    <p> JavaScript, GatsbyJS, HTML, CSS, Bootstrap.</p>
                </div>

                <div className="horizontal_line">
                    <div className="line_left" />
                </div>

                <h4 className="highlight">Work with arrays (2019)</h4>
                <p>{t('repo')} <a className="project_link" target='_blank' rel='noopener noreferrer' href="https://github.com/cqxg/Work_with_arrays">github.com/cqxg/Work_with_arrays</a></p>
                <a href="https://cqxg.github.io/Work_with_arrays/" target='_blank' rel='noopener noreferrer'><img src={ArrOfArr} alt="arrays" /></a>
                <p>{t('arrDesc')}</p>

                <p className="highlight ml5">{t('deployment')}</p>

                <div className="env_wrap">
                    <p className="highlight">{t('env')}</p>
                    <p>HTML, CSS, JavaScript, Webpack, Youtube API.</p>
                </div>
            </div>
        </div >
    )
};

export default Projects;
