import styled from "@emotion/styled";

const BeSection = styled.section`
  width: 100vw;
  padding: 519px 0 533px 0;
  background-color: ${(props) => props.theme.color.black};
  display: flex;
  justify-content: center;
  .textBox {
    color: ${(props) => props.theme.color.white};
    font-size: 80px;
    white-space: pre-line;
    width: 503px;
    line-height: 96.96px;
    text-align: center;
    font-style: italic;
  }
`;
const Be = () => {
  return (
    <BeSection>
      <div className="textBox">BE U{"\n"}BE INACOMS </div>
    </BeSection>
  );
};

export default Be;
