import styled from "@emotion/styled";
import { useScrollY } from "../../../hooks/useScrollY";

const TitleSection = styled.section<{ yloc: number }>`
  position: fixed;
  background-color: ${(props) => props.theme.color.black};
  opacity: ${(props) => (props.yloc > 4000 ? 0 : 1)};
  transition: 0.5s;
  width: 100vw;
  height: calc(100vh - 105px);
  display: flex;
  align-items: center;
  justify-content: center;
  .logoFont {
    color: ${(props) => props.theme.color.white};
    font-weight: 500;
    position: relative;
    .in {
      font-size: ${(props) => (props.yloc > 1000 ? "130px" : "250px")};
      transition: 0.6s;
      display: inline-block;
      background-color: ${(props) => props.theme.color.black};
    }
    .a {
      font-size: ${(props) => (props.yloc > 1000 ? "130px" : "250px")};
      transition: 0.6s;
      display: inline-block;
      margin-left: ${(props) => (props.yloc > 1800 ? "70px" : 0)};
      margin-right: ${(props) => (props.yloc > 1800 ? "20px" : 0)};
      background-color: ${(props) => props.theme.color.black};
    }
    .toz {
      font-size: 130px;
      transition: 0.6s;
      height: 130px;
      margin-right: ${(props) => (props.yloc > 1800 ? "100px" : 0)};
      width: ${(props) => (props.yloc > 1800 ? "220px" : 0)};
      text-overflow: clip;
      display: inline-block;
      background-color: ${(props) => props.theme.color.black};
      .z {
        margin-right: ${(props) => (props.yloc > 1800 ? "20px" : 0)};
        transition: 0.6s;
      }
    }
    .coms {
      background-color: ${(props) => props.theme.color.black};
      font-size: ${(props) => (props.yloc > 1000 ? "130px" : "250px")};
      transition: 0.6s;
      display: inline-block;
    }
  }
`;

const Title = () => {
  const yloc = useScrollY();
  return (
    <TitleSection yloc={yloc}>
      <div className="logoFont">
        <div className="in">IN</div>
        <div className="a">A</div>
        <div className="toz">
          to<span className="z"></span>Z
        </div>
        <div className="coms">COMS</div>
      </div>
    </TitleSection>
  );
};

export default Title;
