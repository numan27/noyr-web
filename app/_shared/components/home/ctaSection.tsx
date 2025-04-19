import React, { useEffect, useRef } from "react";
import styles from "../../styles/Home.module.scss";
import { routeConstant } from "routes/constants";
import Link from "next/link";
import CustomButton from "components/common/customButton";

interface HomeSectionProps {
  id: string;
}

const CTASection = ({ id }: HomeSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const scrollProgress = 1 - rect.top / window.innerHeight;
        sectionRef.current.style.backgroundPositionY = `${
          50 + scrollProgress * 15
        }%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="cta"
      ref={sectionRef}
      className={`${styles.ctaSection} relative h-screen min-h-[700px]`}
      style={{
        backgroundImage: "url('/bg-7.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="container h-full mx-auto px-4 flex flex-col items-center justify-center relative z-10 text-center">
        <div className="max-w-2xl space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif">
            Elevate Your Style
          </h2>
          <p className="text-white/80 text-lg md:text-xl">
            Discover timeless pieces crafted for modern living. Our collection
            blends quality materials with exceptional design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 w-full">
            <Link
              className="flex justify-center"
              href={routeConstant.collections.path}
            >
              <CustomButton
                title="Shop Collection"
                className="px-8 py-4 text-lg"
              />
            </Link>
            <Link
              className="flex justify-center"
              href={routeConstant.about.path}
            >
              <CustomButton title="Our Story" className="px-8 py-4 text-lg" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
