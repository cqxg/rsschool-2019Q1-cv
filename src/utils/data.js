import dark from '../assets/backgrounds/dark.png';
import photo from '../assets/photos/photo.jpg';

import rssjs from '../assets/screenshots/Education/rssjs.svg';
import reactcourse from '../assets/screenshots/Education/react.svg';
import become from '../assets/screenshots/Education/become.svg';
import rssnode from '../assets/screenshots/Education/rssnode.svg';
import improve from '../assets/screenshots/Education/improve.svg';
import univer from '../assets/screenshots/Education/univer.svg';
import preinter from '../assets/screenshots/Education/preinter.svg';

import plat from '../assets/screenshots/Projects/plat.svg';
import chat from '../assets/screenshots/Projects/chat.svg';
import vidodo from '../assets/screenshots/Projects/vidodo.svg';
import editor from '../assets/screenshots/Projects/editor.svg';
import arrays from '../assets/screenshots/Projects/arrays.svg';
import culture from '../assets/screenshots/Projects/culture.svg';

import freelance from '../assets/screenshots/Work/freelance.svg';
import intelico from '../assets/screenshots/Work/intelico.svg';
import economy from '../assets/screenshots/Work/economy.svg';
import rss from '../assets/screenshots/Work/rss.svg';

import css from '../assets/icons/css.svg';
import less from '../assets/icons/less.svg';
import html from '../assets/icons/html.svg';
import sass from '../assets/icons/sass.svg';

import js from '../assets/icons/js.svg';
import ts from '../assets/icons/ts.svg';
import lint from '../assets/icons/lint.svg';
import webpack from '../assets/icons/webpack.svg';

import mobx from '../assets/icons/mobx.svg';
import jest from '../assets/icons/jest.svg';
import redux from '../assets/icons/redux.svg';
import reacticon from '../assets/icons/react.svg';

import npm from '../assets/icons/npm.svg';
import yarn from '../assets/icons/yarn.svg';
import mongo from '../assets/icons/mongo.svg';
import nodejs from '../assets/icons/nodejs.svg';

import gh from '../assets/icons/gh.svg';
import git from '../assets/icons/git.svg';
import gitlab from '../assets/icons/gitlab.svg';
import bitbucket from '../assets/icons/bitbucket.svg';

import trello from '../assets/icons/trello.svg';
import heroku from '../assets/icons/heroku.svg';
import netlify from '../assets/icons/netlify.svg';
import atlassian from '../assets/icons/atlassian.svg';

import vs from '../assets/icons/vs.svg';
import figma from '../assets/icons/figma.svg';
import airbnb from '../assets/icons/airbnb.svg';
import webstorm from '../assets/icons/webstorm.svg';

import chrome from '../assets/icons/chrome.svg';
import safari from '../assets/icons/safari.svg';
import yandex from '../assets/icons/yandex.svg';
import mozilla from '../assets/icons/mozilla.svg';

export const images = [
    js,
    ts,
    vs,
    gh,
    git,
    npm,
    rss,
    css,
    plat,
    chat,
    dark,
    less,
    html,
    sass,
    lint,
    mobx,
    jest,
    yarn,
    photo,
    rssjs,
    redux,
    mongo,
    figma,
    gitlab,
    editor,
    arrays,
    vidodo,
    become,
    trello,
    heroku,
    univer,
    economy,
    mozilla,
    webpack,
    netlify,
    nodejs,
    chrome,
    airbnb,
    safari,
    yandex,
    rssnode,
    culture,
    improve,
    webstorm,
    intelico,
    preinter,
    freelance,
    reacticon,
    bitbucket,
    atlassian,
    reactcourse,
];

