import React, { useEffect, useRef } from "react";
import styles from "../../styles/Home.module.scss";
import classNames from "classnames";
import Link from "next/link";
import { routeConstant } from "routes/constants";

const collections = [
  {
    id: 1,
    name: "New Arrivals",
    description: "Discover the freshest styles just added to our collection.",
    image: "/lovable-uploads/159afba9-869b-47b4-bdc1-0bf0272318b5.png",
    path: routeConstant.collections.path + "?new-arrivals",
  },
  {
    id: 2,
    name: "Men",
    description: "Elevate your style with our latest men's fashion essentials.",
    image: "/lovable-uploads/67a15a06-3247-4336-ad6a-da800d6277c8.png",
    path: routeConstant.collections.path + "?men",
  },
  {
    id: 3,
    name: "Women",
    description: "Chic and timeless fashion designed for modern women.",
    image: "/lovable-uploads/159afba9-869b-47b4-bdc1-0bf0272318b5.png",
    path: routeConstant.collections.path + "?women",
  },
];

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
        "py-24 bg-brand-950 relative overflow-hidden"
      )}
      id="collections"
      style={{
        backgroundImage: "url('/bg-2.jpg')",
      }}
    >
      <div className="container mx-auto px-4 relative">
        <div className="mb-16 text-center">
          <span className="uppercase text-sand-500 tracking-widest text-base mb-2 inline-block">
            Explore
          </span>
          <h2 className="text-4xl font-serif text-white mb-4">
            Our Collections
          </h2>
          <div className="w-12 h-[1px] bg-sand-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          {collections.map((collection, index) => (
            <Link href={collection.path} key={collection.id}>
              <div
                className="relative md:h-80 h-32 overflow-hidden group animate-fade-in opacity-0 cursor-pointer"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${collection.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                  <h3 className="text-2xl font-serif mb-2">
                    {collection.name}
                  </h3>
                  <p className="text-white/70 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-left">
                    {collection.description}
                  </p>
                  <div className="border-b border-white pb-1 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-max">
                    Explore <span className="ml-2">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
