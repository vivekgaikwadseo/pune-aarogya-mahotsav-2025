import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import conceptHealthArts from "@/assets/concept-health-arts.jpg";

const About = () => {
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
            आमच्या विषयी
          </h1>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Image */}
            <div className="order-2 md:order-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={conceptHealthArts} 
                  alt="Community Healthcare"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="order-1 md:order-2 space-y-6">
              <p className="text-hero-pink font-semibold text-lg">
                आमची ओळख
              </p>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hero-navy leading-tight">
                रुग्ण हक्क परिषद
              </h2>
              
              <p className="text-xl text-hero-grey font-medium italic">
                "डॉक्टरांचे संरक्षण आणि रुग्णांच्या न्याय हक्क, अधिकारांसाठी लढणारी आय.एस.ओ. मानंकित एकमेव संघटना."
              </p>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  रुग्ण हक्क परिषदेची स्थापना संस्थापक अध्यक्ष मा. उमेश चव्हाण यांनी केली आहे. रुग्णांना त्यांचे हक्क मिळवून देणे आणि आरोग्यसेवेमध्ये पारदर्शकता आणणे हे आमचे मुख्य ध्येय आहे.
                </p>
                
                <p>
                  आरोग्य हा प्रत्येक नागरिकाचा मूलभूत हक्क आहे. आम्ही डॉक्टर आणि रुग्ण यांच्यातील विश्वास वाढवण्यासाठी आणि गुणवत्तापूर्ण आरोग्यसेवा सुनिश्चित करण्यासाठी कार्यरत आहोत.
                </p>
                
                <p>
                  पुणे आरोग्य महोत्सव २०२५ हा याच ध्येयाचा एक भाग आहे - जिथे आम्ही समाजाला मोफत आरोग्य तपासणी, शिक्षण आणि जागरुकतेचे साधन पुरवतो.
                </p>
              </div>
              
              <Button 
                size="lg"
                className="bg-hero-pink hover:bg-hero-deep-pink text-white font-semibold"
              >
                अधिक जाणून घ्या
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
