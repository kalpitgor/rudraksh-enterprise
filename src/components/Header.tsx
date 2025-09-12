import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            Rudraksh Enterprise
          </Link>
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `pb-1 border-b-2 transition-smooth ${
                  isActive
                    ? "text-primary border-primary"
                    : "text-foreground border-transparent hover:text-primary hover:border-primary"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `pb-1 border-b-2 transition-smooth ${
                  isActive
                    ? "text-primary border-primary"
                    : "text-foreground border-transparent hover:text-primary hover:border-primary"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `pb-1 border-b-2 transition-smooth ${
                  isActive
                    ? "text-primary border-primary"
                    : "text-foreground border-transparent hover:text-primary hover:border-primary"
                }`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/why-choose-us"
              className={({ isActive }) =>
                `pb-1 border-b-2 transition-smooth ${
                  isActive
                    ? "text-primary border-primary"
                    : "text-foreground border-transparent hover:text-primary hover:border-primary"
                }`
              }
            >
              Why Choose Us
            </NavLink>
            <NavLink
              to="/testimonials"
              className={({ isActive }) =>
                `pb-1 border-b-2 transition-smooth ${
                  isActive
                    ? "text-primary border-primary"
                    : "text-foreground border-transparent hover:text-primary hover:border-primary"
                }`
              }
            >
              Testimonials
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `pb-1 border-b-2 transition-smooth ${
                  isActive
                    ? "text-primary border-primary"
                    : "text-foreground border-transparent hover:text-primary hover:border-primary"
                }`
              }
            >
              Contact
            </NavLink>
          </div>
          <Button asChild variant="hero" size="sm">
            <Link to="/contact">Get Quote</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}


