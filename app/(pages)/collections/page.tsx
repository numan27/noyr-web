import classNames from "classnames";
import styles from "./style.module.scss";
import HeroSection from "components/collections/heroSection";
import Products from "components/collections/products";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Collections | Noyr - Premium Contemporary Fashion",
  description:
    "Explore Noyr's premium collections of shirts, trousers, and jeans. Discover our latest designs and find your perfect style.",
  openGraph: {
    title: "Collections | Noyr - Premium Contemporary Fashion",
    description:
      "Explore Noyr's premium collections of shirts, trousers, and jeans. Discover our latest designs and find your perfect style.",
    url: "https://noyr.store/collections",
  },
  alternates: {
    canonical: "https://noyr.store/collections",
  },
};

export default function Collections() {
  return (
    <div className={classNames(styles.homeWrapper, "min-h-screen text-white")}>
      <HeroSection />
      <Products />
    </div>
  );
}
