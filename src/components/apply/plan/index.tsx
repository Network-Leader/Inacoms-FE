import styled from "@emotion/styled";
import FirstHalf from "./firstHalf";
import SecondHalf from "./secondHalf";

const PlanSection = styled.section`
  background-color: ${(props) => props.theme.color.black_14};
  padding: 202px 0 126.37px;
  .planBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      font-size: 60px;
      font-weight: 700;
      margin-bottom: 43px;
      color: ${(props) => props.theme.color.white};
    }
    .subtitle {
      font-size: 24px;
      /* margin-bottom: 143px; */
      color: ${(props) => props.theme.color.gray_C3};
      margin-bottom: 90px;
    }
    .content {
      width: 971.77px;
      .halfTitle {
        font-size: 24px;
        color: ${(props) => props.theme.color.white};
        line-height: 37.25px;
        margin-bottom: 15.19px;
        margin-left: 4px;
      }
    }
  }
`;

export const HalfListBox = styled.div`
  display: flex;
  gap: 35px;
  justify-content: flex-end;
  margin-bottom: 59.25px;
  .list {
    .month {
      background-color: ${(props) => props.theme.color.gray_D9};
      border-radius: 5px;
      font-size: 24px;
      font-weight: 500;
      width: 132.61px;
      height: 72.52px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 21.76px;
    }
    .contentList {
      color: ${(props) => props.theme.color.gray_C3};
      font-size: 14px;
      line-height: 21.73px;
      position: relative;

      span {
        margin-left: 10px;
      }
      &::before {
        content: "";
        width: 3.5px;
        height: 3.5px;
        border-radius: 50%;
        background-color: ${(props) => props.theme.color.gray_C3};
        background-color: white;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto 0;
      }
    }
  }
`;

const Plan = () => {
  return (
    <PlanSection>
      <div className="planBox">
        <p className="title">2022 Plan</p>
        <p className="subtitle">INACOMS는 한해동안 이런 활동을 해요</p>
        <div className="content">
          <div className="half">
            <p className="halfTitle">상반기</p>
            <FirstHalf />
          </div>
          <div className="half">
            <p className="halfTitle">하반기</p>
            <SecondHalf />
          </div>
        </div>
      </div>
    </PlanSection>
  );
};

export default Plan;
