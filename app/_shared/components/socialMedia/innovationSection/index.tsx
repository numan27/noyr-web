"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import CustomButton from "components/common/customButton";
import CustomSectionHeading from "components/common/customSectionHeading";
import Image from "next/image";
import { Images } from "assets";
import { handleScrollToQuote } from "utils/scrollHelpers";

const InnovationSection = () => {
  return (
    <div className={classNames(styles.sectionWrapper, "h-full")}>
      <div className={classNames(styles.customContainer)}>
        <div
          className={classNames(
            styles.contentContainer,
            "grid md:grid-cols-2 grid-cols-1 lg:gap-16 gap-8"
          )}
        >
          {/* Left Side - Text Content */}
          <div
            className={classNames(
              styles.content,
              "flex flex-col md:items-start items-center justify-center gap-5"
            )}
          >
            <CustomSectionHeading
              heading="Adaptability & Innovation"
              description="Social media moves fast, and staying ahead is a must. At Hayes Media, we’re all about keeping up with the latest trends, algorithms, and your competitors to make sure your business stays relevant and impactful."
            />
            <div className="flex md:justify-start justify-center mt-2">
              <CustomButton
                title="Get a Custom Quote"
                onClick={handleScrollToQuote}
              />
            </div>
          </div>

          {/* Right Side - Hexagon Grid */}
          <div
            className={classNames(
              styles.mediaContainer,
              "flex md:justify-end justify-center"
            )}
          >
            <Image src={Images.Hexagon} alt="Social Media Marketing Service" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationSection;
