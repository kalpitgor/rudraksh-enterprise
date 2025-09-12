import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 bg-background">
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
                      <a href="tel:+917383409122" className="hover:underline" aria-label="Call +91 7383409122">+91 7383409122</a><br />
                      <a href="https://wa.me/917383409122" target="_blank" rel="noopener noreferrer" className="hover:underline" aria-label="Chat on WhatsApp +91 7383409122">+91 7383409122 (WhatsApp)</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">
                      <a href="mailto:sales@rudraksh-enterprise.com" className="hover:underline" aria-label="Email sales@rudraksh-enterprise.com">sales@rudraksh-enterprise.com</a><br />
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
  );
}


