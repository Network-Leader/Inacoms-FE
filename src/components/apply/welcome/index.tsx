import styled from "@emotion/styled";
import WelcomeList from "./welcomeList";

const WelcomeSection = styled.section`
  background-color: black;
  padding-bottom: 415px;
  .welcomeBox {
    width: 1056px;
    margin: 0 auto;
    display: flex;
    gap: 185px;
    .text {
      .title {
        color: ${(props) => props.theme.color.white};
        font-size: 60px;
        font-weight: 700;
        line-height: 82.92px;
        margin-bottom: 43px;
      }
      .subtitle {
        color: ${(props) => props.theme.color.gray_C3};
        font-size: 24px;
        line-height: 38.93px;
      }
    }
  }
`;

const Welcome = () => {
  return (
    <WelcomeSection>
      <div className="welcomeBox">
        <div className="text">
          <p className="title">
            INACOMS
            <br />
            신규모집
          </p>
          <p className="subtitle">
            INACOMS는 이런 분들을
            <br /> 환영해요!
          </p>
        </div>
        <WelcomeList />
      </div>
    </WelcomeSection>
  );
};

export default Welcome;
