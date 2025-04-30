import React, { useEffect, useRef } from "react";
import styles from "../../styles/Home.module.scss";
import classNames from "classnames";
import Link from "next/link";
import { routeConstant } from "routes/constants";
import CustomButton from "components/common/customButton";

interface HomeSectionProps {
  id: string;
}

const CollectionsSection = ({ id }: HomeSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const scrollProgress = 1 - rect.bottom / window.innerHeight;

        sectionRef.current.style.backgroundPositionY = `${
          50 + scrollProgress * 10
        }%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={classNames(
        styles.collectionsSection,
        "relative bg-brand-950 overflow-hidden min-h-screen"
      )}
      id="collections"
    >
      <div className="w-full h-full">
        <div className="relative h-full overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url(/3.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          </div>

          <div className="relative h-full flex flex-col justify-center items-center text-center p-6 md:p-12">
            <h3 className="text-3xl md:text-5xl font-serif mb-4 text-white">
              Discover Our Collection
            </h3>
            <p className="text-white/70 mb-8 max-w-2xl text-lg">
              Explore our premium selection of fashion essentials, crafted with
              quality and style in mind.
            </p>
            <Link href={routeConstant.collections.path}>
              <CustomButton title="Shop Now" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
