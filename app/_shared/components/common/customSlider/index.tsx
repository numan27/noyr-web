"use client";

import React, { useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import styles from "./style.module.scss";
import { Images } from "assets";
import Image from "next/image";
import classNames from "classnames";

interface CustomSliderProps {
  settings: Settings;
  children: React.ReactNode;
}

const CustomSlider: React.FC<CustomSliderProps> = ({ settings, children }) => {
  const sliderRef = useRef<Slider | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const updatedSettings = {
    ...settings,
    arrows: false,
    dots: false,
    beforeChange: (current: number, next: number) => setActiveSlide(next),
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleDotClick = (index: number) => {
    sliderRef.current?.slickGoTo(index);
  };

  return (
    <div className={classNames(styles.sliderWrapper)}>
      <Slider
        className="flex justify-center items-center m-auto h-full"
        ref={sliderRef}
        {...updatedSettings}
      >
        {children}
      </Slider>
      <div
        className={classNames(
          styles.arrowContainer,
          "xs:flex items-center justify-center sm:gap-3 gap-2 hidden"
        )}
      >
        {/* Left Arrow */}
        <div
          className={`${styles.arrowButton} ${styles.prevArrow}`}
          onClick={handlePrev}
        >
          {/* <Image src={Images.SliderArrowLeft} alt="icon" /> */}
        </div>

        {/* Dots */}
        <div className={styles.dotsContainer}>
          <ul className={(styles.dotsList, "flex items-center sm:gap-4 gap-2")}>
            {Array.from({
              length: children ? React.Children.count(children) : 0,
            }).map((_, i) => (
              <li
                key={i}
                onClick={() => handleDotClick(i)}
                className={`${styles.dot} ${
                  activeSlide === i ? styles.active : ""
                }`}
              >
                <span>{i + 1}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Arrow */}
        <div
          className={`${styles.arrowButton} ${styles.nextArrow}`}
          onClick={handleNext}
        >
          {/* <Image src={Images.SliderArrowRight} alt="icon" /> */}
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;
