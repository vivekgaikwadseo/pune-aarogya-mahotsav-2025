import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Calendar, Clock, MapPin, CalendarPlus, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import eventAwardCeremony from "@/assets/event-award-ceremony-main.jpg";
import awardRecipients from "@/assets/award-recipients-kolhe.png";
import awardChandrakantPatil from "@/assets/award-chandrakant-patil.png";
import awardRamdasAthawale from "@/assets/award-ramdas-athawale.png";
import awardNitinOak from "@/assets/award-nitin-oak.png";
import awardPrasadMugalikar from "@/assets/award-prasad-mugalikar.png";
import awardSachinKulkarni from "@/assets/award-sachin-kulkarni.png";
import awardAvinashBhondwe from "@/assets/award-avinash-bhondwe.png";
import awardBharatDesdala from "@/assets/award-bharat-desdala.png";
import awardJanmohammadPathan from "@/assets/award-janmohammad-pathan.png";
import awardPravinTarde from "@/assets/award-pravin-tarde.png";
import awardJabbarPatel from "@/assets/award-jabbar-patel.png";
import awardPrashantDamle from "@/assets/award-prashant-damle.png";
import awardRajThackeray from "@/assets/award-raj-thackeray.png";

interface GuestCardProps {
  image: string;
  name: string;
  title: string;
}

const GuestCard = ({
  image,
  name,
  title
}: GuestCardProps) => <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-lg">
    <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover border-[3px] border-white flex-shrink-0" />
    <div className="min-w-0">
      <h4 className="font-bold text-hero-navy text-lg leading-tight">{name}</h4>
      <p className="text-base text-hero-grey mt-1 leading-tight">{title}</p>
    </div>
  </div>;

