import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Shield, Timer, Users, Package } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-background">
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
  );
}


