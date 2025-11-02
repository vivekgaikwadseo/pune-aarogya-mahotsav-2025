import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import umeshChavan from "@/assets/umesh-chavan-new.png";
import bhanupratapBarge from "@/assets/team-bhanupratap-barge.png";
import milindGaikwad from "@/assets/team-milind-gaikwad.png";
import janmohammadPathan from "@/assets/team-janmohammad-pathan.png";
import aparnaSathe from "@/assets/team-aparna-sathe.png";
import iqbalShaikh from "@/assets/team-iqbal-shaikh.png";
import aashishGandhi from "@/assets/team-aashish-gandhi.png";
import rahulHulawale from "@/assets/team-rahul-hulawale.png";
import rajendraKadam from "@/assets/team-rajendra-kadam.png";
import sangeetaPatil from "@/assets/team-sangeeta-patil.png";
import sanjayAalhat from "@/assets/team-sanjay-aalhat.png";
import sureshFale from "@/assets/team-suresh-fale.png";

const OrganizersSection = () => {
  const teamMembers = [
    {
      name: "मा. उमेश चव्हाण",
      role: "संस्थापक अध्यक्ष",
      image: umeshChavan,
      bgColor: "bg-gradient-to-br from-indigo-400 to-indigo-600"
    },
    {
      name: "श्री. भानुप्रताप बर्गे",
      role: "माजी सहा. पोलीस आयुक्त",
      image: bhanupratapBarge,
      bgColor: "bg-gradient-to-br from-blue-400 to-blue-600"
    },
    {
      name: "श्री. मिलिंद गायकवाड",
      role: "माजी सहा. पोलीस आयुक्त",
      image: milindGaikwad,
      bgColor: "bg-gradient-to-br from-cyan-400 to-cyan-600"
    },
    {
      name: "श्री. जान महंमद पठाण",
      role: "मा. सहा. पोलीस आयुक्त",
      image: janmohammadPathan,
      bgColor: "bg-gradient-to-br from-emerald-400 to-emerald-600"
    },
    {
      name: "सौ. अपर्णा मारणे-साळवे",
      role: "पुणे शहराध्यक्षा",
      image: aparnaSathe,
      bgColor: "bg-gradient-to-br from-purple-400 to-purple-600"
    },
    {
      name: "श्री. इकबाल शेख",
      role: "संचालक, ग्रँड पृथ्वी मेडिकल फाऊंडेशन",
      image: iqbalShaikh,
      bgColor: "bg-gradient-to-br from-orange-400 to-orange-600"
    },
    {
      name: "श्री. आशिष गांधी",
      role: "उपाध्यक्ष, ग्रँड पृथ्वी मेडिकल फाऊंडेशन",
      image: aashishGandhi,
      bgColor: "bg-gradient-to-br from-red-400 to-red-600"
    },
    {
      name: "श्री. राहुल हुलावळे",
      role: "सदस्य",
      image: rahulHulawale,
      bgColor: "bg-gradient-to-br from-pink-400 to-pink-600"
    },
    {
      name: "श्री. राजेंद्र कदम",
      role: "समन्वयक",
      image: rajendraKadam,
      bgColor: "bg-gradient-to-br from-violet-400 to-violet-600"
    },
    {
      name: "सौ. संगिता पाटील",
      role: "मा. सहा. पोलीस आयुक्त",
      image: sangeetaPatil,
      bgColor: "bg-gradient-to-br from-fuchsia-400 to-fuchsia-600"
    },
    {
      name: "श्री. संजय आल्हाट",
      role: "सदस्य",
      image: sanjayAalhat,
      bgColor: "bg-gradient-to-br from-teal-400 to-teal-600"
    },
    {
      name: "श्री. सुरेश फाले",
      role: "सदस्य",
      image: sureshFale,
      bgColor: "bg-gradient-to-br from-amber-400 to-amber-600"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
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

            {/* Right Column - Photo with Enhanced Effects */}
            <div className="relative flex justify-center items-center min-h-[500px]">
              {/* Multiple Decorative Background Shapes */}
              <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
                {/* Primary Abstract Shape */}
                <svg viewBox="0 0 500 500" className="absolute w-full h-full opacity-20">
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#2196F3', stopOpacity: 0.4 }} />
                      <stop offset="50%" style={{ stopColor: '#1976D2', stopOpacity: 0.3 }} />
                      <stop offset="100%" style={{ stopColor: '#0D47A1', stopOpacity: 0.4 }} />
                    </linearGradient>
                  </defs>
                  <ellipse cx="250" cy="250" rx="220" ry="200" fill="url(#gradient1)" opacity="0.5" />
                  <ellipse cx="250" cy="250" rx="180" ry="160" fill="url(#gradient1)" opacity="0.3" />
                </svg>
                
                {/* Secondary Circular Shape */}
                <div className="absolute w-96 h-96 bg-gradient-to-br from-hero-blue/15 to-blue-900/15 rounded-full blur-3xl"></div>
              </div>
              
              {/* Floating Decorative Circles - Blue Theme */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-hero-blue/25 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-16 left-10 w-24 h-24 bg-blue-600/25 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/3 left-5 w-16 h-16 bg-blue-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
              
              {/* Main Image Container with Soft Diffused Background */}
              <div className="relative z-10 max-w-lg w-full">
                {/* Soft Diffused Background Glow - Multiple Layers */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Primary soft glow */}
                  <div 
                    className="absolute w-[120%] h-[120%]"
                    style={{
                      background: 'radial-gradient(ellipse at center, rgba(245, 240, 230, 0.9) 0%, rgba(240, 235, 220, 0.7) 30%, rgba(235, 230, 215, 0.4) 50%, transparent 70%)',
                      filter: 'blur(60px)'
                    }}
                  ></div>
                  
                  {/* Secondary soft glow for depth */}
                  <div 
                    className="absolute w-[100%] h-[100%]"
                    style={{
                      background: 'radial-gradient(ellipse at center, rgba(250, 245, 235, 0.8) 0%, rgba(245, 240, 230, 0.5) 40%, transparent 65%)',
                      filter: 'blur(40px)'
                    }}
                  ></div>
                  
                  {/* Inner glow for more definition */}
                  <div 
                    className="absolute w-[80%] h-[80%]"
                    style={{
                      background: 'radial-gradient(ellipse at center, rgba(248, 243, 233, 0.6) 0%, rgba(243, 238, 228, 0.3) 50%, transparent 70%)',
                      filter: 'blur(25px)'
                    }}
                  ></div>
                </div>
                
                {/* Image */}
                <div className="relative">
                  <img 
                    src={umeshChavan}
                    alt="मा. उमेश चव्हाण"
                    className="w-full h-auto object-contain relative z-10"
                  />
                </div>
              </div>
              
              {/* Additional Decorative Elements - Blue Theme */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-hero-blue/15 to-transparent rounded-full blur-3xl z-0"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-600/15 to-transparent rounded-full blur-3xl z-0"></div>
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
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 mb-8">
                    <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                      <CardContent className="p-0">
                        {/* Image Section with Unique Gradient Background */}
                        <div className={`h-64 relative overflow-hidden ${member.bgColor}`}>
                          {/* Decorative Background Elements */}
                          <div className="absolute inset-0">
                            {/* Abstract shapes for visual interest */}
                            <div className="absolute top-4 right-4 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
                            <div className="absolute bottom-6 left-6 w-40 h-40 bg-black/10 rounded-full blur-3xl"></div>
                            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/15 rounded-full blur-xl"></div>
                          </div>
                          
                          {/* Main Team Member Image */}
                          <div className="relative h-full flex items-center justify-center overflow-hidden max-h-64">
                            <img 
                              src={member.image}
                              alt={member.name}
                              className="h-full w-full max-h-full object-cover relative z-10 drop-shadow-2xl"
                            />
                          </div>
                          
                          {/* Gradient Overlay for smooth transition */}
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5"></div>
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
