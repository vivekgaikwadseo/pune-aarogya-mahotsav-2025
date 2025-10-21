import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Calendar, Clock, MapPin, CalendarPlus, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import eventConcludingCeremony from "@/assets/event-concluding-ceremony.jpg";
import sanjayOak from "@/assets/concluding-sanjay-oak.png";
import jitendraDudi from "@/assets/concluding-jitendra-dudi.png";
import meghaKulkarni from "@/assets/concluding-megha-kulkarni.png";
import navkishorRam from "@/assets/concluding-navkishor-ram.png";
import chandrasekharDevkar from "@/assets/concluding-chandrasekhar-devkar.png";
import sunilKamble from "@/assets/concluding-sunil-kamble.png";
import lalPathan from "@/assets/concluding-lal-pathan.png";
import iqbalSheikh from "@/assets/concluding-iqbal-sheikh.png";
import shantaramSaste from "@/assets/concluding-shantaram-saste.png";
import anitaPatil from "@/assets/concluding-anita-patil.png";
import vijayBatatkar from "@/assets/concluding-vijay-batatkar.png";
import sagarShelarake from "@/assets/concluding-sagar-shelarake.png";

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

interface ConcludingCeremonyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ConcludingCeremonyModal = ({ open, onOpenChange }: ConcludingCeremonyModalProps) => {
  const handleAddToCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:20251019T200000
DTEND:20251019T210000
SUMMARY:संमेलन समारोप सभा
LOCATION:बालगंधर्व रंगमंदिर, पुणे
DESCRIPTION:१ले आरोग्य साहित्य संमेलन - समारोप सभा
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'concluding-ceremony.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleShare = (platform: string) => {
    const eventUrl = window.location.href;
    const eventText = 'संमेलन समारोप सभा - १ले आरोग्य साहित्य संमेलन';
    
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
            संमेलन समारोप सभा
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
                src={eventConcludingCeremony} 
                alt="संमेलन समारोप सभा" 
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
                  <span className="text-lg">रात्री ८:०० वा</span>
                </div>
                <div className="flex items-center gap-3 text-hero-navy">
                  <MapPin className="w-6 h-6 text-bright-pink" />
                  <span className="text-lg">बालगंधर्व रंगमंदिर, पुणे</span>
                </div>
              </div>

              {/* Description */}
              <div className="border-t border-gray-200 pt-4">
                <p className="text-base text-hero-grey leading-relaxed">
                  या समारोप सभेमध्ये आरोग्य साहित्य संमेलनाचा आढावा घेण्यात येईल आणि पुढील वाटचालीवर चर्चा होईल.
                </p>
              </div>

              {/* Key Personalities Heading */}
              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-xl font-bold text-bright-pink mb-3">
                  या कार्यक्रमाचे प्रमुख पाहुणे आणि आयोजक
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
            
            {/* संमेलनाध्यक्ष */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-bright-pink mb-4 uppercase tracking-wide">
                संमेलनाध्यक्ष
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <GuestCard 
                  image={sanjayOak} 
                  name="मा. डॉ. संजय ओक" 
                  title="१ले आरोग्य साहित्य संमेलन, पुणे" 
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
                  image={jitendraDudi} 
                  name="मा. जितेंद्र डुडी" 
                  title="जिल्हाधिकारी, पुणे" 
                />
                <GuestCard 
                  image={meghaKulkarni} 
                  name="मा. प्रा. मेघाताई कुलकर्णी" 
                  title="उपाध्यक्ष, भाजपा" 
                />
                <GuestCard 
                  image={navkishorRam} 
                  name="मा. नवकिशोर राम" 
                  title="आयुक्त, पुणे मनपा" 
                />
              </div>
            </div>

            {/* विशेष उपस्थिती */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-bright-pink mb-4 uppercase tracking-wide">
                विशेष उपस्थिती
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <GuestCard 
                  image={chandrasekharDevkar} 
                  name="मा. चंद्रशेखर देवकर" 
                  title="माजी आय.पी.एस. अधिकारी" 
                />
                <GuestCard 
                  image={sunilKamble} 
                  name="मा. सुनिल कांबळे" 
                  title="आमदार, पुणे कॅन्टोन्मेंट" 
                />
              </div>
            </div>

            {/* संयोजक उपस्थिती */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-bright-pink mb-4 uppercase tracking-wide">
                संयोजक उपस्थिती
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <GuestCard 
                  image={lalPathan} 
                  name="श्री. लाल मोहम्मद पठाण" 
                  title="कार्याध्यक्ष, ग्रैंड पूणे मेडिकल फाउंडेशन" 
                />
                <GuestCard 
                  image={iqbalSheikh} 
                  name="श्री. इकबाल शेख" 
                  title="उपाध्यक्ष, ग्रैंड पुणे मेडिकल फाउंडेशन" 
                />
                <GuestCard 
                  image={shantaramSaste} 
                  name="श्री. शांताराम सस्ते" 
                  title="कार्याध्यक्ष, कार्यकवी" 
                />
                <GuestCard 
                  image={anitaPatil} 
                  name="सौ. अनिता पाटील" 
                  title="प्रचार्य डी. वाय. पाटील नर्सिग कॉलेज" 
                />
                <GuestCard 
                  image={vijayBatatkar} 
                  name="डॉ. विजय बटाटकर" 
                  title="अध्यक्ष, भारत विकास परिषद, महाराष्ट्र" 
                />
                <GuestCard 
                  image={sagarShelarake} 
                  name="डॉ. सागर शेलारोके" 
                  title="संचालक, मेडिकल रिसर्च" 
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

export default ConcludingCeremonyModal;
