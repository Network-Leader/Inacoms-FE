import styled from "@emotion/styled";
import Image from "next/image";

const OutBox = styled.div`
  width: 1033px;
  margin: 0 auto;
  .titleBox {
    text-align: center;
    margin-bottom: 100px;
    .title {
      font-size: 60px;
      font-weight: 700;
      line-height: 69.72px;
      margin-bottom: 15px;
      color: ${(props) => props.theme.color.white};
    }
    .subtitle {
      font-size: 24px;
      line-height: 44.21px;
      color: ${(props) => props.theme.color.white};
    }
  }
  .contentBox {
    border: 1px solid white;
    padding: 123px 80px;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
    .item {
      width: 155px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .itemTitle {
        color: ${(props) => props.theme.color.white};
        font-weight: 500;
        font-size: 18px;
        margin: 13px;
      }
    }
  }
`;

const outData = [
  { id: 1, url: "/images/item/output/yogiyo.png", title: "위대한 상상" },
  { id: 2, url: "/images/item/output/line.png", title: "Line" },
  { id: 3, url: "/images/item/output/tbwa.png", title: "TBWA" },
  { id: 4, url: "/images/item/output/genmon.png", title: "GENTLEMONSTER" },
  { id: 5, url: "/images/item/output/dnmd.png", title: "D.NOMADE" },
  { id: 6, url: "/images/item/output/samsung.png", title: "Samsung" },
  { id: 7, url: "/images/item/output/mineum.png", title: "민음사" },
  { id: 8, url: "/images/item/output/daeheung.png", title: "(주)대홍기획" },
  { id: 9, url: "/images/item/output/kobaco.png", title: "한국방송광고공사" },
  { id: 10, url: "/images/item/output/mamamoo.png", title: "mamamoo" },
  { id: 11, url: "/images/item/output/etc.png", title: "사이언스 북스" },
  { id: 12, url: "/images/item/output/etc.png", title: "Lorem Ipsum" },
  { id: 13, url: "/images/item/output/etc.png", title: "Lorem Ipsum" },
];

const Out = () => {
  return (
    <OutBox>
      <div className="titleBox">
        <p className="title">Output</p>
        <p className="subtitle">INACOMS 학회원들의 Output</p>
      </div>
      <div className="contentBox">
        {outData.map((item) => (
          <div className="item" key={item.id}>
            <Image src={item.url} alt="썸네일" width={144} height={144} />
            <p className="itemTitle">{item.title}</p>
          </div>
        ))}
      </div>
    </OutBox>
  );
};

export default Out;
