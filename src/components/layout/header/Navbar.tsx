import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import LogoImage from "../../../../public/images/logo/logo.png";

const NavbarDiv = styled.nav`
  width: 983px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  .logo {
    display: flex;
    height: 100%;
    align-items: center;
  }
  .navAll {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
    .navList {
      display: flex;
      height: 100%;
      gap: 49px;
      align-items: center;
      .navItem {
        color: ${(props) => props.theme.color.white};
        font-size: 12px;
        font-weight: 700;
      }
    }
    .login {
      color: ${(props) => props.theme.color.black};
      background-color: ${(props) => props.theme.color.white};
      font-size: 12px;
      font-weight: 700;

      line-height: 22.94px;
      padding: 5px 17px;
      border-radius: 10px;
      cursor: pointer;
    }
  }
`;

const navbarItem = [
  { id: 1, name: "ABOUT", route: "/about" },
  { id: 2, name: "WORK", route: "#" },
  { id: 3, name: "MEMBERS", route: "#" },
  { id: 4, name: "OUTPUT", route: "#" },
  { id: 5, name: "APPLICATION", route: "/apply" },
];

const Navbar = () => {
  const toSign = () => {
    const random = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    window.location.replace(`/signin?${random}`);
  };
  return (
    <NavbarDiv>
      <div className="logo">
        <Link href="/">
          <Image src={LogoImage} width={98} height={39} alt="로고" />
        </Link>
      </div>
      <div className="navAll">
        <div className="navList">
          {navbarItem.map((item) => (
            <Link href={item.route} key={item.id}>
              <div className="navItem">{item.name}</div>
            </Link>
          ))}
          <div className="login" onClick={toSign}>
            로그인
          </div>
        </div>
      </div>
    </NavbarDiv>
  );
};

export default Navbar;
