import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Import product images
import dehydratedGarlic from "@/assets/dehydrated-garlic.png";
import dehydratedPinkOnionMinced from "@/assets/dehydrated-pink-onion-minced.png";
import dehydratedWhiteOnionFlakes from "@/assets/dehydrated-white-onion-flakes.png";
import friedOnion from "@/assets/fried-onion.png";
import dehydratedRedOnionFlakes from "@/assets/dehydrated-red-onion-flakes.png";
import dehydratedRedOnionChopped from "@/assets/dehydrated-red-onion-chopped.png";
import dehydratedPinkOnionFlakes from "@/assets/dehydrated-pink-onion-flakes.png";
import dehydratedGarlicGranules from "@/assets/dehydrated-garlic-granules.png";
import dehydratedGarlicChopped from "@/assets/dehydrated-garlic-chopped.png";
import dehydratedGarlicMesh from "@/assets/dehydrated-garlic-mesh.png";
// Powder images
import dehydratedRedOnionPowder from "@/assets/dehydrated-red-onion-powder.png";
import dehydratedWhiteOnionPowder from "@/assets/dehydrated-white-onion-powder.png";
import dehydratedPinkOnionPowder from "@/assets/dehydrated-pink-onion-powder.png";
import dehydratedGarlicPowder from "@/assets/dehydrated-garlic-powder.png";
import dehydratedGarlicMinced from "@/assets/dehydrated-garlic-minced.png";

interface Product {
  id: string;
  name: string;
  category: string;
  image?: string;
}

interface ProductCategory {
  title: string;
  products: Product[];
}

interface ProductSectionProps {
  categories?: ProductCategory[];
}

// Image mapping based on product name keywords
const getProductImage = (productName: string, category: string): string | null => {
  const name = productName.toLowerCase();
  
  // Garlic products
  if (category === "Garlic") {
    if (name.includes("granules")) return dehydratedGarlicGranules;
    if (name.includes("chopped")) return dehydratedGarlicChopped;
    if (name.includes("mesh")) return dehydratedGarlicMesh;
    if (name.includes("powder")) return dehydratedGarlicPowder;
    if (name.includes("minced")) return dehydratedGarlicMinced;
    return dehydratedGarlic;
  }
  
  // White Onion products
  if (category === "White Onion") {
    if (name.includes("flakes")) return dehydratedWhiteOnionFlakes;
    if (name.includes("powder")) return dehydratedWhiteOnionPowder;
    return dehydratedWhiteOnionFlakes;
  }
  
  // Red Onion products
  if (category === "Red Onion") {
    if (name.includes("flakes")) return dehydratedRedOnionFlakes;
    if (name.includes("chopped")) return dehydratedRedOnionChopped;
    if (name.includes("powder")) return dehydratedRedOnionPowder;
    return dehydratedRedOnionFlakes;
  }
  
  // Pink Onion products
  if (category === "Pink Onion") {
    if (name.includes("flakes")) return dehydratedPinkOnionFlakes;
    if (name.includes("minced")) return dehydratedPinkOnionMinced;
    if (name.includes("powder")) return dehydratedPinkOnionPowder;
    return dehydratedPinkOnionFlakes;
  }
  
  // Fried Onion products
  if (category === "Fried Onion") {
    return friedOnion;
  }
  
  return null;
};

const ProductSection: React.FC<ProductSectionProps> = ({ 
  categories = [
    {
      title: "Dehydrated White Onion",
      products: [
        { id: "1", name: "Dehydrated White Onion flakes", category: "White Onion" },
        { id: "2", name: "Dehydrated White Onion Minced", category: "White Onion" },
        { id: "3", name: "Dehydrated White Onion Chopped", category: "White Onion" },
        { id: "4", name: "Dehydrated White Onion Powder", category: "White Onion" },
        { id: "5", name: "Dehydrated White Onion Mesh", category: "White Onion" }
      ]
    },
    {
      title: "Dehydrated Red Onion",
      products: [
        { id: "6", name: "Dehydrated Red Onion flakes", category: "Red Onion" },
        { id: "7", name: "Dehydrated Red Onion Minced", category: "Red Onion" },
        { id: "8", name: "Dehydrated Red Onion Chopped", category: "Red Onion" },
        { id: "9", name: "Dehydrated Red Onion Powder", category: "Red Onion" },
        { id: "10", name: "Dehydrated Red Onion Mesh", category: "Red Onion" }
      ]
    },
    {
      title: "Dehydrated Pink Onion",
      products: [
        { id: "11", name: "Dehydrated Pink Onion flakes", category: "Pink Onion" },
        { id: "12", name: "Dehydrated Pink Onion Minced", category: "Pink Onion" },
        { id: "13", name: "Dehydrated Pink Onion Chopped", category: "Pink Onion" },
        { id: "14", name: "Dehydrated Pink Onion Powder", category: "Pink Onion" },
        { id: "15", name: "Dehydrated Pink Onion Mesh", category: "Pink Onion" }
      ]
    },
    {
      title: "Dehydrated Garlic",
      products: [
        { id: "16", name: "Dehydrated Garlic Granules", category: "Garlic" },
        { id: "17", name: "Dehydrated Garlic Minced", category: "Garlic" },
        { id: "18", name: "Dehydrated Garlic Chopped", category: "Garlic" },
        { id: "19", name: "Dehydrated Garlic Powder", category: "Garlic" },
        { id: "20", name: "Dehydrated Garlic Mesh", category: "Garlic" }
      ]
    },
    {
      title: "Fried Onion",
      products: [
        { id: "21", name: "Fresh Fried Onions", category: "Fried Onion" },
        { id: "22", name: "Dehydrated Fried Onions", category: "Fried Onion" },
        { id: "23", name: "Coated Fried Onions", category: "Fried Onion" }
      ]
    }
  ]
}) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "White Onion":
        return "bg-slate-100 text-slate-800 border-slate-200";
      case "Red Onion":
        return "bg-red-100 text-red-800 border-red-200";
      case "Pink Onion":
        return "bg-pink-100 text-pink-800 border-pink-200";
      case "Garlic":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "Fried Onion":
        return "bg-orange-100 text-orange-800 border-orange-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-background">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">Our Products</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Premium quality dehydrated vegetables for all your culinary needs
        </p>
      </div>

      <div className="space-y-16">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-foreground mb-2">
                {category.title}
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.products.map((product) => {
                const productImage = getProductImage(product.name, product.category);
                return (
                  <Card 
                    key={product.id} 
                    className="group hover:shadow-lg transition-all duration-300 border-border bg-card hover:scale-105"
                  >
                    <CardHeader className="pb-4">
                      <div className="w-full h-48 bg-gradient-to-br from-muted to-muted/50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                        {productImage ? (
                          <img 
                            src={productImage} 
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full flex items-center justify-center">
                            <div className="w-12 h-12 bg-primary/60 rounded-full"></div>
                          </div>
                        )}
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`w-fit ${getCategoryColor(product.category)}`}
                      >
                        {product.category}
                      </Badge>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardTitle className="text-lg font-medium text-foreground leading-tight group-hover:text-primary transition-colors">
                        {product.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-2">
                        High-quality dehydrated product with excellent flavor retention
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;