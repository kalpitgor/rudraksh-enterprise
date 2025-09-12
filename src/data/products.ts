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
<<<<<<< Updated upstream
    id: "dehydrated-white-onion",
    name: "Dehydrated White Onion",
    description: "Premium quality dehydrated white onion products processed with advanced technology for maximum flavor retention and shelf life.",
    seoTitle: "Dehydrated White Onion Products - Flakes, Minced, Chopped, Powder & Mesh",
    seoDescription: "High-quality dehydrated white onion flakes, minced, chopped, powder and mesh. Premium white onion products for food industry. Export quality guaranteed.",
    keywords: ["dehydrated white onion", "dehydrated white onion powder", "dehydrated white onion flakes", "dehydrated white onion minced", "dehydrated white onion chopped", "dehydrated white onion mesh", "premium white onion export"],
    products: [
      {
        id: "dehydrated-white-onion-flakes",
        name: "Dehydrated White Onion Flakes",
        description: "Premium dehydrated white onion flakes with excellent rehydration properties and natural flavor.",
        specifications: ["Size: 8-20mm", "Moisture: Max 6%", "Purity: 99.5%"],
        keywords: ["dehydrated white onion flakes", "white onion flakes", "onion flakes"]
      },
      {
        id: "dehydrated-white-onion-minced",
        name: "Dehydrated White Onion Minced",
        description: "Finely minced white onion perfect for seasoning blends and instant food preparations.",
        specifications: ["Size: 1-3mm", "Moisture: Max 6%", "Color: Natural white"],
        keywords: ["dehydrated white onion minced", "white onion minced", "minced onion"]
      },
      {
        id: "dehydrated-white-onion-chopped",
        name: "Dehydrated White Onion Chopped",
        description: "Uniformly chopped white onion pieces ideal for soups, sauces and ready-to-eat meals.",
        specifications: ["Size: 3-5mm", "Moisture: Max 6%", "Texture: Crisp"],
        keywords: ["dehydrated white onion chopped", "white onion chopped", "chopped onion"]
      },
      {
        id: "dehydrated-white-onion-powder",
        name: "Dehydrated White Onion Powder",
        description: "Fine white onion powder perfect for spice blends and seasoning applications.",
        specifications: ["Fineness: 100-120 mesh", "Moisture: Max 6%", "Flow: Free flowing"],
        keywords: ["dehydrated white onion powder", "white onion powder", "onion powder"]
      },
      {
        id: "dehydrated-white-onion-mesh",
        name: "Dehydrated White Onion Mesh",
        description: "Premium white onion in various mesh sizes for different culinary applications.",
        specifications: ["Mesh Size: 16-80", "Moisture: Max 6%", "Variety: Multiple sizes"],
        keywords: ["dehydrated white onion mesh", "white onion mesh", "onion granules"]
      }
    ]
  },
  {
    id: "dehydrated-red-onion",
    name: "Dehydrated Red Onion",
    description: "Premium quality dehydrated red onion products with rich color and robust flavor, perfect for culinary applications worldwide.",
    seoTitle: "Dehydrated Red Onion Products - Flakes, Minced, Chopped, Powder & Mesh",
    seoDescription: "Premium dehydrated red onion flakes, minced, chopped, powder and mesh. High-quality red onion products for food industry with natural color retention.",
    keywords: ["dehydrated red onion", "dehydrated red onion powder", "dehydrated red onion flakes", "dehydrated red onion minced", "dehydrated red onion chopped", "dehydrated red onion mesh", "premium red onion export"],
    products: [
      {
        id: "dehydrated-red-onion-flakes",
        name: "Dehydrated Red Onion Flakes",
        description: "Premium dehydrated red onion flakes with natural color retention and intense flavor profile.",
        specifications: ["Size: 8-20mm", "Moisture: Max 6%", "Color: Natural red"],
        keywords: ["dehydrated red onion flakes", "red onion flakes", "onion flakes"]
      },
      {
        id: "dehydrated-red-onion-minced",
        name: "Dehydrated Red Onion Minced",
        description: "Finely minced red onion with vibrant color, perfect for spice blends and marinades.",
        specifications: ["Size: 1-3mm", "Moisture: Max 6%", "Flavor: Robust"],
        keywords: ["dehydrated red onion minced", "red onion minced", "minced red onion"]
      },
      {
        id: "dehydrated-red-onion-chopped",
        name: "Dehydrated Red Onion Chopped",
        description: "Uniformly chopped red onion pieces with excellent rehydration properties.",
        specifications: ["Size: 3-5mm", "Moisture: Max 6%", "Rehydration: Excellent"],
        keywords: ["dehydrated red onion chopped", "red onion chopped", "chopped red onion"]
      },
      {
        id: "dehydrated-red-onion-powder",
        name: "Dehydrated Red Onion Powder",
        description: "Fine red onion powder with concentrated flavor and natural color.",
        specifications: ["Fineness: 100-120 mesh", "Moisture: Max 6%", "Color: Deep red"],
        keywords: ["dehydrated red onion powder", "red onion powder", "onion powder"]
      },
      {
        id: "dehydrated-red-onion-mesh",
        name: "Dehydrated Red Onion Mesh",
        description: "Premium red onion in various mesh sizes for different culinary applications.",
        specifications: ["Mesh Size: 16-80", "Moisture: Max 6%", "Variety: Multiple sizes"],
        keywords: ["dehydrated red onion mesh", "red onion mesh", "onion granules"]
      }
    ]
  },
  {
    id: "dehydrated-pink-onion",
    name: "Dehydrated Pink Onion",
    description: "Premium quality dehydrated pink onion products with distinctive mild flavor and attractive color, ideal for gourmet applications.",
    seoTitle: "Dehydrated Pink Onion Products - Flakes, Minced, Chopped, Powder & Mesh",
    seoDescription: "Premium dehydrated pink onion flakes, minced, chopped, powder and mesh. High-quality pink onion products with mild flavor and attractive color.",
    keywords: ["dehydrated pink onion", "dehydrated pink onion flakes", "dehydrated pink onion powder", "dehydrated pink onion minced", "dehydrated pink onion chopped", "dehydrated pink onion mesh"],
    products: [
      {
        id: "dehydrated-pink-onion-flakes",
        name: "Dehydrated Pink Onion Flakes",
        description: "Premium dehydrated pink onion flakes with mild flavor and attractive pink color.",
        specifications: ["Size: 8-20mm", "Moisture: Max 6%", "Color: Natural pink"],
        keywords: ["dehydrated pink onion flakes", "pink onion flakes", "onion flakes"]
      },
      {
        id: "dehydrated-pink-onion-minced",
        name: "Dehydrated Pink Onion Minced",
        description: "Finely minced pink onion with delicate flavor, perfect for gourmet food preparations.",
        specifications: ["Size: 1-3mm", "Moisture: Max 6%", "Flavor: Mild"],
        keywords: ["dehydrated pink onion minced", "pink onion minced", "minced pink onion"]
      },
      {
        id: "dehydrated-pink-onion-chopped",
        name: "Dehydrated Pink Onion Chopped",
        description: "Uniformly chopped pink onion pieces with excellent texture and flavor retention.",
        specifications: ["Size: 3-5mm", "Moisture: Max 6%", "Texture: Tender"],
        keywords: ["dehydrated pink onion chopped", "pink onion chopped", "chopped pink onion"]
      },
      {
        id: "dehydrated-pink-onion-powder",
        name: "Dehydrated Pink Onion Powder",
        description: "Fine pink onion powder with gentle flavor profile and attractive appearance.",
        specifications: ["Fineness: 100-120 mesh", "Moisture: Max 6%", "Appearance: Attractive"],
        keywords: ["dehydrated pink onion powder", "pink onion powder", "onion powder"]
      },
      {
        id: "dehydrated-pink-onion-mesh",
        name: "Dehydrated Pink Onion Mesh",
        description: "Premium pink onion in various mesh sizes for delicate flavor enhancement and visual appeal.",
        specifications: ["Mesh Size: 16-80", "Moisture: Max 6%", "Variety: Multiple sizes"],
        keywords: ["dehydrated pink onion mesh", "pink onion mesh", "onion granules"]
      }
    ]
  },
  {
    id: "dehydrated-garlic",
    name: "Dehydrated Garlic",
    description: "Premium quality dehydrated garlic products with intense flavor and aroma, processed using state-of-the-art technology for maximum potency.",
    seoTitle: "Dehydrated Garlic Products - Granules, Minced, Chopped, Powder & Mesh",
    seoDescription: "Premium dehydrated garlic granules, minced, chopped, powder and mesh. High-quality garlic products with intense flavor and aroma for food industry.",
    keywords: ["dehydrated garlic", "dehydrated garlic powder", "dehydrated garlic granules", "dehydrated garlic minced", "dehydrated garlic chopped", "dehydrated garlic mesh", "premium garlic export"],
    products: [
      {
        id: "dehydrated-garlic-granules",
        name: "Dehydrated Garlic Granules",
        description: "Premium dehydrated garlic granules with intense flavor and aroma, perfect for culinary applications.",
        specifications: ["Size: 16-40 mesh", "Moisture: Max 6%", "Aroma: Intense"],
        keywords: ["dehydrated garlic granules", "garlic granules", "garlic seasoning"]
      },
      {
        id: "dehydrated-garlic-minced",
        name: "Dehydrated Garlic Minced",
        description: "Finely minced garlic with concentrated flavor, ideal for seasoning and marinade blends.",
        specifications: ["Size: 1-3mm", "Moisture: Max 6%", "Flavor: Concentrated"],
        keywords: ["dehydrated garlic minced", "garlic minced", "minced garlic"]
      },
      {
        id: "dehydrated-garlic-chopped",
        name: "Dehydrated Garlic Chopped",
        description: "Uniformly chopped garlic pieces with robust flavor and excellent rehydration properties.",
        specifications: ["Size: 3-5mm", "Moisture: Max 6%", "Flavor: Robust"],
        keywords: ["dehydrated garlic chopped", "garlic chopped", "chopped garlic"]
      },
      {
        id: "dehydrated-garlic-powder",
        name: "Dehydrated Garlic Powder",
        description: "Fine garlic powder with potent flavor, perfect for spice blends and seasoning mixes.",
        specifications: ["Fineness: 100-120 mesh", "Moisture: Max 6%", "Potency: High"],
        keywords: ["dehydrated garlic powder", "garlic powder", "garlic seasoning"]
      },
      {
        id: "dehydrated-garlic-mesh",
        name: "Dehydrated Garlic Mesh",
        description: "Premium garlic in various mesh sizes for instant flavor release and uniform distribution in food products.",
        specifications: ["Mesh Size: 16-80", "Moisture: Max 6%", "Variety: Multiple sizes"],
        keywords: ["dehydrated garlic mesh", "garlic mesh", "garlic granules"]
      }
=======
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
      { id: "white-onion-mesh", name: "Dehydrated White Onion Mesh", description: "White onion mesh sizes available per requirement (16-24, 24-40, 40-80).", keywords: ["white onion mesh", "onion mesh"] }
    ]
  },
  {
    id: "red-onion",
    name: "Dehydrated Red Onion",
    description: "Premium quality dehydrated red onion products with rich color and robust flavor, perfect for culinary applications worldwide.",
    seoTitle: "Dehydrated Red Onion - Flakes, Minced, Chopped, Powder & Mesh",
    seoDescription: "Premium dehydrated red onion flakes, minced, chopped, powder and mesh with natural color retention.",
    keywords: ["dehydrated red onion", "red onion powder", "red onion flakes", "red onion minced", "red onion chopped", "red onion mesh", "premium red onion export"],
    products: [
      { id: "red-onion-flakes", name: "Dehydrated Red Onion Flakes", description: "Premium red onion flakes with natural color retention and intense flavor.", keywords: ["red onion flakes", "dehydrated red onion flakes"] },
      { id: "red-onion-minced", name: "Dehydrated Red Onion Minced", description: "Finely minced red onion for spice blends and marinades.", keywords: ["red onion minced", "dehydrated red onion minced"] },
      { id: "red-onion-chopped", name: "Dehydrated Red Onion Chopped", description: "Uniformly chopped red onion pieces with excellent rehydration.", keywords: ["red onion chopped", "dehydrated red onion chopped"] },
      { id: "red-onion-powder", name: "Dehydrated Red Onion Powder", description: "Fine red onion powder for seasoning and food processing.", keywords: ["red onion powder", "dehydrated red onion powder"] },
      { id: "red-onion-mesh", name: "Dehydrated Red Onion Mesh", description: "Red onion mesh sizes available per requirement (16-24, 24-40, 40-80).", keywords: ["red onion mesh", "onion mesh"] }
    ]
  },
  {
    id: "pink-onion",
    name: "Dehydrated Pink Onion",
    description: "Premium quality dehydrated pink onion products with distinctive mild flavor and attractive color, ideal for gourmet applications.",
    seoTitle: "Dehydrated Pink Onion - Flakes, Minced, Chopped, Powder & Mesh",
    seoDescription: "Premium dehydrated pink onion flakes, minced, chopped, powder and mesh with mild flavor and attractive color.",
    keywords: ["dehydrated pink onion", "pink onion flakes", "pink onion powder", "pink onion minced", "pink onion chopped", "pink onion mesh"],
    products: [
      { id: "pink-onion-flakes", name: "Dehydrated Pink Onion Flakes", description: "Premium pink onion flakes with mild flavor and attractive color.", keywords: ["pink onion flakes", "dehydrated pink onion flakes"] },
      { id: "pink-onion-minced", name: "Dehydrated Pink Onion Minced", description: "Finely minced pink onion with delicate flavor.", keywords: ["pink onion minced", "dehydrated pink onion minced"] },
      { id: "pink-onion-chopped", name: "Dehydrated Pink Onion Chopped", description: "Uniformly chopped pink onion pieces with excellent texture.", keywords: ["pink onion chopped", "dehydrated pink onion chopped"] },
      { id: "pink-onion-powder", name: "Dehydrated Pink Onion Powder", description: "Fine pink onion powder for seasoning and gourmet applications.", keywords: ["pink onion powder", "dehydrated pink onion powder"] },
      { id: "pink-onion-mesh", name: "Dehydrated Pink Onion Mesh", description: "Pink onion mesh sizes available per requirement (16-24, 24-40, 40-80).", keywords: ["pink onion mesh", "onion mesh"] }
    ]
  },
  {
    id: "garlic",
    name: "Dehydrated Garlic",
    description: "Premium quality dehydrated garlic products with intense flavor and aroma, processed using state-of-the-art technology for maximum potency.",
    seoTitle: "Dehydrated Garlic - Granules, Minced, Chopped, Powder & Mesh",
    seoDescription: "Premium dehydrated garlic granules, minced, chopped, powder and mesh for food industry.",
    keywords: ["dehydrated garlic", "garlic granules", "garlic powder", "garlic minced", "garlic chopped", "garlic mesh"],
    products: [
      { id: "garlic-granules", name: "Dehydrated Garlic Granules", description: "Premium garlic granules with potent flavor for spice blends and seasonings.", keywords: ["garlic granules", "dehydrated garlic granules"] },
      { id: "garlic-minced", name: "Dehydrated Garlic Minced", description: "Finely minced garlic ideal for seasoning and marinade blends.", keywords: ["garlic minced", "dehydrated garlic minced"] },
      { id: "garlic-chopped", name: "Dehydrated Garlic Chopped", description: "Uniformly chopped garlic pieces with robust flavor.", keywords: ["garlic chopped", "dehydrated garlic chopped"] },
      { id: "garlic-powder", name: "Dehydrated Garlic Powder", description: "Fine garlic powder with strong aroma for seasoning and processing.", keywords: ["garlic powder", "dehydrated garlic powder"] },
      { id: "garlic-mesh", name: "Dehydrated Garlic Mesh", description: "Garlic mesh sizes available per requirement (16-24, 24-40, 40-80).", keywords: ["garlic mesh", "mesh garlic"] }
>>>>>>> Stashed changes
    ]
  },
  {
    id: "fried-onion",
    name: "Fried Onion",
    description: "Premium quality fried onion products with crispy texture and rich flavor, available in fresh and dehydrated varieties for diverse culinary applications.",
    seoTitle: "Fried Onion - Fresh, Dehydrated & Coated Varieties",
    seoDescription: "Premium fried onion products including fresh fried onions, dehydrated fried onions, and coated fried onions.",
    keywords: ["fried onion", "dehydrated fried onions", "fresh fried onions", "coated fried onions", "crispy onion"],
    products: [
<<<<<<< Updated upstream
      {
        id: "fresh-fried-onions",
        name: "Fresh Fried Onions",
        description: "Premium fresh fried onions with crispy texture and golden color, perfect for garnishing and culinary applications.",
        specifications: ["Texture: Crispy", "Color: Golden", "Freshness: Premium"],
        keywords: ["fresh fried onions", "fried onions", "crispy fried onions", "golden fried onions"]
      },
      {
        id: "dehydrated-fried-onions",
        name: "Dehydrated Fried Onions",
        description: "High-quality dehydrated fried onions with extended shelf life and concentrated flavor for food industry applications.",
        specifications: ["Moisture: Max 3%", "Shelf Life: Extended", "Flavor: Concentrated"],
        keywords: ["dehydrated fried onions", "fried onions", "dried fried onions", "shelf stable fried onions"]
      },
      {
        id: "coated-fried-onions",
        name: "Coated Fried Onions",
        description: "Premium coated fried onions with enhanced crispiness and extended freshness retention.",
        specifications: ["Coating: Enhanced", "Crispiness: Superior", "Retention: Extended"],
        keywords: ["coated fried onions", "fried onions coated", "crispy coated onions", "enhanced fried onions"]
      }
=======
      { id: "fresh-fried-onions", name: "Fresh Fried Onions", description: "Crispy, golden fresh fried onions ideal for garnishing and culinary uses.", keywords: ["fresh fried onions", "fried onions"] },
      { id: "dehydrated-fried-onions", name: "Dehydrated Fried Onions", description: "Shelf-stable dehydrated fried onions with concentrated flavor.", keywords: ["dehydrated fried onions", "dried fried onions"] },
      { id: "coated-fried-onions", name: "Coated Fried Onions", description: "Coated fried onions with enhanced crispiness and extended freshness.", keywords: ["coated fried onions", "crispy coated onions"] }
>>>>>>> Stashed changes
    ]
  }
];