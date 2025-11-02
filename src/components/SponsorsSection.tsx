import { Star } from "lucide-react";

const SponsorsSection = () => {
  const sponsors = [
    "D.Y. Patil Vidyapeeth",
    "Sahyadri Hospitals",
    "Ruby Hall Clinic",
    "Kohinoor Group",
    "Janata Sahakari Bank Ltd., Pune",
    "DPES (Dhole Patil Education Society)",
    "Venky's",
    "Punit Balan Group",
    "Jehangir Hospital",
    "Panchshil",
    "Lokseva College of Pharmacy",
    "Ranka Jewellers",
    "Kinetic Wisdom",
    "Naiknavare Developers",
    "Galaxy Care Hospital"
  ];

  const partners = [
    { name: "Maharashtra Sahitya Parishad", logo: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=100&fit=crop" },
    { name: "Akhil Bharatiya Marathi Chitrapat Mahamandal", logo: "https://images.unsplash.com/photo-1574267432644-f610a4ab6a0e?w=200&h=100&fit=crop" },
    { name: "Pune Municipal Corporation", logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop" },
    { name: "Pune Police", logo: "https://images.unsplash.com/photo-1588580000645-4562a6d2c839?w=200&h=100&fit=crop" },
    { name: "Akhil Bharatiya Marathi Natya Parishad", logo: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=200&h=100&fit=crop" },
    { name: "Pune Book Festival", logo: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=200&h=100&fit=crop" },
    { name: "Balgandharva Parivar Pune", logo: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=200&h=100&fit=crop" }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hero-navy text-center mb-12">
          आमचे प्रायोजक आणि भागीदार
        </h2>

        {/* Main Sponsors */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-hero-pink text-center mb-10">
            आमचे सन्माननीय प्रायोजक
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {sponsors.map((sponsor, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-3 hover:bg-white rounded-lg transition-all duration-300"
              >
                <Star 
                  className="text-hero-pink flex-shrink-0" 
                  size={20} 
                  fill="currentColor"
                />
                <span className="text-hero-navy font-body text-base md:text-lg">
                  {sponsor}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Special Thanks / Partners */}
        <div className="border-t-2 border-gray-300 pt-12">
          <h3 className="text-2xl md:text-3xl font-bold text-hero-pink text-center mb-10">
            विशेष आभार
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105"
              >
                <div className="w-full h-24 flex items-center justify-center mb-4">
                  <img 
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h4 className="text-hero-navy font-semibold text-center text-sm md:text-base">
                  {partner.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
