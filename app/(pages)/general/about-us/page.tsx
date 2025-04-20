"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import HeroSection from "components/collections/heroSection";
import Stats from "components/about/stats";
import CEO from "components/about/ceo";
import MissionVision from "components/about/missionVision";

export default function Sales() {
  return (
    <div className={classNames(styles.homeWrapper, "min-h-screen text-white")}>
      <HeroSection
        title="About Noyr"
        desc="Noyr is a modern clothing brand born from a passion for minimalist design and timeless fashion. We're a startup on a mission to redefine everyday style with clean silhouettes, quality fabrics, and intentional details."
      />
      <MissionVision />
      <CEO />
      <Stats />
    </div>
  );
}
