import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

const EachSection = styled.section`
  width: 100vw;
  background-color: #3d3d3d;
  padding: 121px 0 634px;
`;
const EachBox = styled.div<{ thumb: string }>`
  background-color: black;
  width: 1024px;
  padding-bottom: 50px;
  margin: 0 auto;
  border-radius: 20px;
  position: relative;
  .x-img {
    position: absolute;
    top: -8px;
    right: -47px;
    cursor: pointer;
  }
  .titleBox {
    width: 852px;
    margin: 0 auto;
    padding-bottom: 47px;
    .type {
      color: ${(props) => props.theme.color.white};
      background-color: ${(props) => props.theme.color.red};
      font-size: 16px;
      font-weight: 700;
      padding: 5px 11.5px;
      display: inline-block;
      border-radius: 4px;
      margin-bottom: 27px;
      margin-top: 25px;
    }
    .title {
      font-size: 32px;
      font-weight: 700;
      color: ${(props) => props.theme.color.white};
      margin-bottom: 19px;
    }
    .duration {
      color: ${(props) => props.theme.color.gray_8E};
      font-size: 14px;
      font-weight: 500;
    }
  }
  .thumb {
    margin-bottom: 30px;
    .thumb-img {
      width: 100%;
    }
  }
  .imgBox {
    .imgs {
      width: 100%;
      margin-bottom: 30px;
    }
  }
  .contentBox {
    padding-top: 43px;
    padding-left: 88px;
    .des {
      width: 648px;
      font-size: 14px;
      color: ${(props) => props.theme.color.white};
      line-height: 26.77px;
      white-space: pre-line;
      margin-bottom: 50px;
    }
    .tagBox {
      .tag {
        font-size: 12px;
        color: ${(props) => props.theme.color.gray_F3};
        background: linear-gradient(
            0deg,
            rgba(96, 96, 96, 0.1),
            rgba(96, 96, 96, 0.1)
          ),
          rgba(255, 255, 255, 0.1);
        border-radius: 18px;
        padding: 6px 18px;
        margin-right: 10px;
      }
    }
  }
`;
const Each = ({ work }: { work: any }) => {
  return (
    <EachSection>
      <EachBox thumb={work[0]?.thumbnail}>
        <Link href="/work">
          <Image
            src="/images/icons/members/members_x.png"
            alt="x"
            width={18}
            height={18}
            className="x-img"
          />
        </Link>
        <div className="titleBox">
          <span className="type">{work[0]?.type}</span>
          <div className="title">{work[0]?.title}</div>
          <div className="duration">
            {work[0]?.start}
            <span style={{ marginLeft: "8px", marginRight: "8px" }}>
              {work[0]?.end ? "-" : null}
            </span>
            {work[0]?.end}
          </div>
        </div>
        <div className="thumb">
          <img src={work[0]?.thumbnail} className="thumb-img" />
        </div>
        <div className="imgBox">
          {work[0]?.imgs?.map((item: any) => (
            <img src={item.url} className="imgs" key={item.id} />
          ))}
        </div>
        <div className="contentBox">
          <div className="des">{work[0]?.des}</div>
          <div className="tagBox">
            {work[0]?.tags?.map((item: any) => (
              <span key={item.id} className="tag">
                {item.tag}
              </span>
            ))}
          </div>
        </div>
      </EachBox>
    </EachSection>
  );
};

export default Each;
