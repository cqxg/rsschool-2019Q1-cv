import React, { Suspense } from 'react';
import { Redirect } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import LeftCol from './components/LeftCol/LeftCol';
import Education from './components/Main/Education';
import Profile from './components/Main/Profile';
import Projects from './components/Main/Projects';
import Footer from './components/Footer/Footer';

import './Styles/styles.css';

const App = () => (
    <Suspense fallback="loading">
        <BrowserRouter>
            <div id="main_container">
                <Header />
                <LeftCol />
                <Route path="/profile" render={() => <Profile />} />
                <Route path="/education" render={() => <Education />} />
                <Route path="/projects" render={() => <Projects />} />
                <Redirect to="/profile" />
                <Footer />
            </div>
        </BrowserRouter >
    </Suspense>
);

export default App;
