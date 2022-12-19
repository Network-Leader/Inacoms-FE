import styled from "@emotion/styled";
import Image from "next/image";
import DownArrow from "../../../../public/images/icons/apply/down_arrow.png";

const OutputTitleSection = styled.section`
  background-image: url("/images/bg/apply/apply_top_bg.png");
  background-color: black;
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  .textBox {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: -83px;
    .title {
      color: ${(props) => props.theme.color.white};
      font-size: 72px;
      font-weight: 700;
      line-height: 83.66px;
    }
    .des {
      color: ${(props) => props.theme.color.white};
      font-size: 24px;
      font-weight: 500;
      margin: 37px 0 74px 0;
    }
    .duration {
      color: ${(props) => props.theme.color.white};
      font-size: 60px;
      font-weight: 700;
      span {
        margin-right: 60px;
      }
    }
  }
  .arrow {
    width: 60px;
    height: 55px;
    left: 0;
    right: 0;
    margin: 0 auto;
    position: absolute;
    bottom: 70px;
  }
`;

const Title = () => {
  return (
    <OutputTitleSection>
      <div className="textBox">
        <p className="title">
          INACOMS
          <br />
          Our history
        </p>
        <p className="des">학회원들이 만들어낸 INACOMS만의 history</p>
      </div>
      <div className="arrow">
        <Image src={DownArrow} width={60} height={55} alt="arrow" />
      </div>
    </OutputTitleSection>
  );
};

export default Title;
