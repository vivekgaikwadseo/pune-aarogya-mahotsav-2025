import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import heroBackground from "@/assets/hero-health-background.jpg";
import chiefGuestPhoto from "@/assets/devandra-0904_d_PhotoGrid-removebg-preview.png";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-white">
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
          
          {/* Blue X Shape */}
          <div className="absolute top-1/2 left-1/4 animate-float">
            <div className="relative w-12 h-12">
              <div className="absolute w-12 h-2 bg-hero-blue rotate-45 top-5 opacity-70"></div>
              <div className="absolute w-12 h-2 bg-hero-blue -rotate-45 top-5 opacity-70"></div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[60%_40%] gap-8 md:gap-12 lg:gap-16">
            
            {/* Left Column - 60% Content Section */}
            <div className="space-y-6 md:space-y-8">
              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-hero-navy leading-tight">
                पुणे आरोग्य महोत्सव २०२५
              </h1>
              
              {/* Sub-headline */}
              <h2 className="text-2xl md:text-3xl text-hero-navy font-medium">
                महाराष्ट्रातील पहिले आरोग्य साहित्य संमेलन
              </h2>
              
              {/* Information Block with Icons */}
              <div className="space-y-3 pt-4">
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
              <div className="space-y-4 pt-6">
                <h3 className="text-xl md:text-2xl font-semibold text-hero-navy">
                  सोहळा सुरु होण्यास...
                </h3>
                <CountdownTimer />
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
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
            
            {/* Right Column - 40% Chief Minister Section */}
            <div className="relative flex flex-col items-center justify-center">
              {/* Large Blue Circle with Chief Minister Image */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 bg-hero-blue rounded-full flex items-center justify-center overflow-hidden shadow-2xl">
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
              <div className="mt-8 text-center space-y-2">
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

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            महोत्सवाची वैशिष्ट्ये
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-card border-2 border-border hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏥</span>
              </div>
              <h3 className="text-xl font-bold mb-3">भव्य आरोग्य शिबिर</h3>
              <p className="text-muted-foreground">
                मोफत आरोग्य तपासणी आणि तज्ञ डॉक्टरांचे मार्गदर्शन
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-card border-2 border-border hover:border-secondary transition-colors">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎤</span>
              </div>
              <h3 className="text-xl font-bold mb-3">प्रख्यात वक्ते</h3>
              <p className="text-muted-foreground">
                आरोग्य क्षेत्रातील तज्ञांचे प्रेरणादायी भाषण
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-card border-2 border-border hover:border-accent transition-colors">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎪</span>
              </div>
              <h3 className="text-xl font-bold mb-3">विविध कार्यक्रम</h3>
              <p className="text-muted-foreground">
                योग, व्यायाम, पोषण आणि निरोगी जीवनशैलीचे कार्यशाळा
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
