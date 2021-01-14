import React, { useState, useEffect } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReactLoading from 'react-loading';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LeftCol from './components/LeftCol/LeftCol';
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';

import dark from './assets/backgrounds/dark.png';
import photo from './assets/photos/photo.jpg';

import rssjs from './assets/screenshots/Education/rssjs.svg';
import reactcourse from './assets/screenshots/Education/react.svg';
import become from './assets/screenshots/Education/become.svg';
import rssnode from './assets/screenshots/Education/rssnode.svg';
import improve from './assets/screenshots/Education/improve.svg';
import univer from './assets/screenshots/Education/university.svg';
import preinter from './assets/screenshots/Education/preinter.svg';

import plat from './assets/screenshots/Projects/plat.svg';
import chat from './assets/screenshots/Projects/chat.svg';
import editor from './assets/screenshots/Projects/editor.svg';
import arrays from './assets/screenshots/Projects/arrays.svg';
import culture from './assets/screenshots/Projects/culture.svg';

import freelance from './assets/screenshots/Work/freelance.svg';
import intelico from './assets/screenshots/Work/intelico.svg';
import rss from './assets/screenshots/Work/rss.svg';

import css from './assets/icons/css.svg';
import less from './assets/icons/less.svg';
import html from './assets/icons/html.svg';
import sass from './assets/icons/sass.svg';

import js from './assets/icons/js.svg';
import ts from './assets/icons/ts.svg';
import lint from './assets/icons/lint.svg';
import webpack from './assets/icons/webpack.svg';

import mobx from './assets/icons/mobx.svg';
import jest from './assets/icons/jest.svg';
import redux from './assets/icons/redux.svg';
import reacticon from './assets/icons/react.svg';

import npm from './assets/icons/npm.svg';
import yarn from './assets/icons/yarn.svg';
import mongo from './assets/icons/mongo.svg';
import nodejs from './assets/icons/nodejs.svg';

import gh from './assets/icons/gh.svg';
import git from './assets/icons/git.svg';
import gitlab from './assets/icons/gitlab.svg';
import bitbucket from './assets/icons/bitbucket.svg';

import trello from './assets/icons/trello.svg';
import heroku from './assets/icons/heroku.svg';
import netlify from './assets/icons/netlify.svg';
import atlassian from './assets/icons/atlassian.svg';

import vs from './assets/icons/vs.svg';
import figma from './assets/icons/figma.svg';
import airbnb from './assets/icons/airbnb.svg';
import webstorm from './assets/icons/webstorm.svg';

import chrome from './assets/icons/chrome.svg';
import safari from './assets/icons/safari.svg';
import yandex from './assets/icons/yandex.svg';
import mozilla from './assets/icons/mozilla.svg';

const App = () => {
  const images = [
    photo,
    rssjs,
    reactcourse,
    become,
    rssnode,
    improve,
    univer,
    preinter,
    plat,
    chat,
    editor,
    arrays,
    culture,
    freelance,
    intelico,
    rss,
    dark,
    css,
    less,
    html,
    sass,
    js,
    ts,
    lint,
    webpack,
    mobx,
    jest,
    redux,
    reacticon,
    npm,
    yarn,
    mongo,
    nodejs,
    gh,
    git,
    gitlab,
    bitbucket,
    trello,
    heroku,
    netlify,
    atlassian,
    vs,
    figma,
    airbnb,
    webstorm,
    chrome,
    safari,
    yandex,
    mozilla,
  ];

  const { t, i18n } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeLocale, setActiveLocale] = useState('en');
  const changeLocale = (e) => setActiveLocale(e);

  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });

    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);

  return !isLoaded ? (
    <ReactLoading
      className="loader"
      color={'#48da9b'}
      type={'spin'}
      height={150}
      width={175}
    />
  ) : (
    <BrowserRouter>
      <Header
        t={t}
        i18n={i18n}
        changeLocale={changeLocale}
        activeLocale={activeLocale}
      />
      <LeftCol t={t} />
      <Route path="/profile" render={() => <Profile t={t} />} />
      <Route path="/projects" render={() => <Projects t={t} />} />
      <Route path="/education" render={() => <Education t={t} />} />
      <Redirect to="/profile" />
      <Footer t={t} />
    </BrowserRouter>
  );
};

export default App;
