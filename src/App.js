import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import LeftCol from './components/LeftCol/LeftCol';
import Education from './components/Main/Education';
import Profile from './components/Main/Profile';
import Projects from './components/Main/Projects';
import Footer from './components/Footer/Footer';

import './styles/styles.css';

const App = () => (
  <BrowserRouter>
    <div id="main_container">
      <Header />
      <LeftCol />
      <Route path="/profile" render={() => <Profile />} />
      <Route path="/education" render={() => <Education />} />
      <Route path="/projects" render={() => <Projects />} />
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
