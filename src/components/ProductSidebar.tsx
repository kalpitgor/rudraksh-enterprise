import { useState } from "react";
import { Package, Leaf } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

interface ProductSidebarProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const categories = [
  { id: "dehydrated-white-onion", name: "Dehydrated White Onion", icon: Package },
  { id: "dehydrated-red-onion", name: "Dehydrated Red Onion", icon: Package },
  { id: "dehydrated-pink-onion", name: "Dehydrated Pink Onion", icon: Package },
  { id: "dehydrated-garlic", name: "Dehydrated Garlic", icon: Leaf },
  { id: "fried-onion", name: "Fried Onion", icon: Package },
];

export function ProductSidebar({ selectedCategory, onCategorySelect }: ProductSidebarProps) {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar className="border-r bg-muted/30" collapsible="icon">
      <SidebarContent className="gap-0">
        <SidebarGroup className="px-0">
          <SidebarGroupLabel className="px-6 py-4 text-lg font-semibold text-foreground border-b">
            {!collapsed && "Product Categories"}
          </SidebarGroupLabel>
          
          <SidebarGroupContent className="px-0 mt-0">
            <SidebarMenu className="gap-0">
              {categories.map((category) => {
                const isActive = selectedCategory === category.id;
                const Icon = category.icon;
                
                return (
                  <SidebarMenuItem key={category.id} className="list-none">
                    <SidebarMenuButton
                      onClick={() => onCategorySelect(category.id)}
                      className={cn(
                        "w-full justify-start rounded-none px-6 py-4 h-auto text-left transition-all duration-200",
                        "hover:bg-primary/10 text-muted-foreground hover:text-foreground",
                        isActive && "bg-primary text-primary-foreground font-medium hover:bg-primary hover:text-primary-foreground"
                      )}
                    >
                      <Icon className="h-5 w-5 mr-3 shrink-0" />
                      {!collapsed && (
                        <span className="text-sm leading-relaxed">{category.name}</span>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}