"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import HeroSection from "components/collections/heroSection";
import SaleProducts from "components/collections/saleProducts";

export default function Sales() {
  return (
    <div className={classNames(styles.homeWrapper, "min-h-screen text-white")}>
      <HeroSection
        title="Shop Our Exclusive Collections"
        desc="Discover modern, minimalist designs with timeless charm. Find the
            perfect pieces to elevate your space and style."
      />
      <SaleProducts />
    </div>
  );
}
