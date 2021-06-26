import React from "react";

import joke from "../../../assets/icons/joke.svg";

import "./Joke.scss";

const Joke = ({ t, jokeWrapper }) => (
  <div className="joke-wrapper" ref={jokeWrapper}>
    <img className="joke" src={joke} alt='joke' />
    <div className="joke-desc">
      <span>{t("joke")}</span>
    </div>
  </div>
);

export default Joke;
