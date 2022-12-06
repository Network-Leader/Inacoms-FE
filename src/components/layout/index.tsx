import Footer from "./footer";
import Header from "./header";
import styled from "@emotion/styled";

const Main = styled.main`
  margin-top: 83px;
  min-height: calc(100vh - 83px - 318px);
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
