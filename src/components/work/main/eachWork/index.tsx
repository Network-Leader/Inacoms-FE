import styled from "@emotion/styled";
import works from "../../../../data/works.json";
import Image from "next/image";
import Link from "next/link";

const EachWorkSection = styled.div`
  width: 100vw;
  .workBox {
    display: flex;
    flex-wrap: wrap;
    gap: 49px;
    width: 1022px;
    margin: 0 auto;
    /* display: grid;
    grid-auto-flow: row;
    grid-template: repeat(3, 1fr); */
  }
`;

const EachBox = styled.div<{ thumb: string }>`
  position: relative;
  width: 308px;
  height: 411.4px;

  border-radius: 16px;
  padding: 28px 31px;
  background-image: url(${(props) => props.thumb});
  background-size: cover;
  background-position: center;
  cursor: pointer;
  overflow: hidden;
  .blur {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .title {
    color: ${(props) => props.theme.color.white};
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    position: absolute;
    left: 31px;
    top: 28px;
    width: 246px;
    z-index: 2;
  }
  .duration {
    z-index: 2;
    color: ${(props) => props.theme.color.white};
    font-size: 12px;
    font-weight: 700;
    position: absolute;
    bottom: 30.4px;
    left: 31px;
    line-height: 22.94px;
  }
  .type {
    z-index: 2;
    color: ${(props) => props.theme.color.white};
    background-color: ${(props) => props.theme.color.red};
    font-size: 12px;
    font-weight: 700;
    position: absolute;
    bottom: 32.4px;
    right: 31px;
    padding: 5px 7px;
    border-radius: 3px;
  }
`;

const EachWork = () => {
  return (
    <EachWorkSection>
      <div className="workBox">
        {works.map((item) => (
          <Link href={`/work/${item?.id}`}>
            <EachBox key={item?.id} thumb={item?.thumbnail}>
              <div className="blur"></div>
              <div className="title">{item?.title}</div>
              <div className="duration">
                {item?.start}
                <span style={{ marginLeft: "8px", marginRight: "8px" }}>
                  {item?.end ? "-" : null}
                </span>
                {item?.end}
              </div>
              <span className="type">{item?.type}</span>
            </EachBox>
          </Link>
        ))}
      </div>
    </EachWorkSection>
  );
};

export default EachWork;
