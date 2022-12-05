import styled from "@emotion/styled";
import LogoPart from "../../../../public/images/logo/logo_only_img_part.png";
import Image from "next/image";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";

const TitleTextSection = styled.section`
  background-color: ${(props) => props.theme.color.black};
  min-height: 1200px;
  padding-top: 397px;
  position: relative;
  .inner {
    width: 1060px;
    height: 100%;
    margin: 0 auto;
    .text {
      white-space: pre-line;
      color: ${(props) => props.theme.color.gray_F3};
      font-weight: 700;
      line-height: 137.87px;
      font-size: 85px;
      text-align: end;
    }
  }
  .logoImg {
  }
`;

const TitleText = () => {
  return (
    <TitleTextSection>
      <div className="inner">
        <div className="text" {...useScrollFadeIn("left", 1, 0)}>
          디자이너가 살아가는 사회,{"\n"}
        </div>
        <div className="text" {...useScrollFadeIn("left", 1, 0.2)}>
          디자이너를 꿈꾸는 학생들의{"\n"}
        </div>
        <div className="text" {...useScrollFadeIn("left", 1, 0.4)}>
          빛나는 도약을 위해,{"\n"}
        </div>
        <div className="text" {...useScrollFadeIn("left", 1, 0.6)}>
          다양한 디자인 트랙 경험을{"\n"}
        </div>
        <div className="text" {...useScrollFadeIn("left", 1, 0.8)}>
          기반으로 역량을 향상시킬 수{"\n"}
        </div>
        <div className="text" {...useScrollFadeIn("left", 1, 1.0)}>
          있는 방향을 바라봅니다
        </div>
      </div>
      <div className="logoImg">
        <Image src={LogoPart} alt="로고" />
      </div>
    </TitleTextSection>
  );
};

export default TitleText;
