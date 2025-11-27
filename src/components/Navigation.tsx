import { Link, useLocation } from "react-router-dom";
import { Heart, Menu } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "मुखपृष्ठ" },
    { path: "/about", label: "आमच्या विषयी" },
    { path: "/health-camp", label: "भव्य आरोग्य शिबिर" },
    { path: "/events", label: "कार्यक्रम" },
    { path: "/souvenir", label: "स्मरणिका" },
    { path: "/guests", label: "पाहुणे आणि मान्यवर" },
    { path: "/organizers", label: "आयोजक आणि प्रायोजक" },
    { path: "/contact", label: "संपर्क" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#FF0080] shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo - Icon + Text */}
          <Link to="/" className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-white" strokeWidth={2.5} />
            <span className="text-xl font-bold text-white">
              पुणे आरोग्य महोत्सव २०२५
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  px-4 py-2 text-white font-medium rounded-md
                  transition-all duration-200 ease-in-out
                  hover:font-semibold hover:underline hover:underline-offset-4
                  ${location.pathname === item.path 
                    ? 'font-bold underline underline-offset-4' 
                    : ''
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Sheet */}
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className="text-white hover:bg-white/10 rounded-md p-2 transition-colors"
                  aria-label="Toggle menu"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-white">
                <SheetHeader>
                  <SheetTitle className="text-left text-hero-navy flex items-center gap-2">
                    <Heart className="h-5 w-5 text-hero-pink" />
                    <span>मेनू</span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-8 flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`
                        px-4 py-3 rounded-lg font-medium
                        transition-all duration-200
                        hover:bg-hero-pink/10 hover:text-hero-pink
                        ${location.pathname === item.path 
                          ? 'bg-hero-pink text-white font-bold' 
                          : 'text-hero-navy'
                        }
                      `}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
