import styled from "@emotion/styled";
import LogoOnlyImg from "../../../../public/images/logo/logo_only_img_big.png";
import LogoOnlyText from "../../../../public/images/logo/logo_only_text.png";
import Image from "next/image";

const TitleSection = styled.section<{ uri: string }>`
  width: 100vw;
  height: 79vw;
  /* height: calc(100vh - 105px); */
  background-image: url(${(props) => props.uri});
  background-repeat: no-repeat;
  background-size: cover;
  .content {
    height: 100%;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    .titleText {
      white-space: pre-line;
      color: ${(props) => props.theme.color.white};
      font-weight: 700;
      font-size: 40px;
      line-height: 60.08px;
      text-align: center;
      margin: 151px 0 61px 0;
    }
    .inacoms {
      color: ${(props) => props.theme.color.white};
    }
  }
`;

const Title = () => {
  return (
    <TitleSection uri={"/images/bg/main_top_bg.png"}>
      <div className="content">
        <Image src={LogoOnlyImg} alt="로고" />
        <div className="titleText">
          상호적인 피드백 문화로{"\n"}디자인 경험을 완성하는 곳
        </div>
        <Image src={LogoOnlyText} alt="로고" />
      </div>
    </TitleSection>
  );
};

export default Title;
