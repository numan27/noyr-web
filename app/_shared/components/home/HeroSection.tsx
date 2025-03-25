import React, { useEffect, useRef } from "react";
import styles from "../../styles/Home.module.scss";
import CustomButton from "components/common/customButton";
import Link from "next/link";
import { routeConstant } from "routes/constants";

interface HomeSectionProps {
  id: string;
}

const HeroSection = ({ id }: HomeSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const scrollPosition = window.scrollY;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;

      const scrollPercentage = (scrollPosition - sectionTop) / sectionHeight;

      if (scrollPercentage >= -1 && scrollPercentage <= 1) {
        sectionRef.current.style.backgroundPositionY = `${
          50 - scrollPercentage * 20
        }%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="hero"
      ref={sectionRef}
      className={`${styles.heroSection} bg-brand-900`}
      style={{
        backgroundImage: "url('/bg-1.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div
        className={`${styles.heroContent} container mx-auto px-4 text-center`}
      >
        <div
          className="animate-fade-in opacity-0 w-7/12 mx-auto flex flex-col gap-6"
          style={{ animationDelay: "0.3s" }}
        >
          <h1 className="">Effortless Style, Timeless Elegance</h1>
          <p>
            Our collection blends modern minimalism with timeless charm,
            creating effortlessly stylish pieces for every occasion. Elevate
            your wardrobe with fashion that feels as good as it looks.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
            {/* <CustomButton title="Shop Now" /> */}
            <Link href={routeConstant.collections.path}>
              <CustomButton title="Explore Collections" />
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
