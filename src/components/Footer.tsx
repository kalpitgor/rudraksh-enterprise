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
            
            {/* Social Media Links */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors group"
                    aria-label={`Follow us on ${label}`}
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start text-background/80">
                <Phone className="w-4 h-4 mr-3 mt-1 text-primary" />
                <div>
                  <a href="tel:+917383409122" className="hover:underline">
                    +91 7383409122
                  </a>
                  <div className="text-sm">WhatsApp Available</div>
                </div>
              </div>
              <div className="flex items-start text-background/80">
                <Mail className="w-4 h-4 mr-3 mt-1 text-primary" />
                <a href="mailto:sales@rudraksh-enterprise.com" className="hover:underline">
                  sales@rudraksh-enterprise.com
                </a>
              </div>
              <div className="flex items-start text-background/80">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-primary" />
                <div>
                  Mahuva, Bhavnagar<br />
                  Gujarat, India
                </div>
              </div>
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


