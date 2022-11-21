import styled from "@emotion/styled";
import Image from "next/image";
import LogoOnlyImg from "../../../../public/images/logo/logo_only_img.png";
import BeIcon from "../../../../public/images/icons/Be_icon.png";
import InstaIcon from "../../../../public/images/icons/Insta_icon.png";

const FooterDiv = styled.footer`
  height: 318px;
  background-color: black;
  .inner {
    width: 971px;
    height: 100%;
    margin: 0 auto;
    position: relative;
    .infoBox {
      position: absolute;
      left: 0;
      top: 144px;
      .text {
        color: ${(props) => props.theme.color.gray_8E};
        font-size: 12px;
        font-weight: 500;
        line-height: 22.94px;
        &:first-of-type {
          margin-top: 48px;
          margin-bottom: 11px;
        }
      }
    }
    .iconBox {
      position: absolute;
      right: 0;
      top: 147.25px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterDiv>
      <div className="inner">
        <div className="infoBox">
          <Image src={LogoOnlyImg} alt="로고" width={124} height={30} />
          <div className="text">
            서울특별시 노원구 하계동 공릉로 58마길 48 (다빈치관 6F 620호)
          </div>
          <div className="text">&copy; INACOMS. ALL RIGHTS RESERVED.</div>
        </div>
        <div className="iconBox">
          <Image
            style={{ marginRight: "15.25px", cursor: "pointer" }}
            src={BeIcon}
            alt="icon"
            width={23.75}
            height={23.75}
          />
          <Image
            style={{ cursor: "pointer" }}
            src={InstaIcon}
            alt="icon"
            width={22}
            height={22}
          />
        </div>
      </div>
    </FooterDiv>
  );
};

export default Footer;
