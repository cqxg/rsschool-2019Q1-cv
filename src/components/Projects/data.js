import plat from "../../assets/screenshots/Projects/plat.svg";
import chat from "../../assets/screenshots/Projects/chat.svg";
import editor from "../../assets/screenshots/Projects/editor.svg";
import arrays from "../../assets/screenshots/Projects/arrays.svg";
import culture from "../../assets/screenshots/Projects/culture.svg";
import vidodo from "../../assets/screenshots/Projects/vidodo.svg";

export const projectsData = [
    {
        title: 'Plat | Lead Distribution Platform (Feb 2020 - Present)',
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
];