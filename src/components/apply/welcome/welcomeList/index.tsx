import styled from "@emotion/styled";
import useScrollFadeIn from "../../../../hooks/useScrollFadeIn";

const WelcomeListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  .item {
    background-color: ${(props) => props.theme.color.white_opacity};
    border-radius: 10px;
    color: ${(props) => props.theme.color.white};
    padding: 26px 59px 28px 38px;
    font-size: 24px;
    font-weight: 500;
    line-height: 33.17px;
    white-space: pre-line;
  }
`;

const WelcomeList = () => {
  return (
    <WelcomeListBox>
      <div className="item" {...useScrollFadeIn("left", 1, 0)}>
        μμ΄λμ΄ π§ Β λ₯Ό μ λ΅μ μΌλ‘ μκ°ν π― νλ λ°©λ²μ
        <br />
        μκ³  μΆμ νμ
      </div>
      <div className="item" {...useScrollFadeIn("left", 1, 0.2)}>
        μμ§ λμμΈ νλ‘κ·Έλ¨ π»Β μ λ€λ£¨λ κ²μ μ΅μνμ§
        <br />
        μμ λ λ°°μ°κ³  μΆμ νμ
      </div>
      <div className="item" {...useScrollFadeIn("left", 1, 0.4)}>
        νλμ λΆμΌλ³΄λ€λ μ¬λ¬ λΆμΌμμ μμλ¬Ό π­Β μ
        <br />
        λ΄λ³΄κ³  μΆμ νμ
      </div>
      <div className="item" {...useScrollFadeIn("left", 1, 0.6)}>
        μμ μ μνμΌλ‘ μ μ π§βπ¨Β λ₯Ό νκ±°λ λ€μν
        <br />
        κ³΅λͺ¨μ  πΒ μ μ°Έμ¬ν΄λ³΄κ³  μΆμ νμ
      </div>
      <div className="item" {...useScrollFadeIn("left", 1, 0.8)}>
        λκΈ°, μ λ°° λͺ¨λμ κ΅λ₯/νμ π«Β μ λ§μ΄ κ²½νν΄λ³΄κ³ 
        <br />
        μΆμ νμ
      </div>
    </WelcomeListBox>
  );
};

export default WelcomeList;
