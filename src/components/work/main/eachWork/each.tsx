import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import members from "../../../../data/members.json";
const EachSection = styled.section`
  width: 100vw;
  background-color: #3d3d3d;
  padding: 121px 0 634px;
`;
const EachBox = styled.div<{ thumb: string }>`
  background-color: black;
  width: 1024px;
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
    margin-bottom: 90px;
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
  .subBox {
    width: 848px;
    margin: 0 auto;
    display: flex;
    min-height: 210px;
    .toolBox {
      width: 52%;
      .tool {
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
      }
    }
    .memberBox {
      width: 48%;
      .members {
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
        .member {
          text-align: center;
          .memname {
            font-size: 12px;
            color: white;
            margin-top: 10px;
          }
        }
      }
    }
    .subtitle {
      color: white;
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 20px;
    }
  }
  .leaderInfoBox {
    width: 100%;
    padding: 81px 0 54px 0;
    background-color: ${(props) => props.theme.color.black_14};
    .avatar {
      text-align: center;
    }
    .name {
      margin: 18px 0 34px 0;
      font-size: 20px;
      color: white;
      font-weight: 700;
      text-align: center;
    }
    .email {
      display: flex;
      gap: 21px;
      margin-bottom: 16px;
      margin-left: 35%;
    }
    .insta {
      display: flex;
      gap: 21px;
      margin-bottom: 16px;
      margin-left: 35%;
    }
    .behance {
      display: flex;
      gap: 21px;
      margin-left: 35%;
    }
    .sub {
      font-size: 14px;
      font-weight: 700;
      color: white;
      width: 59.39px;
    }
    .info {
      font-size: 14px;
      color: white;
    }
    .link {
      border: 1px solid;
      border-color: ${(props) => props.theme.color.red};
      color: ${(props) => props.theme.color.red};
      border-radius: 67px;
      font-size: 14px;
      font-weight: 500;
      padding: 13px 32px;
      display: block;
      width: 191.4px;
      margin: 38px auto 0;
      text-align: center;
      cursor: pointer;
      &:hover {
        background-color: ${(props) => props.theme.color.red};
        color: white;
      }
    }
  }
  .copyrightBox {
    text-align: center;
    padding: 51px 0 76px 0;
    .cr {
      color: ${(props) => props.theme.color.gray_6F};
      font-size: 14px;
      font-weight: 500;
      margin-top: 24px;
    }
  }
`;
const Each = ({ work }: { work: any }) => {
  const leader_info = members?.filter((item) => item.id === work[0]?.leader_id);

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
        <div className="subBox">
          <div className="toolBox">
            <p className="subtitle">활용 툴</p>
            <div className="tool">
              {work[0]?.tools?.map((item: any) => (
                <Image
                  src={item?.tool}
                  alt="tool"
                  width={56}
                  height={56}
                  key={item.id}
                />
              ))}
            </div>
          </div>
          <div className="memberBox">
            <p className="subtitle">팀원</p>
            <div className="members">
              {work[0]?.member?.map((item: any) => (
                <div className="member" key={item.id}>
                  {item.name && (
                    <Image
                      src="/images/icons/work/avatar_member.png"
                      alt="아바타"
                      width={46.74}
                      height={46.74}
                    />
                  )}
                  <div className="memname">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="leaderInfoBox">
          <div className="avatar">
            <Image
              src="/images/icons/work/avatar_member.png"
              alt="아바타"
              width={66}
              height={66}
            />
          </div>
          <p className="name">{work[0]?.leader}</p>
          <div className="email">
            <div className="sub">Email</div>
            <div className="info">{leader_info[0]?.email}</div>
          </div>
          <div className="insta">
            <div className="sub">Insta</div>
            <div className="info">{leader_info[0]?.contact[0]?.mark}</div>
          </div>
          <div className="behance">
            <div className="sub">Behance</div>
            <div className="info">{leader_info[0]?.behance?.link}</div>
          </div>
          <Link href={`/members/${leader_info[0]?.id}`}>
            <div className="link">Let’s go Profile link</div>
          </Link>
        </div>
        <div className="copyrightBox">
          <Image
            src="/images/logo/work_logo.png"
            alt="로고"
            width={86}
            height={21}
          />
          <p className="cr">Copyright ⓒ{work[0]?.leader} All Rights Reserved</p>
        </div>
      </EachBox>
    </EachSection>
  );
};

export default Each;