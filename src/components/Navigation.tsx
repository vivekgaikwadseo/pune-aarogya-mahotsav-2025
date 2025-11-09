import { Link, useLocation } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:bg-white/10 rounded-md p-2 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-1 bg-[#FF0080]">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`
                  block px-4 py-2 text-white font-medium rounded-md
                  transition-all duration-200
                  hover:bg-white/10 hover:font-semibold
                  ${location.pathname === item.path 
                    ? 'font-bold bg-white/10' 
                    : ''
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
