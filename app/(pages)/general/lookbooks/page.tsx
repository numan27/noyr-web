"use client";
import React from "react";
import styles from "./style.module.scss";
import HeroSection from "../../../_shared/components/collections/heroSection";
import LookbookIntro from "../../../_shared/components/lookbooks/LookbookIntro";
import LookbookGrid from "../../../_shared/components/lookbooks/LookbookGrid";

export default function Lookbooks() {
  return (
    <div className={styles.pageWrapper}>
      <HeroSection
        title="Lookbooks"
        desc="Discover our seasonal collections and signature styles through carefully curated lookbooks. Each piece tells a story of minimalist elegance."
      />

      <div className={styles.mainContent}>
        <div className="container mx-auto px-4">
          {/* <div className={styles.introWrapper}>
            <LookbookIntro />
          </div> */}

          <div className={styles.gridWrapper}>
            <LookbookGrid />
          </div>
        </div>
      </div>
    </div>
  );
}
