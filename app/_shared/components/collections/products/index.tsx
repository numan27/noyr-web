"use client";

import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";
import { products } from "utils/constants";
import CartSideCanvas from "components/common/cartSideCanvas";
import { useRouter, usePathname } from "next/navigation";
import ProductCard from "../productCard";
import { useCart } from "../../../context/CartContext";

type SegmentType = "shirts" | "trousers" | "jeans" | "all";

const tabs: { id: SegmentType; label: string }[] = [
  { id: "all", label: "All Products" },
  { id: "shirts", label: "Shirts" },
  { id: "trousers", label: "Trousers" },
  { id: "jeans", label: "Jeans" },
];

export default function Products() {
  const [isMounted, setIsMounted] = useState(false);
  const [segment, setSegment] = useState<SegmentType>("all");
  const [randomizedProducts, setRandomizedProducts] = useState(products);
  const router = useRouter();
  const pathname = usePathname();

  const [selectedVariations, setSelectedVariations] = useState<
    Record<string, string | null>
  >({});
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    setIsMounted(true);
    // Parse URL params on client side
    const params = new URLSearchParams(window.location.search);
    const segmentParam = params.toString().split("=")[0] || "all";
    const validSegment: SegmentType = ["shirts", "trousers", "jeans"].includes(
      segmentParam
    )
      ? (segmentParam as SegmentType)
      : "all";
    setSegment(validSegment);

    // Shuffle products only once when component mounts
    const shuffledProducts = [...products].sort(() => Math.random() - 0.5);
    setRandomizedProducts(shuffledProducts);
  }, []);

  const handleTabChange = (newSegment: SegmentType) => {
    setSegment(newSegment);
    const param = newSegment === "all" ? "" : `?${newSegment}`;
    router.push(`${pathname}${param}`);
  };

  const filteredProducts = randomizedProducts.filter((product) => {
    if (segment === "all") return true;
    return product.category === segment;
  });

  const displayProducts =
    segment === "all" ? filteredProducts : filteredProducts;

  if (!isMounted) {
    return (
      <section className={styles.sectionContainer}>
        <div className={styles.customContainer}>
          <div className="flex justify-center mb-8 gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className="px-4 py-2 border-b-2 border-transparent text-gray-500"
                disabled
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div
            className={classNames(
              styles.productGrid,
              "grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-0.5"
            )}
          >
            {/* Skeleton loading placeholders */}
            {Array(8)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-100 aspect-square animate-pulse"
                />
              ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.customContainer}>
        {/* Tabs Navigation */}
        <div className="flex justify-center mb-8 gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={classNames("px-4 py-2 border-b-2 transition-colors", {
                "border-black font-medium text-black": segment === tab.id,
                "border-transparent text-gray-500 hover:text-black":
                  segment !== tab.id,
              })}
              aria-current={segment === tab.id ? "page" : undefined}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div
          className={classNames(
            styles.productGrid,
            "grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-0.5"
          )}
        >
          {displayProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              selectedVariation={selectedVariations[product.id] || null}
              onVariationSelect={(id, size) => {
                setSelectedVariations((prev) => ({ ...prev, [id]: size }));
                const product = products.find((p) => p.id === id);
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
              }}
              isHovered={hoveredProductId === product.id}
              onMouseEnter={() => setHoveredProductId(product.id)}
              onMouseLeave={() => setHoveredProductId(null)}
            />
          ))}
        </div>
      </div>

      <CartSideCanvas
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </section>
  );
}
