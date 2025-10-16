import { Mic, BookOpen, Trophy } from "lucide-react";
import conceptImage from "@/assets/concept-health-arts.jpg";

const ConceptSection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Left Column - Image (40%) */}
          <div className="w-full lg:w-[40%]">
            <img 
              src={conceptImage}
              alt="आरोग्य आणि साहित्य यांचा संगम"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
          
          {/* Right Column - Text Content (60%) */}
          <div className="w-full lg:w-[60%] space-y-6">
            
            {/* Pre-heading */}
            <p className="text-lg md:text-xl font-bold text-bright-pink">
              एक अनोखा संगम
            </p>
            
            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hero-navy leading-tight">
              महाराष्ट्रातील पहिले आरोग्य साहित्य संमेलन
            </h2>
            
            {/* Description Paragraph */}
            <p className="text-base md:text-lg text-hero-navy leading-relaxed">
              हा महोत्सव आरोग्य, साहित्य, राजकीय, चित्रपट आणि नाट्यक्षेत्रातील दिग्गजांना एकत्र आणणारा एक अनोखा संगम आहे. निरोगी आणि सुसंस्कृत समाजाच्या निर्मितीसाठी हे एक महत्त्वाचे पाऊल आहे.
            </p>
            
            {/* Key Features Section */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xl md:text-2xl font-semibold text-hero-navy">
                या संमेलनाची काही प्रमुख वैशिष्ट्ये:
              </h3>
              
              {/* Features List */}
              <div className="space-y-4">
                {/* Feature 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-hero-blue rounded-lg flex items-center justify-center">
                    <Mic className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-base md:text-lg text-hero-navy pt-1.5">
                    तज्ञ डॉक्टर्स आणि विचारवंतांचे परिसंवाद
                  </p>
                </div>
                
                {/* Feature 2 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-hero-blue rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-base md:text-lg text-hero-navy pt-1.5">
                    आरोग्यविषयक पुस्तकांचे प्रकाशन
                  </p>
                </div>
                
                {/* Feature 3 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-hero-blue rounded-lg flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-base md:text-lg text-hero-navy pt-1.5">
                    आरोग्य आणि समाजसेवेतील दिग्गजांचा सन्मान
                  </p>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;