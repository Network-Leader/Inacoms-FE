import styled from "@emotion/styled";

const LinkSection = styled.section`
  background-image: url("/images/bg/apply/apply_bot_bg.jpg");
  width: 100vw;
  height: 71.8vw;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  .textBox {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 58px;
    .title {
      font-size: 72px;
      font-style: italic;
      line-height: 99.5px;
      color: ${(props) => props.theme.color.white};
    }
    .pdfBtn {
      background-color: ${(props) => props.theme.color.gray_6D};
      color: ${(props) => props.theme.color.white};
      padding: 17px 80px;
      border-radius: 50px;
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;
      &:hover {
        background-color: ${(props) => props.theme.color.red};
      }
    }
  }
`;

const Link = () => {
  return (
    <LinkSection>
      <div className="textBox">
        <p className="title">
          Who's the next
          <br />
          INACOMS
        </p>
        <div className="pdfBtn">지원하기</div>
      </div>
    </LinkSection>
  );
};

export default Link;
