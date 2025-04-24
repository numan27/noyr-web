import Wrapper from "components/common/wrapper";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <Wrapper isLandingPage={false}>{children}</Wrapper>;
};

export default Layout;
