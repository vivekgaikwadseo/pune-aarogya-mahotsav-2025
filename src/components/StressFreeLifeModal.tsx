import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Calendar, Clock, MapPin, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import eventImage from "@/assets/stress-free-meditation.png";
import presenterSanjeevPatil from "@/assets/stress-sanjeev-patil.png";
import specialAmolDevlekar from "@/assets/stress-amol-devlekar.png";
import specialRituparnaShinde from "@/assets/stress-rituparna-shinde.png";
import specialRajendraKadam from "@/assets/stress-rajendra-kadam.png";

interface GuestCardProps {
  image: string;
  name: string;
  title: string;
  topic?: string;
}

const GuestCard = ({ image, name, title, topic }: GuestCardProps) => (
  <div className="flex items-start gap-3 p-3 bg-white/50 rounded-lg">
    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-md">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="font-semibold text-sm text-hero-navy">{name}</h4>
      <p className="text-xs text-gray-600">{title}</p>
      {topic && <p className="text-xs text-bright-pink mt-1">{topic}</p>}
    </div>
  </div>
);

interface StressFreeLifeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const StressFreeLifeModal = ({ open, onOpenChange }: StressFreeLifeModalProps) => {
  const handleAddToCalendar = () => {
    const event = {
      title: "विशेष कार्यक्रम : तणाव मुक्त जीवन",
      start: "20251019T193000",
      end: "20251019T213000",
      description: "जीवनातील तणाव कमी करून आनंदी आणि निरोगी कसे रहावे, यावर तज्ञांचे मार्गदर्शन.",
      location: "पुणे आरोग्य महोत्सव",
    };

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${event.start}
DTEND:${event.end}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "stress-free-life.ics";
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleShare = (platform: string) => {
    const text = "विशेष कार्यक्रम : तणाव मुक्त जीवन - पुणे आरोग्य महोत्सव";
    const url = window.location.href;
    
    const shareUrls: { [key: string]: string } = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], "_blank", "width=600,height=400");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden p-0 bg-gradient-to-br from-blue-50 to-pink-50">
        {/* Header */}
        <div className="bg-hero-navy text-white p-6 relative">
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 text-white hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          <h2 className="text-2xl font-bold pr-12" style={{ fontFamily: "'Anek Devanagari', sans-serif" }}>
            विशेष कार्यक्रम : तणाव मुक्त जीवन
          </h2>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-180px)]">
          {/* Main content area - 40/60 split */}
          <div className="grid md:grid-cols-5 gap-6 p-6">
            {/* Left column - Image (40%) */}
            <div className="md:col-span-2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={eventImage}
                  alt="विशेष कार्यक्रम : तणाव मुक्त जीवन"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right column - Details (60%) */}
            <div className="md:col-span-3 space-y-4">
              {/* Event Details */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-hero-navy">
                  <Calendar className="h-5 w-5 text-bright-pink" />
                  <span className="font-semibold">रविवार, १९ ऑक्टोबर २०२५</span>
                </div>
                <div className="flex items-center gap-2 text-hero-navy">
                  <Clock className="h-5 w-5 text-bright-pink" />
                  <span className="font-semibold">सायं. ७:३० वा.</span>
                </div>
                <div className="flex items-center gap-2 text-hero-navy">
                  <MapPin className="h-5 w-5 text-bright-pink" />
                  <span className="font-semibold">स्थळ: बालगंधर्व रंगमंदिर, पुणे</span>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white/70 rounded-lg p-4">
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "'Anek Devanagari', sans-serif" }}>
                  जीवनातील तणाव कमी करून आनंदी आणि निरोगी कसे रहावे, यावर तज्ञांचे मार्गदर्शन.
                </p>
              </div>

              {/* Key Personalities Heading */}
              <h3 className="text-lg font-bold text-bright-pink" style={{ fontFamily: "'Anek Devanagari', sans-serif" }}>
                या कार्यक्रमाचे सादरकर्ते आणि विशेष उपस्थिती.
              </h3>

              {/* Share and Calendar Actions */}
              <div className="flex flex-col gap-3 pt-2">
                <div className="flex items-center gap-2">
                  <Share2 className="h-4 w-4 text-bright-pink" />
                  <span className="text-sm font-semibold text-hero-navy">Share:</span>
                  <button
                    onClick={() => handleShare("facebook")}
                    className="text-bright-pink hover:text-hero-deep-pink transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleShare("twitter")}
                    className="text-bright-pink hover:text-hero-deep-pink transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleShare("whatsapp")}
                    className="text-bright-pink hover:text-hero-deep-pink transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </button>
                </div>
                <button
                  onClick={handleAddToCalendar}
                  className="text-sm text-bright-pink hover:text-hero-deep-pink transition-colors font-semibold text-left"
                >
                  📅 Add to Calendar
                </button>
              </div>
            </div>
          </div>

          {/* Scrollable Guest List */}
          <div className="px-6 pb-6 space-y-6">
            {/* सादरकर्ते */}
            <div>
              <h3 className="text-lg font-bold text-bright-pink mb-4" style={{ fontFamily: "'Anek Devanagari', sans-serif" }}>
                सादरकर्ते
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <GuestCard
                  image={presenterSanjeevPatil}
                  name="सिनेअभिनेते डॉ. संजीव कुमार पाटील"
                  title="सादरकर्ते"
                />
              </div>
            </div>

            {/* विशेष उपस्थिती */}
            <div>
              <h3 className="text-lg font-bold text-bright-pink mb-4" style={{ fontFamily: "'Anek Devanagari', sans-serif" }}>
                विशेष उपस्थिती
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <GuestCard
                  image={specialAmolDevlekar}
                  name="डॉ. अमोल देवळेकर"
                  title="होप फाऊंडेशन"
                />
                <GuestCard
                  image={specialRituparnaShinde}
                  name="डॉ. ऋतूपर्ण शिंदे"
                  title="हृदयरोग तज्ञ"
                />
                <GuestCard
                  image={specialRajendraKadam}
                  name="मा. राजेंद्र कदम"
                  title="रुग्णसेवक, मुख्यमंत्री सहायता निधी"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-hero-navy text-white p-4 text-center">
          <p className="text-sm" style={{ fontFamily: "'Anek Devanagari', sans-serif" }}>
            स्वागताध्यक्ष : श्री उमेश चव्हाण ( संस्थापक, पुणे आरोग्य महोत्सव समिती )
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StressFreeLifeModal;
