import styled from "@emotion/styled";
import WorkSearch from "./search";
import { useState } from "react";
import WorkCategory from "./category";
import EachWork from "./eachWork";

const WorkMainSection = styled.section`
  background-color: ${(props) => props.theme.color.black};
  padding: 223px 0 297.6px 0;
`;

const WorkMain = () => {
  const [searchType, setSearchType] = useState("name");
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState("");
  return (
    <WorkMainSection>
      <WorkSearch
        setSearchType={setSearchType}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
      />
      <WorkCategory category={category} setCategory={setCategory} />
      <EachWork />
    </WorkMainSection>
  );
};

export default WorkMain;
