"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import HeroSection from "./HeroSection";
import CollectionsSection from "./CollectionsSection";
import { useEffect } from "react";
import ProductsSection from "./productsSection";
import CollectionsSectionDown from "./CollectionsSectionDown";
import CTASection from "./ctaSection";

const LandingPage = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop - window.innerHeight / 1.5 &&
          scrollPosition <= sectionTop + sectionHeight
        ) {
          section.classList.add("appear");
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div
      className={classNames(
        styles.homeWrapper,
        "min-h-screen bg-brand-900 text-white"
      )}
    >
      {/* <VerticalNavbar /> */}
      <HeroSection id="hero" />
      <CollectionsSection id="collections" />
      {/* <FeaturedSection id="featured" /> */}
      <ProductsSection id="" />
      <CollectionsSectionDown id="" />
      <ProductsSection id="" />
      <CTASection id="cta" />
    </div>
  );
};

export default LandingPage;
