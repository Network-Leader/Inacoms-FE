import styled from "@emotion/styled";

const LeftBgSection = styled.section`
  height: calc(100vh - 83px);
  width: 60.9vw;
  img {
    width: 100%;
    height: 100%;
  }
`;

const LeftBg = ({ random }: { random: string | undefined }) => {
  console.log(typeof random);
  return (
    <LeftBgSection>
      {random === "1" ? (
        <img src="/images/bg/sign_bg1.png" alt="bg" />
      ) : random === "2" ? (
        <img src="/images/bg/sign_bg2.png" alt="bg" />
      ) : (
        <img src="/images/bg/sign_bg3.png" alt="bg" />
      )}
    </LeftBgSection>
  );
};

export default LeftBg;
