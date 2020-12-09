import React from "react";
import { Redirect } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header/Header";

const App = () => (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);

export default App;
