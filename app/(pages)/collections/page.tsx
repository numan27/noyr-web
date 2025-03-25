import classNames from "classnames";
import styles from "./style.module.scss";
import HeroSection from "components/collections/heroSection";
import Products from "components/collections/products";

export const dynamic = "force-dynamic";

export default function Collections() {
  return (
    <div className={classNames(styles.homeWrapper, "min-h-screen text-white")}>
      <HeroSection />
      <Products />
    </div>
  );
}
