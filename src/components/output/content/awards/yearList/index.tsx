import styled from "@emotion/styled";

const YearBox = styled.div`
  height: 100%;
  border-right: 1px solid white;
  padding-right: 56px;
`;
const Year = styled.div<{ item: any; year: number }>`
  font-size: 20px;
  font-weight: 700;
  padding: 10px 20px;
  margin-bottom: 11px;
  width: 87.69px;
  height: 40px;
  box-sizing: border-box;
  cursor: pointer;
  color: ${(props) =>
    props.year === props.item
      ? props.theme.color.red
      : props.theme.color.white};
  border: ${(props) => props.year === props.item && "1px solid"};
  border-color: ${(props) =>
    props.year === props.item && props.theme.color.red};
  border-radius: 7px;
`;
interface YearType {
  year: number;
  setYear: any;
  scrollRef: any;
}
const yearData = [
  { id: 1, year: 2008, posY: 0 },
  { id: 2, year: 2009, posY: 670 },
  { id: 3, year: 2010, posY: 1330 },
  { id: 4, year: 2011, posY: 2000 },
  { id: 5, year: 2012, posY: 2650 },
  { id: 6, year: 2013, posY: 3310 },
  { id: 7, year: 2014, posY: 3970 },
  { id: 8, year: 2015, posY: 4620 },
  { id: 9, year: 2016, posY: 5300 },
  { id: 10, year: 2017, posY: 5950 },
  { id: 11, year: 2018, posY: 6610 },
  { id: 12, year: 2019, posY: 7270 },
  { id: 13, year: 2020, posY: 7930 },
  { id: 14, year: 2022, posY: 8578 },
];
const YearList = ({ year, setYear, scrollRef }: YearType) => {
  const onClickYear = (item: any, posY: any) => {
    setYear(item);
    scrollRef.current.scrollTop = posY;
  };
  return (
    <YearBox>
      {yearData.map((item) => (
        <Year
          key={item.id}
          item={item.year}
          year={year}
          onClick={() => onClickYear(item.year, item.posY)}
        >
          {item.year}
        </Year>
      ))}
    </YearBox>
  );
};

export default YearList;
