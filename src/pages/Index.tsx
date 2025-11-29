import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";
import WhyJoinSection from "@/components/WhyJoinSection";
import ProgramSchedule from "@/components/ProgramSchedule";
import ConceptSection from "@/components/ConceptSection";
import CTASection from "@/components/CTASection";
import GuestsSection from "@/components/GuestsSection";
import OrganizersSection from "@/components/OrganizersSection";
import SponsorsSection from "@/components/SponsorsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import LocationSection from "@/components/LocationSection";
import heroBackground from "@/assets/hero-health-background.jpg";
import chiefGuestPhoto from "@/assets/devendra-fadnavis-new.png";
const Index = () => {
  return <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-4 md:py-6 lg:py-8 pb-8 md:pb-10 lg:pb-12 overflow-x-hidden bg-white w-full" style={{
      clipPath: 'polygon(0 0, 100% 0, 100% 92%, 0 100%)'
    }}>
        {/* Floating Animated Colored Shapes - Hidden on mobile */}
        <div className="absolute inset-0 z-5 pointer-events-none hidden lg:block">
          {/* Blue Circle */}
          <div className="absolute top-20 right-20 w-16 h-16 bg-hero-blue rounded-full opacity-80 animate-float"></div>
          
          {/* Pink Rectangle */}
          <div className="absolute bottom-32 left-20 w-20 h-12 bg-hero-pink rounded-lg opacity-70 animate-float-slow"></div>
          
          {/* Pink Zig-Zag Line */}
          <div className="absolute top-1/2 left-1/4 animate-float">
            <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
              <path d="M0 10 L15 2 L30 10 L45 2 L60 10" stroke="hsl(var(--hero-deep-pink))" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            
            {/* Left Column - 50% Content Section */}
            <div className="space-y-2 md:space-y-3 w-full">
              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-hero-navy leading-tight whitespace-nowrap">
                पुणे आरोग्य महोत्सव
              </h1>
              
              {/* Sub-headline */}
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-hero-navy font-medium whitespace-nowrap">
                महाराष्ट्रातील <span className="text-[#FF0080]">पहिले</span> आरोग्य साहित्य संमेलन
              </h2>
              
              {/* Information Block with Icons */}
              <div className="space-y-2 pt-1 w-full">
                <div className="flex items-start gap-3 text-sm sm:text-base md:text-lg">
                  <Calendar className="w-5 h-5 md:w-6 md:h-6 text-hero-blue flex-shrink-0 mt-0.5" />
                  <span className="text-hero-navy font-medium break-words flex-1">रविवार, १९ ऑक्टोबर २०२५, सकाळी ९ वाजेपासून सुरु </span>
                </div>
                <div className="flex items-start gap-3 text-sm sm:text-base md:text-lg">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-hero-blue flex-shrink-0 mt-0.5" />
                  <span className="text-hero-navy font-medium break-words flex-1">स्थळ: बालगंधर्व रंगमंदिर, पुणे</span>
                </div>
              </div>
              
              {/* Post-Event Message */}
              <div className="space-y-2 pt-1 bg-hero-box-bg border border-hero-blue rounded-lg p-3 md:p-4 w-full">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-hero-navy break-words">
                  संमेलन यशस्वीरित्या संपन्न!
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-hero-grey break-words">
                  पुढील उपक्रमांची माहिती लवकरच प्रकाशित केली जाईल.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1 w-full">
                <Link to="/health-camp" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-hero-pink hover:bg-hero-pink/90 text-white text-base sm:text-lg px-6 sm:px-8 w-full font-medium">
                    संमेलनाचे क्षणचित्रे पहा
                  </Button>
                </Link>
                <Link to="/events" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="border-2 border-hero-blue text-hero-blue hover:bg-hero-blue hover:text-white text-base sm:text-lg px-6 sm:px-8 w-full font-medium transition-all duration-300 whitespace-normal">
                    आरोग्य संदेश स्मरणिका डाउनलोड करा
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right Column - 50% Chief Minister Section */}
            <div className="relative flex flex-col items-center justify-start pt-4 lg:pt-0 min-h-[350px] sm:min-h-[400px] md:min-h-[450px] w-full max-w-full">
              {/* Pink Blob Background - Positioned Behind */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-hero-pastel-pink -z-10" style={{
              borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
            }} />
              
              {/* Large CM Image - Prominent & Overflowing */}
              <div className="relative z-10 w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-sm xl:max-w-md flex justify-center">
                <img src={chiefGuestPhoto} alt="मा. ना. श्री. देवेंद्रजी फडणवीस" className="h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px] xl:h-[360px] w-auto object-contain" />
              </div>
              
              {/* Decorative Deep Pink Plus Sign - Hidden on mobile */}
              <div className="hidden lg:block absolute top-4 right-4 md:top-6 md:right-8 text-hero-deep-pink text-5xl md:text-6xl font-bold transform rotate-12 z-20">
                +
              </div>
              
              {/* Name and Title - Below Image */}
              <div className="mt-2 md:mt-3 text-center space-y-1 z-10 px-2 w-full">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-hero-navy break-words">
                  मा. ना. श्री. देवेंद्रजी फडणवीस
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-hero-grey break-words">
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

      {/* Guests & Dignitaries Section */}
      <GuestsSection />

      {/* CTA Section */}
      <CTASection />

      {/* Program Schedule Section */}
      <ProgramSchedule />

      {/* Final CTA Section */}
      <FinalCTASection />

      {/* Organizers Section */}
      <OrganizersSection />

      {/* Sponsors Section */}
      <SponsorsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Location & Time Section */}
      <LocationSection />

      <Footer />
    </div>;
};
export default Index;