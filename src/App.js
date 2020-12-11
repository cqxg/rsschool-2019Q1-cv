import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import LeftCol from "./components/LeftCol/LeftCol";

const App = () => {
  const { t, i18n } = useTranslation();
  const [activeLocale, setActiveLocale] = useState("en");

  const changeLocale = (e) => setActiveLocale(e);
  return (
    <BrowserRouter>
      <Header
        t={t}
        i18n={i18n}
        changeLocale={changeLocale}
        activeLocale={activeLocale}
      />
      <LeftCol t={t} />
    </BrowserRouter>
  );
};

export default App;
