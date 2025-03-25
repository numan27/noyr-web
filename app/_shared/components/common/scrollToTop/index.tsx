"use client";

import classNames from "classnames";
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from "./style.module.scss";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={classNames(styles.scrollToTop, {
        [styles.visible]: isVisible,
      })}
    >
      <FaArrowUp size={18} />
    </button>
  );
};

export default ScrollToTop;
