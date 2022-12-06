import styled from "@emotion/styled";

const ApplySection = styled.section`
  background-color: ${(props) => props.theme.color.black};
  .inner {
    width: 1035px;
    margin: 0 auto;
    height: 500px;
    .type {
      color: ${(props) => props.theme.color.white};
      font-size: 18px;
      font-weight: 500;
      padding: 13px 66px;
      border: 3px solid;
      border-radius: 50px;
      margin-top: 22px;
      display: inline-block;
      border-color: ${(props) => props.theme.color.white};
      &:hover {
        color: ${(props) => props.theme.color.black};
        background-color: ${(props) => props.theme.color.white};
        font-size: 18px;
        font-weight: 700;
        padding: 13px 66px;
        border: 3px solid;
        border-radius: 50px;
        display: inline-block;
      }
    }
    .content {
      color: ${(props) => props.theme.color.white};
      font-size: 18px;
      font-weight: 500;
      display: inline-block;
      margin-left: 39px;
    }
    .firstBox {
      border-bottom: 1px solid white;
      padding: 18px 0 43px 65px;
    }
    .secondBox {
      padding: 4.5px 0 0 65px;
      position: relative;
      .wrap {
        position: absolute;
        top: 45px;
        left: 270px;
        .content {
          display: block;
          .subtype {
            display: inline-block;
            margin-bottom: 20px;
          }
          .subcontent {
            display: inline-block;
          }
        }
      }
    }
  }
`;

const Apply = () => {
  return (
    <ApplySection>
      <div className="inner">
        <div className="firstBox">
          <div className="qualify">
            <div className="type">지원 자격</div>
            <div className="content">
              시각디자인학과 학부생 - 본전공생 (신입생, 재학생-2학년)
            </div>
          </div>
          <div className="duration">
            <div className="type">지원 기간</div>
            <div className="content">
              03.07 - 03.15{" "}
              <span style={{ marginLeft: "25px" }}>23:00까지</span>
            </div>
          </div>
          <div className="interview">
            <div className="type">면접 일정</div>
            <div className="content">
              03.17{" "}
              <span style={{ marginLeft: "10px", marginRight: "10px" }}>
                19:00
              </span>{" "}
              ZOOM
            </div>
          </div>
        </div>
        <div className="secondBox">
          <div className="type">
            <span style={{ marginRight: "30px" }}>문</span>의
          </div>
          <div className="wrap">
            <div className="content">
              <p className="subtype" style={{ marginRight: "68px" }}>
                오픈 카톡 문의 링크
              </p>
              <p className="subcontent">https://open.kakao.com/o/gOFvsm3d</p>
            </div>
            <div className="content">
              <p className="subtype" style={{ marginRight: "177px" }}>
                회장
              </p>
              <p className="subcontent">최예지 * 010 4189 0562</p>
            </div>
            <div className="content">
              <p className="subtype" style={{ marginRight: "161px" }}>
                부회장
              </p>
              <p className="subcontent">정다원 * 010 5131 6754</p>
            </div>
          </div>
        </div>
      </div>
    </ApplySection>
  );
};

export default Apply;
