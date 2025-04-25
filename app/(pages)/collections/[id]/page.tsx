"use client";

import React, { useState } from "react";
import { use } from "react";
import Image, { StaticImageData } from "next/image";
import { products } from "utils/constants";
import { notFound } from "next/navigation";
import classNames from "classnames";
import styles from "./style.module.scss";
import CartSideCanvas from "components/common/cartSideCanvas";

type CartItem = {
  id: number | string;
  name: string;
  price: string;
  size: string;
  image: StaticImageData;
  quantity: number;
};

type Product = {
  id: number | string;
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
};

// Updated to match Next.js 15+ async params
interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetail({ params }: PageProps) {
  const { id } = use(params);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const product = products.find((p) => {
    if (typeof p.id === "number") {
      return p.id === Number(id);
    }
    return p.id === id;
  });

  if (!product) {
    return notFound();
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    const newItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      image: product.image,
      quantity: 1,
    };

    setCartItems((prev) => [...prev, newItem]);
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number | string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className={classNames(styles.header)}></div>
      <div className={classNames(styles.cardContainer, "mx-auto px-4 py-12")}>
        <div className={classNames(styles.customContainer)}>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative aspect-square">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="space-y-6 text-gray-900">
              {product.isNew && (
                <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-900 text-white rounded-full">
                  New Arrival
                </span>
              )}
              <h1 className="text-3xl font-bold text-gray-900">
                {product.name}
              </h1>
              <p className="text-2xl text-gray-800">{product.price}</p>

              <div className="border-t border-b border-gray-300 py-4">
                <p className="text-gray-700">{product.color}</p>
                <p className="text-gray-700">
                  {product.colorsAvailable} Colors Available
                </p>
              </div>

              {product.description && (
                <p className="text-gray-800 leading-relaxed">
                  {product.description}
                </p>
              )}

              <div className="space-y-2">
                <h3 className="font-medium text-gray-900">Select Size</h3>
                <div className="flex flex-wrap gap-2">
                  {(product.sizes || ["XS", "S", "M", "L", "XL", "XXL"]).map(
                    (size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={classNames(
                          "w-12 h-12 border rounded-md flex items-center justify-center transition-colors",
                          selectedSize === size
                            ? "bg-gray-900 text-white border-gray-900"
                            : "border-gray-300 text-gray-800 hover:bg-gray-100"
                        )}
                      >
                        {size}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Product Details Section */}
              <div className="border-t border-gray-300 pt-6 space-y-4">
                <h3 className="font-medium text-gray-900 text-lg">
                  Product Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-700">Materials</h4>
                    <p className="text-gray-600">{product.materials}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700">Fit</h4>
                    <p className="text-gray-600">{product.fit}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700">Product Code</h4>
                    <p className="text-gray-600">{product.productCode}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700">Model Info</h4>
                    <p className="text-gray-600">{product.modelInfo}</p>
                  </div>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-gray-900 text-white py-4 rounded-md hover:bg-gray-800 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <CartSideCanvas
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
}