interface AwardsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AwardsModal = ({
  open,
  onOpenChange
}: AwardsModalProps) => {
  const handleAddToCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:20251019T123000
DTEND:20251019T143000
SUMMARY:महाराष्ट्र आरोग्यभूषण पुरस्कार २०२५
LOCATION:बालगंधर्व रंगमंदिर, पुणे
DESCRIPTION:१ले आरोग्य साहित्य संमेलन
END:VEVENT
END:VCALENDAR`;
    const blob = new Blob([icsContent], {
      type: 'text/calendar'
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'maharashtra-aarogya-bhushan-award.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleShare = (platform: string) => {
    const eventUrl = window.location.href;
    const eventText = 'महाराष्ट्र आरोग्यभूषण पुरस्कार २०२५ - १ले आरोग्य साहित्य संमेलन';
    const shareUrls: {
      [key: string]: string;
    } = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(eventUrl)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(eventText)}&url=${encodeURIComponent(eventUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(eventUrl)}`,
      instagram: `https://www.instagram.com/`
    };
    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  return <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-7xl w-[85vw] max-h-[90vh] p-0 overflow-hidden flex flex-col">
        {/* Dark Navy Header */}
        <div className="bg-hero-navy px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center flex-1">
            महाराष्ट्र आरोग्यभूषण पुरस्कार २०२५
          </h2>
          <button onClick={() => onOpenChange(false)} className="text-white hover:text-gray-300 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="overflow-y-auto flex-1">
          {/* Three Column Layout */}
          <div className="grid md:grid-cols-[35%_30%_35%] gap-6 bg-gray-50 p-6">
            
            {/* Left Column (35%) - Image Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-[420px]">
              <img src={eventAwardCeremony} alt="पुरस्कार सोहळा" className="w-full h-full object-cover" />
            </div>

            {/* Center Column (30%) - Award Recipients Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-[420px]">
            <div className="bg-bright-pink px-4 py-2">
              <h3 className="text-sm font-bold text-white text-center">पुरस्काराचे मानकरी</h3>
            </div>
              <div className="flex-shrink-0">
                <img src={awardRecipients} alt="पद्मश्री डॉ. स्मिता आणि डॉ. रविंद्र कोल्हे" className="w-full h-[300px] object-contain" />
              </div>
              <div className="p-2 flex flex-col items-center bg-white">
                <h4 className="font-bold text-hero-navy text-center text-base mb-2">
                  पद्मश्री डॉ. स्मिता आणि डॉ. रविंद्र कोल्हे
                </h4>
                <p className="text-sm text-hero-grey text-center">
                  सुप्रसिद्ध समाजसेवक दांपत्य
                </p>
              </div>
            </div>

            {/* Right Column (35%) - Details Card */}
            <div className="bg-white rounded-lg shadow-md p-6 space-y-4 h-[420px] flex flex-col mr-6">
              
            <div className="bg-bright-pink px-4 py-2 -mx-6 -mt-6 mb-2 rounded-t-lg">
              <h3 className="text-sm font-bold text-white text-center">कार्यक्रमाचा तपशील</h3>
            </div>

              {/* Event Details */}
              <div className="space-y-3">
                <div className="bg-white rounded-lg shadow-sm p-3 border border-gray-100">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-6 h-6 text-bright-pink flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xs font-bold text-hero-grey uppercase mb-1">तारीख</p>
                      <p className="text-sm text-hero-navy">रविवार, १९ ऑक्टोबर २०२५</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-3 border border-gray-100">
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-bright-pink flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xs font-bold text-hero-grey uppercase mb-1">वेळ</p>
                      <p className="text-sm text-hero-navy">दुपारी १२:३० वा</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-3 border border-gray-100">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-bright-pink flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xs font-bold text-hero-grey uppercase mb-1">स्थळ</p>
                      <p className="text-sm text-hero-navy">बालगंधर्व रंगमंदिर, पुणे</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="border-t border-gray-200 pt-4 space-y-3 mt-auto">
                {/* Social Media Share */}
                <div>
                  <p className="text-xs font-bold text-hero-grey uppercase mb-2">शेअर करा</p>
                  <div className="flex gap-3">
                    <button onClick={() => handleShare('facebook')} className="p-2 text-gray-600 hover:text-bright-pink transition-colors" aria-label="Share on Facebook">
                      <Facebook className="w-5 h-5" />
                    </button>
                    <button onClick={() => handleShare('instagram')} className="p-2 text-gray-600 hover:text-bright-pink transition-colors" aria-label="Share on Instagram">
                      <Instagram className="w-5 h-5" />
                    </button>
                    <button onClick={() => handleShare('twitter')} className="p-2 text-gray-600 hover:text-bright-pink transition-colors" aria-label="Share on Twitter">
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button onClick={() => handleShare('linkedin')} className="p-2 text-gray-600 hover:text-bright-pink transition-colors" aria-label="Share on LinkedIn">
                      <Linkedin className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                {/* Add to Calendar */}
                <button onClick={handleAddToCalendar} className="flex items-center gap-3 text-bright-pink hover:text-hero-navy transition-colors w-full">
                  <CalendarPlus className="w-5 h-5" />
                  <span className="text-sm font-semibold">Add to Calendar</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section - Guest List */}
          <div className="border-t border-gray-200 bg-white p-6 pb-8">
            
            {/* Presented By */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-bright-pink mb-4 uppercase tracking-wide">
                पुरस्कार हस्ते
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <GuestCard image={awardChandrakantPatil} name="मा. ना. श्री. चंद्रकांतदादा पाटील" title="मंत्री, उच्च व तंत्र शिक्षण, महाराष्ट्र राज्य" />
                <GuestCard image={awardRamdasAthawale} name="मा. डॉ. रामदास आठवले" title="केंद्रीय राज्यमंत्री, सामाजिक न्याय व अधिकारिता मंत्रालय" />
              </div>
            </div>

            {/* Chief Presence */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-bright-pink mb-4 uppercase tracking-wide">
                प्रमुख उपस्थिती
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <GuestCard image={awardNitinOak} name="डॉ. नितीन ओक" title="प्रसिद्ध सिने अभिनेते" />
                <GuestCard image={awardPrasadMugalikar} name="डॉ. प्रसाद मुगलीकर" title="वैद्यकीय अधिकारी, रुबी हॉल" />
                <GuestCard image={awardSachinKulkarni} name="श्री. सचिन कुलकर्णी" title="उपाध्यक्ष, सह्याद्री हॉस्पिटल" />
                <GuestCard image={awardAvinashBhondwe} name="डॉ. अविनाश भोंडवे" title="मा. अध्यक्ष, आय.एम.ए.महाराष्ट्र" />
                <GuestCard image={awardBharatDesdala} name="मा. भरत देसडला" title="प्रसिद्ध बांधकाम व्यावसायिक" />
                <GuestCard image={awardJanmohammadPathan} name="श्री. जनमोहम्मद पठाण" title="मा. सहा. पोलीस आयुक्त" />
              </div>
            </div>

            {/* Special Presence */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-bright-pink mb-4 uppercase tracking-wide">
                विशेष उपस्थिती
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <GuestCard image={awardPravinTarde} name="श्री. प्रविण तरडे" title="प्रसिद्ध सिने दिग्दर्शक" />
                <GuestCard image={awardJabbarPatel} name="मा. डॉ. जब्बार पटेल" title="जेष्ठ सिने दिग्दर्शक" />
                <GuestCard image={awardPrashantDamle} name="मा. प्रशांत दामले" title="अभिनेते" />
                <GuestCard image={awardRajThackeray} name="मा. राज ठाकरे" title="अध्यक्ष, महाराष्ट्र नवनिर्माण सेना" />
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
    </Dialog>;
};

export default AwardsModal;
