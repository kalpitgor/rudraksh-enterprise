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
        <div className="container mx-auto px-6 py-10">
          <div className="flex justify-center">
            <div className="w-full max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
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
                <div className="w-full">
                  {inView && (
                    <div className="mb-6 flex items-center justify-between lg:hidden">
                      <SidebarTrigger />
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
