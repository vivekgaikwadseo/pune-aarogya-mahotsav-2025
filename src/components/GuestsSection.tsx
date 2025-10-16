const GuestsSection = () => {
  const guests = [
    {
      name: "डॉ. संजय ओक",
      title: "संमेलनाध्यक्ष",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      name: "ना. श्री. मुरलीधर मोहोळ",
      title: "केंद्रीय राज्य मंत्री, खासदार",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "पद्मश्री डॉ. स्मिता आणि डॉ. रविंद्र कोल्हे",
      title: "पुरस्काराचे मानकरी",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    },
    {
      name: "डॉ. जब्बार पटेल",
      title: "जेष्ठ सिने दिग्दर्शक",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
    {
      name: "प्रशांत दामले",
      title: "अभिनेते",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
    },
    {
      name: "सुबोध भावे",
      title: "सिने अभिनेते",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-hero-navy mb-4">
            पाहुणे आणि मान्यवर
          </h2>
        </div>

        {/* Guest Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guests.map((guest, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={guest.image}
                  alt={guest.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-hero-navy mb-2">
                  {guest.name}
                </h3>
                <p className="text-hero-grey text-sm">
                  {guest.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuestsSection;
