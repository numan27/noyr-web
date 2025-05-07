"use client";

import React, { useState } from "react";
import { StaticImageData } from "next/image";
import ProductCard from "components/collections/productCard";
import CartSideCanvas from "components/common/cartSideCanvas";
import { useCart } from "_shared/context/CartContext";

type Product = {
  id: string;
  name: string;
  price: string;
  color: string;
  colorsAvailable: string;
  image: StaticImageData;
  category?: string;
  isNew?: boolean;
  description?: string;
  sizes?: string[];
  materials: string;
  fit: string;
  productCode: string;
  modelInfo: string;
  hoverImage?: StaticImageData;
};

interface SearchResultsClientProps {
  initialResults: Product[];
  query: string;
}

export default function SearchResultsClient({
  initialResults,
  query,
}: SearchResultsClientProps) {
  const [selectedVariation, setSelectedVariation] = useState<string | null>(
    null
  );
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { addToCart } = useCart();

  const handleVariationSelect = (productId: string, size: string) => {
    setSelectedVariation(size);
    const product = initialResults.find((p) => p.id === productId);
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

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {initialResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initialResults.map((product) => (
              <ProductCard
                key={product.id}
                // @ts-ignore
                product={{
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  color: product.color,
                  colorsAvailable: product.colorsAvailable,
                  image: product.image,
                  hoverImage: product.hoverImage,
                }}
                selectedVariation={selectedVariation}
                onVariationSelect={handleVariationSelect}
                isHovered={hoveredProduct === product.id}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-medium text-gray-900">
              No results found
            </h2>
            <p className="text-gray-600 mt-2">
              Try searching with different keywords
            </p>
          </div>
        )}
      </div>

      <CartSideCanvas
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
}
