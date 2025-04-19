import classNames from "classnames";
import styles from "./style.module.scss";
import HeroSection from "components/collections/heroSection";

export default function LookBook() {
  return (
    <div className={classNames("min-h-screen")}>
      <HeroSection
        title="Discover the LookBook"
        desc="Get inspired by our curated styles and timeless designs. Explore the latest trends and find your perfect look."
      />

      <div
        className={classNames(
          styles.contentWrapper,
          "flex flex-col items-center justify-center mt-16 text-center h-full"
        )}
      >
        <h2 className="text-2xl font-semibold text-brand-800">
          Page Under Construction
        </h2>
        <span>
          <h6 className={classNames(styles.desc, "text-lg mt-2")}>
            We're working on something amazing! Stay tuned for updates.
          </h6>
        </span>
      </div>
    </div>
  );
}
