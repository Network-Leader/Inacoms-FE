import { useRef } from "react";
import styled from "@emotion/styled";
import awardsList from "../../../../../data/awards.json";

const AwardsBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 35px 0 0 87px;
  overflow: scroll;
  .awards {
    /* margin-bottom: 192px; */
    &:last-child {
      padding: 0 0 1400px 0;
    }
    min-height: 659px;
    .year {
      font-size: 30px;
      font-weight: 700;
      color: ${(props) => props.theme.color.white};
      border-bottom: 1px solid;
      border-color: ${(props) => props.theme.color.gray_7B};
      padding: 0 0 40px 27px;
      margin-bottom: 67px;
    }
    .list {
      font-size: 18px;
      font-weight: 700;
      line-height: 33.16px;
      color: ${(props) => props.theme.color.white};
      margin: 0 0 2px 30px;
    }
  }
`;

const AwardsList = ({
  scrollRef,
  setYear,
}: {
  scrollRef: any;
  setYear: any;
}) => {
  const scrollYearChange = () => {
    const scrollY = scrollRef.current?.scrollTop;
    if (scrollY < 600) setYear(2008);
    else if (scrollY >= 600 && scrollY < 1250) setYear(2009);
    else if (scrollY >= 1250 && scrollY < 1900) setYear(2010);
    else if (scrollY >= 1900 && scrollY < 2580) setYear(2011);
    else if (scrollY >= 2580 && scrollY < 3220) setYear(2012);
    else if (scrollY >= 3220 && scrollY < 3870) setYear(2013);
    else if (scrollY >= 3870 && scrollY < 4550) setYear(2014);
    else if (scrollY >= 4550 && scrollY < 5220) setYear(2015);
    else if (scrollY >= 5220 && scrollY < 5840) setYear(2016);
    else if (scrollY >= 5840 && scrollY < 6460) setYear(2017);
    else if (scrollY >= 6460 && scrollY < 7100) setYear(2018);
    else if (scrollY >= 7100 && scrollY < 7800) setYear(2019);
    else if (scrollY >= 7800 && scrollY < 8400) setYear(2020);
    else if (scrollY >= 8400) setYear(2022);
  };
  return (
    <AwardsBox
      className="awardsBox"
      ref={scrollRef}
      onScroll={scrollYearChange}
    >
      {awardsList?.map((item) => (
        <div className="awards" key={item.id}>
          <div className="year">{item.year}</div>
          {item?.des?.map((item, index) => (
            <div className="list" key={index}>
              {item}
            </div>
          ))}
        </div>
      ))}
    </AwardsBox>
  );
};

export default AwardsList;
