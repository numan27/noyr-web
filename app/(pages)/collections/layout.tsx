import Footer from "components/common/Footer";
import HeaderCollections from "components/common/headerGeneral";
import Wrapper from "components/common/wrapper";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <HeaderCollections />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
