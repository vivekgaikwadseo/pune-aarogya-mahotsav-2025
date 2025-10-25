const SponsorsSection = () => {
  const sponsors = [
    { name: "D.Y. Patil Vidyapeeth", logo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&h=100&fit=crop" },
    { name: "Sahyadri Hospitals", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
    { name: "Ruby Hall Clinic", logo: "https://images.unsplash.com/photo-1583912267550-a87697c6e547?w=200&h=100&fit=crop" },
    { name: "Kohinoor Group", logo: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200&h=100&fit=crop" },
    { name: "Janata Sahakari Bank Ltd., Pune", logo: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=200&h=100&fit=crop" },
    { name: "DPES (Dhole Patil Education Society)", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=100&fit=crop" },
    { name: "Venky's", logo: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=100&fit=crop" },
    { name: "Punit Balan Group", logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=100&fit=crop" },
    { name: "Jehangir Hospital", logo: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?w=200&h=100&fit=crop" },
    { name: "Panchshil", logo: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=200&h=100&fit=crop" },
    { name: "Lokseva College of Pharmacy", logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=100&fit=crop" },
    { name: "Ranka Jewellers", logo: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=100&fit=crop" },
    { name: "Kinetic Wisdom", logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=100&fit=crop" },
    { name: "Naiknavare Developers", logo: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=200&h=100&fit=crop" },
    { name: "Galaxy Care Hospital", logo: "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?w=200&h=100&fit=crop" }
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
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
            {sponsors.map((sponsor, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg border-2 border-gray-200 p-6 flex items-center justify-center hover:border-hero-pink hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <img 
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-full h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
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
