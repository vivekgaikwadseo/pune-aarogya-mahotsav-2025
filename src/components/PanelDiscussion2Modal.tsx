import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Calendar, Clock, MapPin, CalendarPlus, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import eventPanelDiscussion2 from "@/assets/event-panel-discussion-2.jpg";
import vijayBaviskar from "@/assets/panel2-vijay-baviskar.png";
import sureshVishwakarma from "@/assets/panel2-suresh-vishwakarma.png";
import rameshPardeshi from "@/assets/panel2-ramesh-pardeshi.png";
import umeshIsalkar from "@/assets/panel2-umesh-isalkar.png";
import stephyThevar from "@/assets/panel2-stephy-thevar.png";
import vickyPathare from "@/assets/panel2-vicky-pathare.png";
import abhijitKolhe from "@/assets/panel2-abhijit-kolhe.png";
import prabhaKelkar from "@/assets/panel2-prabha-kelkar.png";
import sanjayJadhav from "@/assets/panel2-sanjay-jadhav.png";
import santoshAmbole from "@/assets/panel2-santosh-ambole.png";
import tejasTawalkar from "@/assets/panel2-tejas-tawalkar.png";
import anuradhaMascarenhas from "@/assets/panel2-anuradha-mascarenhas.png";
import sandeepPingale from "@/assets/panel2-sandeep-pingale.png";
import chaitaliDeshmukh from "@/assets/panel2-chaitali-deshmukh.png";
import gyaneshwarBhoi from "@/assets/panel2-gyaneshwar-bhoi.png";
import rajaramPawar from "@/assets/panel2-rajaram-pawar.png";

interface GuestCardProps {
  image: string;
  name: string;
  title: string;
}

const GuestCard = ({ image, name, title }: GuestCardProps) => (
  <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-lg">
    <img 
      src={image} 
      alt={name} 
      className="w-16 h-16 rounded-full object-cover border-[3px] border-white flex-shrink-0" 
    />
    <div className="min-w-0">
      <h4 className="font-bold text-hero-navy text-lg leading-tight">{name}</h4>
      <p className="text-base text-hero-grey mt-1 leading-tight">{title}</p>
    </div>
  </div>
);

interface PanelDiscussion2ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PanelDiscussion2Modal = ({ open, onOpenChange }: PanelDiscussion2ModalProps) => {
  const handleAddToCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:20251019T183000
DTEND:20251019T193000
SUMMARY:परिसंवाद - २ : शहरी व ग्रामीण आरोग्य व्यवस्थेपुढील आव्हाने
LOCATION:बालगंधर्व रंगमंदिर, पुणे
DESCRIPTION:१ले आरोग्य साहित्य संमेलन - परिसंवाद २
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'panel-discussion-2.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleShare = (platform: string) => {
    const eventUrl = window.location.href;
    const eventText = 'परिसंवाद - २ : शहरी व ग्रामीण आरोग्य व्यवस्थेपुढील आव्हाने - १ले आरोग्य साहित्य संमेलन';
    
