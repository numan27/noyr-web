import React, { useEffect, useRef } from "react";
import styles from "../../styles/Home.module.scss";
import Link from "next/link";
import { routeConstant } from "routes/constants";
import classNames from "classnames";

interface HomeSectionProps {
  id: string;
}

const HeroSection = ({ id }: HomeSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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

    // Try to play video (autoplay may be blocked by browser)
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.log("Video autoplay was prevented:", error);
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    playVideo();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="hero"
      ref={sectionRef}
      className={`${styles.heroSection} bg-brand-900 relative overflow-hidden`}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/banner-video.webm" type="video/webm" />
        <source src="/banner-video.mp4" type="video/mp4" />
        {/* Fallback image if video doesn't load */}
        <img
          src="/bg-1.jpg"
          alt="Fallback banner"
          className="w-full h-full object-cover"
        />
      </video>

      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <div
        className={`${styles.heroContent} container mx-auto px-4 text-center flex justify-center items-end h-full relative z-20`}
      >
        <div
          className="animate-fade-in opacity-0 sm:w-7/12 w-full mx-auto flex flex-col items-center gap-2"
          style={{ animationDelay: "0.3s" }}
        >
          <p className="tracking-wider">Now Live</p>
          <h4 className="tracking-wide">NOYR Summer Collections</h4>
          <Link
            href={routeConstant.collections.path}
            className={classNames(
              styles.mainLink,
              "border-b text-white border-white pb-1 flex items-center transition-opacity duration-300 w-max"
            )}
          >
            Shop Now <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
      {/* <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
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
      </div> */}
    </div>
  );
};

export default HeroSection;
