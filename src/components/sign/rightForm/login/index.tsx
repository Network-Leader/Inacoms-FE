import styled from "@emotion/styled";

const LoginFormSection = styled.div`
  .inputForm {
    input {
      display: block;
      width: 100%;
      border: none;
      border-bottom: 1px solid;
      box-sizing: border-box;
      padding: 9px 0 9px 6px;
      border-color: ${(props) => props.theme.color.gray_6F};
      outline: none;
      margin-bottom: 24px;
      background-color: black;
      letter-spacing: 2px;
      color: ${(props) => props.theme.color.gray_B0};
      &:last-of-type {
        margin-bottom: 40px;
      }
      &::placeholder {
        color: ${(props) => props.theme.color.gray_B0};
      }
    }
  }
  .btn {
    width: 100%;
    height: 67px;
    background-color: ${(props) => props.theme.color.white};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 20px;
  }
  .toRegi {
    color: ${(props) => props.theme.color.white};
    font-size: 14px;
    text-align: center;
    span {
      margin-left: 20px;
      text-decoration: underline;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      display: inline-block;
    }
  }
`;

const LoginForm = ({
  setFormState,
}: {
  setFormState: (b: boolean) => void;
}) => {
  return (
    <LoginFormSection>
      <div className="inputForm">
        <input placeholder="학번" />
        <input placeholder="비밀번호" type="password" />
      </div>
      <div className="btn">Log in</div>
      <div className="toRegi">
        계정이 없으신가요?{" "}
        <span onClick={() => setFormState(true)}>Sign up</span>
      </div>
    </LoginFormSection>
  );
};

export default LoginForm;
