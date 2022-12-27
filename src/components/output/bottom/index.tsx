import styled from "@emotion/styled";

const BottomSection = styled.section`
  background-image: url("/images/bg/apply/apply_bot_bg.jpg");
  width: 100vw;
  height: 48.6vw;
  background-color: rgba(0, 0, 0, 0.4);
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

const Bottom = () => {
  return (
    <BottomSection>
      <div className="textBox">
        <p className="title">
          You&apos;re the next
          <br />
          INACOMS
        </p>
      </div>
    </BottomSection>
  );
};

export default Bottom;
