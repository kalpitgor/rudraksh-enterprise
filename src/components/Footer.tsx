import { Award, CheckCircle, Globe, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 mt-16">
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

          <div className="md:col-span-2">
            <h4 className="font-semibold mb-4">Global Presence</h4>
            <p className="text-background/80">
              Serving partners across 50+ countries with consistent quality and reliable logistics.
            </p>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">
            © 2024 Rudraksh Enterprise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


