import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import devendraFadnavis from "@/assets/devendra-fadnavis.jpg";

const Guests = () => {
  const guests = [
    {
      name: "मा. ना. श्री. देवेंद्रजी फडणवीस",
      title: "मुख्यमंत्री, महाराष्ट्र राज्य",
      image: devendraFadnavis
    },
    {
      name: "मा. ना. श्री. मुरलीधर मोहोळ",
      title: "केंद्रीय राज्य मंत्री, खासदार",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "मा. डॉ. संजय ओक",
      title: "संमेलनाध्यक्ष",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      name: "पद्मश्री डॉ. पी. डी. पाटील",
      title: "पुरस्काराचे मानकरी",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
    {
      name: "डॉ. मोहन आगाशे",
      title: "सुप्रसिद्ध अभिनेते",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
    },
    {
      name: "मा. सुबोध भावे",
      title: "सिने अभिनेते",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
    },
    {
      name: "पद्मश्री डॉ. स्मिता आणि डॉ. रविंद्र कोल्हे",
      title: "पुरस्काराचे मानकरी",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    },
    {
      name: "मा. ना. श्री. चंद्रकांतदादा पाटील",
      title: "मंत्री, उच्च व तंत्र शिक्षण",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
    },
    {
      name: "डॉ. जब्बार पटेल",
      title: "जेष्ठ सिने दिग्दर्शक",
      image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=400&h=400&fit=crop"
    },
    {
      name: "मा. प्रशांत दामले",
      title: "अभिनेते",
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=400&h=400&fit=crop"
    },
    {
      name: "डॉ. जगन्नाथ दिक्षित",
      title: "प्रसिद्ध आहारतज्ञ",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop"
    },
    {
      name: "डॉ. गिरीष ओक",
      title: "सुप्रसिद्ध अभिनेते",
      image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=400&h=400&fit=crop"
    }
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
            पाहुणे आणि मान्यवर
          </h1>
        </div>
      </section>

      {/* Guests Grid Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {guests.map((guest, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={guest.image}
                    alt={guest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold text-hero-navy mb-2 leading-tight">
                    {guest.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {guest.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Guests;
