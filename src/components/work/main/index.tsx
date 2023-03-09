import styled from "@emotion/styled";
import WorkSearch from "./search";
import { useEffect, useState } from "react";
import WorkCategory from "./category";
import EachWork from "./eachWork";

const WorkMainSection = styled.section`
  background-color: ${(props) => props.theme.color.black};
  padding: 223px 0 297.6px 0;
`;

const WorkMain = () => {
  const [searchType, setSearchType] = useState("title");
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState({
    categoryTags: {
      스터디: false,
      정기전시: false,
      워크샵: false,
      세미나: false,
      대외활동: false,
      공모전: false,
    },
  });
  const [resCategory, setResCategory] = useState([""]);
  // useEffect(() => {
  //   setResCategory([
  //     "정기전시",
  //     "스터디",
  //     "워크샵",
  //     "세미나",
  //     "대외활동",
  //     "공모전",
  //   ]);
  // }, []);
  return (
    <WorkMainSection>
      <WorkSearch
        setSearchType={setSearchType}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
      />
      <WorkCategory
        category={category}
        setCategory={setCategory}
        resCategory={resCategory}
        setResCategory={setResCategory}
      />
      <EachWork searchValue={searchValue} resCategory={resCategory} />
    </WorkMainSection>
  );
};

export default WorkMain;
