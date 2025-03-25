import React, { useState } from "react";
import { Product } from "../product";

type Product = {
  id: string;
  name: string;
  price: string;
  color: string;
  colorsAvailable: string;
  image: string;
  category?: string;
  isNew?: boolean;
  description?: string;
  sizes?: string[];
  materials?: string;
  careInstructions?: string;
  fit?: string;
  shippingInfo?: string;
};
const clothingData: Product[] = [
  {
    id: "1",
    name: "Classic Fit T-Shirt",
    price: "$29.99",
    color: "Blue",
    colorsAvailable: "Blue, Black, White",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080",
    category: "men",
  },
  {
    id: "2",
    name: "Slim Jeans",
    price: "$49.99",
    color: "Indigo",
    colorsAvailable: "Indigo, Black, Gray",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=2126",
    category: "men",
  },
  {
    id: "3",
    name: "Summer Dress",
    price: "$59.99",
    color: "Floral",
    colorsAvailable: "Floral, White, Black",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2073",
    category: "women",
  },
  {
    id: "4",
    name: "Casual Blouse",
    price: "$34.99",
    color: "White",
    colorsAvailable: "White, Pink, Blue",
    image:
      "https://snazzygabby.com/wp-content/uploads/2025/01/roman-holoschchuk-ZnHpOhHnkDY-unsplash-edited.webp",
    category: "women",
  },
  {
    id: "5",
    name: "Limited Edition Watch",
    price: "$129.99",
    color: "Silver",
    colorsAvailable: "Silver, Gold",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2080",
    category: "accessories",
  },
  {
    id: "6",
    name: "Designer Sunglasses",
    price: "$89.99",
    color: "Black",
    colorsAvailable: "Black, Tortoise",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=2080",
    category: "accessories",
  },
  {
    id: "7",
    name: "Spring Collection Cardigan",
    price: "$79.99",
    color: "Pastel Pink",
    colorsAvailable: "Pastel Pink, Mint, Lavender",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=2072",
    category: "new arrivals",
  },
  {
    id: "8",
    name: "Seasonal Lightweight Jacket",
    price: "$89.99",
    color: "Khaki",
    colorsAvailable: "Khaki, Olive, Navy",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2036",
    category: "new arrivals",
  },
  // Adding more products
  {
    id: "9",
    name: "Premium Wool Sweater",
    price: "$79.99",
    color: "Navy",
    colorsAvailable: "Navy, Burgundy, Charcoal",
    image:
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=2080",
    category: "men",
  },
  {
    id: "10",
    name: "Formal Oxford Shirt",
    price: "$59.99",
    color: "White",
    colorsAvailable: "White, Blue, Pink",
    image:
      "https://images.unsplash.com/photo-1598961942613-ba897716405b?q=80&w=2080",
    category: "men",
  },
  {
    id: "11",
    name: "Silk Evening Gown",
    price: "$199.99",
    color: "Burgundy",
    colorsAvailable: "Burgundy, Black, Navy",
    image:
      "https://images.unsplash.com/photo-1571908599407-cdb918ed83bf?q=80&w=2080",
    category: "women",
  },
  {
    id: "12",
    name: "High-Waisted Pants",
    price: "$69.99",
    color: "Beige",
    colorsAvailable: "Beige, Black, Navy",
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2080",
    category: "women",
  },
  {
    id: "13",
    name: "Statement Necklace",
    price: "$45.99",
    color: "Gold",
    colorsAvailable: "Gold, Silver",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=2080",
    category: "accessories",
  },
  {
    id: "14",
    name: "Leather Belt",
    price: "$39.99",
    color: "Brown",
    colorsAvailable: "Brown, Black",
    image:
      "https://images.unsplash.com/photo-1624222247344-550fb60ae8b1?q=80&w=2080",
    category: "accessories",
  },
  {
    id: "15",
    name: "Limited Edition Sneakers",
    price: "$119.99",
    color: "Multi",
    colorsAvailable: "Multi",
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=2080",
    category: "new arrivals",
  },
  {
    id: "16",
    name: "Designer Tote Bag",
    price: "$149.99",
    color: "Tan",
    colorsAvailable: "Tan, Black, Navy",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=2080",
    category: "new arrivals",
  },
];

export default function SaleProducts() {
  const [products] = useState<Product[]>(clothingData);

  // Group products by category
  const menProducts = products.filter((product) => product.category === "men");
  const womenProducts = products.filter(
    (product) => product.category === "women"
  );
  const newArrivalsProducts = products.filter(
    (product) => product.category === "new arrivals"
  );
  const accessoriesProducts = products.filter(
    (product) => product.category === "accessories"
  );

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Fashion Collection</h1>

      {/* Men's Section */}
      <section className="mb-12">
        <h2 className="text-2xl text-brand-800 font-semibold lg:mb-8 md:mb-6 mb-4 pb-2 border-b">
          Men's Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {menProducts.map((product) => (
            // @ts-ignore
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Women's Section */}
      <section className="mb-12">
        <h2 className="text-2xl text-brand-800 font-semibold lg:mb-8 md:mb-6 mb-4 pb-2 border-b">
          Women's Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {womenProducts.map((product) => (
            // @ts-ignore
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="mb-12">
        <h2 className="text-2xl text-brand-800 font-semibold lg:mb-8 md:mb-6 mb-4 pb-2 border-b">
          New Arrivals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newArrivalsProducts.map((product) => (
            // @ts-ignore
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Accessories Section */}
      <section className="mb-12">
        <h2 className="text-2xl text-brand-800 font-semibold lg:mb-8 md:mb-6 mb-4 pb-2 border-b">
          Accessories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {accessoriesProducts.map((product) => (
            // @ts-ignore
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
