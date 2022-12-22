import styled from "@emotion/styled";
import AwardsList from "./awardsList";
import { useState } from "react";
import YearList from "./yearList";

const AwardsBox = styled.div`
  width: 1033px;
  margin: 0 auto;
  .titleBox {
    text-align: center;
    margin-bottom: 100px;
    .title {
      font-size: 60px;
      font-weight: 700;
      line-height: 69.72px;
      margin-bottom: 15px;
      color: ${(props) => props.theme.color.white};
    }
    .subtitle {
      font-size: 24px;
      line-height: 44.21px;
      color: ${(props) => props.theme.color.white};
    }
  }
  .contentBox {
    border: 1px solid white;
    padding: 97px 111px 0 56px;
    border-radius: 20px;
    height: 2012px;
    display: flex;
  }
`;
const yearData = [
  2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
];
const Awards = () => {
  const [year, setYear] = useState(2008);

  return (
    <AwardsBox>
      <div className="titleBox">
        <p className="title">Awards</p>
        <p className="subtitle">INACOMS 학회원들의 수상내역</p>
      </div>
      <div className="contentBox">
        <YearList year={year} setYear={setYear} />
        <AwardsList />
      </div>
    </AwardsBox>
  );
};

export default Awards;
