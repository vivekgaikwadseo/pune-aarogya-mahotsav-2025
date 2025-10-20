import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Calendar, Clock, MapPin, CalendarPlus, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import eventFelicitation from "@/assets/event-felicitation.jpg";
import felicitationMadhuriMisal from "@/assets/felicitation-madhuri-misal.png";
import felicitationBhagwanPawar from "@/assets/felicitation-bhagwan-pawar.png";
import felicitationHemantRasane from "@/assets/felicitation-hemant-rasane.png";
import felicitationDheerajGhate from "@/assets/felicitation-dheeraj-ghate.png";
import felicitationNinaBorade from "@/assets/felicitation-nina-borade.png";
import felicitationHanmantChavan from "@/assets/felicitation-hanmant-chavan.png";
import felicitationSanjeevVavare from "@/assets/felicitation-sanjeev-vavare.png";
import felicitationSuryakantDevkar from "@/assets/felicitation-suryakant-devkar.png";
import felicitationSurajChavan from "@/assets/felicitation-suraj-chavan.png";

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

interface SpecialFelicitationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SpecialFelicitationModal = ({ open, onOpenChange }: SpecialFelicitationModalProps) => {
  const handleAddToCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:20251019T160000
DTEND:20251019T180000
SUMMARY:विशेष सन्मान सोहळा
LOCATION:बालगंधर्व रंगमंदिर, पुणे
DESCRIPTION:१ले आरोग्य साहित्य संमेलन
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'special-felicitation.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleShare = (platform: string) => {
    const eventUrl = window.location.href;
    const eventText = 'विशेष सन्मान सोहळा - १ले आरोग्य साहित्य संमेलन';
    
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
            विशेष सन्मान सोहळा
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
                src={eventFelicitation} 
                alt="विशेष सन्मान सोहळा" 
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
                  <span className="text-lg">दुपारी ४:०० वा</span>
                </div>
                <div className="flex items-center gap-3 text-hero-navy">
                  <MapPin className="w-6 h-6 text-bright-pink" />
                  <span className="text-lg">बालगंधर्व रंगमंदिर, पुणे</span>
                </div>
              </div>

              {/* Description */}
              <div className="border-t border-gray-200 pt-4">
                <p className="text-base text-hero-grey leading-relaxed">
                  या सत्रात आरोग्य आणि समाजसेवा क्षेत्रात महत्त्वपूर्ण योगदान देणाऱ्या व्यक्ती आणि संस्थांचा विशेष सन्मान करण्यात येईल.
                </p>
              </div>

              {/* Key Personalities Heading */}
              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-xl font-bold text-bright-pink mb-3">
                  या कार्यक्रमाचे प्रमुख पाहुणे आणि सत्कारमूर्ती
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
            
            {/* पुरस्कार हस्ते */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-bright-pink mb-4 uppercase tracking-wide">
                पुरस्कार हस्ते
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <GuestCard 
                  image={felicitationMadhuriMisal} 
                  name="मा. ना. माधुरीताई मिसाळ" 
                  title="राज्यमंत्री, महाराष्ट्र राज्य" 
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
                  image={felicitationBhagwanPawar} 
                  name="डॉ. भगवान पवार" 
                  title="उपसंचालक, आरोग्य मंत्रालय महाराष्ट्र शासन" 
                />
              </div>
            </div>

            {/* प्रमुख उपस्थिती */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-bright-pink mb-4 uppercase tracking-wide">
                प्रमुख उपस्थिती
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <GuestCard 
                  image={felicitationHemantRasane} 
                  name="मा. श्री. हेमंत रासने" 
                  title="आमदार, कसबा, पुणे" 
                />
                <GuestCard 
                  image={felicitationDheerajGhate} 
                  name="मा. श्री. धीरज घाटे" 
                  title="शहराध्यक्ष, भाजपा, पुणे" 
                />
              </div>
            </div>

            {/* सत्कारमूर्ती */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-bright-pink mb-4 uppercase tracking-wide">
                सत्कारमूर्ती
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <GuestCard 
                  image={felicitationNinaBorade} 
                  name="डॉ. नीना बोराडे" 
                  title="मुख्य आरोग्य अधिकारी पुणे मनपा" 
                />
                <GuestCard 
                  image={felicitationHanmantChavan} 
                  name="डॉ. हणमंत चव्हाण" 
                  title="अधिष्ठाता, पद्मश्री डी.वाय.पाटील हॉस्पिटल, पिं.चिं." 
                />
                <GuestCard 
                  image={felicitationSanjeevVavare} 
                  name="डॉ. संजीव वावरे" 
                  title="सहा. आरोग्य अधिकारी पुणे मनपा" 
                />
                <GuestCard 
                  image={felicitationSuryakantDevkar} 
                  name="डॉ. सुर्यकांत देवकर" 
                  title="सहा. आरोग्य अधिकारी पुणे मनपा" 
                />
                <GuestCard 
                  image={felicitationSurajChavan} 
                  name="डॉ. सुरज चव्हाण" 
                  title="प्रसिद्ध हृदयरोग तज्ञ" 
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

export default SpecialFelicitationModal;
