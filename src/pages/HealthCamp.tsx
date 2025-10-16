import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Hospital, Activity, Users, FileText, Eye, Brain, HeartPulse } from "lucide-react";

const HealthCamp = () => {
  const services = [
    {
      icon: Heart,
      title: "हृदयरोग तपासणी आणि मोफत शस्त्रक्रिया",
      items: ["ईसीजी", "पेसमेकर", "अँजिओप्लास्टी", "बायपास", "ओपन हार्ट सर्जरी", "व्हॉल्व्ह चेंज ऑपरेशन"]
    },
    {
      icon: Hospital,
      title: "कॅन्सरवरील मोफत उपचार आणि शस्त्रक्रिया",
      items: ["केमोथेरपी", "रेडिएशन", "गाठींचे ऑपरेशन", "महिलांसाठी ब्रेस्ट कॅन्सर स्क्रिनिंग"]
    },
    {
      icon: Activity,
      title: "गुडघ्याची तपासणी",
      items: ["गुडघ्याच्या वाट्या बदलणे", "खुब्याचे बॉल बसवणे"]
    },
    {
      icon: Users,
      title: "स्त्रियांच्या सर्व तपासण्या",
      items: ["हिमोग्लोबिन तपासणी", "रक्तवाढीसाठी मार्गदर्शन", "सॅनिटरी नॅपकीन वाटप"]
    },
    {
      icon: FileText,
      title: "मोफत शासकीय योजना कार्ड",
      items: ["आयुष्यमान भारत कार्ड", "शहरी गरीब योजना कार्ड"]
    },
    {
      icon: Eye,
      title: "मोफत नेत्र तपासणी व चष्मे वाटप",
      items: ["संपूर्ण नेत्र तपासणी", "मोफत चष्मे वाटप"]
    },
    {
      icon: Brain,
      title: "मेंदुच्या सर्व शस्त्रक्रिया",
      items: ["रक्ताच्या गाठी", "मेंदुच्या गाठी", "मेंदुचे ऑपरेशन"]
    },
    {
      icon: HeartPulse,
      title: "अवयव दान नाव नोंदणी",
      items: ["अवयव दान", "नेत्रदान", "देहदान"]
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
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg border border-border p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 bg-hero-pink/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-hero-pink" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-hero-navy mb-3 leading-tight">
                    {service.title}
                  </h3>
                  
                  {/* Services List */}
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-hero-pink mr-2 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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

      <Footer />
    </div>
  );
};

export default HealthCamp;
