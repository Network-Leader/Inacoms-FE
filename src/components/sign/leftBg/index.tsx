import styled from "@emotion/styled";

const LeftBgSection = styled.section`
  width: 60.9vw;
  .one {
    width: 100%;
    height: calc(100vh - 83px);
    background-image: url("images/bg/sign_bg1.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-color: #171818;
    background-position: center;
  }
  .two {
    width: 100%;
    height: calc(100vh - 83px);
    background-image: url("images/bg/sign_bg2.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-color: #171818;
    background-position: center;
  }
  .three {
    width: 100%;
    height: calc(100vh - 83px);
    background-image: url("images/bg/sign_bg3.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-color: #171818;
    background-position: center;
  }
`;

const LeftBg = ({ random }: { random: string | undefined }) => {
  return (
    <LeftBgSection>
      <div
        className={random === "1" ? "one" : random === "2" ? "two" : "three"}
      ></div>
    </LeftBgSection>
  );
};

export default LeftBg;
