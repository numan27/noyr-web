"use client";

import React, { useState } from "react";
import { use } from "react";
import Image, { StaticImageData } from "next/image";
import { products } from "utils/constants";
import { notFound } from "next/navigation";
import classNames from "classnames";
import styles from "./style.module.scss";
import CartSideCanvas from "components/common/cartSideCanvas";
import { useCart } from "_shared/context/CartContext";
import { trackViewContent, trackAddToCart } from "_shared/utils/metaPixel";

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
  images?: StaticImageData[];
  category?: string;
  isNew?: boolean;
  description?: string;
  sizes?: string[];
  materials: string;
  fit: string;
  productCode: string;
  modelInfo: string;
};

// Add slug generation function
const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

// Updated to match Next.js 15+ async params
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductDetail({ params }: PageProps) {
  const { slug } = use(params);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(
    null
  );
  const { addToCart } = useCart();
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);

  const product = products.find((p) => generateSlug(p.name) === slug);

  if (!product) {
    return notFound();
  }

  // Set initial selected image and track view content
  React.useEffect(() => {
    setSelectedImage(product.image);

    // Track product view
    trackViewContent({
      id: product.id,
      name: product.name,
      price: parseFloat(product.price.replace(/[^0-9.]/g, "")),
      category: product.category,
    });
  }, [product]);

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

    addToCart(newItem);
    setIsCartOpen(true);

    // Track add to cart event
    trackAddToCart({
      id: product.id,
      name: product.name,
      price: parseFloat(product.price.replace(/[^0-9.]/g, "")),
      quantity: 1,
      category: product.category,
    });
  };

  return (
    <>
      <div
        className={classNames(
          styles.cardContainer,
          "mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12"
        )}
      >
        <div className={classNames(styles.customContainer)}>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
            <div className="space-y-4">
              <div
                className={classNames(
                  "relative aspect-square w-full max-w-[600px] mx-auto",
                  styles.imageContainer
                )}
              >
                <Image
                  src={selectedImage || product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>

              {/* Thumbnails */}
              {product.images && product.images.length > 0 && (
                <div className="grid grid-cols-4 gap-2 max-w-[600px] mx-auto">
                  <button
                    onClick={() => setSelectedImage(product.image)}
                    className={classNames(
                      "relative aspect-square rounded-md overflow-hidden",
                      selectedImage === product.image
                        ? "ring-2 ring-gray-900"
                        : ""
                    )}
                  >
                    <Image
                      src={product.image}
                      alt={`${product.name} - Main`}
                      fill
                      className="object-cover"
                    />
                  </button>
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(img)}
                      className={classNames(
                        "relative aspect-square rounded-md overflow-hidden",
                        selectedImage === img ? "ring-2 ring-gray-900" : ""
                      )}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} - ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-4 sm:space-y-6 text-gray-900">
              {product.isNew && (
                <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-900 text-white rounded-full">
                  New Arrival
                </span>
              )}
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {product.name}
              </h1>
              <p className="text-xl sm:text-2xl text-gray-800">
                {product.price}
              </p>

              <div className="border-t border-b border-gray-300 py-3 sm:py-4">
                <p className="text-gray-700">{product.color}</p>
                {/* <p className="text-gray-700">
                  {product.colorsAvailable} Colors Available
                </p> */}
              </div>

              {product.description && (
                <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
                  {product.description}
                </p>
              )}

              <div className="space-y-2">
                <h3 className="font-medium text-gray-900">Select Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={classNames(
                        "w-10 h-10 sm:w-12 sm:h-12 border rounded-md flex items-center justify-center transition-colors text-sm sm:text-base",
                        selectedSize === size
                          ? "bg-gray-900 text-white border-gray-900"
                          : "border-gray-300 text-gray-800 hover:bg-gray-100"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                {/* Size Chart Button */}
                <button
                  onClick={() => setIsSizeChartOpen(true)}
                  className="text-sm text-gray-600 underline mt-2 hover:text-gray-900"
                >
                  Size Guide
                </button>
              </div>

              {/* Size Chart Modal */}
              {isSizeChartOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                  <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">Size Guide</h2>
                        <button
                          onClick={() => setIsSizeChartOpen(false)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          ✕
                        </button>
                      </div>

                      <div className="space-y-6">
                        {product.id === "1" && (
                          <div>
                            <h3 className="font-medium mb-3">
                              T-Shirt Measurements (inches)
                            </h3>
                            <div className="overflow-x-auto">
                              <table className="w-full text-sm">
                                <thead>
                                  <tr className="bg-gray-100">
                                    <th className="p-2 text-left">Size</th>
                                    <th className="p-2 text-left">Length</th>
                                    <th className="p-2 text-left">Chest</th>
                                    <th className="p-2 text-left">Sleeve</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="border-b">
                                    <td className="p-2">M</td>
                                    <td className="p-2">26"</td>
                                    <td className="p-2">23"</td>
                                    <td className="p-2">10"</td>
                                  </tr>
                                  <tr className="border-b">
                                    <td className="p-2">L</td>
                                    <td className="p-2">27"</td>
                                    <td className="p-2">24"</td>
                                    <td className="p-2">10.5"</td>
                                  </tr>
                                  <tr>
                                    <td className="p-2">XL</td>
                                    <td className="p-2">28"</td>
                                    <td className="p-2">25"</td>
                                    <td className="p-2">10.5"</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}

                        {product.category === "jeans" && (
                          <div>
                            <h3 className="font-medium mb-3">
                              Jeans Measurements (inches/cm)
                            </h3>
                            <div className="overflow-x-auto">
                              <table className="w-full text-sm">
                                <thead>
                                  <tr className="bg-gray-100">
                                    <th className="p-2 text-left">Size</th>
                                    <th className="p-2 text-left">Waist</th>
                                    <th className="p-2 text-left">
                                      Front Rise
                                    </th>
                                    <th className="p-2 text-left">Inseam</th>
                                    <th className="p-2 text-left">
                                      Leg Opening
                                    </th>
                                    <th className="p-2 text-left">Length</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="border-b">
                                    <td className="p-2">32</td>
                                    <td className="p-2">32" / 81.5cm</td>
                                    <td className="p-2">12.5" / 32cm</td>
                                    <td className="p-2">30" / 76cm</td>
                                    <td className="p-2">8.5" / 24cm</td>
                                    <td className="p-2">42" / 106.75cm</td>
                                  </tr>
                                  <tr className="border-b">
                                    <td className="p-2">34</td>
                                    <td className="p-2">34" / 86.5cm</td>
                                    <td className="p-2">13" / 33cm</td>
                                    <td className="p-2">30" / 76cm</td>
                                    <td className="p-2">9" / 23cm</td>
                                    <td className="p-2">42" / 106.75cm</td>
                                  </tr>
                                  <tr>
                                    <td className="p-2">36</td>
                                    <td className="p-2">36" / 91.5cm</td>
                                    <td className="p-2">13.5" / 34.35cm</td>
                                    <td className="p-2">30" / 76cm</td>
                                    <td className="p-2">9.5" / 24.5cm</td>
                                    <td className="p-2">42" / 106.75cm</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}

                        {product.category === "trousers" && (
                          <div>
                            <h3 className="font-medium mb-3">
                              Trouser Measurements
                            </h3>
                            <div className="overflow-x-auto">
                              <table className="w-full text-sm">
                                <thead>
                                  <tr className="bg-gray-100">
                                    <th className="p-2 text-left">
                                      Measurement
                                    </th>
                                    <th className="p-2 text-left">Size 34</th>
                                    <th className="p-2 text-left">Size 36</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="border-b">
                                    <td className="p-2">Waist</td>
                                    <td className="p-2">34"</td>
                                    <td className="p-2">36"</td>
                                  </tr>
                                  <tr className="border-b">
                                    <td className="p-2">Hip</td>
                                    <td className="p-2">46"</td>
                                    <td className="p-2">48"</td>
                                  </tr>
                                  <tr className="border-b">
                                    <td className="p-2">Thigh</td>
                                    <td className="p-2">13.5"</td>
                                    <td className="p-2">14"</td>
                                  </tr>
                                  <tr className="border-b">
                                    <td className="p-2">Knee</td>
                                    <td className="p-2">9"</td>
                                    <td className="p-2">9.5"</td>
                                  </tr>
                                  <tr className="border-b">
                                    <td className="p-2">Leg Opening</td>
                                    <td className="p-2">7"</td>
                                    <td className="p-2">7.5"</td>
                                  </tr>
                                  <tr>
                                    <td className="p-2">Out Seam</td>
                                    <td className="p-2">39"</td>
                                    <td className="p-2">40"</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}

                        {product.category === "shirts" &&
                          product.id !== "1" && (
                            <div>
                              <h3 className="font-medium mb-3">
                                Shirt Measurements (cm)
                              </h3>
                              <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                  <thead>
                                    <tr className="bg-gray-100">
                                      <th className="p-2 text-left">Size</th>
                                      <th className="p-2 text-left">
                                        Chest Width
                                      </th>
                                      <th className="p-2 text-left">
                                        Sleeve Length
                                      </th>
                                      <th className="p-2 text-left">
                                        Front Length
                                      </th>
                                      <th className="p-2 text-left">
                                        Shoulder
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className="border-b">
                                      <td className="p-2">S</td>
                                      <td className="p-2">58.5</td>
                                      <td className="p-2">26.5</td>
                                      <td className="p-2">70.5</td>
                                      <td className="p-2">17.9</td>
                                    </tr>
                                    <tr className="border-b">
                                      <td className="p-2">M</td>
                                      <td className="p-2">61</td>
                                      <td className="p-2">26.5</td>
                                      <td className="p-2">71.5</td>
                                      <td className="p-2">18.8</td>
                                    </tr>
                                    <tr>
                                      <td className="p-2">L</td>
                                      <td className="p-2">64</td>
                                      <td className="p-2">26.5</td>
                                      <td className="p-2">73</td>
                                      <td className="p-2">20</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Product Details Section */}
              <div className="border-t border-gray-300 pt-4 sm:pt-6 space-y-3 sm:space-y-4">
                <h3 className="font-medium text-gray-900 text-base sm:text-lg">
                  Product Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <h4 className="font-medium text-gray-700 text-sm sm:text-base">
                      Materials
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {product.materials}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 text-sm sm:text-base">
                      Fit
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {product.fit}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 text-sm sm:text-base">
                      Product Code
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {product.productCode}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 text-sm sm:text-base">
                      Model Info
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {product.modelInfo}
                    </p>
                  </div>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-gray-900 text-white py-3 sm:py-4 rounded-md hover:bg-gray-800 transition-colors text-sm sm:text-base"
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
