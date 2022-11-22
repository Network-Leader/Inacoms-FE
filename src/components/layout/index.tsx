import Footer from "./footer";
import Header from "./header";
import styled from "@emotion/styled";

const Main = styled.main`
  margin-top: 105px;
  min-height: calc(100vh - 105px - 318px);
  z-index: 999;
`;

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
