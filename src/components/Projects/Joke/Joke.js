import React from "react";

import joke from "../../../assets/icons/joke.svg";

import "./Joke.scss";

const Joke = ({ t }) => (
  <div className="joke-wrapper">
    <img className="joke" src={joke} />
    <div className="joke-desc">
      <span>{t("joke")}</span>
    </div>
  </div>
);

export default Joke;
