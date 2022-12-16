import styled from "@emotion/styled";

const ApplyTitleTextSection = styled.section`
  background-color: black;
  text-align: center;
  padding: 413px 0 422px 0;
  .textBox {
    .title {
      color: ${(props) => props.theme.color.white};
      font-size: 60px;
      line-height: 110.52px;
      font-weight: 700;
    }
    .subtitle {
      color: ${(props) => props.theme.color.white};
      font-size: 32px;
      font-weight: 700;
      line-height: 58.94px;
      margin-bottom: 49px;
    }
    .des {
      color: ${(props) => props.theme.color.gray_C3};
      font-size: 18px;
      font-weight: 500;
      line-height: 33.84px;
    }
  }
`;

const ApplyTitleText = () => {
  return (
    <ApplyTitleTextSection>
      <div className="textBox">
        <p className="title">INACOMS</p>
        <p className="subtitle">다 하는 시각디자인 전공학회</p>
        <p className="des">
          INACOMS는 1996년 최초로 만들어진 시각디자인 전공 학회입니다.
          <br />
          [편집 - 아이덴티티 - 영상 - 광고 - UX.UI - 일러스트]로 구성된
          시각디자인 프로그램의 <br />
          6가지 트랙을 모두 경험하고 자신의 것으로 흡수할 수 있는 활동을
          진행합니다!
        </p>
      </div>
    </ApplyTitleTextSection>
  );
};

export default ApplyTitleText;
