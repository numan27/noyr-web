"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import Image from "next/image";
import { Images } from "assets";
import useWindowDimensions from "hooks/useWindowDimensions";

interface CustomSecondaryHeadingProps {
  heading: string | any;
  textCase?: "uppercase" | "lowercase" | "capitalize" | "none";
  size?: "default" | "md" | "small" | "large";
  isHaveTopLine?: boolean;
}

const CustomSecondaryHeading = ({
  heading,
  isHaveTopLine = true,
  size = "default",
  textCase = "none",
}: CustomSecondaryHeadingProps) => {
  const { width } = useWindowDimensions();
  const HeadingTag =
    size === "large"
      ? "h1"
      : size === "md"
      ? "h2"
      : size === "small"
      ? "h5"
      : "h3";

  return (
    <div className={classNames(styles.sectionHeading)}>
      <HeadingTag
        style={{
          textTransform: textCase,
          fontSize: size === "large" ? "50px" : undefined,
        }}
        className={classNames(styles.title)}
      >
        <span>{heading}</span>
        {isHaveTopLine && width >= 640 && (
          <span className={classNames(styles.lineX)}>
            <Image height={15} src={Images.GradientLineX} alt="lineX-icon" />
          </span>
        )}
      </HeadingTag>
    </div>
  );
};

export default CustomSecondaryHeading;
