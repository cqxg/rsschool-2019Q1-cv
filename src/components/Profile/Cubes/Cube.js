import React from "react";

const Cube = ({ item: { currentNumber, topSideImg, frontSideImg, rightSideImg, backSideImg, leftSideImg, bottomSideImg } }) => (
  <div className="stage">
    <div className={`cubespinner cube${currentNumber}`}>
      <div className="top side"><img alt={topSideImg} src={topSideImg} /></div>
      <div className="front side"><img alt={frontSideImg} src={frontSideImg} /></div>
      <div className="right side"> <img alt={rightSideImg} src={rightSideImg} /> </div>
      <div className="back side"><img alt={backSideImg} src={backSideImg} /></div>
      <div className="left side"><img alt={leftSideImg} src={leftSideImg} /></div>
      <div className="bottom side"><img alt={bottomSideImg} src={bottomSideImg} /></div>
    </div>
  </div>
);

export default Cube;