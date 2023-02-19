import styled from "@emotion/styled";
import { HalfListBox } from "..";

const firstHalfList = [
  { index: 1, month: "2월", list: ["상반기 공모전 진행"] },
  {
    index: 2,
    month: "3월",
    list: ["상반기 공모전 진행", "신입생 홍보 및 모집", "신입생 환영식"],
  },
  {
    index: 3,
    month: "4월",
    list: ["상반기 공모전 진행", "마니또", "봄소풍", "신입생 스터디 1차"],
  },
  {
    index: 4,
    month: "5월",
    list: ["상반기 공모전 제출", "단기 워크숍"],
  },
  { index: 5, month: "6월", list: ["단기 워크숍", "정기전시 준비"] },
  {
    index: 6,
    month: "여름방학",
    list: ["정기전시 준비", "하계 MT"],
  },
];

const FirstHalf = () => {
  return (
    <HalfListBox>
      {firstHalfList.map((item) => (
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

export default FirstHalf;
