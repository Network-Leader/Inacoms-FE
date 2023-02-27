import { HalfListBox } from "..";

const secondHalfList = [
  {
    index: 1,
    month: "8월",
    list: ["신입생 스터디 준비"],
  },
  {
    index: 2,
    month: "9월",
    list: ["부원 스터디 2차", "하반기 공모전 진행"],
  },
  {
    index: 3,
    month: "10월",
    list: ["하반기 공모전 진행", "졸업생 세미나"],
  },
  {
    index: 4,
    month: "11월",
    list: ["하반기 공모전 제출", "단기 워크숍", "프로필 촬영"],
  },
  { index: 5, month: "12월", list: ["단기 워크숍", "정기전시"] },
  {
    index: 6,
    month: "겨울방학",
    list: ["동계 MT", "정기전시"],
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
