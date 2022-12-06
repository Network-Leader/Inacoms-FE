import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useState } from "react";

const floatingLine = keyframes`
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(100vw);

  }
`;
const floatingLineReverse = keyframes`
     0% {
    transform: translateX(100vw);
  }
  100% {
    transform: translateX(0px);

  }
`;
const FloatingFilmSection = styled.section<{
  isIllus: boolean;
  isSlack: boolean;
  isFigma: boolean;
  isPhotoshop: boolean;
  isInDesign: boolean;
  isAfterEf: boolean;
  isCinema: boolean;
}>`
  width: 100vw;
  min-height: 500px;
  background-color: black;
  position: relative;
  .illus1 {
    top: 238px;
    left: 455px;
  }
  .illus2 {
    bottom: 0;
    left: 66px;
  }
  .illus3 {
    bottom: 0;
    right: 0;
  }
  .illus1,
  .illus2,
  .illus3 {
    position: absolute;
    display: none;
    display: ${(props) => props.isIllus && "block"};
  }
  .figma1 {
    position: absolute;
    bottom: 15px;
    left: 317px;
    display: none;
    display: ${(props) => props.isFigma && "block"};
  }
  .slack1 {
    position: absolute;
    top: 159px;
    left: 153px;
    display: none;
    display: ${(props) => props.isSlack && "block"};
  }
  .photoshop1 {
    top: 0;
    left: 556px;
  }
  .photoshop2 {
    left: 73px;
    bottom: 34px;
  }
  .photoshop3 {
    right: 29px;
    bottom: 1px;
  }
  .photoshop1,
  .photoshop2,
  .photoshop3 {
    position: absolute;
    display: none;
    display: ${(props) => props.isPhotoshop && "block"};
  }
  .indesign1 {
    top: 0;
    left: 0;
  }
  .indesign2 {
    top: 0;
    right: 87px;
  }
  .indesign3 {
    left: 382px;
    bottom: 88px;
  }
  .indesign1,
  .indesign2,
  .indesign3 {
    position: absolute;
    display: none;
    display: ${(props) => props.isInDesign && "block"};
  }
  .cinema1 {
    top: 145px;
    left: 198px;
  }
  .cinema2 {
    left: 523px;
    top: -14px;
  }
  .cinema1,
  .cinema2 {
    position: absolute;
    background-color: black;
    display: none;
    display: ${(props) => props.isCinema && "block"};
  }
  .after1 {
    top: 210px;
    right: 20px;
  }
  .after2 {
    top: 41px;
    left: 319px;
  }
  .after1,
  .after2 {
    position: absolute;
    display: none;
    display: ${(props) => props.isAfterEf && "block"};
  }
  .line {
    width: 100%;
    height: 210px;
    background-color: ${(props) => props.theme.color.black_14};
    margin-bottom: 15px;
    overflow: hidden;
    &:last-of-type {
      margin-bottom: 0px;
    }
    .item {
      width: 100%;
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      animation-name: ${floatingLine};
      animation-duration: 12s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      animation-direction: alternate-reverse;
      .one {
        left: 0;
      }
      .two {
        left: 669px;
      }
      .three {
        left: 1133px;
      }
    }
    .item3 {
      width: 100%;
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      animation-name: ${floatingLine};
      animation-duration: 14s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      animation-direction: alternate-reverse;
      .six {
        left: 0;
      }
      .seven {
        left: 939px;
        width: 614px;
      }
    }
    p {
      color: ${(props) => props.theme.color.black_34};
      font-size: 130px;
      font-family: "Apple SD Gothic Neo";
      display: inline-block;
      cursor: pointer;
      margin-right: 160px;
      position: absolute;
      transition: color 0.6s;
      &:hover {
        color: ${(props) => props.theme.color.gray_D4};
        transition: color 0.6s;
      }
    }
  }
  .lineReverse {
    width: 100%;
    height: 210px;

    background-color: ${(props) => props.theme.color.black_14};
    margin-bottom: 15px;
    overflow: hidden;
    .item {
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      animation-name: ${floatingLineReverse};
      animation-duration: 12s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      animation-direction: alternate-reverse;
      .four {
        left: 0;
      }
      .five {
        left: 789px;
      }
    }

    &:last-of-type {
      margin-bottom: 0px;
    }
    p {
      color: ${(props) => props.theme.color.black_34};
      font-size: 130px;
      display: inline-block;
      margin-right: 160px;
      cursor: pointer;
      position: absolute;
      transition: color 0.6s;
      &:hover {
        color: ${(props) => props.theme.color.gray_D4};
        transition: color 0.6s;
      }
    }
  }
`;

