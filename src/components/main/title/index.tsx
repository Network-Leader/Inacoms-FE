import styled from "@emotion/styled";
import LogoOnlyImg from "../../../../public/images/logo/logo_only_img_big.png";
import LogoOnlyText from "../../../../public/images/logo/logo_only_text.png";
import Image from "next/image";

const TitleSection = styled.section`
  width: 100vw;
  height: 56.25vw;
  background-repeat: no-repeat;
  /* margin-top: -83px; */
  position: relative;
  background-size: cover;
  .videoBox {
    .blur {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.6);
      z-index: 10;
    }
    .video {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  .content {
    height: calc(100% - 50px);
    justify-content: flex-end;
    display: flex;
    flex-direction: column;
    align-items: center;
    .titleText {
      z-index: 12;
      white-space: pre-line;
      color: ${(props) => props.theme.color.white};
      font-weight: 700;
      font-size: 40px;
      line-height: 60.08px;
      text-align: center;
      margin: 151px 0 61px 0;
    }
    .inacoms {
      z-index: 13;
      color: ${(props) => props.theme.color.white};
    }
  }
`;
// uri={"/images/bg/main_top_bg.png"}
const Title = () => {
  return (
    <TitleSection>
      <div className="videoBox">
        <div className="blur"></div>
        <video className="video" muted autoPlay loop>
          <source src="/videos/main.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="content">
        <Image src={LogoOnlyImg} alt="로고" className="inacoms" />
        <div className="titleText">
          상호적인 피드백 문화로{"\n"}디자인 경험을 완성하는 곳
        </div>
        <Image src={LogoOnlyText} alt="로고" className="inacoms" />
      </div>
    </TitleSection>
  );
};

export default Title;
