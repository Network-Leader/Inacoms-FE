import styled from "@emotion/styled";

const EachWorkSection = styled.div`
  width: 100vw;
  .delay {
    color: white;
    font-size: 36px;
    font-weight: 500;
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      background-color: ${(props) => props.theme.color.gray_5C};
      padding: 20px 60px;
      border-radius: 15px;
    }
  }
  .workBox {
    display: flex;
    flex-wrap: wrap;
    gap: 49px;
    width: 1022px;
    margin: 0 auto;
    .item {
      position: relative;
      width: 308px;
      height: 411.4px;
      padding: 32px 31px;
      background-color: #303030;
      border-radius: 16px;
      cursor: pointer;
      .title {
        color: ${(props) => props.theme.color.white};
        font-size: 24px;
        font-weight: 700;
      }
      .duration {
        color: ${(props) => props.theme.color.white};
        font-size: 12px;
        font-weight: 700;
      }
      .type {
        color: ${(props) => props.theme.color.white};
        background-color: ${(props) => props.theme.color.red};
        font-size: 12px;
        font-weight: 700;
      }
    }
  }
`;
const works = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const EachWork = () => {
  return (
    <EachWorkSection>
      {/* <div className="workBox">
        {works.map((item) => (
          <div className="item" key={item}>
            <div className="title">위니드레스 캠페인</div>
            <div className="duration">2022/5/1 - 2022/5/31</div>
            <span className="type">공모전</span>
          </div>
        ))}
      </div> */}
      <div className="delay">
        <span>Coming Soon 😎</span>
      </div>
    </EachWorkSection>
  );
};

export default EachWork;
