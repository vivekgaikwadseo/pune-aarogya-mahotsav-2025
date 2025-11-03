import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Calendar, Clock, MapPin, CalendarPlus, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import eventPanelDiscussion from "@/assets/event-panel-discussion-1.jpg";
import speakerAmitesh from "@/assets/speaker-amitesh-kumar.png";
import speakerPravinPatil from "@/assets/speaker-pravin-patil.png";
import speakerPravinTarde from "@/assets/speaker-pravin-tarde.jpg";
import speakerMilindBhoi from "@/assets/speaker-milind-bhoi.jpg";

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

interface PanelDiscussion1ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PanelDiscussion1Modal = ({
  open,
  onOpenChange
}: PanelDiscussion1ModalProps) => {
  const handleAddToCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:20251019T113000
DTEND:20251019T133000
SUMMARY:परिसंवाद १ - अंमलीपदार्थ मुक्त महाराष्ट्र करुया !
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
    link.download = 'panel-discussion-1.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleShare = (platform: string) => {
    const eventUrl = window.location.href;
    const eventText = 'परिसंवाद १ - अंमलीपदार्थ मुक्त महाराष्ट्र करुया ! - १ले आरोग्य साहित्य संमेलन';
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
            परिसंवाद १ - अंमलीपदार्थ मुक्त महाराष्ट्र करुया !
          </h2>
          <button onClick={() => onOpenChange(false)} className="text-white hover:text-gray-300 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="overflow-y-auto flex-1">
          {/* Two Column Layout */}
          <div className="grid md:grid-cols-[40%_60%] gap-6 bg-gray-50 p-6">
            
            {/* Left Column (40%) - Event Image */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={eventPanelDiscussion} alt="परिसंवाद" className="w-full h-full object-cover" />
            </div>

            {/* Right Column (60%) - Event Details */}
            <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-hero-navy mb-4">परिसंवाद १ - अंमलीपदार्थ मुक्त महाराष्ट्र करुया !</h3>
                <p className="text-hero-grey leading-relaxed mb-6">
                  अंमलीपदार्थांच्या वाढत्या समस्येवर चर्चा करण्यासाठी आणि महाराष्ट्राला मुक्त करण्याच्या उपायांवर विचार करण्यासाठी या महत्त्वपूर्ण परिसंवादाला उपस्थित राहा.
                </p>
              </div>

              {/* Event Info */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-bright-pink flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs font-semibold text-hero-grey uppercase">तारीख</p>
                    <p className="text-hero-navy font-medium">रविवार, १९ ऑक्टोबर २०२५</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-bright-pink flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs font-semibold text-hero-grey uppercase">वेळ</p>
                    <p className="text-hero-navy font-medium">सकाळी ११:३० वा</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-bright-pink flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs font-semibold text-hero-grey uppercase">स्थळ</p>
                    <p className="text-hero-navy font-medium">बालगंधर्व रंगमंदिर, पुणे</p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200"></div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-hero-grey uppercase mb-3">शेअर करा</p>
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
                
                <button onClick={handleAddToCalendar} className="flex items-center gap-2 text-bright-pink hover:text-hero-navy transition-colors">
                  <CalendarPlus className="w-5 h-5" />
                  <span className="font-semibold">Add to Calendar</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section - Guest List */}
          <div className="border-t border-gray-200 bg-white p-6 pb-8">
            
            {/* Chief Speakers */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-bright-pink mb-4 uppercase tracking-wide">
                प्रमुख वक्ते
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <GuestCard image={speakerAmitesh} name="मा. अमितेश कुमार" title="पोलीस आयुक्त, पुणे शहर" />
                <GuestCard image={speakerPravinPatil} name="मा. प्रविण पाटील" title="पोलीस उपमहानिरीक्षक, अंमलीपदार्थ विरोधी टास्क फोर्स, महाराष्ट्र" />
              </div>
            </div>

            {/* Special Presence */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-bright-pink mb-4 uppercase tracking-wide">
                विशेष उपस्थिती
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <GuestCard image={speakerPravinTarde} name="मा. प्रविण तरडे" title="प्रसिद्ध सिने दिग्दर्शक" />
              </div>
            </div>

            {/* Program Chairman */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-bright-pink mb-4 uppercase tracking-wide">
                कार्यक्रमाचे अध्यक्ष
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <GuestCard image={speakerMilindBhoi} name="मा. डॉ. मिलिंद भोई" title="मानद सदस्य, महाराष्ट्र बाल हक्क संरक्षण समिती" />
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

export default PanelDiscussion1Modal;
