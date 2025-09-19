  import { Award, CheckCircle, Globe, Shield, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/rudrakshenterprise", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/rudrakshent", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/rudraksh-enterprise", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/rudrakshenterprise", label: "Instagram" },
  ];

  return (
    <footer className="bg-foreground text-background py-12 mt-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">Rudraksh Enterprise</div>
            <p className="text-background/80 mb-6">
              Premium dehydrated onion and garlic products with uncompromising quality and global reach.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/rudraksh_enterprise_007?igsh=MW9hN3MxeGEwOG05YQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/share/16Nm2m5TxC/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors opacity-50"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors opacity-50"
              >
                <Linkedin className="w-5 h-5" />
              </a>
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

          <div>
            <h4 className="font-semibold mb-4">Global Presence</h4>
            <p className="text-background/80 mb-4">
              Serving partners across 50+ countries with consistent quality and reliable logistics.
            </p>
            <div className="flex items-center text-background/80">
              <Globe className="w-4 h-4 mr-2" />
              Worldwide Shipping
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 mb-4 md:mb-0">
              © 2024 Rudraksh Enterprise. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-background/60">
              <a href="/contact" className="hover:underline">Contact Us</a>
              <a href="/about" className="hover:underline">About Us</a>
              <a href="/products" className="hover:underline">Products</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


