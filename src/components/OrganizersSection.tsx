import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import umeshChavan from "@/assets/umesh-chavan.png";
import bhanupratapBarge from "@/assets/bhanupratap-barge.png";
import rajendraKadam from "@/assets/rajendra-kadam.png";
import aparnaSathe from "@/assets/aparna-sathe.png";
import iqbalShaikh from "@/assets/iqbal-shaikh.png";

const OrganizersSection = () => {
  const teamMembers = [
    {
      name: "श्री. भानुप्रताप बर्गे",
      role: "माजी सहा. पोलीस आयुक्त",
      image: bhanupratapBarge,
      bgColor: "bg-gradient-to-br from-blue-400 to-blue-600"
    },
    {
      name: "श्री. राजेंद्र कदम",
      role: "समन्वयक, रुग्ण हक्क परिषद",
      image: rajendraKadam,
      bgColor: "bg-gradient-to-br from-pink-400 to-pink-600"
    },
    {
      name: "सौ. अपर्णा मारणे-साठ्ये",
      role: "पुणे शहराध्यक्षा, रुग्ण हक्क परिषद",
      image: aparnaSathe,
      bgColor: "bg-gradient-to-br from-purple-400 to-purple-600"
    },
    {
      name: "श्री. चंद्रशेखर दैठणकर",
      role: "माजी आय.पी.एस. अधिकारी",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      bgColor: "bg-gradient-to-br from-teal-400 to-teal-600"
    },
    {
      name: "श्री. इकबाल शेख",
      role: "संचालक, ग्रँड पृथ्वी मेडिकल फाऊंडेशन",
      image: iqbalShaikh,
      bgColor: "bg-gradient-to-br from-orange-400 to-orange-600"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Part A - Organizer's Portfolio */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-hero-navy">
                आयोजकांविषयी
              </h3>
              <h2 className="text-3xl md:text-4xl font-bold text-hero-navy">
                मा. उमेश चव्हाण
              </h2>
              <p className="text-xl font-semibold text-hero-pink">
                संस्थापक अध्यक्ष, रुग्ण हक्क परिषद, महाराष्ट्र प्रदेश
              </p>
              <div className="space-y-4 text-hero-grey leading-relaxed">
                <p>
                  मा. उमेश चव्हाण यांनी महाराष्ट्रातील रुग्णांच्या हक्कांसाठी आणि आरोग्य क्षेत्रातील 
                  सुधारणांसाठी अथक प्रयत्न केले आहेत. त्यांच्या नेतृत्वाखाली रुग्ण हक्क परिषदने 
                  अनेक महत्त्वपूर्ण उपक्रम राबवले आहेत.
                </p>
                <p>
                  आरोग्य साक्षरता वाढवणे आणि सामान्य नागरिकांना योग्य आरोग्य सेवा मिळावी यासाठी 
                  त्यांनी विविध उपक्रम आयोजित केले आहेत. पुणे आरोग्य महोत्सव हा त्यांच्या या 
                  दृष्टीकोनाचा एक महत्त्वपूर्ण भाग आहे.
                </p>
              </div>
            </div>

            {/* Right Column - Photo with Abstract Background */}
            <div className="relative flex justify-center items-center">
              {/* Abstract Background Shape */}
              <div className="absolute inset-0 flex justify-center items-center">
                <svg viewBox="0 0 500 500" className="w-full h-full opacity-30">
                  <path
                    d="M250,50 Q400,100 450,250 Q400,400 250,450 Q100,400 50,250 Q100,100 250,50"
                    fill="#F8F9FA"
                    stroke="none"
                  />
                  <circle cx="250" cy="250" r="180" fill="#F8F9FA" opacity="0.5" />
                </svg>
              </div>
              
              {/* Image */}
              <div className="relative z-10 aspect-square rounded-2xl overflow-hidden shadow-2xl max-w-md">
                <img 
                  src={umeshChavan}
                  alt="मा. उमेश चव्हाण"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative Element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-hero-pink rounded-full opacity-20 blur-3xl z-0"></div>
            </div>
          </div>
        </div>

        {/* Part B - Team Slider */}
        <div className="space-y-8 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-hero-navy text-center">
            आमची टीम
          </h2>
          
          <div className="max-w-6xl mx-auto px-8">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {teamMembers.map((member, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                      <CardContent className="p-0">
                        {/* Background Pattern Section */}
                        <div className="h-64 relative overflow-hidden" style={{
                          background: '#F8F9FA',
                          backgroundImage: `
                            linear-gradient(45deg, #ffffff 25%, transparent 25%),
                            linear-gradient(-45deg, #ffffff 25%, transparent 25%),
                            linear-gradient(45deg, transparent 75%, #ffffff 75%),
                            linear-gradient(-45deg, transparent 75%, #ffffff 75%)
                          `,
                          backgroundSize: '20px 20px',
                          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                        }}>
                          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-100/30"></div>
                        </div>
                        
                        {/* White Content Box */}
                        <div className="bg-white p-6 rounded-t-3xl -mt-8 relative">
                          <div className="flex items-center gap-4">
                            {/* Circular Profile Picture */}
                            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
                              <img 
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            
                            {/* Name and Role */}
                            <div className="flex-1">
                              <h3 className="font-bold text-hero-navy text-lg leading-tight mb-1">
                                {member.name}
                              </h3>
                              <p className="text-hero-grey text-sm">
                                {member.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizersSection;
