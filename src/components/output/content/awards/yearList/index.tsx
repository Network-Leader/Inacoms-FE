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
}
const yearData = [
  2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
  2022,
];
const YearList = ({ year, setYear }: YearType) => {
  const onClickYear = (item: any) => {
    setYear(item);
  };
  return (
    <YearBox>
      {yearData.map((item, index) => (
        <Year
          key={index}
          item={item}
          year={year}
          onClick={() => onClickYear(item)}
        >
          {item}
        </Year>
      ))}
    </YearBox>
  );
};

export default YearList;
