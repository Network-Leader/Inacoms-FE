import styled from "@emotion/styled";
import useScrollFadeIn from "../../../../hooks/useScrollFadeIn";

const WelcomeListBox = styled.div`
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
`;

const WelcomeList = () => {
  return (
    <WelcomeListBox>
      <div className="item" {...useScrollFadeIn("left", 1, 0)}>
        아이디어 🧠 를 전략적으로 시각화 🎯 하는 방법을
        <br />
        알고 싶은 학생
      </div>
      <div className="item" {...useScrollFadeIn("left", 1, 0.2)}>
        아직 디자인 프로그램 💻 을 다루는 것에 익숙하지
        <br />
        않아 더 배우고 싶은 학생
      </div>
      <div className="item" {...useScrollFadeIn("left", 1, 0.4)}>
        하나의 분야보다는 여러 분야에서 작업물 💭 을
        <br />
        내보고 싶은 학생
      </div>
      <div className="item" {...useScrollFadeIn("left", 1, 0.6)}>
        자신의 작품으로 전시 🧑‍🎨 를 하거나 다양한
        <br />
        공모전 📂 에 참여해보고 싶은 학생
      </div>
      <div className="item" {...useScrollFadeIn("left", 1, 0.8)}>
        동기, 선배 모두와 교류/협업 🫂 을 많이 경험해보고
        <br />
        싶은 학생
      </div>
    </WelcomeListBox>
  );
};

export default WelcomeList;
