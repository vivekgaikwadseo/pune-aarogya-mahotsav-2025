import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Building2 } from "lucide-react";

const Organizers = () => {
  const mainOrganizers = [
    {
      name: "रुग्ण हक्क परिषद",
      description: "मुख्य आयोजक संस्था"
    },
    {
      name: "मुख्यमंत्री सहाय्यता निधी कक्ष",
      description: "सह-आयोजक"
    }
  ];

  const sponsors = [
    "D.Y. Patil Vidyapeeth",
    "Sahyadri Hospitals",
    "Ruby Hall Clinic",
    "Jehangir Hospital",
    "Venky's",
    "Ranka Jewellers",
    "Janata Sahakari Bank",
    "Deenanath Mangeshkar Hospital",
    "Poona Hospital",
    "Inamdar Multispeciality Hospital",
    "Noble Hospital",
    "Ratna Memorial Hospital"
  ];

  const specialThanks = [
    "पुणे महानगरपालिका",
    "पुणे पोलीस",
    "अखिल भारतीय मराठी चित्रपट महामंडळ",
    "महाराष्ट्र राज्य आरोग्य विभाग",
    "बालगंधर्व रंगमंदिर",
    "महाराष्ट्र सांस्कृतिक मंडळ"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Page Header Banner */}
      <section className="relative bg-hero-navy py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
            आयोजक आणि प्रायोजक
          </h1>
        </div>
      </section>

      {/* Main Organizers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-hero-navy text-center mb-12">
            मुख्य आयोजक
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {mainOrganizers.map((org, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg border-2 border-hero-pink p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-20 h-20 bg-hero-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-10 h-10 text-hero-pink" />
                </div>
                <h3 className="text-2xl font-bold text-hero-navy mb-2">
                  {org.name}
                </h3>
                <p className="text-muted-foreground">
                  {org.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 bg-hero-light-grey">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-hero-navy text-center mb-12">
            आमचे प्रायोजक
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sponsors.map((sponsor, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300 min-h-[120px]"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-hero-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Building2 className="w-6 h-6 text-hero-blue" />
                  </div>
                  <p className="text-sm font-semibold text-hero-navy">
                    {sponsor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Thanks Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-hero-navy text-center mb-12">
            विशेष आभार
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {specialThanks.map((org, index) => (
              <div 
                key={index}
                className="bg-hero-pastel-pink rounded-lg border border-hero-pink/20 p-6 flex items-center justify-center hover:bg-hero-pink/5 transition-all duration-300 min-h-[100px]"
              >
                <p className="text-center font-semibold text-hero-navy">
                  {org}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Organizers;
