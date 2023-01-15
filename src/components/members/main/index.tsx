import styled from "@emotion/styled";
import Years from "./years";
import MemberList from "./memberList";
import { useEffect, useState } from "react";

const MainSection = styled.section`
  background-color: ${(props) => props.theme.color.black};
  padding-top: 222px;
`;

const MembersMain = () => {
  const date = new Date();
  const [year, setYear] = useState<number>(0);
  useEffect(() => {
    setYear(+date.getFullYear());
  }, []);
  return (
    <MainSection>
      <Years year={year} setYear={setYear} />
      <MemberList year={year} />
    </MainSection>
  );
};

export default MembersMain;
