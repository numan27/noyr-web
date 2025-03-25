import React from "react";
import { StaticImageData } from "next/image";
import { AspectRatio } from "assets/components/ui/aspect-ratio";
import { Badge } from "assets/components/ui/badge";
import { Card, CardContent, CardHeader } from "assets/components/ui/card";

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
  materials?: string;
  careInstructions?: string;
  fit?: string;
  shippingInfo?: string;
};

interface ProductProps {
  product: Product;
}

export const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative">
          <AspectRatio ratio={4 / 3}>
            <img
              //@ts-ignore
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full"
            />
          </AspectRatio>
          {product.category && (
            <Badge className="absolute top-2 right-2 bg-blue-500">
              {product.category}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-medium text-lg line-clamp-1">{product.name}</h4>
        </div>
        <div className="text-sm text-gray-500 mb-2">
          Available in: {product.colorsAvailable}
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-bold text-lg">{product.price}</span>
          <span className="text-sm text-gray-500">Color: {product.color}</span>
        </div>
      </CardContent>
    </Card>
  );
};
