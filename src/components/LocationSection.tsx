import { MapPin, Calendar, Clock, Ticket, Car, Phone } from "lucide-react";

const LocationSection = () => {
  const details = [
    {
      icon: MapPin,
      label: "ठिकाण:",
      text: "बालगंधर्व रंगमंदिर, पुणे"
    },
    {
      icon: Calendar,
      label: "दिनांक:",
      text: "१९ ऑक्टोबर २०२५"
    },
    {
      icon: Clock,
      label: "वेळ:",
      text: "सकाळी ९:०० ते सायंकाळी ७:०० पर्यंत"
    },
    {
      icon: Ticket,
      label: "प्रवेश:",
      text: "पूर्णपणे मोफत"
    },
    {
      icon: Car,
      label: "पार्किंग:",
      text: "बालगंधर्व रंगमंदिर येथे उपलब्ध"
    },
    {
      icon: Phone,
      label: "संपर्क:",
      text: "9850002204 / 8956185700 / 01 / 02"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left Column - Details */}
          <div className="space-y-6 md:space-y-8">
            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hero-navy">
              कार्यक्रमाचे ठिकाण आणि वेळ
            </h2>
            
            {/* Details List */}
            <div className="space-y-5">
              {details.map((detail, index) => {
                const IconComponent = detail.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-hero-pink/10 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-hero-pink" />
                    </div>
                    
                    {/* Text Content */}
                    <div className="flex-1 pt-1">
                      <span className="font-semibold text-hero-navy text-lg">
                        {detail.label}
                      </span>
                      <span className="ml-2 text-hero-grey text-lg">
                        {detail.text}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.0178449848!2d73.84207731489795!3d18.52566098741678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06c9c7e11ad%3A0x1f8b5d1e5c1e5c1e!2sBalgandharva%20Rangmandir!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Balgandharva Rangmandir Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
