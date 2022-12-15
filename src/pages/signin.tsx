import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LeftBg from "../components/sign/leftBg";
import RightForm from "../components/sign/rightForm";
import styled from "@emotion/styled";

const SignContainer = styled.section`
  display: flex;
  width: 100vw;
`;

const SignIn = () => {
  const router = useRouter();
  const [ran, setRan] = useState<string | undefined>();
  useEffect(() => {
    const random = router.asPath.split("?")[1];
    setRan(random);
  }, [ran]);
  return (
    <SignContainer>
      <LeftBg random={ran} />
      <RightForm />
    </SignContainer>
  );
};

export default SignIn;
