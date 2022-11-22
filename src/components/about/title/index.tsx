import styled from "@emotion/styled";
import { useScrollY } from "../../../hooks/useScrollY";
const TitleSection = styled.section`
  position: fixed;
  background-color: ${(props) => props.theme.color.black};
  width: 100vw;
  height: 100vh;
  .logoFont {
    color: ${(props) => props.theme.color.white};
    font-size: 250px;
    font-weight: 500;
    line-height: 478px;
    text-align: center;
  }
`;

const Title = () => {
  const yloc = useScrollY();
  return (
    <TitleSection>
      <div className="logoFont">INACOMS</div>
    </TitleSection>
  );
};

export default Title;
