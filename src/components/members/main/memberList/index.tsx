import styled from "@emotion/styled";
import Link from "next/link";
// import members from "../../../../data/members.json";

const members = [
  {
    id: 1,
    name: "최예지",
    studentId: 20,
    role: "회장",
    intro:
      "안녕하세요! 사람의 심리로 대화하는 기획적 디자이너, 최예지입니다. 자유로운 피드백 문화를 가진 이너컴스를 사랑합니다 !!!",
    track: ["아이덴티티", "UX디자인", "광고디자인"],
    contact: [
      {
        mark: "@yewww.e_studio",
        link: "https://www.instagram.com/yewww.e_studio/",
      },
      {
        mark: "YEWWW.KIT",
        link: "https://yewww.notion.site/YEWWW-KIT-e42391bc7d48440781f8dd2f49209f15",
      },
    ],
    behance: {
      mark: "Ye Ji Choi",
      link: "https://www.behance.net/yeji0161fe3e",
    },
    email: "tiny_8ear@naver.com",
    join: 2021,
  },
  {
    id: 2,
    name: "정다원",
    studentId: 21,
    role: "부회장",
    intro:
      "시각 언어로 사람들과 재미나게 소통하고 싶은 정다원입니다! 저를 한 단계 더 성장시켜 주는 이너컴스의 부원들과 함께하고 있습니다 :)",
    track: ["아이덴티티", "일러스트레이션", "영상디자인"],
    contact: [
      {
        mark: "@fol.da_",
        link: "https://www.instagram.com/fol.da_/",
      },
      {
        mark: "notefolio",
        link: "https://www.notefolio.net/delief",
      },
    ],
    behance: {
      mark: "Dawon Jeong",
      link: "https://www.behance.net/7a515899",
    },
    email: "delief1029@naver.com",
    join: 2021,
  },
  {
    id: 3,
    name: "김서영",
    studentId: 20,
    role: "부원",
    intro:
      "안녕하세요! 서정적인 조형을 좋아하고, 오래 기억에 남는 디자인을 하고자 하는 김서영입니다.",
    track: ["아이덴티티", "일러스트레이션"],
    contact: [
      {
        mark: "@s.eooooooo",
        link: "https://www.instagram.com/s.eooooooo",
      },
    ],
    behance: {
      mark: "Seoyoung kim",
      link: "https://www.behance.net/evia11167b0",
    },
    email: "evia111@naver.com",
    join: 2021,
  },
  {
    id: 4,
    name: "김의진",
    studentId: 20,
    role: "부원",
    intro:
      "안녕하세요, 모션그래픽 디자이너 김의진입니다. 멋진 사람들과 함께 더불어 성장할 수 있는 이너컴스에서 활동 중입니다!",
    track: ["일러스트레이션", "영상디자인"],
    contact: [
      {
        mark: "@e_ijin",
        link: "https://www.instagram.com/e_ijin/",
      },
    ],
    behance: {
      mark: "ei jin Kim",
      link: "https://www.behance.net/alcial1436300",
    },
    email: "dkfkdjfl@naver.com",
    join: 2021,
  },
  {
    id: 5,
    name: "민경서",
    studentId: 20,
    role: "3짱",
    intro:
      "안녕하세요. 정답 없는 세상에서 쉬운 해답을 그리는 디자이너 민경서입니다.",
    track: ["아이덴티티", "UX디자인"],
    contact: [
      {
        mark: "@ming.morning",
        link: "https://www.instagram.com/ming.morning/",
      },
    ],
    behance: {
      mark: "Kyeongseo Min",
      link: "https://www.behance.net/minky_zz22",
    },
    email: "mingminieee@gmail.com",
    join: 2021,
  },
  {
    id: 6,
    name: "복지은",
    studentId: 19,
    role: "부원",
    intro:
      "안녕하세요, 2019~2022년도 이너컴스에서 활동한 복지은입니다. 인스타그램과 비핸스에서 제 작업물들을 확인하실 수 있습니다.",
    track: ["아이덴티티", "UX디자인", "편집디자인"],
    contact: [
      {
        mark: "@bok.jieun",
        link: "https://www.instagram.com/bok.jieun",
      },
    ],
    behance: {
      mark: "jieun BOK",
      link: "https://www.behance.net/jieun0472d9bb?fbclid=PAAaYlTVM9pjbgG6o535SvID-gVOSnjuvPVrgC7dqPXigsJC5-OrxKcuIoQ3c",
    },
    email: "jieun0472@gmail.com",
    join: 2021,
  },
  {
    id: 7,
    name: "서윤경",
    studentId: 21,
    role: "부원",
    intro: "일단 아직까지는 (?) 디자인이 재미있답니다",
    track: ["아이덴티티", "일러스트레이션", "편집디자인"],
    contact: [
      {
        mark: "@rainbow_sprout",
        link: "https://instagram.com/rainbow_sprout",
      },
      {
        mark: "@sprout_drawing",
        link: "https://instagram.com/sprout_drawing",
      },
      {
        mark: "포트폴리오",
        link: "https://abcdyk.myportfolio.com",
      },
    ],
    behance: {
      mark: "서윤경",
      link: "https://www.behance.net/abcdykcaee",
    },
    email: "abcdyk@naver.com",
    join: 2021,
  },
  {
    id: 8,
    name: "성가은",
    studentId: 19,
    role: "부원",
    intro:
      "안녕하세요 인커미 여러분들 시각디자인과 19학번 성가은입니다! 잘부탁드립니다~",
    track: ["아이덴티티", "영상디자인", "편집디자인"],
    contact: [],
    behance: {
      mark: "Gaeun477",
      link: "https://www.behance.net/gaeun4779eab",
    },
    email: "Gaeun477@gmail.com",
    join: 2021,
  },
  {
    id: 9,
    name: "손지원",
    studentId: 20,
    role: "부원",
    intro:
      "안녕하세요! 새로운 시도를 좋아하는 프로덕트 디자이너, 손지원입니다. 다양한 경험을 바탕으로 문제를 찾아내고 재치있게 해결하는 방법을 연구하고있습니다.",
    track: ["아이덴티티", "UX디자인", "편집디자인"],
    contact: [
      {
        mark: "@suzu.work",
        link: "https://instagram.com/suzu.work?igshid=YmMyMTA2M2Y=",
      },
      {
        mark: "@pieceofcake.xx",
        link: "https://www.instagram.com/pieceofcake.xx/",
      },
    ],
    behance: {
      mark: "jiwon Son",
      link: "https://www.behance.net/wonaji080477e6",
    },
    email: "wonaji0804@gmail.com",
    join: 2021,
  },
  {
    id: 10,
    name: "윤여진",
    studentId: 21,
    role: "2짱",
    intro:
      "안녕하세요, 능력을 키워가는 디자이너 윤여진입니다. 다 해볼 수 있는 학회, 이너컴스를 사랑합니다.",
    track: ["UX디자인", "편집디자인"],
    contact: [
      {
        mark: "@y.eoworks",
        link: "https://www.instagram.com/y.eoworks/",
      },
    ],
    behance: {
      mark: "Yeojin Yun",
      link: "https://www.behance.net/yunyeojin90dd3",
    },
    email: "dbsduwls2@naver.com",
    join: 2021,
  },
  {
    id: 11,
    name: "이수민",
    studentId: 21,
    role: "서기",
    intro:
      "안녕하세요. 21학번 이수민입니다. 디자인에 진심인 이너컴스에서 많이 배울 수 있어 행복합니다! 잘 부탁드립니다~",
    track: ["아이덴티티", "영상디자인"],
    contact: [
      {
        mark: "@dl_summny",
        link: "https://www.instagram.com/dl_summny/",
      },
    ],
    behance: {
      mark: "Sumin Lee",
      link: "https://www.behance.net/wkdal02160a43",
    },
    email: "tnalsl0216@gmail.com",
    join: 2021,
  },
  {
    id: 12,
    name: "전은빈",
    studentId: 20,
    role: "부원",
    intro:
      "즉흥적인 작업을 좋아하는 디자이너 전은빈입니다. 개성있는 컨셉과 재미있는 스토리가 담긴 디자인을 추구합니다.",
    track: ["아이덴티티", "UX디자인"],
    contact: [
      {
        mark: "@bin_n1112",
        link: "https://instagram.com/bin_n1112?igshid=MWM2YjBjM2Q=",
      },
    ],
    behance: {
      mark: "Eunbin Jeon",
      link: "https://www.behance.net/ckaclakdyr6d5f",
    },
    email: "ckaclakdyrlaqkq1142@gmail.com",
    join: 2021,
  },
  {
    id: 13,
    name: "전서정",
    studentId: 21,
    role: "총무",
    intro:
      "안녕하세요! 하찮고 귀여운 아이디어 전문 디자이너이자 인컴의 수금 아티스트 전서정입니다 : )",
    track: ["아이덴티티", "일러스트레이션", "영상디자인"],
    contact: [
      {
        mark: "@lyricism_1119",
        link: "https://www.instagram.com/lyricism_1119/",
      },
      {
        mark: "@haseo_0715",
        link: "https://www.instagram.com/haseo_0715/",
      },
    ],
    behance: {
      mark: "전서정",
      link: "https://www.behance.net/lyricism11f302",
    },
    email: "lyricism1119@naver.com",
    join: 2021,
  },
  {
    id: 14,
    name: "강민영",
    studentId: 22,
    role: "부원",
    intro:
      "안녕하세요! 꾸준히 배우고 성장하는 디자이너 강민영입니다. 일상 속에서 상상하고 꿈꾸는 이미지를 만듭니다.",
    track: ["아이덴티티", "일러스트레이션", "UX디자인"],
    contact: [
      {
        mark: "@fforesvesrt_",
        link: "https://instagram.com/fforesvesrt_",
      },
    ],
    behance: {
      mark: "강민영",
      link: "https://www.behance.net/da4efc3d",
    },
    email: "kmy9336@naver.com",
    join: 2022,
  },
  {
    id: 15,
    name: "김민솔",
    studentId: 22,
    role: "부원",
    intro:
      "안녕하세요 시각디자인과 김민솔입니다! 시각디자인학과 최고의 학회 이너컴스에 어서오세요!",
    track: ["아이덴티티", "영상디자인", "광고디자인"],
    contact: [
      {
        mark: "@pine_cone_49",
        link: "https://www.instagram.com/pine_cone_49/",
      },
    ],
    behance: {
      mark: "김민솔",
      link: "https://www.behance.net/c407f8c5",
    },
    email: "geheimnis4896@gmail.com",
    join: 2022,
  },
  {
    id: 16,
    name: "김슬아",
    studentId: 22,
    role: "부원",
    intro:
      "안녕하세요! 보이는 모든 것들을 만드는 시각디자이너, 김슬아입니다. 사람의 마음을 움직이는 디자인의 힘을 믿고 오늘도 이너컴스와 함께 디자인합니다!",
    track: ["일러스트레이션", "UX디자인", "편집디자인"],
    contact: [
      {
        mark: "@s2ula_a",
        link: "https://www.instagram.com/s2ula_a/",
      },
    ],
    behance: {
      mark: "김슬아",
      link: "https://www.behance.net/dc3dedb3/projects",
    },
    email: "0919sa@naver.com",
    join: 2022,
  },
  {
    id: 17,
    name: "방지현",
    studentId: 21,
    role: "부원",
    intro:
      "안녕하세요! 여러 사람들과 소통하며 기획하고 시각적으로 표현하고 싶은 방지현입니다. 열정 가득한 이너컴스에서 많이 배우고 싶습니다.",
    track: ["아이덴티티", "UX디자인"],
    contact: [
      {
        mark: "@_ba2kery",
        link: "https://www.instagram.com/_ba2kery/",
      },
    ],
    behance: {
      mark: "bang jihyun",
      link: "https://www.behance.net/bangjihyun1",
    },
    email: "bjh6935@naver.com",
    join: 2022,
  },
  {
    id: 18,
    name: "조가은",
    studentId: 19,
    role: "부원",
    intro:
      "안녕하십닉가. 저도 멋있지만 여기 더 멋있는 인커미들 보고 가세요. 그럼 파이팅.",
    track: ["UX디자인", "영상디자인", "편집디자인"],
    contact: [
      {
        mark: "@ga.___.eunn",
        link: "https://www.instagram.com/ga.___.eunn",
      },
    ],
    behance: {
      mark: "조가은",
      link: "https://www.behance.net/b226f69f",
    },
    email: "rkdms9285@naver.com",
    join: 2022,
  },
  {
    id: 19,
    name: "윤은정",
    studentId: 22,
    role: "부원",
    intro:
      "안녕하세요. '나'를 표현하고 실현하는 디자이너 윤은정입니다. 시각디자인전공 학생에게 든든한 길이 되어주는 이너컴스 최고!",
    track: ["아이덴티티", "UX디자인", "편집디자인"],
    contact: [
      {
        mark: "@yun.ej_",
        link: "https://www.instagram.com/yun.ej_/",
      },
      {
        mark: "@yun.eun.jeong",
        link: "https://www.instagram.com/yun.eun.jeong/",
      },
    ],
    behance: {
      mark: "Eunjeong Yun",
      link: "https://www.behance.net/140c1352",
    },
    email: "yyj02080510@daum.net",
    join: 2022,
  },
  {
    id: 20,
    name: "안시언",
    studentId: 22,
    role: "부원",
    intro:
      "안녕하세요~! 22학번 안시언입니다! 밝고 매사에 최선을 다하는 편이에요! 같이 재밌는 이너컴스의 다양한 활동을 해보아요!",
    track: ["아이덴티티", "UX디자인", "편집디자인"],
    contact: [
      {
        mark: "@_0sie0n_",
        link: "https://www.instagram.com/_0sie0n_",
      },
      {
        mark: "@sie0n_archive",
        link: "https://www.instagram.com/sie0n_archive",
      },
    ],
    behance: {
      mark: "ahnsieon",
      link: "https://www.behance.net/d82ea6fd",
    },
    email: "ahnsieon@g.seoultech.ac.kr",
    join: 2022,
  },
  {
    id: 21,
    name: "유예린",
    studentId: 22,
    role: "1짱",
    intro:
      "안녕하세요! 디자인에 스토리를 담고 싶은 디자이너 유예린입니다. 시각디자인과 전공 학회 이너컴스에서 활동하고 있습니다!",
    track: ["아이덴티티", "일러스트레이션", "편집디자인"],
    contact: [
      {
        mark: "@yulmu1",
        link: "https://instagram.com/yulmu1?igshid=MWM2YjBjM2Q=",
      },
    ],
    behance: {
      mark: "유예린",
      link: "https://www.behance.net/3edec9d7",
    },
    email: "yerin55746302@gmail.com",
    join: 2022,
  },
];

