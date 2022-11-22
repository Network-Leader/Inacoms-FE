import styled from "@emotion/styled";

const StatusSection = styled.section`
  background-color: ${(props) => props.theme.color.black};
  padding-bottom: 508px;
  .inner {
    width: 479px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 69px;
    .content {
      display: flex;
      align-items: center;
      .none {
        flex-grow: 1;
      }
    }
    .start,
    .member,
    .project {
      border-bottom: 1px solid;
      border-color: ${(props) => props.theme.color.gray_7B};
      position: relative;
    }
    p {
      color: ${(props) => props.theme.color.white};
      font-size: 32px;
      line-height: 61.18px;
      font-weight: 500;
      margin-bottom: 14px;
    }
    .emphasize {
      color: ${(props) => props.theme.color.white};
      font-size: 85px;
      font-weight: bold;
      line-height: 162.52px;
      margin-right: 22px;
      margin-bottom: 24px;
    }
    .normal {
      color: ${(props) => props.theme.color.gray_B3};
      font-size: 36px;
      font-weight: 500;
      line-height: 68.83px;
    }
  }
`;

const Status = () => {
  return (
    <StatusSection>
      <div className="inner">
        <div className="start">
          <p>학회 시작</p>
          <div className="content">
            <div className="none"></div>
            <span className="emphasize">1996</span>
            <span className="normal">년</span>
          </div>
        </div>
        <div className="member">
          <p>현재 활동중인 학회원 수</p>
          <div className="content">
            <div className="none"></div>
            <span className="emphasize">21</span>
            <span className="normal">명</span>
          </div>
        </div>
        <div className="project">
          <p>올해 활동한 프로젝트 건수</p>
          <div className="content">
            <div className="none"></div>
            <span className="emphasize">13</span>
            <span className="normal">건</span>
          </div>
        </div>
      </div>
    </StatusSection>
  );
};

export default Status;
