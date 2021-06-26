import React, { useEffect } from "react";

import Cube from "./Cube";

import { firstLineCubesData, secondLineCubesData } from "../../../utils/data";

import "./Cubes.scss";

const Cubes = () => {
  useEffect(() => {
    let cubeN = 0;
    let cubeDeg = 90;
    let cube2Deg = -90;

    const rotateY = (a) => {
      a.style.transform = `rotateY(${cubeDeg}deg)`;
      setTimeout(nextCube, 1000);
    };

    const rotateX = (a) => {
      a.style.transform = `rotateX(${cube2Deg}deg)`;
      setTimeout(nextCube, 1000);
    };

    const rotateYm = (a) => {
      a.style.transform = `rotateY(${cube2Deg}deg)`;
      setTimeout(nextCube, 1000);
    };

    const rotateXm = (a) => {
      a.style.transform = `rotateX(${cubeDeg}deg)`;
      setTimeout(nextCube, 1000);
    };

    const nextCube = () => {
      let tCube = document.querySelector(`.cube${cubeN}`);

      if (tCube) {
        if (cubeN < 3) {
          rotateY(tCube);
        } else if (3 === cubeN) {
          rotateX(tCube);
        } else if (3 < cubeN && 7 > cubeN) {
          rotateYm(tCube);
        } else if (7 === cubeN) {
          rotateXm(tCube);
          cubeN = -1;
          cubeDeg += 90;
          cube2Deg -= 90;
        }
        cubeN++;
      }
    };

    document.querySelectorAll(".cubespinner").forEach((item) => {
      item.style.transition = "1.5s";
      item.style.perspective = "5000px";
      item.style.perspectiveOrigin = "50% 50%";
      item.style.transformStyle = "preserve-3d";
    });

    document.querySelectorAll(".side").forEach((item) => {
      item.style.display = "flex";
      item.style.alignItems = "center";
      item.style.justifyContent = "center";
      item.style.transformStyle = "preserve-3d";
    });
    nextCube();
  }, []);

  const renderFirstLine = firstLineCubesData.map((item) => <Cube item={item} />);
  const renderSecondLine = secondLineCubesData.map((item) => <Cube item={item} />);

  return (
    <>
      <div className="first-line">{renderFirstLine}</div>
      <div className="second-line">{renderSecondLine}</div>
    </>
  );
};

export default Cubes;
