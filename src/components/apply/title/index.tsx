import styled from "@emotion/styled";
import Image from "next/image";
import DownArrow from "../../../../public/images/icons/apply/down_arrow.png";
const ApplyTitleSection = styled.section`
  background-image: url("/images/bg/apply/apply_top_bg.png");
  background-color: black;
  width: 100vw;
  height: calc(100vh - 83px);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border: 1px solid black;
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

const ApplyTitle = () => {
  return (
    <ApplyTitleSection>
      <div className="textBox">
        <p className="title">
          INACOMS
          <br /> Recruitment
        </p>
        <p className="des">
          시각디자인 전공학회 INACOMS에서 신규회원을 모집합니다!
        </p>
        <p className="duration">
          <span>03.07 - 03.15</span>23:00까지
        </p>
      </div>
      <div className="arrow">
        <Image src={DownArrow} width={60} height={55} alt="arrow" />
      </div>
    </ApplyTitleSection>
  );
};

export default ApplyTitle;
