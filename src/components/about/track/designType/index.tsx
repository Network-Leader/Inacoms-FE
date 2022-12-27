import styled from "@emotion/styled";

const TypeDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  z-index: 33;
`;

const Type = styled.div<{ itemType: string; type: string }>`
  overflow: hidden;
  height: ${(props) => (props.itemType === props.type ? "120.67px" : "32px")};
  transition: all 0.3s;
  .list {
    cursor: pointer;
    font-size: 32px;
    font-weight: 600;
    color: ${(props) =>
      props.itemType === props.type ? props.theme.color.red : "#343434"};
    margin-bottom: 19px;
  }
  .sub {
    font-size: 18px;
    font-weight: 500;
    color: ${(props) => props.theme.color.gray_B3};
    line-height: 33.84px;
    white-space: pre-line;
  }
`;

const typeList = [
  {
    id: 1,
    title: "아이덴티티 디자인",
    des: "기업이나  브랜드가 갖는 정체성을\n시각적으로 표현한 디자인",
    type: "identity",
  },
  {
    id: 2,
    title: "일러스트 * 영상 디자인",
    des: "사용자 경험에 대한 모든 프로세스에\n대한 디자인 경험 확장",
    type: "illus",
  },
  {
    id: 3,
    title: "서비스 디자인",
    des: "고객 경험을 통해 제품과 서비스 전반에\n아이디어를 구체화하는 디자인",
    type: "service",
  },
  {
    id: 4,
    title: "편집 디자인",
    des: "신문, 잡지, 서적 등의 출판물을 포함\n하는 디자인",
    type: "edit",
  },
];

const DesignType = ({ type, setType }: { type: string; setType: any }) => {
  return (
    <TypeDiv>
      {typeList.map((item) => (
        <Type
          key={item.id}
          itemType={item.type}
          type={type}
          onMouseDown={(e) => {
            e.preventDefault();
          }}
          onClick={() => setType(item.type)}
        >
          <p className="list">{item.title}</p>
          <p className="sub">{item.des}</p>
        </Type>
      ))}
    </TypeDiv>
  );
};

export default DesignType;

// const DesignType = ({ type, setType }: { type: string; setType: any }) => {
//   return (
//     <TypeDiv type={type}>
//       <div className="type identity">
//         <div className="title" onClick={() => setType("identity")}>
//           아이덴티티 디자인
//         </div>
//         <div className="sub">
//           기업이나 브랜드가 갖는 정체성을
//           <br />
//           시각적으로 표현한 디자인
//         </div>
//       </div>
//       <div className="type illust">
//         <div className="title">일러스트 * 영상 디자인</div>
//         <div className="sub">
//           사용자 경험에 대한 모든 프로세스에
//           <br />
//           대한 디자인 경험 확장
//         </div>
//       </div>
//       <div className="type service">
//         <div className="title">서비스 디자인</div>
//         <div className="sub">
//           고객 경험을 통해 제품과 서비스 전반에
//           <br />
//           아이디어를 구체화하는 디자인
//         </div>
//       </div>
//       <div className="type edit">
//         <div className="title">편집 디자인</div>
//         <div className="sub">
//           신문, 잡지, 서적 등의 출판물을 포함
//           <br />
//           하는 디자인
//         </div>
//       </div>
//     </TypeDiv>
//   );
// };

// export default DesignType;
