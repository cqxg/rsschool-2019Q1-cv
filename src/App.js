import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import LeftCol from './components/LeftCol/LeftCol';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import './styles/styles.css';

const App = () => (
    <BrowserRouter>
        <div id="main_container">
            <Header />
            <LeftCol />
            <Main />
            <Footer />
        </div>
    </BrowserRouter>

);

export default App;