export const projectsData = [
    {
        title: 'Plat | Lead Distribution Platform (2020 - 2021)',
        deployLink: 'https://dot818.com/plat/',
        imgLink: plat,
        imgAlt: 'plat',
        description: 'platDesc',
        moreDescription: 'platMoreDesc',
        env: 'JavaScript, React, Redux, Bootstrap, SCSS etc.',
    },
    {
        title: 'Vidodo Guide (2020)',
        deployLink: 'https://cqxg-vidodo-guides.netlify.app/',
        imgLink: vidodo,
        imgAlt: 'vidodo',
        description: 'vidodoDesc',
        env: 'JavaScript, React, SCSS etc.',
    },
    {
        title: 'Animation Editor App (2019)',
        deployLink: 'https://cqxg.github.io/animation-app/dist/',
        imgLink: editor,
        imgAlt: 'animation editor',
        description: 'editorDesc',
        env: 'HTML, CSS, JavaScript, Webpack, Canvas API.',
    },
    {
        title: 'Websocket Chat (2019)',
        deployLink: 'https://cqxg-chat.netlify.com/',
        imgLink: chat,
        imgAlt: 'chat',
        description: 'chatDesc',
        env: 'JavaScript, Node.js, React, SCSS, WebSocket etc.',
    },
    {
        title: 'Culture Portal (2019)',
        deployLink: 'https://belarusian-directors.netlify.com/',
        imgLink: culture,
        imgAlt: 'culture portal',
        description: 'cultureDesc',
        env: 'JavaScript, GatsbyJS, HTML, CSS, Bootstrap.',
    },
    {
        title: 'Work with arrays (2019)',
        deployLink: 'https://cqxg.github.io/Work_with_arrays/',
        imgLink: arrays,
        imgAlt: 'work with arrays',
        description: 'arrDesc',
        env: 'HTML, CSS, JavaScript.',
    },
];

export const profileAnotherSkillsData = [
    {
        title: 'research',
        filledStars: 4,
        emptyStars: 1,
    },
    {
        title: 'modeling',
        filledStars: 3,
        emptyStars: 2,
    },
    {
        title: 'management',
        filledStars: 4,
        emptyStars: 1,
    },
    {
        title: 'communication',
        filledStars: 4,
        emptyStars: 1,
    },
    {
        title: 'processes',
        filledStars: 3,
        emptyStars: 2,
    },
];

export const profileTimelineData = [
    {
        title: '2014 — 2018',
        p1: 'experience2015p1',
        p2: 'experience2015p2',
        // link: 'http://bseu.by/english/',
        // img: univer,
        // bottomImg: true
    },
    {
        date: '2016 — 2018',
        p1: 'experience2015p3',
        p2: 'experience2015p4',
        // link: 'http://www.economy.gov.by/ru/',
        // img: economy,
    },
    {
        date: '2019 — 2020',
        title: '',
        p1: 'experience2019p1',
        link: 'https://en.wikipedia.org/wiki/Freelancer',
        img: freelance,
        bottomImg: true
    },
    {
        date: '2020 — 2021',
        title: 'INTELICO · Frontend developer',
        p1: 'experienceIntelico',
        link: 'https://intelico.pro/',
        img: intelico,
        bottomImg: true
    },
    {
        title: 'rightNow',
        p1: 'experienceRss',
        p2: 'ownExperience',
        link: 'https://rs.school/',
        img: rss,
        bottomImg: true
    },
];

export const firstLineCubesData = [
    {
        currentNumber: '0',
        topSideImg: '',
        frontSideImg: less,
        rightSideImg: sass,
        backSideImg: css,
        leftSideImg: html,
        bottomSideImg: '',
    },
    {
        currentNumber: '1',
        topSideImg: '',
        frontSideImg: lint,
        rightSideImg: webpack,
        backSideImg: ts,
        leftSideImg: js,
        bottomSideImg: '',
    },
    {
        currentNumber: '2',
        topSideImg: '',
        frontSideImg: mobx,
        rightSideImg: jest,
        backSideImg: redux,
        leftSideImg: reacticon,
        bottomSideImg: '',
    },
    {
        currentNumber: '3',
        topSideImg: yarn,
        frontSideImg: npm,
        rightSideImg: '',
        backSideImg: mongo,
        leftSideImg: '',
        bottomSideImg: nodejs,
    },
];

export const secondLineCubesData = [
    {
        currentNumber: '7',
        topSideImg: bitbucket,
        frontSideImg: gh,
        rightSideImg: '',
        backSideImg: gitlab,
        leftSideImg: '',
        bottomSideImg: git,
    },
    {
        currentNumber: '6',
        topSideImg: '',
        frontSideImg: atlassian,
        rightSideImg: trello,
        backSideImg: heroku,
        leftSideImg: netlify,
        bottomSideImg: '',
    },
    {
        currentNumber: '5',
        topSideImg: '',
        frontSideImg: vs,
        rightSideImg: webstorm,
        backSideImg: airbnb,
        leftSideImg: figma,
        bottomSideImg: '',
    },
    {
        currentNumber: '4',
        topSideImg: '',
        frontSideImg: safari,
        rightSideImg: chrome,
        backSideImg: mozilla,
        leftSideImg: yandex,
        bottomSideImg: '',
    },
]