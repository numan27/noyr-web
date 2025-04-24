"use client";

import { useEffect } from "react";
import AOS from "aos";
import Footer from "../Footer";
import Header from "../header";

interface WrapperProps {
  children: React.ReactNode;
  isLandingPage?: boolean;
}

const Wrapper = ({ children, isLandingPage = false }: WrapperProps) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <>
      <Header isLandingPage={isLandingPage} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Wrapper;
