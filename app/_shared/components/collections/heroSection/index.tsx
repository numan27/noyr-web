import React from "react";
import styles from "./style.module.scss";

interface HeroProps {
  title?: string;
  desc?: string;
}

const HeroSection = ({
  title = "Explore Our Collections",
  desc = "Discover a wide range of products that blend modern minimalism with timeless charm. Elevate your lifestyle with our carefully curated collections.",
}: HeroProps) => {
  return (
    <div className={`${styles.heroSection}`}>
      <div
        className={`${styles.heroContent} container mx-auto px-4 text-center`}
      >
        <div
          className="animate-fade-in opacity-0 w-full md:w-7/12 mx-auto flex flex-col gap-6 lg:pt-10 md:pt-8 sm:pt-6 pt-4"
          style={{ animationDelay: "0.3s" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          <p className="text-lg md:text-xl">{desc}</p>
          {/* <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
            <Link href={routeConstant.collections.path}>
              <CustomButton title="View All Products" />
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
