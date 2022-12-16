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
    bottom: 0;
    right: 0;
    width: 488px;
    height: 488px;
  }
  .illus2 {
    bottom: 0;
    left: 66px;
    width: 368px;
    height: 227px;
  }
  .illus3 {
    top: 238px;
    left: 455px;
    width: 246px;
    height: 350px;
  }
  .illus1,
  .illus2,
  .illus3 {
    position: absolute;
    display: none;
    display: ${(props) => props.isIllus && "block"};
    z-index: 2;
  }
  .slack1 {
    position: absolute;
    top: 159px;
    left: 153px;
    display: none;
    display: ${(props) => props.isSlack && "block"};
    z-index: 2;
    width: 683px;
    height: 426px;
  }
  .figma1 {
    position: absolute;
    bottom: 0;
    left: 328px;
    display: none;
    display: ${(props) => props.isFigma && "block"};
    z-index: 2;
    width: 784px;
    height: 490px;
  }
  .photoshop1 {
    top: 0;
    left: 556px;
    width: 383px;
    height: 239px;
  }
  .photoshop2 {
    left: 73px;
    bottom: 34px;
    width: 270px;
    height: 270px;
  }
  .photoshop3 {
    right: 29px;
    bottom: 1px;
    width: 294px;
    height: 416px;
  }
  .photoshop1,
  .photoshop2,
  .photoshop3 {
    position: absolute;
    display: none;
    display: ${(props) => props.isPhotoshop && "block"};
    z-index: 2;
  }
  .indesign1 {
    top: 0;
    left: 0;
    width: 503px;
    height: 355px;
  }
  .indesign2 {
    top: 0;
    right: 87px;
    width: 474px;
    height: 316px;
  }
  .indesign3 {
    left: 382px;
    bottom: 88px;
    width: 242px;
    height: 162px;
  }
  .indesign1,
  .indesign2,
  .indesign3 {
    position: absolute;
    display: none;
    display: ${(props) => props.isInDesign && "block"};
    z-index: 2;
  }
  .after1 {
    top: 181px;
    left: 0;
    width: 307px;
    height: 307px;
  }
  .after2 {
    top: 0px;
    left: 370px;
    width: 449px;
    height: 252px;
  }
  .after3 {
    right: 20px;
    bottom: 169px;
    width: 601px;
    height: 319px;
  }
  .after1,
  .after2,
  .after3 {
    position: absolute;
    display: none;
    display: ${(props) => props.isAfterEf && "block"};
    z-index: 2;
  }
  .cinema1 {
    bottom: 184px;
    left: 419px;
    width: 322px;
    height: 219px;
  }
  .cinema2 {
    right: 0px;
    top: 0px;
    width: 599px;
    height: 333px;
  }
  .cinema1,
  .cinema2 {
    position: absolute;
    background-color: black;
    display: none;
    display: ${(props) => props.isCinema && "block"};
    z-index: 2;
  }

  .line {
    width: 100%;
    height: 210px;
    background-color: ${(props) => props.theme.color.black_14};
    margin-bottom: 28px;
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
      animation-duration: 10s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      animation-direction: alternate-reverse;
      animation-direction: alternate-reverse;
      animation-play-state: ${(props) => props.isIllus && "paused"};
      animation-play-state: ${(props) => props.isSlack && "paused"};
      animation-play-state: ${(props) => props.isFigma && "paused"};
      animation-play-state: ${(props) => props.isPhotoshop && "paused"};
      animation-play-state: ${(props) => props.isInDesign && "paused"};
      animation-play-state: ${(props) => props.isAfterEf && "paused"};
      animation-play-state: ${(props) => props.isCinema && "paused"};
      .one {
        left: 0;
        color: ${(props) => props.theme.color.black_34};
        color: ${(props) =>
          props.isIllus
            ? props.theme.color.gray_D4
            : props.theme.color.black_34};
        transition: color 0.4s;
      }
      .two {
        left: 669px;
        color: ${(props) => props.theme.color.black_34};
        color: ${(props) =>
          props.isSlack
            ? props.theme.color.gray_D4
            : props.theme.color.black_34};
        transition: color 0.4s;
      }
      .three {
        left: 1133px;
        color: ${(props) => props.theme.color.black_34};
        color: ${(props) =>
          props.isFigma
            ? props.theme.color.gray_D4
            : props.theme.color.black_34};
        transition: color 0.4s;
      }
    }
    .item3 {
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
      animation-direction: alternate-reverse;
      animation-play-state: ${(props) => props.isIllus && "paused"};
      animation-play-state: ${(props) => props.isSlack && "paused"};
      animation-play-state: ${(props) => props.isFigma && "paused"};
      animation-play-state: ${(props) => props.isPhotoshop && "paused"};
      animation-play-state: ${(props) => props.isInDesign && "paused"};
      animation-play-state: ${(props) => props.isAfterEf && "paused"};
      animation-play-state: ${(props) => props.isCinema && "paused"};
      .six {
        left: 0;
        color: ${(props) => props.theme.color.black_34};
        color: ${(props) =>
          props.isAfterEf
            ? props.theme.color.gray_D4
            : props.theme.color.black_34};
        transition: color 0.4s;
      }
      .seven {
        left: 939px;
        width: 614px;
        color: ${(props) => props.theme.color.black_34};
        color: ${(props) =>
          props.isCinema
            ? props.theme.color.gray_D4
            : props.theme.color.black_34};
        transition: color 0.4s;
      }
    }
    p {
      font-size: 130px;
      font-family: "Apple SD Gothic Neo";
      display: inline-block;
      cursor: pointer;
      margin-right: 160px;
      position: absolute;
    }
  }
  .lineReverse {
    width: 100%;
    height: 210px;

    background-color: ${(props) => props.theme.color.black_14};
    margin-bottom: 40px;
    overflow: hidden;
    .item {
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      animation-name: ${floatingLineReverse};
      animation-duration: 10s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      animation-direction: alternate-reverse;
      animation-play-state: ${(props) => props.isIllus && "paused"};
      animation-play-state: ${(props) => props.isSlack && "paused"};
      animation-play-state: ${(props) => props.isFigma && "paused"};
      animation-play-state: ${(props) => props.isPhotoshop && "paused"};
      animation-play-state: ${(props) => props.isInDesign && "paused"};
      animation-play-state: ${(props) => props.isAfterEf && "paused"};
      animation-play-state: ${(props) => props.isCinema && "paused"};
      .four {
        left: 0;
        color: ${(props) => props.theme.color.black_34};
        color: ${(props) =>
          props.isPhotoshop
            ? props.theme.color.gray_D4
            : props.theme.color.black_34};
        transition: color 0.4s;
      }

      .five {
        left: 789px;
        color: ${(props) => props.theme.color.black_34};
        color: ${(props) =>
          props.isInDesign
            ? props.theme.color.gray_D4
            : props.theme.color.black_34};
        transition: color 0.4s;
      }
    }

    &:last-of-type {
      margin-bottom: 0px;
    }
    p {
      font-size: 130px;
      display: inline-block;
      margin-right: 160px;
      cursor: pointer;
      position: absolute;
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
      <img
        src="/images/item/main/illus1.png"
        alt="img"
        className="illus1"
        onMouseOver={() => setIsIllus(false)}
        onMouseLeave={() => setIsIllus(false)}
      />
      <img
        src="/images/item/main/illus2.jpg"
        alt="img"
        className="illus2"
        onMouseOver={() => setIsIllus(true)}
        onMouseLeave={() => setIsIllus(false)}
      />

      <img
        src="/images/item/main/illus3.jpg"
        alt="img"
        className="illus3"
        onMouseOver={() => setIsIllus(true)}
        onMouseLeave={() => setIsIllus(false)}
      />
      <img
        src="/images/item/main/slack1.png"
        alt="img"
        className="slack1"
        onMouseOver={() => setIsSlack(true)}
        onMouseLeave={() => setIsSlack(true)}
      />
      <img
        src="/images/item/main/figma1.png"
        alt="img"
        className="figma1"
        onMouseOver={() => setIsFigma(true)}
        onMouseLeave={() => setIsFigma(false)}
      />
      <img
        src="/images/item/main/photoshop1.png"
        alt="img"
        className="photoshop1"
        onMouseOver={() => setIsPhotoshop(true)}
        onMouseLeave={() => setIsPhotoshop(false)}
      />
      <img
        src="/images/item/main/photoshop2.jpg"
        alt="img"
        className="photoshop2"
        onMouseOver={() => setIsPhotoshop(true)}
        onMouseLeave={() => setIsPhotoshop(false)}
      />
      <img
        src="/images/item/main/photoshop3.png"
        alt="img"
        className="photoshop3"
        onMouseOver={() => setIsPhotoshop(true)}
        onMouseLeave={() => setIsPhotoshop(false)}
      />
      <img
        src="/images/item/main/indesign1.png"
        alt="img"
        className="indesign1"
        onMouseOver={() => setIsInDesign(true)}
        onMouseLeave={() => setIsInDesign(false)}
      />
      <img
        src="/images/item/main/indesign2.png"
        alt="img"
        className="indesign2"
        onMouseOver={() => setIsInDesign(true)}
        onMouseLeave={() => setIsInDesign(false)}
      />
      <img
        src="/images/item/main/indesign3.jpg"
        alt="img"
        className="indesign3"
        onMouseOver={() => setIsInDesign(true)}
        onMouseLeave={() => setIsInDesign(false)}
      />
      <img
        src="/images/item/main/cinema1.png"
        alt="img"
        className="cinema1"
        onMouseOver={() => setIsCinema(true)}
        onMouseLeave={() => setIsCinema(false)}
      />
      <img
        src="/images/item/main/cinema2.jpg"
        alt="img"
        className="cinema2"
        onMouseOver={() => setIsCinema(true)}
        onMouseLeave={() => setIsCinema(false)}
      />
      <video
        className="after1"
        onMouseOver={() => setIsAfterEf(true)}
        onMouseLeave={() => setIsAfterEf(false)}
        controls
        muted
        autoPlay
        loop
      >
        <source src="/videos/after1.mp4" type="video/mp4" />
      </video>
      <video
        className="after2"
        onMouseOver={() => setIsAfterEf(true)}
        onMouseLeave={() => setIsAfterEf(false)}
        controls
        muted
        autoPlay
        loop
      >
        <source src="/videos/after2.mp4" type="video/mp4" />
      </video>
      <video
        className="after3"
        onMouseOver={() => setIsAfterEf(true)}
        onMouseLeave={() => setIsAfterEf(false)}
        controls
        muted
        autoPlay
        loop
      >
        <source src="/videos/after3.mp4" type="video/mp4" />
      </video>
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
