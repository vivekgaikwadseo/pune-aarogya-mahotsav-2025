import { Button } from "@/components/ui/button";
import { Stethoscope, MessageSquare, FileText, Users } from "lucide-react";

const WhyJoinSection = () => {
  const features = [
    {
      id: 1,
      icon: Stethoscope,
      title: "मोफत आरोग्य तपासणी",
      description: "हृदयरोग, कॅन्सर, गुडघे आणि इतर अनेक आजारांवर तज्ञ डॉक्टरांकडून मोफत तपासणी, उपचार व शस्त्रक्रिया.",
    },
    {
      id: 2,
      icon: MessageSquare,
      title: "तज्ञांचे मार्गदर्शन",
      description: "प्रसिद्ध डॉक्टर्स आणि विचारवंतांच्या व्याख्यानांमधून आरोग्यविषयक मौल्यवान माहिती मिळवा.",
    },
    {
      id: 3,
      icon: FileText,
      title: "शासकीय योजनांचा लाभ",
      description: "आयुष्यमान भारत कार्ड आणि शहरी गरीब योजना कार्ड यांसारख्या शासकीय आरोग्य योजना मोफत मिळवण्याची सुवर्णसंधी.",
    },
    {
      id: 4,
      icon: Users,
      title: "मान्यवरांशी संवाद",
      description: "आरोग्य, साहित्य आणि चित्रपट क्षेत्रातील नामवंत व्यक्तींना भेटण्याची आणि त्यांच्याशी संवाद साधण्याची संधी.",
    },
  ];

  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-section-bg-grey overflow-x-hidden">
      {/* Decorative Background Patterns */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left: Gradient Pink Ring - Partially visible from left edge */}
        <div className="absolute -left-32 top-1/4 w-64 h-64 opacity-30">
          <svg width="256" height="256" viewBox="0 0 256 256" className="w-full h-full">
            <defs>
              <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF0080" />
                <stop offset="100%" stopColor="#D20062" />
              </linearGradient>
            </defs>
            <circle 
              cx="128" 
              cy="128" 
              r="100" 
              fill="none" 
              stroke="url(#pinkGradient)" 
              strokeWidth="30" 
            />
          </svg>
        </div>
        
        {/* Right: Grey Circle with Diagonal Lines - Partially visible from right edge */}
        <div className="absolute -right-32 bottom-1/4 w-64 h-64 opacity-20">
          <svg width="256" height="256" viewBox="0 0 256 256" className="w-full h-full">
            <defs>
              <pattern id="diagonalLines" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="20" y2="20" stroke="#E9ECEF" strokeWidth="2" />
              </pattern>
            </defs>
            <circle cx="128" cy="128" r="120" fill="url(#diagonalLines)" />
          </svg>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.85fr] gap-12 lg:gap-16">
          
          {/* Left Column (35%) */}
          <div className="space-y-6">
            {/* Pre-heading */}
            <p className="text-bright-pink font-bold text-lg">
              का सहभागी व्हावे?
            </p>
            
            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hero-navy leading-tight">
              या महोत्सवात का सहभागी व्हावे?
            </h2>
            
            {/* Decorative Zig-Zag */}
            <div>
              <svg width="80" height="20" viewBox="0 0 80 20">
                <path 
                  d="M0 10 L20 2 L40 10 L60 2 L80 10" 
                  stroke="#FF0080" 
                  strokeWidth="3" 
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            
            {/* Description */}
            <p className="text-hero-grey text-base md:text-lg leading-relaxed">
              पुणे आरोग्य महोत्सव तुम्हाला आरोग्य तपासणी, तज्ञांचे मार्गदर्शन आणि शासकीय योजनांचा लाभ एकाच ठिकाणी मिळवण्याची अनोखी संधी देतो. निरोगी आयुष्याकडे एक पाऊल टाका.
            </p>
            
            {/* CTA Button */}
            <Button className="bg-bright-pink hover:bg-bright-pink/90 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              नोंदणी करा
            </Button>
          </div>

          {/* Right Column (65%) - 2×2 Grid */}
          <div className="grid md:grid-cols-2 gap-6 pr-0 md:pr-4 lg:pr-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.id}
                  className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Icon className="w-12 h-12 text-gray-400 mb-4" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold text-hero-navy mb-3 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-hero-grey text-sm leading-relaxed pr-8">
                    {feature.description}
                  </p>
                  {/* Corner Number Badge */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-bright-pink rounded-tl-3xl flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">
                      {feature.id}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
