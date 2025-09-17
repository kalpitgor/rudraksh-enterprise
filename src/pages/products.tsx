import { useEffect, useRef, useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ProductSidebar } from "@/components/ProductSidebar";
import { ProductDisplay } from "@/components/ProductDisplay";
import { productCategories } from "@/data/products";

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState("white-onion");
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const selectedCategoryData = productCategories.find(
    (cat) => cat.id === selectedCategory
  );

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <SidebarProvider>
      <div className="min-h-screen w-full" ref={containerRef}>
        <div className="container mx-auto px-4 lg:px-6 py-6 lg:py-10">
          <div className="flex justify-center">
            <div className="w-full max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-4 lg:gap-8">
                {/* Desktop Sidebar */}
                {inView && (
                  <div className="hidden lg:block">
                    <div className="sticky top-24">
                      <ProductSidebar
                        selectedCategory={selectedCategory}
                        onCategorySelect={setSelectedCategory}
                      />
                    </div>
                  </div>
                )}
                
                {/* Mobile Sidebar - Always visible but collapsible */}
                <div className="lg:hidden">
                  <ProductSidebar
                    selectedCategory={selectedCategory}
                    onCategorySelect={setSelectedCategory}
                  />
                </div>
                
                {/* Main Content */}
                <div className="w-full">
                  {inView && (
                    <div className="mb-4 lg:mb-6 flex items-center justify-between lg:hidden">
                      <h2 className="text-lg font-semibold text-foreground">
                        {selectedCategoryData?.name || "Products"}
                      </h2>
                      <SidebarTrigger className="lg:hidden" />
                    </div>
                  )}
                  {selectedCategoryData && (
                    <ProductDisplay category={selectedCategoryData} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
