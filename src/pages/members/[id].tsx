import { useRouter } from "next/router";
import Member from "../../components/members/main/memberList/member";
import members from "../../data/members.json";
const EachMember = () => {
  const router = useRouter();
  const member = members.filter((item) => item.id === Number(router.query.id));
  return (
    <>
      <Member
        member={member}
        length={members.length}
        dyn={Number(router.query.id)}
      />
    </>
  );
};

export default EachMember;
