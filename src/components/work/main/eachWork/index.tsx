import styled from "@emotion/styled";

const EachWorkSection = styled.div`
  width: 100vw;
  .workBox {
    display: flex;
    flex-wrap: wrap;
    gap: 49px;
    width: 1022px;
    margin: 0 auto;
    .item {
      width: 308px;
      height: 411.4px;
      background-color: #303030;
      border-radius: 16px;
      cursor: pointer;
    }
  }
`;
const works = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const EachWork = () => {
  return (
    <EachWorkSection>
      <div className="workBox">
        {works.map((item) => (
          <div className="item" key={item}></div>
        ))}
      </div>
    </EachWorkSection>
  );
};

export default EachWork;
