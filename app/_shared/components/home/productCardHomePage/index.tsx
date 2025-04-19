import React from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  hoverImage?: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  animationDelay?: number;
  className?: string;
  priority?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  animationDelay = 0,
  className = "",
  priority = false,
}) => {
  return (
    <Link
      href={`/product/${product.id}`}
      className={classNames(
        "group cursor-pointer animate-fade-in opacity-0 hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden",
        className
      )}
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <div className="flex flex-col h-full">
        <div className="relative aspect-square w-full bg-gray-50 overflow-hidden">
          {/* Main product image */}
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-opacity duration-300 group-hover:opacity-0"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            priority={priority}
          />

          {/* Hover image (model/person) - only shown if hoverImage exists */}
          {product.hoverImage && (
            <Image
              src={product.hoverImage}
              alt={`${product.name} on model`}
              fill
              className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              priority={priority}
            />
          )}
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <span className="text-brand-700 text-xs tracking-wide block">
            {product.category}
          </span>
          <h4 className="text-brand-900 text-base font-medium mt-1 line-clamp-2">
            {product.name}
          </h4>
          <p className="text-brand-900/80 text-sm mt-2 font-medium">
            {product.price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
