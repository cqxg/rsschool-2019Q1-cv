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

const App = () => {
  const { t, i18n } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeLocale, setActiveLocale] = useState('en');
  const changeLocale = (e) => setActiveLocale(e);

  useEffect(() => {
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
