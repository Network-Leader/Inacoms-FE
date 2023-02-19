import styled from "@emotion/styled";

const EachWorkSection = styled.div<{ len: any }>`
  width: 100vw;
  /* .workBox {
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
  } */
  .workBox {
    display: grid;
    grid-template-columns: repeat(3, auto);
    max-width: 1022px;
    margin: 0 auto;
    column-gap: 51px;
    row-gap: 71.6px;
    .item {
      width: 308px;
      height: 411.4px;
      background-color: #303030;
      border-radius: 16px;
      cursor: pointer;
      transition: 0.4s;
      &:hover {
        width: 616px;
        transition: 0.4s;
      }
    }
  }
`;
const works = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const EachWork = () => {
  return (
    <EachWorkSection len={works.length}>
      <div className="workBox">
        {works.map((item) => (
          <div className="item" key={item}></div>
        ))}
      </div>
    </EachWorkSection>
  );
};

export default EachWork;
