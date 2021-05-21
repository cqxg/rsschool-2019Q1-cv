import React, { useState, useEffect } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LeftCol from './components/LeftCol/LeftCol';
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';

import { images } from './utils/data';

const App = () => {
  const { t, i18n } = useTranslation();
  const [activeLocale, setActiveLocale] = useState('en');
  const changeLocale = (e) => setActiveLocale(e);

  useEffect(() => images.forEach((image) => new Image().src = image), []);

  return (
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
  )
};

export default App;
