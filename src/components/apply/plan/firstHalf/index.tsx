import styled from "@emotion/styled";
import { HalfListBox } from "..";

const firstHalfList = [
  { index: 1, month: "2월", list: ["정기전시 <초성전>", "워크숍"] },
  {
    index: 2,
    month: "3월",
    list: ["상반기 공모전 진행", "신입생 홍보 및 모집", "인쇄물 기초 스터디"],
  },
  {
    index: 2,
    month: "4월",
    list: ["상반기 공모전 진행", "마니또", "신입생 스터디 1차"],
  },
  {
    index: 3,
    month: "5월",
    list: ["상반기 공모전 제출", "외부 초청 세미나", "웹 아카이브전"],
  },
  { index: 4, month: "6월", list: ["정기전시 준비", "웹 아카이브전"] },
  {
    index: 5,
    month: "여름방학",
    list: ["정기전시 활동", "학회 준비 툴 스터디", "하계 MT"],
  },
];

const FirstHalf = () => {
  return (
    <HalfListBox>
      {firstHalfList.map((item) => (
        <div className="list">
          <div className="month" key={item.index}>
            {item.month}
          </div>
          {item.list.map((item) => (
            <>
              <div className="contentList">
                <span>{item}</span>
              </div>
            </>
          ))}
        </div>
      ))}
    </HalfListBox>
  );
};

export default FirstHalf;
