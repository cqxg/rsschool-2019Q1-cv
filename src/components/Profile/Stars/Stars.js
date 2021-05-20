import React from "react";

import { profileAnotherSkillsData } from "../../../utils/data";

import "./Stars.scss";

const Stars = ({ filledStars, emptyStars }) => {
  const renderedFilledStars = new Array(filledStars).join().split(',').map((item, index) => (
    <div className="stars" key={`filled star ${item + index}`}>
      <span onClick={e => e.target.classList.toggle("filled")} className="filled" />
    </div>
  ));

  const renderedEmptyStars = new Array(emptyStars).join().split(',').map((item, index) => (
    <div className="stars" key={`empty star ${item + index}`}>
      <span onClick={e => e.target.classList.toggle("filled")} />
    </div>
  ));

  return (
    <div className="stars-wrapper">
      {renderedFilledStars}
      {renderedEmptyStars}
    </div>
  );
};

const RenderStarsGroup = ({ t }) => profileAnotherSkillsData.map(({ title, filledStars, emptyStars }) => (
  <div className="profile-container__another" key={title}>
    <p>{t(title)}</p>
    <Stars filledStars={filledStars} emptyStars={emptyStars} />
  </div>
));

export default RenderStarsGroup;
