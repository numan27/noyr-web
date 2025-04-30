"use client";

import Footer from "components/common/Footer";
import Header from "components/common/header";
import HeaderCollections from "components/common/headerGeneral";
import Wrapper from "components/common/wrapper";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* <HeaderCollections /> */}
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
