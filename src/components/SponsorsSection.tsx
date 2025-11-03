import { Building2 } from "lucide-react";

const SponsorsSection = () => {
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
    <section className="py-16 md:py-24 bg-hero-light-grey">
      <div className="container mx-auto px-4">
        {/* Sponsors Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-hero-navy text-center mb-12">
          आमचे प्रायोजक
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
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

        {/* Special Thanks Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-hero-navy text-center mb-12 pt-8">
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
  );
};

export default SponsorsSection;
