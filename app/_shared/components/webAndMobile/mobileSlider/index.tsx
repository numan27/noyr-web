"use client";

import classNames from "classnames";
import React, { forwardRef, ForwardedRef } from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import { sliderData } from "./constant";
import CustomSlider from "components/common/customSlider";

const MobileSlider = forwardRef<HTMLDivElement, {}>(
  (props, ref: ForwardedRef<HTMLDivElement>) => {
    // const itemsPerPage = width > 990 ? 2 : 1;

    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      // centerMode: true,
      autoplaySpeed: 3000,
      arrows: false,
    };

    return (
      <div className={classNames(styles.mainContainer)} ref={ref}>
        <div className="md:pt-0 pt-6">
          <div className={classNames(styles.customContainer)}>
            <CustomSlider settings={sliderSettings}>
              {sliderData.map((items, index) => (
                <span
                  key={index}
                  className={classNames(
                    "flex justify-center items-center w-full"
                  )}
                >
                  <Image
                    data-aos="zoom-out"
                    src={items}
                    alt="team-review"
                    className={classNames(styles.reviewImage, "mx-auto")}
                  />
                </span>
              ))}
            </CustomSlider>
          </div>
        </div>
      </div>
    );
  }
);

export default MobileSlider;
