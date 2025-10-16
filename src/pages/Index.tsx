import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import WhyJoinSection from "@/components/WhyJoinSection";
import ProgramSchedule from "@/components/ProgramSchedule";
import ConceptSection from "@/components/ConceptSection";
import CTASection from "@/components/CTASection";
import heroBackground from "@/assets/hero-health-background.jpg";
import chiefGuestPhoto from "@/assets/devandra-0904_d_PhotoGrid-removebg-preview.png";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-8 md:py-12 lg:py-16 pb-16 md:pb-20 lg:pb-24 overflow-hidden bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 92%, 0 100%)' }}>
        {/* Large Abstract Background Shapes - Light Grey */}
        <div className="absolute inset-0 z-0 opacity-50">
          <div className="absolute top-10 left-10 w-96 h-96 bg-hero-light-grey rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-hero-light-grey rounded-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-hero-light-grey rounded-full"></div>
        </div>
        
        {/* Floating Animated Colored Shapes */}
        <div className="absolute inset-0 z-5 pointer-events-none">
          {/* Blue Circle */}
          <div className="absolute top-20 right-20 w-16 h-16 bg-hero-blue rounded-full opacity-80 animate-float"></div>
          
          {/* Pink Rectangle */}
          <div className="absolute bottom-32 left-20 w-20 h-12 bg-hero-pink rounded-lg opacity-70 animate-float-slow"></div>
          
          {/* Pink Zig-Zag Line */}
          <div className="absolute top-1/2 left-1/4 animate-float">
            <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
              <path 
                d="M0 10 L15 2 L30 10 L45 2 L60 10" 
                stroke="hsl(var(--hero-deep-pink))" 
                strokeWidth="3" 
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            
            {/* Left Column - 50% Content Section */}
            <div className="space-y-3 md:space-y-4">
              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-navy leading-tight">
                पुणे आरोग्य महोत्सव २०२५
              </h1>
              
              {/* Sub-headline */}
              <h2 className="text-xl md:text-2xl text-hero-navy font-medium">
                महाराष्ट्रातील पहिले आरोग्य साहित्य संमेलन
              </h2>
              
              {/* Information Block with Icons */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-3 text-base md:text-lg">
                  <Calendar className="w-5 h-5 md:w-6 md:h-6 text-hero-blue flex-shrink-0" />
                  <span className="text-hero-navy font-medium">रविवार, १९ ऑक्टोबर २०२५, सकाळी ९ वा</span>
                </div>
                <div className="flex items-center gap-3 text-base md:text-lg">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-hero-blue flex-shrink-0" />
                  <span className="text-hero-navy font-medium">स्थळ: बालगंधर्व रंगमंदिर, पुणे</span>
                </div>
              </div>
              
              {/* Countdown Timer */}
              <div className="space-y-3 pt-3">
                <h3 className="text-xl md:text-2xl font-semibold text-hero-navy">
                  सोहळा सुरु होण्यास...
                </h3>
                <CountdownTimer />
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-3">
                <Link to="/health-camp">
                  <Button 
                    size="lg" 
                    className="bg-hero-pink hover:bg-hero-pink/90 text-white text-lg px-8 w-full sm:w-auto font-medium"
                  >
                    भव्य आरोग्य शिबिर माहिती
                  </Button>
                </Link>
                <Link to="/events">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-hero-blue text-hero-blue hover:bg-hero-blue hover:text-white text-lg px-8 w-full sm:w-auto font-medium transition-all duration-300"
                  >
                    संपूर्ण वेळापत्रक पहा
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right Column - 50% Chief Minister Section */}
            <div className="relative flex flex-col items-center justify-center">
              {/* Modern Abstract Pastel Pink Shape with Chief Minister Image */}
              <div 
                className="relative w-80 h-80 md:w-96 md:h-96 bg-hero-pastel-pink flex items-center justify-center overflow-hidden shadow-2xl"
                style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
              >
                <img 
                  src={chiefGuestPhoto}
                  alt="मा. ना. श्री. देवेंद्रजी फडणवीस"
                  className="w-full h-full object-cover p-4"
                />
              </div>
              
              {/* Decorative Deep Pink Plus Sign */}
              <div className="absolute -top-4 -right-4 text-hero-deep-pink text-5xl md:text-6xl font-bold transform rotate-12">
                +
              </div>
              
              {/* Name and Title */}
              <div className="mt-6 text-center space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold text-hero-navy">
                  मा. ना. श्री. देवेंद्रजी फडणवीस
                </h3>
                <p className="text-base md:text-lg text-hero-grey">
                  मुख्यमंत्री, महाराष्ट्र राज्य
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <ConceptSection />

      {/* Why Join Section */}
      <WhyJoinSection />

      {/* CTA Section */}
      <CTASection />

      {/* Program Schedule Section */}
      <ProgramSchedule />

      <Footer />
    </div>
  );
};

export default Index;
