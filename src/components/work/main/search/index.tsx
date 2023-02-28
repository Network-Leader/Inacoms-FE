import styled from "@emotion/styled";
import Image from "next/image";

const SearchSection = styled.div`
  width: 100vw;
  margin-bottom: 62px;
  .searchBox {
    margin: 0 auto;
    display: flex;
    border: 1px solid #fff;
    border-radius: 5px;
    width: 347px;
    height: 37px;
    padding: 10px 10px 10px 14px;
    align-items: center;
    .type {
      color: ${(props) => props.theme.color.white};
      cursor: pointer;
      select {
        background: url(/images/icons/work/down_arrow.png) no-repeat right white;
        background-color: black;
        border: none;
        outline: none;
        color: white;
        font-size: 14px;
        padding-right: 21px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
    }
    .divide {
      width: 1px;
      height: 17.5px;
      background-color: #fff;
      margin: 0 13px 0 13px;
    }
    .search {
      border: none;
      outline: none;
      background-color: black;
      flex-grow: 1;
      color: ${(props) => props.theme.color.white};
    }
    .searchIcon {
      margin-bottom: -3px;
      cursor: pointer;
      color: ${(props) => props.theme.color.white};
    }
  }
`;

interface SearchType {
  setSearchType: any;
  setSearchValue: any;
  searchValue: any;
}

const WorkSearch = ({
  setSearchType,
  searchValue,
  setSearchValue,
}: SearchType) => {
  const onSearch = () => {
    alert("검색기능은 현재 준비중입니다.");
    setSearchValue("");
  };
  const onKeyPress = (e: any) => {
    if (e.key === "Enter") onSearch();
  };
  return (
    <SearchSection>
      <div className="searchBox">
        <div className="type">
          <select
            onChange={(e) => setSearchType(e.target.value)}
            defaultValue="name"
          >
            <option value="name">활동명</option>
            <option value="type">종류</option>
          </select>
        </div>
        <div className="divide"></div>
        <input
          className="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={onKeyPress}
        />
        <div className="searchIcon" onClick={onSearch}>
          <Image
            src={"/images/icons/work/search_icon.png"}
            alt="down"
            width={18}
            height={18}
          />
        </div>
      </div>
    </SearchSection>
  );
};

export default WorkSearch;
