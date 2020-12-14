import React from "react";

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
    <div className="stars" key={`filled star ${item}`}>
      <span
        onClick={(e) => console.log(e.target.classList.toggle("filled"))}
        className="filled"
      />
    </div>
  ));

  const renderedEmptyStars = emptyStarsArr.map((item) => (
    <div className="stars" key={`empty star ${item}`}>
      <span onClick={(e) => console.log(e.target.classList.toggle("filled"))} />
    </div>
  ));

  return (
    <div className="stars-wrapper">
      {renderedFilledStars}
      {renderedEmptyStars}
    </div>
  );
};

export default Stars;
