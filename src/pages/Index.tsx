import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import heroBackground from "@/assets/hero-health-background.jpg";
import chiefGuestPhoto from "@/assets/devendra-fadnavis.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative py-16 md:py-24 lg:py-32 overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* White Overlay */}
        <div className="absolute inset-0 bg-white/85"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[60%_40%] md:grid-cols-[55%_45%] gap-8 md:gap-12 items-start">
            
            {/* Left Column - Main Content */}
            <div className="space-y-6 md:space-y-8">
              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading text-primary leading-tight">
                पुणे आरोग्य महोत्सव २०२५
              </h1>
              
              {/* Subheading */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-foreground">
                महाराष्ट्रातील पहिले आरोग्य साहित्य संमेलन
              </h2>
              
              {/* Tagline */}
              <p className="text-lg md:text-xl font-body text-muted-foreground italic">
                आरोग्य, सेवा आणि साहित्य यांचा भव्य संगम
              </p>
              
              {/* Event Details */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-base md:text-lg font-body">
                  <Calendar className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-semibold">रविवार, १९ ऑक्टोबर २०२५, सकाळी ९ वा</span>
                </div>
                <div className="flex items-center gap-3 text-base md:text-lg font-body">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-semibold">स्थळ: बालगंधर्व रंगमंदिर, पुणे</span>
                </div>
              </div>
              
              {/* Countdown Timer */}
              <div className="space-y-4 pt-4">
                <h3 className="text-xl md:text-2xl font-bold font-heading text-foreground">
                  सोहळा सुरु होण्यास...
                </h3>
                <CountdownTimer />
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/health-camp">
                  <Button 
                    size="lg" 
                    className="text-lg px-8 w-full sm:w-auto font-body"
                  >
                    भव्य आरोग्य शिबिर माहिती
                  </Button>
                </Link>
                <Link to="/events">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-lg px-8 w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body"
                  >
                    संपूर्ण वेळापत्रक पहा
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right Column - Chief Guest */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-card/90 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border border-border text-center">
                {/* Small Heading */}
                <p className="text-sm md:text-base font-heading font-semibold text-primary uppercase tracking-wide mb-6">
                  प्रमुख उद्घाटक
                </p>
                
                {/* Chief Guest Image */}
                <div className="flex justify-center mb-6">
                  <img 
                    src={chiefGuestPhoto}
                    alt="मा.ना.श्री. देवेंद्रजी फडणवीस"
                    className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-xl"
                  />
                </div>
                
                {/* Name */}
                <h3 className="text-xl md:text-2xl font-bold font-heading text-foreground mb-2">
                  मा.ना.श्री. देवेंद्रजी फडणवीस
                </h3>
                
                {/* Title */}
                <p className="text-base md:text-lg font-body text-muted-foreground">
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
