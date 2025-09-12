export interface Product {
  id: string;
  name: string;
  description: string;
  specifications?: string[];
  keywords: string[];
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  products: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    id: "white-onion",
    name: "Dehydrated White Onion",
    description: "Premium quality dehydrated white onion products processed with advanced technology for maximum flavor retention and shelf life.",
    seoTitle: "Dehydrated White Onion - Flakes, Minced, Chopped, Powder & Mesh",
    seoDescription: "High-quality dehydrated white onion flakes, minced, chopped, powder and mesh. Export quality guaranteed.",
    keywords: ["dehydrated white onion", "white onion powder", "white onion flakes", "white onion minced", "white onion chopped", "white onion mesh", "premium white onion export"],
    products: [
      { id: "white-onion-flakes", name: "Dehydrated White Onion Flakes", description: "Premium dehydrated white onion flakes with excellent rehydration and natural flavor.", keywords: ["white onion flakes", "dehydrated onion flakes"] },
      { id: "white-onion-minced", name: "Dehydrated White Onion Minced", description: "Finely minced white onion ideal for seasoning blends and instant foods.", keywords: ["white onion minced", "dehydrated onion minced"] },
      { id: "white-onion-chopped", name: "Dehydrated White Onion Chopped", description: "Uniformly chopped white onion pieces for soups, sauces and ready meals.", keywords: ["white onion chopped", "dehydrated onion chopped"] },
      { id: "white-onion-powder", name: "Dehydrated White Onion Powder", description: "Ultra-fine white onion powder for seasoning and food processing.", keywords: ["white onion powder", "dehydrated onion powder"] },
      { id: "white-onion-mesh", name: "Dehydrated White Onion Mesh", description: "Various mesh sizes of white onion for different applications.", keywords: ["white onion mesh", "dehydrated onion mesh"] }
    ]
  },
  {
    id: "red-onion",
    name: "Dehydrated Red Onion",
    description: "Premium quality dehydrated red onion products with rich color and flavor retention.",
    seoTitle: "Dehydrated Red Onion - Flakes, Minced, Chopped, Powder & Mesh",
    seoDescription: "High-quality dehydrated red onion products with natural color and flavor. Export quality guaranteed.",
    keywords: ["dehydrated red onion", "red onion powder", "red onion flakes", "red onion minced", "red onion chopped", "red onion mesh", "premium red onion export"],
    products: [
      { id: "red-onion-flakes", name: "Dehydrated Red Onion Flakes", description: "Premium dehydrated red onion flakes with rich color and excellent flavor.", keywords: ["red onion flakes", "dehydrated red onion flakes"] },
      { id: "red-onion-minced", name: "Dehydrated Red Onion Minced", description: "Finely minced red onion perfect for seasoning blends and gourmet foods.", keywords: ["red onion minced", "dehydrated red onion minced"] },
      { id: "red-onion-chopped", name: "Dehydrated Red Onion Chopped", description: "Uniformly chopped red onion pieces for premium food applications.", keywords: ["red onion chopped", "dehydrated red onion chopped"] },
      { id: "red-onion-powder", name: "Dehydrated Red Onion Powder", description: "Ultra-fine red onion powder with natural color and flavor.", keywords: ["red onion powder", "dehydrated red onion powder"] },
      { id: "red-onion-mesh", name: "Dehydrated Red Onion Mesh", description: "Various mesh sizes of red onion for different applications.", keywords: ["red onion mesh", "dehydrated red onion mesh"] }
    ]
  },
  {
    id: "pink-onion",
    name: "Dehydrated Pink Onion",
    description: "Premium quality dehydrated pink onion products with unique flavor profile.",
    seoTitle: "Dehydrated Pink Onion - Flakes, Minced, Chopped, Powder & Mesh",
    seoDescription: "High-quality dehydrated pink onion products with distinctive flavor. Export quality guaranteed.",
    keywords: ["dehydrated pink onion", "pink onion powder", "pink onion flakes", "pink onion minced", "pink onion chopped", "pink onion mesh", "premium pink onion export"],
    products: [
      { id: "pink-onion-flakes", name: "Dehydrated Pink Onion Flakes", description: "Premium dehydrated pink onion flakes with distinctive flavor profile.", keywords: ["pink onion flakes", "dehydrated pink onion flakes"] },
      { id: "pink-onion-minced", name: "Dehydrated Pink Onion Minced", description: "Finely minced pink onion for specialty seasoning blends.", keywords: ["pink onion minced", "dehydrated pink onion minced"] },
      { id: "pink-onion-chopped", name: "Dehydrated Pink Onion Chopped", description: "Uniformly chopped pink onion pieces for gourmet applications.", keywords: ["pink onion chopped", "dehydrated pink onion chopped"] },
      { id: "pink-onion-powder", name: "Dehydrated Pink Onion Powder", description: "Ultra-fine pink onion powder with unique flavor characteristics.", keywords: ["pink onion powder", "dehydrated pink onion powder"] },
      { id: "pink-onion-mesh", name: "Dehydrated Pink Onion Mesh", description: "Various mesh sizes of pink onion for different applications.", keywords: ["pink onion mesh", "dehydrated pink onion mesh"] }
    ]
  },
  {
    id: "garlic",
    name: "Dehydrated Garlic",
    description: "Premium quality dehydrated garlic products with strong aroma and flavor retention.",
    seoTitle: "Dehydrated Garlic - Granules, Minced, Chopped, Powder & Mesh",
    seoDescription: "High-quality dehydrated garlic products with strong aroma and flavor. Export quality guaranteed.",
    keywords: ["dehydrated garlic", "garlic powder", "garlic granules", "garlic minced", "garlic chopped", "garlic mesh", "premium garlic export"],
    products: [
      { id: "garlic-granules", name: "Dehydrated Garlic Granules", description: "Premium dehydrated garlic granules with strong aroma and flavor.", keywords: ["garlic granules", "dehydrated garlic granules"] },
      { id: "garlic-minced", name: "Dehydrated Garlic Minced", description: "Finely minced garlic perfect for seasoning blends and instant foods.", keywords: ["garlic minced", "dehydrated garlic minced"] },
      { id: "garlic-chopped", name: "Dehydrated Garlic Chopped", description: "Uniformly chopped garlic pieces for various food applications.", keywords: ["garlic chopped", "dehydrated garlic chopped"] },
      { id: "garlic-powder", name: "Dehydrated Garlic Powder", description: "Ultra-fine garlic powder with strong aroma and flavor.", keywords: ["garlic powder", "dehydrated garlic powder"] },
      { id: "garlic-mesh", name: "Dehydrated Garlic Mesh", description: "Various mesh sizes of garlic for different applications.", keywords: ["garlic mesh", "dehydrated garlic mesh"] }
    ]
  },
  {
    id: "fried-onion",
    name: "Fried Onion",
    description: "Premium quality fried onion products with crispy texture and authentic taste.",
    seoTitle: "Fried Onion Products - Fresh, Dehydrated & Coated",
    seoDescription: "High-quality fried onion products with crispy texture and authentic taste. Export quality guaranteed.",
    keywords: ["fried onion", "fresh fried onions", "dehydrated fried onions", "coated fried onions", "premium fried onion export"],
    products: [
      { id: "fresh-fried-onions", name: "Fresh Fried Onions", description: "Crispy fresh fried onions with authentic taste and texture.", keywords: ["fresh fried onions", "crispy fried onions"] },
      { id: "dehydrated-fried-onions", name: "Dehydrated Fried Onions", description: "Dehydrated fried onions with extended shelf life and crispy texture.", keywords: ["dehydrated fried onions", "dried fried onions"] },
      { id: "coated-fried-onions", name: "Coated Fried Onions", description: "Coated fried onions with enhanced flavor and texture.", keywords: ["coated fried onions", "seasoned fried onions"] }
    ]
  }
];