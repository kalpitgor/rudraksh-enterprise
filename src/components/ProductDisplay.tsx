import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, CheckCircle, Mail } from "lucide-react";
import { ProductCategory } from "@/data/products";

interface ProductDisplayProps {
  category: ProductCategory;
}

export function ProductDisplay({ category }: ProductDisplayProps) {
  const handleInquiry = (productName: string) => {
    const subject = `Inquiry for ${productName}`;
    const body = `Dear Rudraksh Enterprise,\n\nI am interested in your ${productName}. Please provide more details about pricing, minimum order quantity, and availability.\n\nThank you.`;
    window.open(`mailto:info@rudrakshenterprise.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  return (
    <div className="space-y-8">
      {/* SEO Optimized Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Package className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold text-primary">{category.name}</h1>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
          {category.description}
        </p>
        
        {/* SEO Keywords Display */}
        <div className="flex flex-wrap gap-2">
          {category.keywords.map((keyword) => (
            <Badge key={keyword} variant="secondary" className="text-xs">
              {keyword}
            </Badge>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {category.products.map((product) => (
          <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                {product.name}
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {product.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Specifications */}
              {product.specifications && (
                <div className="space-y-2">
                  <h4 className="font-medium text-sm flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Specifications
                  </h4>
                  <ul className="space-y-1">
                    {product.specifications.map((spec, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Keywords */}
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Key Features</h4>
                <div className="flex flex-wrap gap-1">
                  {product.keywords.slice(0, 3).map((keyword) => (
                    <Badge key={keyword} variant="outline" className="text-xs">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <Button 
                onClick={() => handleInquiry(product.name)}
                className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                variant="outline"
              >
                <Mail className="w-4 h-4 mr-2" />
                Request Quote
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional SEO Content */}
      <div className="bg-muted/50 rounded-lg p-6 mt-12">
        <h2 className="text-2xl font-semibold mb-4">
          Why Choose Our {category.name}?
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
            <div>
              <h3 className="font-medium">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">
                Processed using advanced technology with strict quality control
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
            <div>
              <h3 className="font-medium">Export Grade</h3>
              <p className="text-sm text-muted-foreground">
                International quality standards with proper certifications
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
            <div>
              <h3 className="font-medium">Reliable Supply</h3>
              <p className="text-sm text-muted-foreground">
                Consistent availability with timely delivery worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}