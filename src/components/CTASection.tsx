import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-hero-navy overflow-hidden">
      {/* Dot Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Animated Decorative Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Blue Circle - Top Left */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-hero-blue rounded-full opacity-40 animate-float"></div>
        
        {/* Pink Plus Sign - Top Right */}
        <div className="absolute top-32 right-16 text-hero-pink text-6xl font-bold opacity-30 animate-float-slow">
          +
        </div>
        
        {/* Pink Circle - Bottom Left */}
        <div className="absolute bottom-24 left-20 w-16 h-16 bg-hero-deep-pink rounded-full opacity-30 animate-float"></div>
        
        {/* Blue Rectangle - Bottom Right */}
        <div className="absolute bottom-32 right-24 w-24 h-16 bg-hero-blue rounded-lg opacity-25 animate-float-slow"></div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            आरोग्यमय आणि निरोगी आयुष्याच्या या उत्सवात सामील व्हा!
          </h2>
          
          {/* CTA Button */}
          <div className="flex justify-center">
            <Link to="/contact">
              <Button 
                size="lg"
                className="bg-hero-pink hover:bg-hero-pink/90 text-white text-lg md:text-xl px-10 py-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
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

export default CTASection;
