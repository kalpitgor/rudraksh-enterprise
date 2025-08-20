import { useState } from "react";
import { ChevronRight, Package, Leaf } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

interface ProductSidebarProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const categories = [
  { id: "white-onion", name: "White Onion", icon: Package },
  { id: "red-onion", name: "Red Onion", icon: Package },
  { id: "pink-onion", name: "Pink Onion", icon: Package },
  { id: "garlic", name: "Garlic", icon: Leaf },
  { id: "fried-onion", name: "Fried Onion", icon: Package },
];

export function ProductSidebar({ selectedCategory, onCategorySelect }: ProductSidebarProps) {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar className={cn("border-r", collapsed ? "w-14" : "w-64")} collapsible="icon">
      <SidebarTrigger className="m-2 self-end" />
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-primary font-semibold">
            {!collapsed && "Product Categories"}
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu>
              {categories.map((category) => {
                const isActive = selectedCategory === category.id;
                const Icon = category.icon;
                
                return (
                  <SidebarMenuItem key={category.id}>
                    <SidebarMenuButton
                      onClick={() => onCategorySelect(category.id)}
                      className={cn(
                        "transition-all duration-200 hover:bg-primary/10",
                        isActive && "bg-primary/20 text-primary font-medium border-r-2 border-primary"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      {!collapsed && (
                        <>
                          <span>{category.name}</span>
                          <ChevronRight className="ml-auto h-4 w-4" />
                        </>
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