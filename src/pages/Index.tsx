import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { CounterAnimation } from "@/components/CounterAnimation";
import { TypewriterEffect } from "@/components/TypewriterEffect";
import { ProductSidebar } from "@/components/ProductSidebar";
import { ProductDisplay } from "@/components/ProductDisplay";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { productCategories } from "@/data/products";
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

// Import product images
import heroImage from "@/assets/hero-onion-garlic.jpg";
import dehydratedOnionPowder from "@/assets/dehydrated-onion-powder.jpg";
import dehydratedGarlicPowder from "@/assets/dehydrated-garlic-powder.jpg";
import friedOnions from "@/assets/fried-onions.jpg";
import onionFlakesVarieties from "@/assets/onion-flakes-varieties.jpg";
import dehydratedMincedGarlic from "@/assets/dehydrated-minced-garlic.jpg";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("white-onion");
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

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">
              Rudraksh Enterprise
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-smooth">Home</a>
              <a href="#about" className="text-foreground hover:text-primary transition-smooth">About</a>
              <a href="#products" className="text-foreground hover:text-primary transition-smooth">Products</a>
              <a href="#why-choose-us" className="text-foreground hover:text-primary transition-smooth">Why Choose Us</a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-smooth">Testimonials</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-smooth">Contact</a>
            </div>
            <Button variant="hero" size="sm">Get Quote</Button>
          </div>
        </div>
      </nav>

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
              <Button 
                onClick={() => setShowProducts(true)}
                variant="hero" 
                size="lg" 
                className="hover-float"
              >
                <Package className="w-5 h-5 mr-2" />
                Explore Products
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

      {/* About Us Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
              About Our Company
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              Leading the Way in <span className="text-primary">Quality Exports</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With decades of experience in agricultural exports, we've built our reputation 
              on unwavering quality, innovative processing techniques, and global reliability.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver the world's finest onions and garlic through cutting-edge processing, 
                  stringent quality control, and sustainable farming partnerships. We bridge the 
                  gap between premium agricultural produce and global markets.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 rounded-lg bg-muted/50">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">FSSAI Certified</h4>
                  <p className="text-sm text-muted-foreground">Food safety excellence</p>
                </div>
                <div className="text-center p-6 rounded-lg bg-muted/50">
                  <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Global Reach</h4>
                  <p className="text-sm text-muted-foreground">50+ countries served</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="card-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Shield className="w-8 h-8 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Quality Assurance</h4>
                      <p className="text-muted-foreground">
                        Every batch undergoes rigorous testing and quality checks to ensure 
                        only the finest products reach our customers.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Leaf className="w-8 h-8 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Sustainable Practices</h4>
                      <p className="text-muted-foreground">
                        We work with farmers who follow sustainable growing practices, 
                        ensuring environmental responsibility and product purity.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Truck className="w-8 h-8 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Global Logistics</h4>
                      <p className="text-muted-foreground">
                        Advanced supply chain management ensures timely delivery to 
                        any corner of the world with complete freshness intact.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 section-gradient">
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
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
              Why Choose Us
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              Unmatched <span className="text-primary">Excellence</span> in Every Step
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to quality, innovation, and customer satisfaction sets us apart 
              in the global agricultural export industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 card-shadow hover:shadow-xl transition-smooth group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-smooth">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Hygienic Processing</h3>
              <p className="text-muted-foreground">
                State-of-the-art facilities with automated, moisture-free processing 
                ensuring maximum hygiene and quality retention.
              </p>
            </Card>

            <Card className="text-center p-8 card-shadow hover:shadow-xl transition-smooth group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-smooth">
                <Timer className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Ultra-Fine Grinding</h3>
              <p className="text-muted-foreground">
                Advanced grinding technology delivers consistent texture and particle 
                size for superior aroma and flavor release.
              </p>
            </Card>

            <Card className="text-center p-8 card-shadow hover:shadow-xl transition-smooth group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-smooth">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Customer Satisfaction</h3>
              <p className="text-muted-foreground">
                95% repeat business rate with customers across Europe, Africa, 
                and Gulf regions choosing us again and again.
              </p>
            </Card>

            <Card className="text-center p-8 card-shadow hover:shadow-xl transition-smooth group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-smooth">
                <Package className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Advanced Packaging</h3>
              <p className="text-muted-foreground">
                Moisture-proof, tamper-evident packaging that maintains freshness 
                and quality throughout the longest supply chains.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 section-gradient">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Client Testimonials
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              What Our <span className="text-primary">Global Partners</span> Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trusted by businesses across continents for consistent quality and reliable service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 card-shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-muted-foreground mb-6 italic">
                "Outstanding quality and consistency. Their garlic powder has become essential 
                for our European food processing operations. The hygiene standards are exceptional."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Marcus Weber</div>
                  <div className="text-sm text-muted-foreground">Food Processing Ltd, Germany</div>
                </div>
              </div>
            </Card>

            <Card className="p-8 card-shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-muted-foreground mb-6 italic">
                "Reliable partner for our Gulf operations. Their moisture-free packaging ensures 
                our products maintain quality even in challenging climates. Highly recommended."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Ahmed Al-Rashid</div>
                  <div className="text-sm text-muted-foreground">Emirates Trading Co, UAE</div>
                </div>
              </div>
            </Card>

            <Card className="p-8 card-shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-muted-foreground mb-6 italic">
                "Three years of partnership and counting. Their onion flakes are consistently 
                superior in flavor and texture. Perfect for our African distribution network."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Sarah Okonkwo</div>
                  <div className="text-sm text-muted-foreground">African Spice Network, Nigeria</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
              Get In Touch
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              Ready to <span className="text-primary">Partner</span> With Us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Contact us today for samples, quotes, or to discuss your specific requirements. 
              Our team is ready to serve your global needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <Card className="p-8 card-shadow">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Head Office</h4>
                      <p className="text-muted-foreground">
                        Mahuva, Bhavnagar<br />
                        Gujarat, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Phone & WhatsApp</h4>
                      <p className="text-muted-foreground">
                        +91 7383409122<br />
                        +91 7383409122 (WhatsApp)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-muted-foreground">
                        kalpitgor@gmail.com<br />
                        Contact us for samples & quotes
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 card-shadow bg-muted/50">
                <h4 className="font-semibold mb-4">Business Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span className="text-muted-foreground">9:00 AM - 7:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-8 card-shadow">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <Input placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <Input placeholder="Your company name" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your.email@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input placeholder="+1 (555) 123-4567" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Product Interest</label>
                  <Input placeholder="e.g., Dehydrated Onion Powder, Fried Onions, Minced Garlic" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your requirements, quantity needed, destination country, etc."
                    rows={6}
                  />
                </div>
                
                <Button variant="hero" size="lg" className="w-full">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">Rudraksh Enterprise</div>
              <p className="text-background/80 mb-4">
                Premium dehydrated onion and garlic products with uncompromising quality and global reach.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-background/80 hover:text-background transition-smooth">Home</a>
                <a href="#about" className="block text-background/80 hover:text-background transition-smooth">About Us</a>
                <a href="#products" className="block text-background/80 hover:text-background transition-smooth">Products</a>
                <a href="#contact" className="block text-background/80 hover:text-background transition-smooth">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <div className="space-y-2">
                <div className="text-background/80">Dehydrated Onion Powder</div>
                <div className="text-background/80">Dehydrated Garlic Powder</div>
                <div className="text-background/80">Fried Onions</div>
                <div className="text-background/80">Onion Flakes (White/Red/Pink)</div>
                <div className="text-background/80">Dehydrated Minced Garlic</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Certifications</h4>
              <div className="space-y-2">
                <div className="flex items-center text-background/80">
                  <Award className="w-4 h-4 mr-2" />
                  FSSAI Certified
                </div>
                <div className="flex items-center text-background/80">
                  <Shield className="w-4 h-4 mr-2" />
                  ISO 22000
                </div>
                <div className="flex items-center text-background/80">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  HACCP Compliant
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-background/60">
              © 2024 Rudraksh Enterprise. All rights reserved. | Delivering quality worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;