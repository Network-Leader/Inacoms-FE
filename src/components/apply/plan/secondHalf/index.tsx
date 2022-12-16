import { HalfListBox } from "..";

const secondHalfList = [
  {
    index: 1,
    month: "8월",
    list: ["협업 프로젝트 시작", "신입생 스터디 준비"],
  },
  {
    index: 2,
    month: "9월",
    list: ["협업 프로젝트 진행", "인커미 커밍 행사"],
  },
  {
    index: 3,
    month: "10월",
    list: [
      "협업 프로젝트 마감",
      "세미나",
      "하반기 공모전 시작",
      "삼성 디자인 멤버십",
    ],
  },
  {
    index: 4,
    month: "11월",
    list: ["하반기 공모전 제출", "졸업 전시회", "프로필 촬영"],
  },
  { index: 5, month: "12월", list: ["하반기 공모전 마감"] },
  {
    index: 6,
    month: "겨울방학",
    list: ["동계 MT", "겨울방학 활동"],
  },
];

const SecondHalf = () => {
  return (
    <HalfListBox>
      {secondHalfList.map((item) => (
        <div className="list" key={item.index}>
          <div className="month" key={item.index}>
            {item.month}
          </div>
          {item.list.map((item, index) => (
            <div className="contentList" key={index}>
              <span>{item}</span>
            </div>
          ))}
        </div>
      ))}
    </HalfListBox>
  );
};

export default SecondHalf;
