import styled from "@emotion/styled";
import Navbar from "./Navbar";

const HeaderDiv = styled.header`
  height: 105px;
  background-color: ${(props) => props.theme.color.black};
`;

const Header = () => {
  return (
    <HeaderDiv>
      <Navbar />
    </HeaderDiv>
  );
};

export default Header;
