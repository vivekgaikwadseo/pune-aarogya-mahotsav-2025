import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import conceptHealthArts from "@/assets/concept-doctors-patients-justice.jpg";
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
