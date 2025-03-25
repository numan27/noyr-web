import React, { useEffect, useRef } from "react";
import styles from "../../styles/Home.module.scss";
import { routeConstant } from "routes/constants";
import Link from "next/link";

const categories = [
  { id: 1, name: "Men", url: routeConstant.collections.path + "?men" },
  { id: 2, name: "Women", url: routeConstant.collections.path + "?women" },
  {
    id: 3,
    name: "New Arrivals",
    url: routeConstant.collections.path + "?new-arrivals",
  },
  { id: 4, name: "Sale", url: routeConstant.sales.path },
];

interface HomeSectionProps {
  id: string;
}

const CategorySection = ({ id }: HomeSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const scrollPosition = window.scrollY;
      const rect = sectionRef.current.getBoundingClientRect();

      // Check if section is in view
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        // Calculate the scroll progress through the section
        const scrollProgress = 1 - rect.top / window.innerHeight;

        // Apply subtle parallax to the section's background
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
      id="category"
      ref={sectionRef}
      className={`${styles.categorySection} relative`}
      style={{
        backgroundImage: "url('/bg-5.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container mx-auto px-4 flex items-center justify-center h-full relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl text-white font-serif mb-12">
            Shop by Category
          </h2>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {categories.map((category) => (
              <Link key={category.id} href={category.url} className="group">
                <div className="border border-white/30 text-white hover:bg-white hover:text-black transition-colors duration-300 p-6 md:p-10 min-w-[180px] md:min-w-[220px]">
                  <h3 className="text-2xl font-serif">{category.name}</h3>
                  <div className="mt-4 overflow-hidden">
                    <span className="inline-block transform translate-y-0 group-hover:translate-y-full transition-transform duration-300">
                      Explore
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
