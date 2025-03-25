"use client";

import React, { useState } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";
import { products } from "utils/constants";
import CartSideCanvas from "components/common/cartSideCanvas";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import ProductCard from "../productCard";

type SegmentType = "men" | "women" | "new-arrivals" | "all";

const tabs: { id: SegmentType; label: string }[] = [
  { id: "all", label: "All Products" },
  { id: "new-arrivals", label: "New Arrivals" },
  { id: "men", label: "Men" },
  { id: "women", label: "Women" },
];

export default function Products() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const segmentParam = searchParams.toString().split("=")[0] || "all";
  const segment: SegmentType = ["men", "women", "new-arrivals"].includes(
    segmentParam
  )
    ? (segmentParam as SegmentType)
    : "all";

  const [selectedVariations, setSelectedVariations] = useState<
    Record<string, string | null>
  >({});
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);

  // Update URL when tab changes
  const handleTabChange = (newSegment: SegmentType) => {
    const param = newSegment === "all" ? "" : `?${newSegment}`;
    router.push(`${pathname}${param}`);
  };

  // Filter products based on active segment
  const filteredProducts = products.filter((product) => {
    switch (segment) {
      case "new-arrivals":
        return product.isNew;
      case "men":
        return product.category === "men";
      case "women":
        return product.category === "women";
      default:
        return true; // 'all' case
    }
  });

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
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              selectedVariation={selectedVariations[product.id] || null}
              onVariationSelect={(id, size) => {
                setSelectedVariations((prev) => ({ ...prev, [id]: size }));
                const product = products.find((p) => p.id === id);
                if (product) {
                  setCartItems((prev) => [
                    ...prev,
                    {
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      size,
                      image: product.image,
                      quantity: 1,
                    },
                  ]);
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
        setIsOpen={setIsCartOpen}
        cartItems={cartItems}
        removeFromCart={(id) =>
          setCartItems((prev) => prev.filter((item) => item.id !== id))
        }
      />
    </section>
  );
}
