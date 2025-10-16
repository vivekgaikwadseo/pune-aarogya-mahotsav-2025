import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    alert("तुमचा संदेश यशस्वीरित्या पाठवला आहे!");
  };

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
            संपर्क साधा
          </h1>
        </div>
      </section>

      {/* Contact Details & Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-hero-navy mb-6">
                  आमच्याशी संपर्क साधा
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  कृपया आपले प्रश्न, सूचना किंवा अभिप्राय आमच्यासोबत शेअर करा. आम्ही लवकरच तुमच्याशी संपर्क साधू.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-hero-pink/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-hero-pink" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-hero-navy mb-1">पत्ता</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      १३६, दुसरा मजला, माती गणपती जवळ,<br />
                      सीताफळ बाग कॉलनी, नारायण पेठ,<br />
                      पुणे ३०
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-hero-pink/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-hero-pink" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-hero-navy mb-1">फोन</h3>
                    <p className="text-muted-foreground">
                      98 5000 2204<br />
                      8956185702
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-hero-pink/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-hero-pink" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-hero-navy mb-1">ईमेल</h3>
                    <p className="text-muted-foreground">
                      info@punearogyamahotsav.in
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Map Placeholder */}
              <div className="rounded-xl overflow-hidden shadow-lg h-64 bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5204441234!2d73.8567437!3d18.5073072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06f4b8e5f07%3A0x7c5f5e9a7b5d6c8a!2sNarayan%20Peth%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                />
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-hero-light-grey rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-hero-navy mb-6">
                संदेश पाठवा
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-hero-navy mb-2">
                    नाव *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="तुमचे पूर्ण नाव"
                    required
                    className="w-full"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-hero-navy mb-2">
                    ईमेल *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="तुमचा ईमेल पत्ता"
                    required
                    className="w-full"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-hero-navy mb-2">
                    विषय *
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="संदेशाचा विषय"
                    required
                    className="w-full"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-hero-navy mb-2">
                    तुमचा संदेश *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="तुमचा संदेश इथे लिहा..."
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-hero-pink hover:bg-hero-deep-pink text-white font-semibold"
                >
                  संदेश पाठवा
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
