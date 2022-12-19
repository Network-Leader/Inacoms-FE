import styled from "@emotion/styled";

const MembersTitleSection = styled.section`
  background-image: url("/images/bg/members/members_top_bg.png");
  width: 100%;
  height: 32.8vw;
  background-position: center;
  background-size: cover;
  .textBox {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    .title {
      font-size: 72px;
      font-weight: 700;
      color: ${(props) => props.theme.color.white};
    }
    .subtitle {
      font-size: 24px;
      font-weight: 500;
      line-height: 38.93px;
      text-align: center;
      color: ${(props) => props.theme.color.white};
    }
  }
`;

const MembersTitle = () => {
  return (
    <MembersTitleSection>
      <div className="textBox">
        <div className="title">Members</div>
        <div className="subtitle">
          INACOMS의 학회원 소개
          <br />각 년도에 활동한 학회원들의 프로필을 볼 수 있습니다.
        </div>
      </div>
    </MembersTitleSection>
  );
};

export default MembersTitle;
