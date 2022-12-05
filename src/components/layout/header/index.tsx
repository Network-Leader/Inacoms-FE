import styled from "@emotion/styled";
import Navbar from "./Navbar";

const HeaderDiv = styled.header`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 83px;
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