const FloatingFilm = () => {
  const [isIllus, setIsIllus] = useState(false);
  const [isSlack, setIsSlack] = useState(false);
  const [isFigma, setIsFigma] = useState(false);
  const [isPhotoshop, setIsPhotoshop] = useState(false);
  const [isInDesign, setIsInDesign] = useState(false);
  const [isAfterEf, setIsAfterEf] = useState(false);
  const [isCinema, setIsCinema] = useState(false);

  return (
    <FloatingFilmSection
      isIllus={isIllus}
      isSlack={isSlack}
      isFigma={isFigma}
      isPhotoshop={isPhotoshop}
      isInDesign={isInDesign}
      isAfterEf={isAfterEf}
      isCinema={isCinema}
    >
      <div className="illus1">
        <img src="/images/item/illus1.png" alt="img" />
      </div>
      <div className="illus2">
        <img src="/images/item/illus2.png" alt="img" />
      </div>
      <div className="illus3">
        <img src="/images/item/illus3.png" alt="img" />
      </div>
      <div className="figma1">
        <img src="/images/item/figma1.png" alt="img" />
      </div>
      <div className="slack1">
        <img src="/images/item/slack1.png" alt="img" />
      </div>
      <div className="cinema1">
        <img src="/images/item/cinema1.png" alt="img" />
      </div>
      <div className="cinema2">
        <img src="/images/item/cinema2.png" alt="img" />
      </div>
      <div className="after1">
        <img src="/images/item/after1.png" alt="img" />
      </div>
      <div className="after2">
        <img src="/images/item/after2.png" alt="img" />
      </div>
      <div className="photoshop1">
        <img src="/images/item/photoshop1.png" alt="img" />
      </div>
      <div className="photoshop2">
        <img src="/images/item/photoshop2.png" alt="img" />
      </div>
      <div className="photoshop3">
        <img src="/images/item/photoshop3.png" alt="img" />
      </div>
      <div className="indesign1">
        <img src="/images/item/indesign1.png" alt="img" />
      </div>
      <div className="indesign2">
        <img src="/images/item/indesign2.png" alt="img" />
      </div>
      <div className="indesign3">
        <img src="/images/item/indesign3.png" alt="img" />
      </div>
      <div className="line">
        <div className="item">
          <p
            className="one"
            onMouseOver={() => setIsIllus(true)}
            onMouseLeave={() => setIsIllus(false)}
          >
            Illustrator
          </p>
          <p
            className="two"
            onMouseOver={() => setIsSlack(true)}
            onMouseLeave={() => setIsSlack(false)}
          >
            Slack
          </p>
          <p
            className="three"
            onMouseOver={() => setIsFigma(true)}
            onMouseLeave={() => setIsFigma(false)}
          >
            Figma
          </p>
        </div>
      </div>
      <div className="lineReverse">
        <div className="item">
          <p
            className="four"
            onMouseOver={() => setIsPhotoshop(true)}
            onMouseLeave={() => setIsPhotoshop(false)}
          >
            Photoshop
          </p>
          <p
            className="five"
            onMouseOver={() => setIsInDesign(true)}
            onMouseLeave={() => setIsInDesign(false)}
          >
            Indesign
          </p>
        </div>
      </div>
      <div className="line">
        <div className="item3">
          <p
            className="six"
            onMouseOver={() => setIsAfterEf(true)}
            onMouseLeave={() => setIsAfterEf(false)}
          >
            After Effects
          </p>
          <p
            className="seven"
            onMouseOver={() => setIsCinema(true)}
            onMouseLeave={() => setIsCinema(false)}
          >
            Cinema 4D
          </p>
        </div>
      </div>
    </FloatingFilmSection>
  );
};

export default FloatingFilm;
