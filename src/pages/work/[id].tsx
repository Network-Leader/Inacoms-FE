import { useRouter } from "next/router";
import Member from "../../components/members/main/memberList/member";
import Each from "../../components/work/main/eachWork/each";
import works from "../../data/works.json";

const EachWork = () => {
  const router = useRouter();
  const work = works.filter((item) => item.id === Number(router.query.id));
  return (
    <>
      <Each work={work} />
    </>
  );
};

export default EachWork;
