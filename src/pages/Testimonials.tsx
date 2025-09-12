import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Star, User } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-20 section-gradient">
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
  );
}


