import styled from "@emotion/styled";

const WorkTitleSection = styled.section`
  background-image: url("/images/bg/work/work_top_bg.jpg");
  width: 100%;
  height: 32.8vw;
  background-position: center;
  background-size: cover;

  .blur {
    position: absolute;
    top: 83px;
    left: 0;
    width: 100%;
    height: 32.8vw;
    background-color: rgba(0, 0, 0, 0.5);
    mix-blend-mode: normal;
  }
  .textBox {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    .title {
      z-index: 333;
      font-size: 72px;
      font-weight: 700;
      color: ${(props) => props.theme.color.white};
    }
    .subtitle {
      z-index: 333;
      font-size: 24px;
      font-weight: 500;
      color: ${(props) => props.theme.color.white};
    }
  }
`;

const WorkTitle = () => {
  return (
    <WorkTitleSection>
      <div className="blur"></div>
      <div className="textBox">
        <div className="title">WORK</div>
        <div className="subtitle">이너컴스 학회원들의 활동 목록 모아보기</div>
      </div>
    </WorkTitleSection>
  );
};

export default WorkTitle;
