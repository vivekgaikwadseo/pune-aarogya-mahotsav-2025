import { Heart, MapPin, Phone, Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-hero-navy mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Column 1 - Logo & About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-white fill-white" />
              <h3 className="text-xl font-bold text-white">
                पुणे आरोग्य महोत्सव
              </h3>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              पुणेकरांच्या आरोग्य आणि निरोगी आयुष्यासाठी आयोजित केलेला एक भव्य आरोग्य, सेवा आणि साहित्य उत्सव.
            </p>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-lg">जलद लिंक्स</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="text-white/80 hover:text-bright-pink transition-colors text-sm">
                  मुखपृष्ठ
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-bright-pink transition-colors text-sm">
                  आमच्या विषयी
                </Link>
              </li>
              <li>
                <Link to="/health-camp" className="text-white/80 hover:text-bright-pink transition-colors text-sm">
                  भव्य आरोग्य शिबिर
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-white/80 hover:text-bright-pink transition-colors text-sm">
                  कार्यक्रम
                </Link>
              </li>
              <li>
                <Link to="/guests" className="text-white/80 hover:text-bright-pink transition-colors text-sm">
                  पाहुणे आणि मान्यवर
                </Link>
              </li>
              <li>
                <Link to="/organizers" className="text-white/80 hover:text-bright-pink transition-colors text-sm">
                  आयोजक आणि प्रायोजक
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-bright-pink transition-colors text-sm">
                  संपर्क
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Contact Details */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-lg">संपर्क</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-white/80">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>१३६, दुसरा मजला, नारायण पेठ, पुणे ३०</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>९८५०००२२०४ / ८९५६१८५७०२</span>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex gap-4 mt-6">
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-bright-pink hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-bright-pink hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-bright-pink hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright Bar */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-white/60 text-sm">
            © २०२५ पुणे आरोग्य महोत्सव. सर्व हक्क राखीव.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
