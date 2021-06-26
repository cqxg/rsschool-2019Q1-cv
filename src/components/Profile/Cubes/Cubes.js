import React, { useEffect } from "react";

import Cube from "./Cube";

import { firstLineCubesData } from "../../../utils/data";

import css from "../../../assets/icons/css.svg";
import less from "../../../assets/icons/less.svg";
import html from "../../../assets/icons/html.svg";
import sass from "../../../assets/icons/sass.svg";

import js from "../../../assets/icons/js.svg";
import ts from "../../../assets/icons/ts.svg";
import lint from "../../../assets/icons/lint.svg";
import webpack from "../../../assets/icons/webpack.svg";

import mobx from "../../../assets/icons/mobx.svg";
import jest from "../../../assets/icons/jest.svg";
import redux from "../../../assets/icons/redux.svg";
import react from "../../../assets/icons/react.svg";

import npm from "../../../assets/icons/npm.svg";
import yarn from "../../../assets/icons/yarn.svg";
import mongo from "../../../assets/icons/mongo.svg";
import nodejs from "../../../assets/icons/nodejs.svg";

import gh from "../../../assets/icons/gh.svg";
import git from "../../../assets/icons/git.svg";
import gitlab from "../../../assets/icons/gitlab.svg";
import bitbucket from "../../../assets/icons/bitbucket.svg";

import trello from "../../../assets/icons/trello.svg";
import heroku from "../../../assets/icons/heroku.svg";
import netlify from "../../../assets/icons/netlify.svg";
import atlassian from "../../../assets/icons/atlassian.svg";

import vs from "../../../assets/icons/vs.svg";
import figma from "../../../assets/icons/figma.svg";
import airbnb from "../../../assets/icons/airbnb.svg";
import webstorm from "../../../assets/icons/webstorm.svg";

import chrome from "../../../assets/icons/chrome.svg";
import safari from "../../../assets/icons/safari.svg";
import yandex from "../../../assets/icons/yandex.svg";
import mozilla from "../../../assets/icons/mozilla.svg";

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

  return (
    <>
      <div className="first-line">
        {renderFirstLine}
      </div>

      <div className="second-line">
        <div className="stage">
          <div className="cubespinner cube7">
            <div className="top side">
              <img alt="bitbucket" src={bitbucket} />
            </div>
            <div className="front side">
              <img alt="gh" src={gh} />
            </div>
            <div className="right side"></div>
            <div className="back side">
              <img alt="gitlab" src={gitlab} />
            </div>
            <div className="left side"></div>
            <div className="bottom side">
              <img alt="git" src={git} />
            </div>
          </div>
        </div>

        <div className="stage">
          <div className="cubespinner cube6">
            <div className="top side"></div>
            <div className="front side">
              <img alt="atlassian" src={atlassian} />
            </div>
            <div className="right side">
              <img alt="trello" src={trello} />
            </div>
            <div className="back side">
              <img alt="heroku" src={heroku} />
            </div>
            <div className="left side">
              <img alt="netlify" src={netlify} />
            </div>
            <div className="bottom side"></div>
          </div>
        </div>

        <div className="stage">
          <div className="cubespinner cube5">
            <div className="top side"></div>
            <div className="front side">
              <img alt="vs" src={vs} />
            </div>
            <div className="right side">
              <img alt="webstorm" src={webstorm} />
            </div>
            <div className="back side">
              <img alt="airbnb" src={airbnb} />
            </div>
            <div className="left side">
              <img alt="figma" src={figma} />
            </div>
            <div className="bottom side"></div>
          </div>
        </div>

        <div className="stage">
          <div className="cubespinner cube4">
            <div className="top side"></div>
            <div className="front side">
              <img alt="safari" src={safari} />
            </div>
            <div className="right side">
              <img alt="chrome" src={chrome} />
            </div>
            <div className="back side">
              <img alt="mozilla" src={mozilla} />
            </div>
            <div className="left side">
              <img alt="yandex" src={yandex} />
            </div>
            <div className="bottom side"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cubes;
