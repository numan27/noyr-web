import React from "react";
import styles from "./style.module.scss";
import classNames from "classnames";

interface CustomAnimatedBorderProps {
  children: React.ReactNode;
  gradientColors?: string;
  animationSpeed?: string;
  borderRadius?: string;
}

const CustomAnimatedBorder = ({
  children,
  gradientColors = "linear-gradient(135deg, #EC1E24 0%, #141212 50%, #902880 100%)",
  animationSpeed = "4s",
  borderRadius = "6px",
}: CustomAnimatedBorderProps) => {
  return (
    <div
      className={classNames(
        styles.gradientBorderWrapper,
        "overflow-y-visible flex justify-center items-center"
      )}
      style={
        {
          "--gradient-colors": gradientColors,
          "--animation-speed": animationSpeed,
          "--border-radius": borderRadius,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default CustomAnimatedBorder;
