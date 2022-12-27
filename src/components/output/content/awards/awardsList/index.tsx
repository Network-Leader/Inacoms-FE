import styled from "@emotion/styled";

const AwardsBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 35px 0 0 87px;
  overflow: scroll;
  .awards {
    /* margin-bottom: 192px; */
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

const awardsList = [
  {
    id: 1,
    year: 2008,
    des: [
      "러브써클 티셔츠 공모전 대상",
      "푸부 크리에이티브 그래픽 공모전 대상",
      "푸부 크리에이티브 그래픽 공모전 장려상",
      "푸부 크리에이티브 그래픽 공모전 특선",
      "푸부 크리에이티브 그래픽 공모전 부스 은상",
      "디자인 트렌드 대전 영상부문 동상",
      "디자인 트렌드 대전 영상부문 입선",
      "리바이스 그래픽 공모전 입선",
      "대한펄프 깨끗한 티슈 공모전 입선",
    ],
  },
  {
    id: 2,
    year: 2009,
    des: [
      "스프리스 그래픽 공모전 대상",
      "스프리스 그래픽 공모전 동상",
      "스프리스 그래픽 공모전 동상",
      "푸부 크리에이티브 그래픽 공모전 동상",
      "푸부 크리에이티브 그래픽 공모전 징려상",
      "푸부 크리에이티브 그래픽 공모전 특선",
    ],
  },
  {
    id: 3,
    year: 2010,
    des: [
      "제 2차 세계 차협회 패키지 공모전 대상",
      "제 2차 세계 차협회 패키지 공모전 우수상",
      "대한 적십자사 헌혈 광고 공모전 우수상",
      "제 5회 케토톱 대학생 광고 공모전 장려상",
      "세계 물사랑 녹색 성장 영상 공모전 장려상",
      "M. BOARD 스노우보드 그래픽 공모전 대상, 금상",
      "예지미인 패키지 디자인 공모전 장려상",
      "국제 트렌드 디자인 대전 특별상",
      "서울과학기술대학교 UI디자인 공모전 대상, 은상",
    ],
  },
  {
    id: 4,
    year: 2011,
    des: [
      "어도비 국제 공모전 Final List",
      "F1 그랑프리 포스터 공모전 금상",
      "햇츠온 뉴에라 그래픽 공모전 금상",
      "햇츠온 뉴에라 그래픽 공모전 그래픽상 다수",
      "오뚜기 광고 공모전 동상",
      "현대모비스 순정부품 광고 공모전 동상",
      "삼성 모바일 디스플레이 광고 공모전 네티즌상",
      "흡연 에티켓 광고 공모전 입선",
      "봄베이 사파이어 패키지 공모전 입선",
    ],
  },
  {
    id: 5,
    year: 2012,
    des: [
      "할리스 그린머그컵 디자인 공모전 입선",
      "어도비 국제 디자인 공모전 Final List",
      "서울과기대 졸업전시회 포스터 공모전 대상",
      "서울과기대 졸업전시회 포스터 공모전 수상 다수",
      "유니버셜 디자인 공모전 우수상",
      "유니버셜 디자인 공모전 특별상 다수",
      "미즈컨테이너 Final List",
      "서울과기대 코업프로그램 로고 공모전 대상",
      "서울과기대 코업프로그램 로고 공모전 수상 다수",
    ],
  },
  {
    id: 6,
    year: 2013,
    des: [
      "할리스 그린머그컵 디자인 공모전 입선",
      "어도비 국제 디자인 공모전 Fianl List",
      "서울과기대 졸업전시회 포스터 공모전 대상",
      "서울과기대 졸업전시회 포스터 공모전 수상 다수",
      "유니버셜 디자인 공모전 우수상",
      "유니버셜 디자인 공모전 특별상 다수",
      "미즈컨테이너 Fianl List",
      "서울과기대 코업프로그램 로고 공모전 대상",
      "서울과기대 코업프로그램 로고 공모전 수상 다수",
    ],
  },
  {
    id: 7,
    year: 2014,
    des: [
      "요기요 대학 동아리 서포터즈 2등",
      "playstation4 광고 공모전 Fianl List",
      "서울과기대 캐릭터디자인 공모전 우수상",
      "서울과기대 캐릭터디자인 공모전 우수상",
      "파크랜드 응원 그래픽 공모전 특선",
      "파크랜드 응원 그래픽 공모전 입선",
    ],
  },
  {
    id: 8,
    year: 2015,
    des: [
      "정관장 국제 디자인 공모전 패키지 부문 특선",
      "정관장 국제 디자인 공모전 패키지 부문 입선 다수",
      "정관장 국제 디자인 공모전 패턴 부문 입선 다수",
      "한마음혈액원 헌혈 캐릭터 공모전 Fianl List 다수",
      "대한민국디자인전람회 국무총리상",
      "대한민국디자인전람회 산업자원부장관상",
      "대한민국디자인전람회 입선",
    ],
  },
  {
    id: 9,
    year: 2016,
    des: [
      "어도비 국제 디자인 공모전 Semi Final List 다수",
      "대한민국 국가상징 공모전 대한상공회의소장상",
      "LG 생활건강 공모전 특선, 입선 다수",
      "요리오 와인라벨 공모전 장려상 다수",
    ],
  },
  {
    id: 10,
    year: 2017,
    des: [
      "어도비 국제 디자인 공모전 Semi Final List 다수",
      "아시아 대학생 패키지 공모전 예선 진출 다수",
      "삼성디자인멤버십 사전 과제 합격",
    ],
  },
  {
    id: 11,
    year: 2018,
    des: [
      "어도비 국제 디자인 공모전 Semi Final List 다수",
      "삼성디자인멤버십 사전 과제 합격",
    ],
  },
  {
    id: 12,
    year: 2019,
    des: [
      "어도비 국제 디자인 공모전 Fianl List 등극",
      "부산국제디자인어워드 수상",
      "INSPER 공모전 전원 예선 통과",
    ],
  },
  {
    id: 13,
    year: 2020,
    des: [
      "서울과학기술대학교 홍보영상공모전 대상",
      "서울과학기술대학교 홍보영상공모전 장려상",
      "삼성디자인멤버십 1, 2차 합격 다수",
      "제 4회 K-독도 공모전 카드뉴스 부문 대상",
    ],
  },
  {
    id: 14,
    year: 2022,
    des: [
      "2022 international busan design award (IBDA) 특별상",
      "2022 제1회 강원디자인전람회 공모전 입선",
      "2022 제1회 강원디자인전람회 공모전 특선",
      "2022 D2B디자인페어 입선",
      "2022 Blueawards 상품문화디자인 국제공모전 입선",
    ],
  },
];

const AwardsList = () => {
  return (
    <AwardsBox>
      {awardsList.map((item) => (
        <div className="awards" key={item.id}>
          <div className="year">{item.year}</div>
          {item.des.map((item, index) => (
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
