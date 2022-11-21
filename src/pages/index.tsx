import styled from "@emotion/styled";

const Title = styled.h2`
  font-size: ${(props) => props.theme.font.size.h2}px;
  text-align: center;
  font-weight: 500;
`;

const Home = () => {
  return (
    <Title>
      스포카 서비스의 많은 부분은 오픈소스 기술로 이루어져 있습니다. 스포카는
      오픈소스 기술을 이용하는 만큼 그 생태계에 기여합니다. 이러한 기여가
      모일수록 오픈소스 커뮤니티가 건강해지며, 사용자도 함께 성장해 나갈
      것입니다.
    </Title>
  );
};

export default Home;
