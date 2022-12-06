import styled from "@emotion/styled";
import { useState } from "react";
import LoginForm from "./login";
import SignUpForm from "./signup";

const FormSection = styled.section`
  background-color: ${(props) => props.theme.color.black};
  width: 39.1vw;
  height: calc(100vh - 83px);
  display: flex;
  justify-content: center;
  align-items: center;
  .inner {
    width: 345px;
    min-height: 300px;
    .title {
      font-size: 36px;
      line-height: 68.83px;
      font-weight: 700;
      color: ${(props) => props.theme.color.white};
      margin-bottom: 81px;
    }
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
      margin-bottom: 20px;
    }
    .toRegi {
      color: ${(props) => props.theme.color.white};
      font-size: 14px;
      text-align: center;
      .span {
        margin-left: 20px;
        text-decoration: underline;
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
        display: inline-block;
      }
    }
  }
`;

const RightForm = () => {
  const [formState, setFormState] = useState(false);
  return (
    <FormSection>
      <div className="inner">
        <div className="title">{formState ? "Sign up" : "Log in"}</div>
        {formState ? (
          <SignUpForm setFormState={setFormState} />
        ) : (
          <LoginForm setFormState={setFormState} />
        )}
      </div>
    </FormSection>
  );
};

export default RightForm;
