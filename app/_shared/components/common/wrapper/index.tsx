"use client";

import { useEffect } from "react";
// import Footer from "../footer";
// import Header from "../header";
import AOS from "aos";
import Footer from "../Footer";
import Header from "../header";

const Wrapper = ({ children, user }: any) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      // offset: 200,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <>
      {/* <Header userCookie={user} /> */}
      <Header />
      <main className="">{children}</main>
      <Footer />
    </>
  );
};

export default Wrapper;
