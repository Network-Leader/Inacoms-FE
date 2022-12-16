import styled from "@emotion/styled";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";

const welcomItem = [
  {
    id: 1,
    text: "아이디어 🧠 를 전략적으로 시각화 🎯 하는 방법을\n알고 싶은 학생",
    delay: 0,
  },
  {
    id: 2,
    text: "아직 디자인 프로그램 💻 을 다루는 것에 익숙하지\n않아 더 배우고 싶은 학생",
    delay: 0.2,
  },
  {
    id: 3,
    text: "하나의 분야보다는 여러 분야에서 작업물 💭 을\n내보고 싶은 학생",
    delay: 0.4,
  },
  {
    id: 4,
    text: "자신의 작품으로 전시 🧑‍🎨 를 하거나 다양한\n공모전 📂 에 참여해보고 싶은 학생",
    delay: 0.6,
  },
  {
    id: 5,
    text: "동기, 선배 모두와 교류/협업 🫂 을 많이 경험해보고\n싶은 학생",
    delay: 0.8,
  },
];

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
    .content {
      display: flex;
      flex-direction: column;
      gap: 30px;
      .item {
        background-color: ${(props) => props.theme.color.white_opacity};
        border-radius: 10px;
        color: ${(props) => props.theme.color.white};
        padding: 26px 59px 28px 38px;
        font-size: 24px;
        font-weight: 500;
        line-height: 33.17px;
        white-space: pre-line;
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
        <div className="content">
          {welcomItem.map((item) => (
            <div
              className="item"
              key={item.id}
              {...useScrollFadeIn("left", 1, item.delay)}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </WelcomeSection>
  );
};

export default Welcome;
