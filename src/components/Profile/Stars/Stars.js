import React from "react";

import empty from "../../../assets/icons/emptystar.svg";
import filled from "../../../assets/icons/filledstar.svg";

import "./Stars.scss";

const Stars = ({ filledStars, emptyStars }) => {
  const filledStarsArr = [];
  const emptyStarsArr = [];

  for (let i = 0; i < filledStars; i++) {
    filledStarsArr.push(i);
  }
  for (let i = 0; i < emptyStars; i++) {
    emptyStarsArr.push(i);
  }

  const renderedFilledStars = filledStarsArr.map((item) => (
    <img src={filled} key={`filled star ${item}`} alt={`filled star ${item}`} />
  ));

  const renderedEmptyStars = emptyStarsArr.map((item) => (
    <img src={empty} key={`empty star ${item}`} alt={`empty star ${item}`} />
  ));

  return (
    <div className="stars-wrapper">
      {renderedFilledStars}
      {renderedEmptyStars}
    </div>
  );
};

export default Stars;
