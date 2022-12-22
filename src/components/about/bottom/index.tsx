import styled from "@emotion/styled";

const BottomSection = styled.section`
  width: 100vw;
  height: 69.4vw;
  background-image: url("/images/bg/about/about_bot_bg.png");
  background-size: cover;
  position: relative;
  .blur {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${(props) => props.theme.color.black_34};
    top: 0;
    left: 0;
    mix-blend-mode: multiply;
  }
  .textBox {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .circle {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.color.gray_D9};
      margin-bottom: 56px;
    }
    .title {
      font-size: 32px;
      font-weight: 600;
      text-align: center;
      color: ${(props) => props.theme.color.white};
      margin-bottom: 26px;
    }
    .subtitle {
      font-size: 24px;
      font-weight: 500;
      text-align: center;
      color: #727272;
    }
  }
`;

const Bottom = () => {
  return (
    <BottomSection>
      <div className="blur"></div>
      <div className="textBox">
        <div className="circle"></div>
        <div className="title">❤️ 놀기도 잘 노는 이너컴스 ❤️</div>
        <div className="subtitle">Instagram @inacoms</div>
      </div>
    </BottomSection>
  );
};

export default Bottom;
