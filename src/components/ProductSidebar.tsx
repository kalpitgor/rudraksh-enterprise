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
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

interface ProductSidebarProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

type SidebarCategory = {
  id: string;
  name: string;
  icon: any;
  subItems?: string[];
};

const categories: SidebarCategory[] = [
  {
    id: "white-onion",
    name: "Dehydrated White Onion",
    icon: Package,
    subItems: [
      "Dehydrated White Onion flakes",
      "Dehydrated White Onion Minced",
      "Dehydrated White Onion Chopped",
      "Dehydrated White Onion Powder",
      "Dehydrated White Onion Mesh",
    ],
  },
  {
    id: "red-onion",
    name: "Dehydrated Red Onion",
    icon: Package,
    subItems: [
      "Dehydrated Red Onion flakes",
      "Dehydrated Red Onion Minced",
      "Dehydrated Red Onion Chopped",
      "Dehydrated Red Onion Powder",
      "Dehydrated Red Onion Mesh",
    ],
  },
  {
    id: "pink-onion",
    name: "Dehydrated Pink Onion",
    icon: Package,
    subItems: [
      "Dehydrated Pink Onion flakes",
      "Dehydrated Pink Onion Minced",
      "Dehydrated Pink Onion Chopped",
      "Dehydrated Pink Onion Powder",
      "Dehydrated Pink Onion Mesh",
    ],
  },
  {
    id: "garlic",
    name: "Dehydrated Garlic",
    icon: Leaf,
    subItems: [
      "Dehydrated Garlic Granules",
      "Dehydrated Garlic Minced",
      "Dehydrated Garlic Chopped",
      "Dehydrated Garlic Powder",
      "Dehydrated Garlic Mesh",
    ],
  },
  {
    id: "fried-onion",
    name: "Fried Onion",
    icon: Package,
    subItems: [
      "Fresh Fried Onions",
      "Dehydrated Fried Onions",
      "Coated Fried Onions",
    ],
  },
];

export function ProductSidebar({ selectedCategory, onCategorySelect }: ProductSidebarProps) {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar 
      className={cn(
        "border-r bg-card shadow-sm",
        collapsed ? "w-14" : "w-64",
        "lg:w-64" // Ensure full width on large screens
      )} 
      collapsible="icon"
    >
      <SidebarTrigger className="m-2 self-end lg:hidden" />
      
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-primary font-semibold text-center text-sm lg:text-base">
            {!collapsed && "Product Categories"}
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1 lg:space-y-2">
              {categories.map((category) => {
                const isActive = selectedCategory === category.id;
                const Icon = category.icon;
                
                return (
                  <SidebarMenuItem key={category.id}>
                    <SidebarMenuButton
                      onClick={() => onCategorySelect(category.id)}
                      className={cn(
                        "transition-all duration-200 hover:bg-primary/10 rounded-lg",
                        "w-full justify-start px-3 py-2 lg:px-4 lg:py-3",
                        "text-xs lg:text-sm",
                        isActive && "bg-primary/20 text-primary font-medium border-r-2 border-primary"
                      )}
                    >
                      <Icon className="h-4 w-4 lg:h-4 lg:w-4 flex-shrink-0" />
                      {!collapsed && (
                        <>
                          <span className="text-xs lg:text-sm ml-2 truncate">{category.name}</span>
                          <ChevronRight className="ml-auto h-3 w-3 lg:h-4 lg:w-4 flex-shrink-0" />
                        </>
                      )}
                    </SidebarMenuButton>
                    {/* Sub-listing removed as requested */}
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