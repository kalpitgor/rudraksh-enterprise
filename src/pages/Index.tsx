import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { CounterAnimation } from "@/components/CounterAnimation";
import { TypewriterEffect } from "@/components/TypewriterEffect";
// Sidebar components are only used on the Products page
import ProductPage from "@/pages/products";
import { 
  Globe, 
  Shield, 
  Award, 
  Truck, 
  Mail, 
  Phone, 
  MapPin,
  CheckCircle,
  Star,
  Leaf,
  Package,
  Users,
  Timer,
  User
} from "lucide-react";
import { Link } from "react-router-dom";

// Import product images
import heroImage from "@/assets/hero-onion-garlic.jpg";
import dehydratedOnionPowder from "@/assets/dehydrated-onion-powder.jpg";
import dehydratedGarlicPowder from "@/assets/dehydrated-garlic-powder.jpg";
import friedOnions from "@/assets/fried-onions.jpg";
import onionFlakesVarieties from "@/assets/onion-flakes-varieties.jpg";
import dehydratedMincedGarlic from "@/assets/dehydrated-minced-garlic.jpg";

const Index = () => {
<<<<<<< Updated upstream
  const [selectedCategory, setSelectedCategory] = useState("dehydrated-white-onion");
  const [showProducts, setShowProducts] = useState(false);

  const selectedCategoryData = productCategories.find(cat => cat.id === selectedCategory);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setShowProducts(true);
  };

  if (showProducts && selectedCategoryData) {
    return (
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <ProductSidebar 
            selectedCategory={selectedCategory} 
            onCategorySelect={handleCategorySelect} 
          />
          <main className="flex-1 p-6">
            {/* Header with back to home */}
            <div className="mb-6 flex items-center justify-between">
              <SidebarTrigger className="lg:hidden" />
              <Button 
                variant="outline" 
                onClick={() => setShowProducts(false)}
                className="ml-auto"
              >
                Back to Home
              </Button>
            </div>
            <ProductDisplay category={selectedCategoryData} />
          </main>
        </div>
      </SidebarProvider>
    );
  }
=======
>>>>>>> Stashed changes

  return (
    <div className="min-h-screen">
      {/* Global Header is rendered in App.tsx */}

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center section-gradient overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <Badge className="bg-primary/10 text-primary border-primary/20 animate-fade-in-delay">
                <Globe className="w-4 h-4 mr-2 animate-pulse" />
                Global Export Excellence
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-delay-2">
                <TypewriterEffect 
                  text="Premium Onion & Garlic Exports"
                  speed={80}
                  delay={800}
                  className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent glow-text"
                />
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-delay-3">
                Delivering the finest quality onions and garlic to global markets with 
                uncompromising hygiene standards, automated processing, and moisture-free packaging.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 animate-fade-in-delay-4">
              <Button asChild
                variant="hero" 
                size="lg" 
                className="hover-float"
              >
                <Link to="/products" className="flex items-center">
                  <Package className="w-5 h-5 mr-2" />
                  Explore Products
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="hover-float">
                <Mail className="w-5 h-5 mr-2" />
                Request Samples
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 animate-fade-in-delay-5">
              <div className="text-center counter-animation">
                <CounterAnimation target={50} suffix="+" />
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
              <div className="text-center counter-animation">
                <CounterAnimation target={1000} suffix="+" />
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center counter-animation">
                <CounterAnimation target={99} suffix="%" />
                <div className="text-sm text-muted-foreground">Quality Assurance</div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-left">
            <div className="relative overflow-hidden rounded-2xl card-shadow hover-tilt">
              <img 
                src={heroImage} 
                alt="Premium quality onions and garlic for export" 
                className="w-full h-[600px] object-cover transform transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute top-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2 pulse-glow">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Premium Quality</span>
                </div>
              </div>
            </div>
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