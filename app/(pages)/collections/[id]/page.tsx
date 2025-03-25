"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { products } from "utils/constants";
import { notFound } from "next/navigation";
import classNames from "classnames";
import styles from "./style.module.scss";

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
};

interface PageProps {
  params: {
    id: string;
  };
}

export default function ProductDetail({ params }: PageProps) {
  const product = products.find((p) => {
    if (typeof p.id === "number") {
      return p.id === Number(params.id);
    }
    return p.id === params.id;
  });

  if (!product) {
    return notFound();
  }

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
                        className="w-12 h-12 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-800"
                      >
                        {size}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
