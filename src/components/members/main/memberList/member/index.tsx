import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import Info from "./info";
const MemberContainer = styled.section`
  position: relative;
  width: 100vw;
  display: flex;
  background-color: #636363;
  height: calc(100vh - 83px);
  display: flex;
  justify-content: center;
  align-items: center;
  .prev_icon {
    position: absolute;
    top: 42.8vh;
    left: 10.1vw;
  }
  .next_icon {
    position: absolute;
    top: 42.8vh;
    right: 10.1vw;
  }
`;

const Member = ({
  member,
  length,
  dyn,
}: {
  member: any;
  length: number;
  dyn: number;
}) => {
  return (
    <>
      {member ? (
        <MemberContainer>
          <div className="prev_icon">
            {dyn === 1 ? (
              <Link href={`/members/${length}`}>
                <Image
                  src="/images/icons/members/members_prev.png"
                  alt="prev"
                  width={14}
                  height={30}
                  style={{ cursor: "pointer" }}
                />
              </Link>
            ) : (
              <Link href={`/members/${dyn - 1}`}>
                <Image
                  src="/images/icons/members/members_prev.png"
                  alt="prev"
                  width={14}
                  height={30}
                  style={{ cursor: "pointer" }}
                />
              </Link>
            )}
          </div>
          <Info member={member} />
          <div className="next_icon">
            {dyn === length ? (
              <Link href={`/members/1`}>
                <Image
                  src="/images/icons/members/members_next.png"
                  alt="prev"
                  width={14}
                  height={30}
                  style={{ cursor: "pointer" }}
                />
              </Link>
            ) : (
              <Link href={`/members/${dyn + 1}`}>
                <Image
                  src="/images/icons/members/members_next.png"
                  alt="prev"
                  width={14}
                  height={30}
                  style={{ cursor: "pointer" }}
                />
              </Link>
            )}
          </div>
        </MemberContainer>
      ) : (
        <p>no data</p>
      )}
    </>
  );
};

export default Member;
