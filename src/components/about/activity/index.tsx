import styled from "@emotion/styled";
import Image from "next/image";
import { useScrollPercent } from "../../../hooks/useScrollPercent";

const ActivitySection = styled.section<{ scrollP: number }>`
  background-color: ${(props) => props.theme.color.black};
  padding-bottom: 412.53px;

  .activityBox {
    width: 1038px;
    margin: 0 auto;
    display: flex;
    gap: 160px;
    height: 2110px;
    .textBox {
      .title {
        position: sticky;
        top: 83px;
        font-size: 60px;
        font-weight: 700;
        line-height: 138.2%;
        color: ${(props) => props.theme.color.white};
        margin-bottom: ${(props) => (props.scrollP > 70 ? "110px" : "30px")};
      }
      .subtitle {
        position: sticky;
        top: 280px;
        font-size: 24px;
        font-weight: 500;
        line-height: 162.2%;
        color: ${(props) => props.theme.color.gray_B3};
      }
    }
    .contentBox {
      .actItem {
        margin-bottom: 200px;
        .actTitle {
          font-size: 32px;
          font-weight: 700;
          color: ${(props) => props.theme.color.white};
          margin-bottom: 36px;
        }
        .actSub {
          font-size: 18px;
          font-weight: 500;
          line-height: 33.84px;
          color: ${(props) => props.theme.color.gray_B3};
          white-space: pre-line;
          margin-bottom: 44.6px;
        }
      }
    }
  }
`;

const actList = [
  {
    id: 1,
    title: "세미나",
    des: "매년 이너컴스 회원들에게 도움을 주기 위해 멋진 사회인이\n된 선배님들이 세미나를 진행합니다.",
    url: "/images/item/about/act1.png",
  },
  {
    id: 2,
    title: "내부 스터디",
    des: "신입생을 대상으로 프로그램 활용법을 알려드립니다.",
    url: "/images/item/about/act2.png",
  },
  {
    id: 3,
    title: "정기 전시",
    des: "17년도부터 시작된 자음 전시전으로, 학기말 혹은 방학에\n자율적으로 참여합니다.",
    url: "/images/item/about/act3.png",
  },
];

const Activity = () => {
  const scrollP = useScrollPercent();
  console.log(scrollP);
  return (
    <ActivitySection scrollP={scrollP}>
      <div className="activityBox">
        <div className="textBox">
          <div className="title">
            인커미만을
            <br />
            위한 활동
          </div>
          <div className="subtitle">
            INACOMS에서는
            <br />
            이런 활동을 할 수 있어요!
          </div>
        </div>
        <div className="contentBox">
          {actList.map((item) => (
            <div className="actItem" key={item.id}>
              <p className="actTitle">{item.title}</p>
              <p className="actSub">{item.des}</p>
              <Image src={item.url} alt="act" width={602} height={397} />
            </div>
          ))}
        </div>
      </div>
    </ActivitySection>
  );
};

export default Activity;
