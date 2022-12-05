import styled from "@emotion/styled";
import Orien1 from "../../../../public/images/item/orien1.png";
import Orien2 from "../../../../public/images/item/orien2.png";
import Orien3 from "../../../../public/images/item/orien3.png";

const OrientaionSection = styled.section`
  background-color: ${(props) => props.theme.color.black};
  padding-bottom: 515px;
  .inner {
    width: 971px;
    height: 438px;
    margin: 0 auto;
    display: flex;
    gap: 138px;
    .item {
      width: 231px;
      .img {
        width: 100%;
        height: 231px;
        border-radius: 50%;
        overflow: hidden;
        background-image: ${(props) => props.theme.color.gray_D9};
      }
      .titleBox {
        font-size: 32px;
        font-weight: 700;
        color: ${(props) => props.theme.color.gray_F3};
        line-height: 191.2%;
        text-align: center;
        margin: 27px 0 17px 0;
      }
      .desBox {
        font-weight: 500;
        font-size: 18px;
        line-height: 191.2%;
        color: ${(props) => props.theme.color.gray_C3};
        text-align: center;
        white-space: pre-line;
      }
    }
  }
`;

const Item = [
  {
    id: 1,
    src: "/images/item/orien1.png",
    title: "피드백 문화",
    des: "선후배간 자유로운 피드백을\n통해 프로젝트를 발전시키는\n문화를 지향합니다.",
  },
  {
    id: 2,
    src: "/images/item/orien2.png",
    title: "협력 지향",
    des: "협력적 사고를 기반으로\n학회원과 소통하며 디자인\n하는 관계를 바라봅니다.",
  },
  {
    id: 3,
    src: "/images/item/orien3.png",
    title: "다양성",
    des: "큰 주제 및 범주 내에서\n각자의 선호에 따라\n다양하게 진행합니다.",
  },
];

const Orientation = () => {
  return (
    <OrientaionSection>
      <div className="inner">
        {Item.map((item) => (
          <div className="item" key={item.id}>
            {/* <div className="img"></div> */}
            <img src={item.src} alt="img" className="img" />
            <div className="titleBox">{item.title}</div>
            <div className="desBox">{item.des}</div>
          </div>
        ))}
      </div>
    </OrientaionSection>
  );
};

export default Orientation;
