import React, { useEffect } from "react";

import a from "../../assets/icons/telegram.svg";

import "./Cubes.scss";

const Cubes = () => {
  useEffect(() => {
    let cubeN = 0;
    let cubeDeg = 90;
    let cube2Deg = -90;

    const rotateY = (a) => {
      a.style.transform = `rotateY(${cubeDeg}deg)`;
      setTimeout(nextCube, 1500);
    };
    const rotateX = (a) => {
      a.style.transform = `rotateX(${cube2Deg}deg)`;
      setTimeout(nextCube, 1500);
    };
    const rotateYm = (a) => {
      a.style.transform = `rotateY(${cube2Deg}deg)`;
      setTimeout(nextCube, 1500);
    };
    const rotateXm = (a) => {
      a.style.transform = `rotateX(${cubeDeg}deg)`;
      setTimeout(nextCube, 1500);
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

  return (
    <>
      <div className="first-line">
        <div className="stage">
          <div className="cubespinner cube0">
            <div className="top side"></div>
            <div className="front side">
              <img src={a} />
            </div>
            <div className="right side">
              <img src={a} />
            </div>
            <div className="back side">
              <img src={a} />
            </div>
            <div className="left side">
              <img src={a} />
            </div>
            <div className="bottom side"></div>
          </div>
        </div>

        <div className="stage">
          <div className="cubespinner cube1">
            <div className="top side"></div>
            <div className="front side">
              <img src={a} />
            </div>
            <div className="right side">
              <img src={a} />
            </div>
            <div className="back side">
              <img src={a} />
            </div>
            <div className="left side">
              <img src={a} />
            </div>
            <div className="bottom side"></div>
          </div>
        </div>

        <div className="stage">
          <div className="cubespinner cube2">
            <div className="top side"></div>
            <div className="front side">
              <img src={a} />
            </div>
            <div className="right side">
              <img src={a} />
            </div>
            <div className="back side">
              <img src={a} />
            </div>
            <div className="left side">
              <img src={a} />
            </div>
            <div className="bottom side"></div>
          </div>
        </div>

        <div className="stage">
          <div className="cubespinner cube3">
            <div className="top side">
              <img src={a} />
            </div>
            <div className="front side">
              <img src={a} />
            </div>
            <div className="right side"></div>
            <div className="back side">
              <img src={a} />
            </div>
            <div className="left side"></div>
            <div className="bottom side">
              <img src={a} />
            </div>
          </div>
        </div>
      </div>

      <div className="second-line">
        <div className="stage">
          <div className="cubespinner cube7">
            <div className="top side">
              <img src={a} />
            </div>
            <div className="front side">
              <img src={a} />
            </div>
            <div className="right side"></div>
            <div className="back side">
              <img src={a} />
            </div>
            <div className="left side"></div>
            <div className="bottom side">
              <img src={a} />
            </div>
          </div>
        </div>

        <div className="stage">
          <div className="cubespinner cube6">
            <div className="top side"></div>
            <div className="front side">
              <img src={a} />
            </div>
            <div className="right side">
              <img src={a} />
            </div>
            <div className="back side">
              <img src={a} />
            </div>
            <div className="left side">
              <img src={a} />
            </div>
            <div className="bottom side"></div>
          </div>
        </div>

        <div className="stage">
          <div className="cubespinner cube5">
            <div className="top side"></div>
            <div className="front side">
              <img src={a} />
            </div>
            <div className="right side">
              <img src={a} />
            </div>
            <div className="back side">
              <img src={a} />
            </div>
            <div className="left side">
              <img src={a} />
            </div>
            <div className="bottom side"></div>
          </div>
        </div>

        <div className="stage">
          <div className="cubespinner cube4">
            <div className="top side"></div>
            <div className="front side">
              <img src={a} />
            </div>
            <div className="right side">
              <img src={a} />
            </div>
            <div className="back side">
              <img src={a} />
            </div>
            <div className="left side">
              <img src={a} />
            </div>
            <div className="bottom side"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cubes;
