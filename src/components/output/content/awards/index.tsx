import styled from "@emotion/styled";

const AwardsBox = styled.div`
  width: 1033px;
  margin: 0 auto;
  .titleBox {
    text-align: center;
    margin-bottom: 100px;
    .title {
      font-size: 60px;
      font-weight: 700;
      line-height: 69.72px;
      margin-bottom: 15px;
      color: ${(props) => props.theme.color.white};
    }
    .subtitle {
      font-size: 24px;
      line-height: 44.21px;
      color: ${(props) => props.theme.color.white};
    }
  }
  .contentBox {
    border: 1px solid white;
    padding: 123px 80px;
    border-radius: 20px;
    height: 2012px;
  }
`;

const Awards = () => {
  return (
    <AwardsBox>
      <div className="titleBox">
        <p className="title">Awards</p>
        <p className="subtitle">INACOMS 학회원들의 수상내역</p>
      </div>
      <div className="contentBox"></div>
    </AwardsBox>
  );
};

export default Awards;
