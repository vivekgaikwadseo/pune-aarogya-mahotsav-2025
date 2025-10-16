import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FinalCTASection = () => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-hero-navy">
      {/* Dot Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      ></div>

      {/* Animated Decorative Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Blue Circle */}
        <div className="absolute top-20 right-20 w-24 h-24 bg-hero-blue rounded-full opacity-30 animate-float"></div>
        
        {/* Pink Circle */}
        <div className="absolute bottom-32 left-16 w-32 h-32 bg-hero-pink rounded-full opacity-20 animate-float-slow"></div>
        
        {/* Plus Sign */}
        <div className="absolute top-1/2 right-1/4 text-hero-pink text-6xl font-bold opacity-20 animate-float">
          +
        </div>
        
        {/* Small Rectangle */}
        <div className="absolute bottom-20 right-1/3 w-16 h-10 bg-hero-blue rounded-lg opacity-20 animate-float"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            ज्ञान, आरोग्य आणि कलेच्या या महासंगमात सामील व्हा!
          </h2>

          {/* CTA Button */}
          <div>
            <Link to="/contact">
              <Button 
                size="lg"
                className="bg-hero-pink hover:bg-hero-pink/90 text-white text-xl px-12 py-6 h-auto font-semibold shadow-2xl hover:shadow-hero-pink/50 hover:scale-105 transition-all duration-300"
              >
                आता नोंदणी करा
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
