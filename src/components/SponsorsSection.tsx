const SponsorsSection = () => {
  const sponsors = [
    { name: "Sahyadri Hospitals", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
    { name: "Ruby Hall Clinic", logo: "https://images.unsplash.com/photo-1583912267550-a87697c6e547?w=200&h=100&fit=crop" },
    { name: "D.Y. Patil Vidyapeeth", logo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&h=100&fit=crop" },
    { name: "Jehangir Hospital", logo: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?w=200&h=100&fit=crop" },
    { name: "Janata Sahakari Bank", logo: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=200&h=100&fit=crop" },
    { name: "Noble Hospitals", logo: "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?w=200&h=100&fit=crop" }
  ];

  const partners = [
    { name: "Pune Municipal Corporation", logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop" },
    { name: "Pune Police", logo: "https://images.unsplash.com/photo-1588580000645-4562a6d2c839?w=200&h=100&fit=crop" },
    { name: "Akhil Bharatiya Marathi Chitrapat Mahamandal", logo: "https://images.unsplash.com/photo-1574267432644-f610a4ab6a0e?w=200&h=100&fit=crop" },
    { name: "Maharashtra Health Department", logo: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=200&h=100&fit=crop" }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Sponsors */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-hero-navy text-center mb-12">
            आमचे प्रायोजक आणि भागीदार
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {sponsors.map((sponsor, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg border-2 border-gray-100 p-6 flex items-center justify-center hover:border-hero-blue hover:shadow-lg transition-all duration-300"
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

        {/* Special Thanks */}
        <div className="border-t-2 border-gray-100 pt-12">
          <h3 className="text-2xl md:text-3xl font-bold text-hero-navy text-center mb-8">
            विशेष आभार
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg p-4 flex items-center justify-center hover:bg-hero-pink/10 transition-colors duration-300"
              >
                <img 
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-16 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
