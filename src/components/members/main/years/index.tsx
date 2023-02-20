import styled from "@emotion/styled";
import Image from "next/image";

interface YearType {
  year: number;
  setYear: any;
}

const YearsBox = styled.div`
  position: relative;
  width: 361px;
  margin: 0 auto;
  text-align: center;
  .prevBtn {
    position: absolute;
    top: 15px;
    left: 0;
  }
  .curYear {
    color: ${(props) => props.theme.color.white};
    font-size: 60px;
    font-weight: 500;
  }
  .nextBtn {
    position: absolute;
    top: 15px;
    right: 0;
  }
`;

const Years = ({ year, setYear }: YearType) => {
  const date = new Date();
  console.log(+date.getFullYear());
  return (
    <YearsBox>
      {year === 2022 ? null : (
        <div className="prevBtn" onClick={() => setYear(year - 1)}>
          <Image
            src="/images/icons/members/members_prev.png"
            alt="prev"
            width={14}
            height={30}
            style={{ cursor: "pointer" }}
          />
        </div>
      )}
      <p className="curYear">{year}</p>
      {year < +date.getFullYear() && (
        <div className="nextBtn" onClick={() => setYear(year + 1)}>
          <Image
            src="/images/icons/members/members_next.png"
            alt="next"
            width={14}
            height={30}
            style={{ cursor: "pointer" }}
          />
        </div>
      )}
    </YearsBox>
  );
};

export default Years;
