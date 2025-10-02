import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CounterAnimation } from "@/components/CounterAnimation";
import { motion, Variants } from "framer-motion";
import { 
  Globe, 
  Mail, 
  Package,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Import product images
import heroImage from "@/assets/hero-onion-garlic.jpg";
import dehydratedOnionPowder from "@/assets/dehydrated-onion-powder.jpg";
import dehydratedGarlicPowder from "@/assets/dehydrated-garlic-powder.jpg";
import friedOnions from "@/assets/fried-onions.jpg";
import onionFlakesVarieties from "@/assets/onion-flakes-varieties.jpg";
import dehydratedMincedGarlic from "@/assets/dehydrated-minced-garlic.jpg";

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const products = [
  {
    name: "Dehydrated Onion",
    description: "Premium quality dehydrated onion flakes, powder, and granules",
    image: dehydratedOnionPowder,
  },
  {
    name: "Dehydrated Garlic",
    description: "Fresh dehydrated garlic products for global markets",
    image: dehydratedGarlicPowder,
  },
  {
    name: "Fried Onions",
    description: "Crispy golden fried onions with authentic taste",
    image: friedOnions,
  },
  {
    name: "Onion Flakes",
    description: "Multiple varieties with consistent texture",
    image: onionFlakesVarieties,
  },
  {
    name: "Minced Garlic",
    description: "High-quality minced garlic with excellent rehydration",
    image: dehydratedMincedGarlic,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Global Header is rendered in App.tsx */}

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
        
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <motion.div
            className="flex flex-col items-center text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <Badge className="bg-primary/10 text-primary border-primary/20">
                <Sparkles className="h-4 w-4 mr-2" />
                <span>Premium Dehydrated Products</span>
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="mt-8 max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
              variants={itemVariants}
            >
              Rudraksh Enterprise
            </motion.h1>

            <motion.p
              className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl"
              variants={itemVariants}
            >
              Leading exporter of premium dehydrated onion and garlic products. 
              Delivering quality and freshness to global markets.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className="mt-10 flex flex-wrap items-center justify-center gap-4" variants={itemVariants}>
              <Button asChild size="lg" className="gap-2">
                <Link to="/products">
                  <Package className="h-5 w-5" />
                  View Products
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link to="/contact">
                  <Globe className="h-5 w-5" />
                  Export Inquiry
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3"
              variants={itemVariants}
            >
              <div className="flex flex-col items-center">
                <CounterAnimation target={15} suffix="+" className="text-4xl font-bold text-primary" />
                <div className="mt-2 text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="flex flex-col items-center">
                <CounterAnimation target={50} suffix="+" className="text-4xl font-bold text-primary" />
                <div className="mt-2 text-sm text-muted-foreground">Countries Served</div>
              </div>
              <div className="flex flex-col items-center">
                <CounterAnimation target={100} suffix="%" className="text-4xl font-bold text-primary" />
                <div className="mt-2 text-sm text-muted-foreground">Quality Assured</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-0 top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 bottom-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </section>

      {/* Products Carousel */}
      <section id="products" className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Premium Products
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover our range of high-quality dehydrated products
            </p>
          </div>

          <div className="mt-12">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent>
                {products.map((product, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <div className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg">
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-card-foreground">{product.name}</h3>
                          <p className="mt-2 text-sm text-muted-foreground">{product.description}</p>
                          <Button asChild variant="outline" className="mt-4 w-full gap-2">
                            <Link to="/products">
                              Learn More
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>

      {/* About moved to /about */}

      {/* Products moved to /products route */}

      {/* <section id="products" className="py-20 section-gradient">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Our Product Range
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              Premium <span className="text-primary">Product Forms</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From whole produce to finely processed forms, we offer onions and garlic 
              in various specifications to meet diverse culinary and industrial needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-shadow hover:shadow-xl transition-smooth group">
              <CardContent className="p-0">
                <div className="overflow-hidden rounded-t-lg">
                  <img 
                    src={dehydratedOnionPowder} 
                    alt="Premium dehydrated onion powder for export" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Dehydrated Onion Powder</h3>
                  <p className="text-muted-foreground mb-4">
                    Ultra-fine dehydrated onion powder with rich flavor and aroma. 
                    Perfect for seasoning, food processing and culinary applications.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      Moisture content: &lt;5%
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      Shelf life: 24 months
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      Mesh size: 100-120
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-shadow hover:shadow-xl transition-smooth group">
              <CardContent className="p-0">
                <div className="overflow-hidden rounded-t-lg">
                  <img 
                    src={dehydratedGarlicPowder} 
                    alt="Premium dehydrated garlic powder for export" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Dehydrated Garlic Powder</h3>
                  <p className="text-muted-foreground mb-4">
                    Premium quality dehydrated garlic powder with strong aroma and flavor. 
                    Ideal for food manufacturing and culinary preparations.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      Purity: 99.5%+
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      Moisture: &lt;6%
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      Ultra-fine grinding
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-shadow hover:shadow-xl transition-smooth group">
              <CardContent className="p-0">
                <div className="overflow-hidden rounded-t-lg">
                  <img 
                    src={friedOnions} 
                    alt="Premium fried onions for export" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Fried Onions</h3>
                  <p className="text-muted-foreground mb-4">
                    Crispy, golden fried onions with authentic taste and texture. 
                    Perfect for garnishing and food preparation applications.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      Crispy texture
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      Extended shelf life
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      Vacuum packed
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-shadow hover:shadow-xl transition-smooth group">
              <CardContent className="p-0">
                <div className="overflow-hidden rounded-t-lg">
                  <img 
                    src={onionFlakesVarieties} 
                    alt="White, red and pink onion flakes varieties for export" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Onion Flakes (White/Red/Pink)</h3>
                  <p className="text-muted-foreground mb-4">
                    Premium quality onion flakes in white, red and pink varieties. 
                    Consistent texture and rich flavor for diverse culinary needs.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      Multiple varieties
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      Uniform flake size
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      Moisture-free packing
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-shadow hover:shadow-xl transition-smooth group">
              <CardContent className="p-0">
                <div className="overflow-hidden rounded-t-lg">
                  <img 
                    src={dehydratedMincedGarlic} 
                    alt="Premium dehydrated minced garlic for export" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Dehydrated Minced Garlic</h3>
                  <p className="text-muted-foreground mb-4">
                    High-quality dehydrated minced garlic with excellent rehydration properties. 
                    Ideal for ready-to-use food applications and processing.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      Granular texture
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      Quick rehydration
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      Strong flavor profile
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Why Choose Us moved to /why-choose-us */}

      {/* Testimonials moved to /testimonials */}

      {/* Contact moved to /contact */}

      {/* Global Footer is rendered in App.tsx */}
    </div>
  );
};

export default Index;