import React from 'react';

import Header from './components/Header/Header';
import LeftCol from './components/LeftCol/LeftCol';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import './styles/styles.css';

const App = () => (
    <div id="main_container">
        <Header />
        <LeftCol />
        <Main />
        <Footer />
    </div>
);

export default App;
