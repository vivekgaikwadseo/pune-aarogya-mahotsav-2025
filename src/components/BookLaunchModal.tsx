import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Calendar, Clock, MapPin, CalendarPlus, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import eventBookLaunch from "@/assets/event-book-launch.jpg";
import sunitaPawar from "@/assets/book-launch-sunita-pawar.png";
import sagarDholePatil from "@/assets/book-launch-sagar-dhole-patil.png";
import tulsibaiDesai from "@/assets/book-launch-tulsibai-desai.png";
import sunilGolewale from "@/assets/book-launch-sunil-golewale.png";
import bhanupratapBarge from "@/assets/book-launch-bhanupratap-barge.png";
import rajeshPande from "@/assets/book-launch-rajesh-pande.png";
import utkarshShinde from "@/assets/book-launch-utkarsh-shinde.png";
import rupaliAvchare from "@/assets/book-launch-rupali-avchare.png";

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

interface BookLaunchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookLaunchModal = ({ open, onOpenChange }: BookLaunchModalProps) => {
  const handleAddToCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:20251019T173000
DTEND:20251019T190000
SUMMARY:पुस्तक प्रकाशन समारंभ
LOCATION:बालगंधर्व रंगमंदिर, पुणे
DESCRIPTION:१ले आरोग्य साहित्य संमेलन - पुस्तक प्रकाशन: श्री आरोग्य समृद्ध करुया...!
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'book-launch.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleShare = (platform: string) => {
    const eventUrl = window.location.href;
    const eventText = 'पुस्तक प्रकाशन समारंभ - १ले आरोग्य साहित्य संमेलन';
    
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
            पुस्तक प्रकाशन समारंभ
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
                src={eventBookLaunch} 
                alt="पुस्तक प्रकाशन समारंभ" 
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
                  <span className="text-lg">दुपारी ५:३० वा</span>
                </div>
                <div className="flex items-center gap-3 text-hero-navy">
                  <MapPin className="w-6 h-6 text-bright-pink" />
                  <span className="text-lg">बालगंधर्व रंगमंदिर, पुणे</span>
                </div>
              </div>

              {/* Book Details */}
              <div className="border-t border-gray-200 pt-4">
                <p className="text-lg font-bold text-hero-navy">
                  पुस्तक: <span className="text-bright-pink">'' श्री आरोग्य समृद्ध करुया...!''</span>
                </p>
                <p className="text-base text-hero-grey mt-2">
                  लेखक: उमेश चव्हाण
                </p>
              </div>

              {/* Description */}
              <div className="border-t border-gray-200 pt-4">
                <p className="text-base text-hero-grey leading-relaxed">
                  या समारंभात उमेश चव्हाण लिखित 'श्री आरोग्य समृद्ध करुया...!' या पुस्तकाचे प्रकाशन मान्यवरांच्या हस्ते होईल.
                </p>
              </div>

              {/* Key Personalities Heading */}
              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-xl font-bold text-bright-pink mb-3">
                  या कार्यक्रमाचे अध्यक्ष आणि प्रमुख उपस्थिती
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
            
            {/* कार्यक्रम अध्यक्ष */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-bright-pink mb-4 uppercase tracking-wide">
                कार्यक्रम अध्यक्ष
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <GuestCard 
                  image={sunitaPawar} 
                  name="मा. सुनीताताई पवार" 
                  title="प्रमुख कार्यवाह महाराष्ट्र साहित्य परिषद" 
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
                  image={sagarDholePatil} 
                  name="मा. सागरदादा ढोले पाटील" 
                  title="अध्यक्ष, ढोले पाटील एज्युकेशन सोसायटी" 
                />
              </div>
            </div>

            {/* प्रकाशक हस्ते */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-bright-pink mb-4 uppercase tracking-wide">
                प्रकाशक हस्ते
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <GuestCard 
                  image={tulsibaiDesai} 
                  name="मा. तुलसीबाई देसाई" 
                  title="अध्यक्ष, अमृता सिनेवूड" 
                />
                <GuestCard 
                  image={sunilGolewale} 
                  name="मा. सुनिल गोळेवाले" 
                  title="सिने अभिनेते" 
                />
              </div>
            </div>

            {/* प्रमुख उपस्थिती */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-bright-pink mb-4 uppercase tracking-wide">
                प्रमुख उपस्थिती
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <GuestCard 
                  image={bhanupratapBarge} 
                  name="मा. भानुप्रताप बर्गे" 
                  title="माजी सहा. पोलीस आयुक्त" 
                />
                <GuestCard 
                  image={rajeshPande} 
                  name="मा. राजेश पांडे" 
                  title="संस्थापक, पुणे पुस्तक महोत्सव" 
                />
                <GuestCard 
                  image={utkarshShinde} 
                  name="डॉ. उत्कर्ष शिंदे" 
                  title="सुप्रसिद्ध गायक" 
                />
                <GuestCard 
                  image={rupaliAvchare} 
                  name="सौ. रूपाली अवचरे" 
                  title="प्रकाशक, धम्मोदीप पब्लिकेशन" 
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

export default BookLaunchModal;
