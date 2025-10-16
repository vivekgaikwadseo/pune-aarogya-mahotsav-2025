import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Hospital, Activity, Users, FileText, Eye, Brain, HeartPulse, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import healthHeart from "@/assets/health-heart.jpg";
import healthCancer from "@/assets/health-cancer.jpg";
import healthKnee from "@/assets/health-knee.jpg";
import healthWomen from "@/assets/health-women.jpg";
import healthCards from "@/assets/health-cards.jpg";
import healthBrain from "@/assets/health-brain.jpg";
import healthEye from "@/assets/health-eye.jpg";
import healthDonation from "@/assets/health-donation.jpg";

const HealthCamp = () => {
  const services = [
    {
      icon: Heart,
      image: healthHeart,
      title: "हृदयरोग तपासणी आणि मोफत शस्त्रक्रिया",
      items: ["ईसीजी", "पेसमेकर", "अँजिओप्लास्टी", "बायपास", "ओपन हार्ट सर्जरी", "व्हॉल्व्ह चेंज ऑपरेशन"],
      colorClass: "bg-hero-pink"
    },
    {
      icon: Hospital,
      image: healthCancer,
      title: "कॅन्सरवरील मोफत उपचार आणि शस्त्रक्रिया",
      items: ["केमोथेरपी", "रेडिएशन", "गाठींचे ऑपरेशन", "महिलांसाठी ब्रेस्ट कॅन्सर स्क्रिनिंग"],
      colorClass: "bg-hero-blue"
    },
    {
      icon: Activity,
      image: healthKnee,
      title: "गुडघ्याची तपासणी",
      items: ["गुडघ्याच्या वाट्या बदलणे", "खुब्याचे बॉल बसवणे", "७० % मोफत ऑपरेशन"],
      colorClass: "bg-hero-pink"
    },
    {
      icon: Users,
      image: healthWomen,
      title: "स्त्रियांच्या सर्व तपासण्या",
      items: ["हिमोग्लोबिन", "रक्तवाढीसाठी मार्गदर्शन", "हाडे मजबुत करणे", "सॅनिटरी नॅपकीन वाटप"],
      colorClass: "bg-hero-blue"
    },
    {
      icon: FileText,
      image: healthCards,
      title: "मोफत शासकीय योजना कार्ड",
      items: ["आयुष्यमान भारत कार्ड", "शहरी गरीब योजना कार्ड"],
      colorClass: "bg-hero-pink"
    },
    {
      icon: Brain,
      image: healthBrain,
      title: "मेंदुच्या सर्व शस्त्रक्रिया",
      items: ["रक्ताच्या गाठी", "मेंदुच्या गाठी", "मेंदुचे ऑपरेशन"],
      colorClass: "bg-hero-blue"
    },
    {
      icon: Eye,
      image: healthEye,
      title: "मोफत नेत्र तपासणी व चष्मे वाटप",
      items: ["संपूर्ण नेत्र तपासणी", "मोफत चष्मे वाटप"],
      colorClass: "bg-hero-pink"
    },
    {
      icon: HeartPulse,
      image: healthDonation,
      title: "अवयव दान नाव नोंदणी",
      items: ["अवयव दान", "नेत्रदान", "देहदान"],
      colorClass: "bg-hero-blue"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Page Header Banner */}
      <section className="relative bg-hero-navy py-16 md:py-24 overflow-hidden">
        {/* Dot Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
            भव्य आरोग्य शिबिर
          </h1>
        </div>
      </section>

      {/* Main Information Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Intro */}
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-hero-navy">
              सर्वांसाठी मोफत महा-आरोग्य शिबिर
            </h2>
            <p className="text-xl md:text-2xl text-hero-pink font-semibold">
              रविवार १९ ऑक्टोबर २०२५ रोजी सकाळी ९ ते सायं. ७ वा. पर्यंत
            </p>
            <p className="text-lg text-muted-foreground">
              बालगंधर्व रंगमंदिर, पुणे येथे
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              const checkmarkColor = service.colorClass === "bg-hero-pink" ? "text-hero-pink" : "text-hero-blue";
              
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image with Icon Overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Icon Circle Overlay */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className={`w-16 h-16 ${service.colorClass} rounded-full flex items-center justify-center shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-lg font-bold text-hero-navy mb-4 leading-tight min-h-[3.5rem]">
                      {service.title}
                    </h3>
                    
                    {/* Services List with Checkmarks */}
                    <ul className="space-y-2">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <Check className={`w-4 h-4 ${checkmarkColor} mr-2 mt-0.5 flex-shrink-0`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Important Note */}
          <div className="max-w-3xl mx-auto bg-hero-pastel-pink border-l-4 border-hero-pink rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-hero-navy mb-3 flex items-center">
              <span className="text-2xl mr-2">⚠️</span>
              महत्त्वाची सूचना
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-hero-navy">टिप:</strong> येताना जुने रिपोर्ट्स सोबत आणावेत. तसेच आधारकार्ड व रेशनिंग कार्ड सोबत आणावेत.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section - Light Theme */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-hero-navy mb-8">
            शिबिराविषयी अधिक तपशील आणि माहितीसाठी
          </h2>
          <a 
            href="https://puneaarogyamahotsav.org/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="bg-hero-pink hover:bg-hero-pink/90 text-white font-semibold px-8 py-6 text-lg"
            >
              मुख्य वेबसाइटला भेट द्या
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HealthCamp;
