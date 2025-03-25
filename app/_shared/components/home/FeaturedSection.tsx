import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import classNames from "classnames";
import styles from "../../styles/Home.module.scss";
import Link from "next/link";
import { routeConstant } from "routes/constants";
import { products } from "utils/constants";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

interface HomeSectionProps {
  id: string;
}

const FeaturedSection: React.FC<HomeSectionProps> = ({ id }) => {
  const [randomProducts, setRandomProducts] = useState<Product[]>([]);

  useEffect(() => {
    const shuffleArray = (array: Product[]): Product[] => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };
    // @ts-ignore
    const shuffled = shuffleArray(products).slice(0, 4);
    setRandomProducts(shuffled);
  }, []);

  return (
    <section
      id="featured"
      style={{
        backgroundImage: "url('/bg-8.png')",
      }}
      className={classNames(styles.featuredSection, "bg-brand-900 pb-32")}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16 relative lg:pt-16 sm:pt-10 pt-4">
          <div>
            <span className="uppercase text-sand-400 tracking-widest text-sm mb-2 inline-block">
              Selected
            </span>
            <h2 className="text-4xl font-serif text-white">
              Featured Products
            </h2>
          </div>
          <Link
            href={routeConstant.collections.path}
            className="inline-flex items-center mt-4 md:mt-0 text-white group"
          >
            <span className="border-b border-white/0 group-hover:border-white/100 transition-all pb-1">
              View all products
            </span>
            <ArrowRight
              size={16}
              className="ml-2 transform group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:gap-4 ga-0">
            {randomProducts.map((product: Product, index: number) => (
              <Link
                key={product.id}
                href={routeConstant.productDetail.path.replace(
                  ":id",
                  product.id.toString()
                )}
                className="group cursor-pointer animate-fade-in opacity-0 hover:bg-white/10 transition-colors p-4"
                style={{ animationDelay: `${0.15 * (index + 1)}s` }}
              >
                <div className="flex flex-col items-center">
                  <div className="mb-3 w-32 h-32 relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="text-center">
                    <span className="text-sand-400 text-xs tracking-wide block">
                      {product.category}
                    </span>
                    <h4 className="text-white text-base font-medium mt-1 line-clamp-1">
                      {product.name}
                    </h4>
                    <p className="text-white/80 text-xs mt-1">
                      {product.price}
                    </p>
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

export default FeaturedSection;
