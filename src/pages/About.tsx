import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import conceptHealthArts from "@/assets/concept-doctors-patients-handshake.jpg";
import teamUmeshChavan from "@/assets/team-umesh-chavan.png";
import teamBhanupratapBarge from "@/assets/team-bhanupratap-barge.png";
import teamMilindGaikwad from "@/assets/team-milind-gaikwad.png";
import teamJanmohammadPathan from "@/assets/team-janmohammad-pathan.png";
import teamAparnaSathe from "@/assets/team-aparna-sathe.png";
import teamIqbalShaikh from "@/assets/team-iqbal-shaikh.png";
import teamAashishGandhi from "@/assets/team-aashish-gandhi.png";
import teamRahulHulawale from "@/assets/team-rahul-hulawale.png";
import teamRajendraKadam from "@/assets/team-rajendra-kadam.png";
import teamSangeetaPatil from "@/assets/team-sangeeta-patil.png";
import teamSanjayAalhat from "@/assets/team-sanjay-aalhat.png";
import teamSureshFale from "@/assets/team-suresh-fale.png";

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
                  alt="Protecting doctors' rights while fighting for patients' justice"
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

      {/* Organizer's Portfolio Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
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
                    src={teamUmeshChavan}
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
      </section>

      {/* Our Team Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hero-navy text-center mb-12">
            आमची टीम
          </h2>

          {/* Team Grid - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center">
                <div className="bg-[#F8F9FA] p-6">
                  <img 
                    src={teamUmeshChavan} 
                    alt="मा. उमेश चव्हाण"
                    className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                  />
                </div>
                <div className="bg-white p-6 flex-1">
                  <h3 className="text-xl font-bold text-hero-navy mb-1">मा. उमेश चव्हाण</h3>
                  <p className="text-hero-pink">संस्थापक अध्यक्ष</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center">
                <div className="bg-[#F8F9FA] p-6">
                  <img 
                    src={teamBhanupratapBarge} 
                    alt="श्री. भानुप्रताप बर्गे"
                    className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                  />
                </div>
                <div className="bg-white p-6 flex-1">
                  <h3 className="text-xl font-bold text-hero-navy mb-1">श्री. भानुप्रताप बर्गे</h3>
                  <p className="text-hero-pink">माजी सहा. पोलीस आयुक्त</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center">
                <div className="bg-[#F8F9FA] p-6">
                  <img 
                    src={teamMilindGaikwad} 
                    alt="श्री. मिलिंद गायकवाड"
                    className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                  />
                </div>
                <div className="bg-white p-6 flex-1">
                  <h3 className="text-xl font-bold text-hero-navy mb-1">श्री. मिलिंद गायकवाड</h3>
                  <p className="text-hero-pink">माजी सहा. पोलीस आयुक्त</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center">
                <div className="bg-[#F8F9FA] p-6">
                  <img 
                    src={teamJanmohammadPathan} 
                    alt="श्री. जान महंमद पठाण"
                    className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                  />
                </div>
                <div className="bg-white p-6 flex-1">
                  <h3 className="text-xl font-bold text-hero-navy mb-1">श्री. जान महंमद पठाण</h3>
                  <p className="text-hero-pink">मा. सहा. पोलीस आयुक्त</p>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center">
                <div className="bg-[#F8F9FA] p-6">
                  <img 
                    src={teamAparnaSathe} 
                    alt="सौ. अपर्णा मारणे-साठ्ये"
                    className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                  />
                </div>
                <div className="bg-white p-6 flex-1">
                  <h3 className="text-xl font-bold text-hero-navy mb-1">सौ. अपर्णा मारणे-साठ्ये</h3>
                  <p className="text-hero-pink">पुणे शहराध्यक्षा</p>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center">
                <div className="bg-[#F8F9FA] p-6">
                  <img 
                    src={teamIqbalShaikh} 
                    alt="श्री. इकबाल शेख"
                    className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                  />
                </div>
                <div className="bg-white p-6 flex-1">
                  <h3 className="text-xl font-bold text-hero-navy mb-1">श्री. इकबाल शेख</h3>
                  <p className="text-hero-pink">संचालक, ग्रँड पृथ्वी मेडिकल फाऊंडेशन</p>
                </div>
              </div>
            </div>

            {/* Card 7 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center">
                <div className="bg-[#F8F9FA] p-6">
                  <img 
                    src={teamAashishGandhi} 
                    alt="श्री. आशिष गांधी"
                    className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                  />
                </div>
                <div className="bg-white p-6 flex-1">
                  <h3 className="text-xl font-bold text-hero-navy mb-1">श्री. आशिष गांधी</h3>
                  <p className="text-hero-pink">उपाध्यक्ष, ग्रँड पृथ्वी मेडिकल फाऊंडेशन</p>
                </div>
              </div>
            </div>

            {/* Card 8 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center">
                <div className="bg-[#F8F9FA] p-6">
                  <img 
                    src={teamRahulHulawale} 
                    alt="श्री. राहुल हुलावळे"
                    className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                  />
                </div>
                <div className="bg-white p-6 flex-1">
                  <h3 className="text-xl font-bold text-hero-navy mb-1">श्री. राहुल हुलावळे</h3>
                  <p className="text-hero-pink">सदस्य</p>
                </div>
              </div>
            </div>

            {/* Card 9 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center">
                <div className="bg-[#F8F9FA] p-6">
                  <img 
                    src={teamRajendraKadam} 
                    alt="श्री. राजेंद्र कदम"
                    className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                  />
                </div>
                <div className="bg-white p-6 flex-1">
                  <h3 className="text-xl font-bold text-hero-navy mb-1">श्री. राजेंद्र कदम</h3>
                  <p className="text-hero-pink">समन्वयक</p>
                </div>
              </div>
            </div>

            {/* Card 10 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center">
                <div className="bg-[#F8F9FA] p-6">
                  <img 
                    src={teamSangeetaPatil} 
                    alt="सौ. संगिता पाटील"
                    className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                  />
                </div>
                <div className="bg-white p-6 flex-1">
                  <h3 className="text-xl font-bold text-hero-navy mb-1">सौ. संगिता पाटील</h3>
                  <p className="text-hero-pink">मा. सहा. पोलीस आयुक्त</p>
                </div>
              </div>
            </div>

            {/* Card 11 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center">
                <div className="bg-[#F8F9FA] p-6">
                  <img 
                    src={teamSanjayAalhat} 
                    alt="श्री. संजय आल्हाट"
                    className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                  />
                </div>
                <div className="bg-white p-6 flex-1">
                  <h3 className="text-xl font-bold text-hero-navy mb-1">श्री. संजय आल्हाट</h3>
                  <p className="text-hero-pink">सदस्य</p>
                </div>
              </div>
            </div>

            {/* Card 12 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center">
                <div className="bg-[#F8F9FA] p-6">
                  <img 
                    src={teamSureshFale} 
                    alt="श्री. सुरेश फाले"
                    className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                  />
                </div>
                <div className="bg-white p-6 flex-1">
                  <h3 className="text-xl font-bold text-hero-navy mb-1">श्री. सुरेश फाले</h3>
                  <p className="text-hero-pink">सदस्य</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
