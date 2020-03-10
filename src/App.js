import React from 'react';

import Header from './components/Header/Header';
import LeftCol from './components/LeftCol/LeftCol';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import './Styles/styles.css';

const App = () => (
    <div className="app-wrapper">
        <Header />
        <LeftCol />
        <Main />
        <Footer />

    </div>
);

export default App;
