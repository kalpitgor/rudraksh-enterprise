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
    name: "White Onion Products",
    description: "Premium quality dehydrated white onion products processed with advanced technology for maximum flavor retention and shelf life.",
    seoTitle: "Dehydrated White Onion Products - Flakes, Minced, Chopped & Granules",
    seoDescription: "High-quality dehydrated white onion flakes, minced, chopped and granules. Premium white onion powder for food industry. Export quality guaranteed.",
    keywords: ["dehydrated white onion", "white onion flakes", "white onion powder", "dehydrated onion", "onion granules"],
    products: [
      {
        id: "white-onion-flakes",
        name: "White Onion Flakes (8-20mm)",
        description: "Premium dehydrated white onion flakes with excellent rehydration properties and natural flavor.",
        specifications: ["Size: 8-20mm", "Moisture: Max 6%", "Purity: 99.5%"],
        keywords: ["white onion flakes", "dehydrated onion flakes", "onion flakes 8-20mm"]
      },
      {
        id: "white-onion-minced",
        name: "White Onion Minced (1-3mm)",
        description: "Finely minced white onion perfect for seasoning blends and instant food preparations.",
        specifications: ["Size: 1-3mm", "Moisture: Max 6%", "Color: Natural white"],
        keywords: ["white onion minced", "dehydrated onion minced", "minced onion"]
      },
      {
        id: "white-onion-chopped",
        name: "White Onion Chopped (3-5mm)",
        description: "Uniformly chopped white onion pieces ideal for soups, sauces and ready-to-eat meals.",
        specifications: ["Size: 3-5mm", "Moisture: Max 6%", "Texture: Crisp"],
        keywords: ["white onion chopped", "dehydrated onion chopped", "chopped onion"]
      },
      {
        id: "white-onion-granules-16-24",
        name: "White Onion Granules (16-24 mesh)",
        description: "Fine white onion granules perfect for spice blends and seasoning applications.",
        specifications: ["Mesh Size: 16-24", "Moisture: Max 6%", "Flow: Free flowing"],
        keywords: ["white onion granules", "onion granules 16-24", "dehydrated onion powder"]
      },
      {
        id: "white-onion-granules-24-40",
        name: "White Onion Granules (24-40 mesh)",
        description: "Medium-fine white onion granules with excellent solubility and flavor release.",
        specifications: ["Mesh Size: 24-40", "Moisture: Max 6%", "Solubility: High"],
        keywords: ["white onion granules", "onion granules 24-40", "dehydrated onion"]
      },
      {
        id: "white-onion-granules-40-80",
        name: "White Onion Granules (40-80 mesh)",
        description: "Ultra-fine white onion granules for instant seasoning and food processing applications.",
        specifications: ["Mesh Size: 40-80", "Moisture: Max 6%", "Fineness: Ultra-fine"],
        keywords: ["white onion granules", "onion granules 40-80", "fine onion powder"]
      }
    ]
  },
  {
    id: "red-onion",
    name: "Red Onion Products",
    description: "Premium quality dehydrated red onion products with rich color and robust flavor, perfect for culinary applications worldwide.",
    seoTitle: "Dehydrated Red Onion Products - Flakes, Minced, Chopped & Granules",
    seoDescription: "Premium dehydrated red onion flakes, minced, chopped and granules. High-quality red onion powder for food industry with natural color retention.",
    keywords: ["dehydrated red onion", "red onion flakes", "red onion powder", "dehydrated onion", "red onion granules"],
    products: [
      {
        id: "red-onion-flakes",
        name: "Red Onion Flakes (8-20mm)",
        description: "Premium dehydrated red onion flakes with natural color retention and intense flavor profile.",
        specifications: ["Size: 8-20mm", "Moisture: Max 6%", "Color: Natural red"],
        keywords: ["red onion flakes", "dehydrated red onion flakes", "red onion flakes 8-20mm"]
      },
      {
        id: "red-onion-minced",
        name: "Red Onion Minced (1-3mm)",
        description: "Finely minced red onion with vibrant color, perfect for spice blends and marinades.",
        specifications: ["Size: 1-3mm", "Moisture: Max 6%", "Flavor: Robust"],
        keywords: ["red onion minced", "dehydrated red onion minced", "minced red onion"]
      },
      {
        id: "red-onion-chopped",
        name: "Red Onion Chopped (3-5mm)",
        description: "Uniformly chopped red onion pieces with excellent rehydration properties.",
        specifications: ["Size: 3-5mm", "Moisture: Max 6%", "Rehydration: Excellent"],
        keywords: ["red onion chopped", "dehydrated red onion chopped", "chopped red onion"]
      },
      {
        id: "red-onion-granules-16-24",
        name: "Red Onion Granules (16-24 mesh)",
        description: "Fine red onion granules with concentrated flavor and natural color.",
        specifications: ["Mesh Size: 16-24", "Moisture: Max 6%", "Color: Deep red"],
        keywords: ["red onion granules", "red onion granules 16-24", "dehydrated red onion powder"]
      },
      {
        id: "red-onion-granules-24-40",
        name: "Red Onion Granules (24-40 mesh)",
        description: "Medium-fine red onion granules ideal for seasoning and flavor enhancement.",
        specifications: ["Mesh Size: 24-40", "Moisture: Max 6%", "Flavor: Concentrated"],
        keywords: ["red onion granules", "red onion granules 24-40", "red onion seasoning"]
      },
      {
        id: "red-onion-granules-40-80",
        name: "Red Onion Granules (40-80 mesh)",
        description: "Ultra-fine red onion granules for instant flavor release and uniform distribution.",
        specifications: ["Mesh Size: 40-80", "Moisture: Max 6%", "Distribution: Uniform"],
        keywords: ["red onion granules", "red onion granules 40-80", "fine red onion powder"]
      }
    ]
  },
  {
    id: "pink-onion",
    name: "Pink Onion Products",
    description: "Premium quality dehydrated pink onion products with distinctive mild flavor and attractive color, ideal for gourmet applications.",
    seoTitle: "Dehydrated Pink Onion Products - Flakes, Minced, Chopped & Granules",
    seoDescription: "Premium dehydrated pink onion flakes, minced, chopped and granules. High-quality pink onion powder with mild flavor and attractive color.",
    keywords: ["dehydrated pink onion", "pink onion flakes", "pink onion powder", "dehydrated onion", "pink onion granules"],
    products: [
      {
        id: "pink-onion-flakes",
        name: "Pink Onion Flakes (8-20mm)",
        description: "Premium dehydrated pink onion flakes with mild flavor and attractive pink color.",
        specifications: ["Size: 8-20mm", "Moisture: Max 6%", "Color: Natural pink"],
        keywords: ["pink onion flakes", "dehydrated pink onion flakes", "pink onion flakes 8-20mm"]
      },
      {
        id: "pink-onion-minced",
        name: "Pink Onion Minced (1-3mm)",
        description: "Finely minced pink onion with delicate flavor, perfect for gourmet food preparations.",
        specifications: ["Size: 1-3mm", "Moisture: Max 6%", "Flavor: Mild"],
        keywords: ["pink onion minced", "dehydrated pink onion minced", "minced pink onion"]
      },
      {
        id: "pink-onion-chopped",
        name: "Pink Onion Chopped (3-5mm)",
        description: "Uniformly chopped pink onion pieces with excellent texture and flavor retention.",
        specifications: ["Size: 3-5mm", "Moisture: Max 6%", "Texture: Tender"],
        keywords: ["pink onion chopped", "dehydrated pink onion chopped", "chopped pink onion"]
      },
      {
        id: "pink-onion-granules-16-24",
        name: "Pink Onion Granules (16-24 mesh)",
        description: "Fine pink onion granules with gentle flavor profile and attractive appearance.",
        specifications: ["Mesh Size: 16-24", "Moisture: Max 6%", "Appearance: Attractive"],
        keywords: ["pink onion granules", "pink onion granules 16-24", "dehydrated pink onion powder"]
      },
      {
        id: "pink-onion-granules-24-40",
        name: "Pink Onion Granules (24-40 mesh)",
        description: "Medium-fine pink onion granules ideal for premium seasoning blends.",
        specifications: ["Mesh Size: 24-40", "Moisture: Max 6%", "Quality: Premium"],
        keywords: ["pink onion granules", "pink onion granules 24-40", "premium onion seasoning"]
      },
      {
        id: "pink-onion-granules-40-80",
        name: "Pink Onion Granules (40-80 mesh)",
        description: "Ultra-fine pink onion granules for delicate flavor enhancement and visual appeal.",
        specifications: ["Mesh Size: 40-80", "Moisture: Max 6%", "Appeal: Visual"],
        keywords: ["pink onion granules", "pink onion granules 40-80", "fine pink onion powder"]
      }
    ]
  },
  {
    id: "garlic",
    name: "Garlic Products",
    description: "Premium quality dehydrated garlic products with intense flavor and aroma, processed using state-of-the-art technology for maximum potency.",
    seoTitle: "Dehydrated Garlic Products - Flakes, Minced, Chopped & Granules",
    seoDescription: "Premium dehydrated garlic flakes, minced, chopped and granules. High-quality garlic powder with intense flavor and aroma for food industry.",
    keywords: ["dehydrated garlic", "garlic flakes", "garlic powder", "dehydrated garlic powder", "garlic granules"],
    products: [
      {
        id: "garlic-flakes",
        name: "Garlic Flakes (8-15mm)",
        description: "Premium dehydrated garlic flakes with intense flavor and aroma, perfect for culinary applications.",
        specifications: ["Size: 8-15mm", "Moisture: Max 6%", "Aroma: Intense"],
        keywords: ["garlic flakes", "dehydrated garlic flakes", "garlic flakes 8-15mm"]
      },
      {
        id: "garlic-minced",
        name: "Garlic Minced (1-3mm)",
        description: "Finely minced garlic with concentrated flavor, ideal for seasoning and marinade blends.",
        specifications: ["Size: 1-3mm", "Moisture: Max 6%", "Flavor: Concentrated"],
        keywords: ["garlic minced", "dehydrated garlic minced", "minced garlic"]
      },
      {
        id: "garlic-chopped",
        name: "Garlic Chopped (3-5mm)",
        description: "Uniformly chopped garlic pieces with robust flavor and excellent rehydration properties.",
        specifications: ["Size: 3-5mm", "Moisture: Max 6%", "Flavor: Robust"],
        keywords: ["garlic chopped", "dehydrated garlic chopped", "chopped garlic"]
      },
      {
        id: "garlic-granules-16-24",
        name: "Garlic Granules (16-24 mesh)",
        description: "Fine garlic granules with potent flavor, perfect for spice blends and seasoning mixes.",
        specifications: ["Mesh Size: 16-24", "Moisture: Max 6%", "Potency: High"],
        keywords: ["garlic granules", "garlic granules 16-24", "dehydrated garlic powder"]
      },
      {
        id: "garlic-granules-24-40",
        name: "Garlic Granules (24-40 mesh)",
        description: "Medium-fine garlic granules with excellent solubility and flavor release properties.",
        specifications: ["Mesh Size: 24-40", "Moisture: Max 6%", "Solubility: Excellent"],
        keywords: ["garlic granules", "garlic granules 24-40", "garlic seasoning"]
      },
      {
        id: "garlic-granules-40-80",
        name: "Garlic Granules (40-80 mesh)",
        description: "Ultra-fine garlic granules for instant flavor release and uniform distribution in food products.",
        specifications: ["Mesh Size: 40-80", "Moisture: Max 6%", "Release: Instant"],
        keywords: ["garlic granules", "garlic granules 40-80", "fine garlic powder"]
      }
    ]
  },
  {
    id: "fried-onion",
    name: "Fried Onion Products",
    description: "Premium quality fried onion products with crispy texture and rich flavor, available in fresh and dehydrated varieties for diverse culinary applications.",
    seoTitle: "Fried Onion Products - Fresh, Dehydrated & Coated Varieties",
    seoDescription: "Premium fried onion products including fresh fried onion, dehydrated fried onion, and coated varieties. Crispy texture with rich flavor for culinary excellence.",
    keywords: ["fried onion", "dehydrated fried onion", "fresh fried onion", "fried onion coated", "crispy onion"],
    products: [
      {
        id: "fresh-fried-onion",
        name: "Fresh Fried Onion",
        description: "Premium fresh fried onion with crispy texture and golden color, perfect for garnishing and culinary applications.",
        specifications: ["Texture: Crispy", "Color: Golden", "Freshness: Premium"],
        keywords: ["fresh fried onion", "fried onion", "crispy fried onion", "golden fried onion"]
      },
      {
        id: "dehydrated-fried-onion",
        name: "Dehydrated Fried Onion",
        description: "High-quality dehydrated fried onion with extended shelf life and concentrated flavor for food industry applications.",
        specifications: ["Moisture: Max 3%", "Shelf Life: Extended", "Flavor: Concentrated"],
        keywords: ["dehydrated fried onion", "fried onion", "dried fried onion", "shelf stable fried onion"]
      },
      {
        id: "fresh-fried-onion-coated",
        name: "Fresh Fried Onion Coated",
        description: "Premium coated fresh fried onion with enhanced crispiness and extended freshness retention.",
        specifications: ["Coating: Enhanced", "Crispiness: Superior", "Retention: Extended"],
        keywords: ["fried onion coated", "coated fried onion", "crispy coated onion", "enhanced fried onion"]
      }
    ]
  }
];