import React from "react";
import { products } from "utils/constants";
import { routeConstant } from "routes/constants";
import ProductCard from "components/collections/productCard";
import HeroSection from "components/collections/heroSection";
import { StaticImageData } from "next/image";
import CartSideCanvas from "components/common/cartSideCanvas";
import SearchResultsClient from "./SearchResultsClient";

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

export default async function SearchResults({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const resolvedParams = await searchParams;
  const query = resolvedParams.q || "";
  const initialResults = query
    ? products.filter((product) => {
        const searchTerm = query.toLowerCase();
        const productName = product.name.toLowerCase();
        const productCategory = product.category?.toLowerCase() || "";

        return (
          productName.includes(searchTerm) ||
          productCategory.includes(searchTerm) ||
          productName.includes(searchTerm.replace(/s$/, "")) ||
          productCategory.includes(searchTerm.replace(/s$/, ""))
        );
      })
    : [];

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title={`Search Results for "${query}"`}
        desc={`${initialResults.length} ${
          initialResults.length === 1 ? "result" : "results"
        } found`}
      />

      <SearchResultsClient initialResults={initialResults} query={query} />
    </div>
  );
}
