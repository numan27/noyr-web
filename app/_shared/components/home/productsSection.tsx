import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import classNames from "classnames";
import styles from "../../styles/Home.module.scss";
import Link from "next/link";
import { routeConstant } from "routes/constants";
import { products } from "utils/constants";
import { StaticImageData } from "next/image";
import ProductCard from "components/collections/productCard";
import CartSideCanvas from "components/common/cartSideCanvas";
import { useCart } from "_shared/context/CartContext";

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
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    const shuffleArray = (array: Product[]): Product[] => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };

    // Get all jeans products
    const jeansProducts = products.filter(
      (product) => product.category === "jeans"
    );

    // Get non-jeans products and shuffle them
    const nonJeansProducts = shuffleArray(
      products.filter((product) => product.category !== "jeans")
    );

    // Take first 2 jeans products and 2 random non-jeans products
    const selectedProducts = [
      ...jeansProducts.slice(0, 2),
      ...nonJeansProducts.slice(0, 2),
    ];

    setRandomProducts(selectedProducts);
  }, []);

  const handleVariationSelect = (productId: string, size: string) => {
    setSelectedVariations((prev) => ({
      ...prev,
      [productId]: size,
    }));

    const product = products.find((p) => p.id === productId);
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        size,
        image: product.image,
        quantity: 1,
      });
      setIsCartOpen(true);
    }
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
            <span className="uppercase text-white-900 tracking-widest text-xs sm:text-sm mb-1 sm:mb-2 inline-block">
              Selected
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white-900">
              Featured Products
            </h2>
          </div>
          <Link
            href={routeConstant.collections.path}
            className="inline-flex items-center text-white-900 group"
          >
            <span className="border-b border-white-900/0 group-hover:border-brand-900/100 transition-all pb-1 text-sm sm:text-base">
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

      <CartSideCanvas
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </section>
  );
};

export default ProductsSection;
