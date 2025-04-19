import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import classNames from "classnames";
import styles from "../../styles/Home.module.scss";
import Link from "next/link";
import { routeConstant } from "routes/constants";
import { products } from "utils/constants";
import { StaticImageData } from "next/image";
import ProductCard from "components/collections/productCard";

interface Product {
  id: string;
  name: string;
  price: string;
  color: string;
  colorsAvailable: string;
  image: StaticImageData;
  hoverImage?: StaticImageData;
}

interface HomeSectionProps {
  id: string;
}

const ProductsSection: React.FC<HomeSectionProps> = ({ id }) => {
  const [randomProducts, setRandomProducts] = useState<Product[]>([]);
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);
  const [selectedVariations, setSelectedVariations] = useState<
    Record<string, string>
  >({});

  useEffect(() => {
    const shuffleArray = (array: Product[]): Product[] => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };

    const shuffled = shuffleArray(products as Product[]).slice(0, 4);
    setRandomProducts(shuffled);
  }, []);

  const handleVariationSelect = (productId: string, size: string) => {
    setSelectedVariations((prev) => ({
      ...prev,
      [productId]: size,
    }));
  };

  const handleMouseEnter = (productId: string) => {
    setHoveredProductId(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };

  return (
    <section
      id="products"
      className={classNames(
        styles.featuredSection,
        "bg-white py-8 md:py-16 w-full overflow-x-hidden"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4">
          <div>
            <span className="uppercase text-brand-900 tracking-widest text-xs sm:text-sm mb-1 sm:mb-2 inline-block">
              Selected
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-brand-900">
              Featured Products
            </h2>
          </div>
          <Link
            href={routeConstant.collections.path}
            className="inline-flex items-center text-brand-900 group"
          >
            <span className="border-b border-brand-900/0 group-hover:border-brand-900/100 transition-all pb-1 text-sm sm:text-base">
              View all products
            </span>
            <ArrowRight
              size={16}
              className="ml-2 transform group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {randomProducts.map((product: Product) => (
            <div key={product.id} className="w-full overflow-hidden">
              <ProductCard
                product={product}
                selectedVariation={selectedVariations[product.id] || null}
                onVariationSelect={handleVariationSelect}
                isHovered={hoveredProductId === product.id}
                onMouseEnter={() => handleMouseEnter(product.id)}
                onMouseLeave={handleMouseLeave}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