const MemberListBox = styled.div`
  margin-top: 156px;
  text-align: center;
  .period {
    padding: 12px 28px;
    background-color: ${(props) => props.theme.color.black_1F};
    color: ${(props) => props.theme.color.red};
    font-size: 21px;
    font-weight: 700;
    border-radius: 9px;
    margin-bottom: 81px;
    display: inline-block;
  }
  .origin_members {
    width: 1025px;
    margin: 0 auto;
    justify-content: center;
    gap: 50px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 223.2px;
  }
  .new_members {
    min-height: 500px;
    width: 810px;
    margin: 0 auto;
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
    padding-bottom: 348.04px;
  }
  .item {
    text-align: center;
    .thumb {
      width: 165px;
      height: 247.01px;
      background-color: #a9a9a9;
      border-radius: 12px;
      margin-bottom: 16.5px;
      cursor: pointer;
    }
    .name {
      font-size: 18px;
      font-weight: 700;
      color: ${(props) => props.theme.color.white};
      margin-bottom: 12px;
    }
    .role {
      font-size: 12px;
      font-weight: 500;
      color: ${(props) => props.theme.color.black};
      background-color: ${(props) => props.theme.color.gray_D9};
      border-radius: 5px;
      padding: 4px 11px;
    }
  }
  .widthDiff {
    border: 1px solid white;
    justify-content: center;
    height: 300px;
    gap: 50px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 223.2px;
    &:nth-of-type(odd) {
      width: 810px;
      margin: 0 auto;
    }
    &:nth-of-type(even) {
      width: 1025px;
      margin: 0 auto;
    }
  }
`;

const MemberList = ({ year }: { year: number }) => {
  return (
    <>
      {members && (
        <MemberListBox>
          <span className="period">Original members</span>
          <div className="origin_members">
            {members
              .filter((i) => i?.join < year)
              .map((item) => (
                <div className="item" key={item?.id}>
                  <Link href={`/members/${item?.id}`}>
                    <div className="thumb"></div>
                  </Link>
                  <p className="name">{item?.name}</p>
                  {item?.role !== "부원" ? (
                    <span className="role">{item?.role}</span>
                  ) : null}
                </div>
              ))}
          </div>
          <span className="period">New members</span>
          <div className="new_members">
            {members
              .filter((i) => i?.join === year)
              .map((item) => (
                <div className="item" key={item?.id}>
                  <Link href={`/members/${item?.id}`}>
                    <div className="thumb"></div>
                  </Link>
                  <p className="name">{item?.name}</p>
                  {item?.role ? (
                    <span className="role">{item?.role}</span>
                  ) : null}
                </div>
              ))}
          </div>
        </MemberListBox>
      )}
    </>
  );
};

export default MemberList;
