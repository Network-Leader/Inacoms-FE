import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

const EachSection = styled.section`
  width: 100vw;
  background-color: #3d3d3d;
  padding: 121px 0 634px;
`;
const EachBox = styled.div`
  background-color: black;
  width: 1024px;
  height: 2793px;
  margin: 0 auto;
  border-radius: 20px;
  position: relative;
  .x-img {
    position: absolute;
    top: -8px;
    right: -47px;
    cursor: pointer;
  }
`;
const Each = ({ work }: { work: any }) => {
  return (
    <EachSection>
      <EachBox>
        <Link href="/work">
          <Image
            src="/images/icons/members/members_x.png"
            alt="x"
            width={18}
            height={18}
            className="x-img"
          />
        </Link>
      </EachBox>
    </EachSection>
  );
};

export default Each;
