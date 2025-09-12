import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Globe, Shield, Leaf, Truck } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 bg-background">
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
  );
}


