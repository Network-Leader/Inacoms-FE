import styled from "@emotion/styled";
import { useState } from "react";
import Awards from "./awards";
import Out from "./out";

const ContentSection = styled.section<{ type: string }>`
  background-color: ${(props) => props.theme.color.black};
  padding: 365px 0 520px 0;
  .type {
    display: flex;
    justify-content: center;
    margin-bottom: 258.5px;
    .awards {
      cursor: pointer;
      color: ${(props) =>
        props.type === "awards"
          ? props.theme.color.red
          : props.theme.color.white};
      font-size: 32px;
      font-weight: 700;
      padding-right: 57.5px;
    }
    .output {
      cursor: pointer;
      color: ${(props) =>
        props.type === "awards"
          ? props.theme.color.white
          : props.theme.color.red};
      font-size: 32px;
      font-weight: 700;
      position: relative;
      &::before {
        content: "";
        width: 1px;
        height: 34.5px;
        position: absolute;
        background-color: ${(props) => props.theme.color.white};
        top: 0;
        bottom: 0;
        margin: auto 0;
      }
      span {
        padding-left: 57.5px;
      }
    }
  }
`;

const Content = () => {
  const [type, setType] = useState("awards");
  return (
    <ContentSection type={type}>
      <div className="type">
        <div className="awards" onClick={() => setType("awards")}>
          Awards
        </div>
        <div className="output" onClick={() => setType("ouptut")}>
          <span>Output</span>
        </div>
      </div>
      {type === "awards" ? <Awards /> : <Out />}
    </ContentSection>
  );
};

export default Content;
