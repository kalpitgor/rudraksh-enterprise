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
<<<<<<< Updated upstream
    <Sidebar className="border-r bg-muted/30" collapsible="icon">
      <SidebarContent className="gap-0">
        <SidebarGroup className="px-0">
          <SidebarGroupLabel className="px-6 py-4 text-lg font-semibold text-foreground border-b">
            {!collapsed && "Product Categories"}
          </SidebarGroupLabel>
          
          <SidebarGroupContent className="px-0 mt-0">
            <SidebarMenu className="gap-0">
=======
    <Sidebar className={cn("border-r bg-card shadow-sm", collapsed ? "w-14" : "w-64")} collapsible="icon">
      <SidebarTrigger className="m-2 self-end" />
      
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-primary font-semibold text-center">
            {!collapsed && "Product Categories"}
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
>>>>>>> Stashed changes
              {categories.map((category) => {
                const isActive = selectedCategory === category.id;
                const Icon = category.icon;
                
                return (
                  <SidebarMenuItem key={category.id} className="list-none">
                    <SidebarMenuButton
                      onClick={() => onCategorySelect(category.id)}
                      className={cn(
<<<<<<< Updated upstream
                        "w-full justify-start rounded-none px-6 py-4 h-auto text-left transition-all duration-200",
                        "hover:bg-primary/10 text-muted-foreground hover:text-foreground",
                        isActive && "bg-primary text-primary-foreground font-medium hover:bg-primary hover:text-primary-foreground"
=======
                        "transition-all duration-200 hover:bg-primary/10 rounded-lg",
                        isActive && "bg-primary/20 text-primary font-medium border-r-2 border-primary"
>>>>>>> Stashed changes
                      )}
                    >
                      <Icon className="h-5 w-5 mr-3 shrink-0" />
                      {!collapsed && (
<<<<<<< Updated upstream
                        <span className="text-sm leading-relaxed">{category.name}</span>
=======
                        <>
                          <span className="text-sm">{category.name}</span>
                          <ChevronRight className="ml-auto h-4 w-4" />
                        </>
>>>>>>> Stashed changes
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