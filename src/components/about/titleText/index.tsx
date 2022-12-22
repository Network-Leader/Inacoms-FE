import styled from "@emotion/styled";

const TitleTextSection = styled.section`
  background-color: black;
  padding: 400px 0;
  .textBox {
    text-align: center;
    .title {
      font-size: 60px;
      font-weight: 700;
      color: ${(props) => props.theme.color.white};
      margin-bottom: 42px;
    }
    .subtitle {
      font-size: 32px;
      font-weight: 700;
      color: ${(props) => props.theme.color.white};
      margin-bottom: 64px;
    }
    .des {
      font-size: 18px;
      font-weight: 500;
      line-height: 33.84px;
      color: ${(props) => props.theme.color.gray_C3};
    }
  }
`;

const TitleText = () => {
  return (
    <TitleTextSection>
      <div className="textBox">
        <div className="title">INACOMS</div>
        <div className="subtitle">다 하는 시각디자인 전공학회</div>
        <div className="des">
          INACOMS는 1996년 최초로 만들어진 시각디자인 전공 학회입니다.
          <br />
          [편집 - 아이덴티티 - 영상 - 광고 - UX.UI - 일러스트]로 구성된
          시각디자인 프로그램의 <br />
          6가지 트랙을 모두 경험하고 자신의 것으로 흡수할 수 있는 활동을
          진행합니다!
        </div>
      </div>
    </TitleTextSection>
  );
};

export default TitleText;
