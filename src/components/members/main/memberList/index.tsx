import styled from "@emotion/styled";
import Link from "next/link";
import members from "../../../../data/members.json";

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