    const shareUrls: { [key: string]: string } = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(eventUrl)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(eventText)}&url=${encodeURIComponent(eventUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(eventUrl)}`,
      instagram: `https://www.instagram.com/`
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-7xl w-[85vw] max-h-[90vh] p-0 overflow-hidden flex flex-col">
        {/* Dark Navy Header */}
        <div className="bg-hero-navy px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center flex-1">
            परिसंवाद - २ : शहरी व ग्रामीण आरोग्य व्यवस्थेपुढील आव्हाने
          </h2>
          <button 
            onClick={() => onOpenChange(false)} 
            className="text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="overflow-y-auto flex-1">
          {/* Two Column Layout - 40/60 */}
          <div className="grid md:grid-cols-[40%_60%] gap-6 bg-gray-50 p-6">
            
            {/* Left Column (40%) - Image */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={eventPanelDiscussion2} 
                alt="परिसंवाद - २" 
                className="w-full h-full object-cover" 
              />
            </div>

            {/* Right Column (60%) - Event Details */}
            <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
              
              {/* Event Date & Time */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-hero-navy">
                  <Calendar className="w-6 h-6 text-bright-pink" />
                  <span className="text-lg">रविवार, १९ ऑक्टोबर २०२५</span>
                </div>
                <div className="flex items-center gap-3 text-hero-navy">
                  <Clock className="w-6 h-6 text-bright-pink" />
                  <span className="text-lg">दुपारी ६:३० वा.</span>
                </div>
                <div className="flex items-center gap-3 text-hero-navy">
                  <MapPin className="w-6 h-6 text-bright-pink" />
                  <span className="text-lg">बालगंधर्व रंगमंदिर, पुणे</span>
                </div>
              </div>

              {/* Description */}
              <div className="border-t border-gray-200 pt-4">
                <p className="text-base text-hero-grey leading-relaxed">
                  या परिसंवादामध्ये शहरी आणि ग्रामीण आरोग्य व्यवस्थेपुढील प्रमुख आव्हानांवर तज्ञ मंडळी चर्चा करतील.
                </p>
              </div>

              {/* Key Personalities Heading */}
              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-xl font-bold text-bright-pink mb-3">
                  या कार्यक्रमाचे अध्यक्ष आणि प्रमुख पाहुणे
                </h3>
              </div>

              {/* Action Links */}
              <div className="border-t border-gray-200 pt-4 space-y-3">
                {/* Social Media Share */}
                <div>
                  <p className="text-xs font-bold text-hero-grey uppercase mb-2">शेअर करा</p>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => handleShare('facebook')} 
                      className="p-2 text-gray-600 hover:text-bright-pink transition-colors"
                      aria-label="Share on Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => handleShare('instagram')} 
                      className="p-2 text-gray-600 hover:text-bright-pink transition-colors"
                      aria-label="Share on Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => handleShare('twitter')} 
                      className="p-2 text-gray-600 hover:text-bright-pink transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => handleShare('linkedin')} 
                      className="p-2 text-gray-600 hover:text-bright-pink transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                {/* Add to Calendar */}
                <button 
                  onClick={handleAddToCalendar} 
                  className="flex items-center gap-3 text-bright-pink hover:text-hero-navy transition-colors w-full"
                >
                  <CalendarPlus className="w-5 h-5" />
                  <span className="text-sm font-semibold">Add to Calendar</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section - Guest List */}
          <div className="border-t border-gray-200 bg-white p-6 pb-8">
            
            {/* कार्यक्रमाचे अध्यक्ष */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-bright-pink mb-4 uppercase tracking-wide">
                कार्यक्रमाचे अध्यक्ष
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <GuestCard 
                  image={vijayBaviskar} 
                  name="मा. विजय बाविस्कर" 
                  title="समूह संपादक, लोकमत" 
                />
              </div>
            </div>

            {/* प्रमुख पाहुणे */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-bright-pink mb-4 uppercase tracking-wide">
                प्रमुख पाहुणे
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <GuestCard 
                  image={sureshVishwakarma} 
                  name="मा. सुरेश विश्वकर्मा" 
                  title="सिने अभिनेते" 
                />
                <GuestCard 
                  image={rameshPardeshi} 
                  name="मा. रमेश परदेशी" 
                  title="सिने अभिनेते" 
                />
              </div>
            </div>

            {/* प्रमुख वक्ते */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-bright-pink mb-4 uppercase tracking-wide">
                प्रमुख वक्ते
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <GuestCard 
                  image={umeshIsalkar} 
                  name="श्री. उमेश इसाळकर" 
                  title="पत्रकार, टाइम्स ऑफ इंडिया" 
                />
                <GuestCard 
                  image={stephyThevar} 
                  name="श्री. स्टेफी थेवर" 
                  title="पत्रकार, टाइम्स ऑफ इंडिया" 
                />
                <GuestCard 
                  image={vickyPathare} 
                  name="श्री. विकी पाझार" 
                  title="पत्रकार" 
                />
                <GuestCard 
                  image={abhijitKolhe} 
                  name="श्री. अभिजित कोल्हे" 
                  title="पत्रकार, पुरोगामी" 
                />
                <GuestCard 
                  image={prabhaKelkar} 
                  name="सौ. प्रभा केळकर सिंग" 
                  title="पत्रकार, पुढारी" 
                />
                <GuestCard 
                  image={sanjayJadhav} 
                  name="श्री. संजय जाधव" 
                  title="पत्रकार, लोकसत्ता" 
                />
                <GuestCard 
                  image={santoshAmbole} 
                  name="श्री. संतोष आंबोळे" 
                  title="पत्रकार" 
                />
                <GuestCard 
                  image={tejasTawalkar} 
                  name="श्री. तेजस टवलारकर" 
                  title="पत्रकार, महाराष्ट्र टाइम्स" 
                />
                <GuestCard 
                  image={anuradhaMascarenhas} 
                  name="सौ. अनुराधा मस्करेन्हास" 
                  title="वरिष्ठ पत्रकार, इंडियन एक्सप्रेस" 
                />
                <GuestCard 
                  image={sandeepPingale} 
                  name="श्री. संदीप पिंगळे" 
                  title="पत्रकार, लोकमत" 
                />
                <GuestCard 
                  image={chaitaliDeshmukh} 
                  name="सौ. चैताली देशमुख" 
                  title="पत्रकार, पुणे मिरर" 
                />
                <GuestCard 
                  image={gyaneshwarBhoi} 
                  name="श्री. ज्ञानेश्वर भोई" 
                  title="पत्रकार, सह्याद्री" 
                />
                <GuestCard 
                  image={rajaramPawar} 
                  name="श्री. राजाराम पवार" 
                  title="पत्रकार, सामना" 
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-hero-navy px-6 py-4 mx-0 mt-[30px] mb-0">
              <p className="text-white text-center text-sm md:text-base">
                स्वागताध्यक्ष : श्री उमेश चव्हाण ( संस्थापक, पुणे आरोग्य महोत्सव समिती )
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PanelDiscussion2Modal;
