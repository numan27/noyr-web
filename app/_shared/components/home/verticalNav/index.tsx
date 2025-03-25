"use client";

import { useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";

const VerticalNavbar = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
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
          setActiveSection(section.id);
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getBackgroundImage = () => {
    switch (activeSection) {
      case "hero":
        return Images.SampleImg1;
      case "collections":
        return Images.SampleImg2;
      case "featured":
        return Images.SampleImg3;
      case "category":
        return Images.SampleImg4;
      default:
        return Images.SampleImg5;
    }
  };

  return (
    <div
      className={classNames(styles.navbarWrapper)}
      style={{ backgroundImage: `url(${getBackgroundImage()})` }}
    >
      <nav className={styles.navbar}>
        <a
          href="#hero"
          className={activeSection === "hero" ? styles.active : ""}
        >
          Hero
        </a>
        <a
          href="#collections"
          className={activeSection === "collections" ? styles.active : ""}
        >
          Collections
        </a>
        <a
          href="#featured"
          className={activeSection === "featured" ? styles.active : ""}
        >
          Featured
        </a>
        <a
          href="#category"
          className={activeSection === "category" ? styles.active : ""}
        >
          Category
        </a>
      </nav>
    </div>
  );
};

export default VerticalNavbar;
