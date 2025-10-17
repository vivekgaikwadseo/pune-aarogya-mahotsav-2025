import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { X, Calendar, Clock, MapPin, Share2, CalendarPlus } from "lucide-react";
import eventInauguration from "@/assets/event-inauguration.jpg";
import guestDevendra from "@/assets/guest-devendra-fadnavis.png";
import guestMurlidhar from "@/assets/guest-murlidhar-mohol.png";
import guestRamesh from "@/assets/guest-ramesh-naik.png";
import guestSanjay from "@/assets/guest-sanjay-oak.png";
import guestPrasanna from "@/assets/guest-prasanna-patil.png";
import guestMohan from "@/assets/guest-mohan-agashe.png";
import guestMeghraj from "@/assets/guest-meghraj-bhosale.png";
import guestSiddharth from "@/assets/guest-siddharth-shirole.png";
import guestSunil from "@/assets/guest-sunil-kulkarni.png";

interface GuestCardProps {
  image: string;
  name: string;
  title: string;
}

const GuestCard = ({ image, name, title }: GuestCardProps) => (
  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
    <img 
      src={image} 
      alt={name}
      className="w-12 h-12 rounded-full object-cover border-2 border-bright-pink flex-shrink-0"
    />
    <div className="min-w-0">
      <h4 className="font-bold text-hero-navy text-sm leading-tight">{name}</h4>
      <p className="text-xs text-hero-grey mt-1 leading-tight">{title}</p>
    </div>
  </div>
);

interface EventDetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EventDetailsModal = ({ open, onOpenChange }: EventDetailsModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-7xl w-[85vw] max-h-[90vh] p-0 overflow-hidden">
        {/* Dark Navy Header */}
        <div className="bg-hero-navy px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center flex-1">
            भव्य उद्घाटन सोहळा
          </h2>
          <button
            onClick={() => onOpenChange(false)}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Three Column Layout */}
        <div className="grid md:grid-cols-[35%_30%_35%] gap-0 bg-white max-h-[calc(90vh-4rem)] overflow-hidden">
          
          {/* Left Column (35%) - Fixed Image */}
          <div className="relative h-full min-h-[400px] md:min-h-full">
            <img 
              src={eventInauguration} 
              alt="उद्घाटन सोहळा"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Center Column (30%) - Main Person */}
          <div className="p-6 flex flex-col items-center justify-start overflow-y-auto">
            <h3 className="text-lg font-bold text-bright-pink mb-6">उद्घाटक</h3>
            <img 
              src={guestDevendra}
              alt="देवेंद्र फडणवीस"
              className="w-32 h-32 rounded-full object-cover border-4 border-bright-pink mb-4"
            />
            <h4 className="font-bold text-hero-navy text-center text-base mb-2">
              मा. ना. श्री. देवेंद्रजी फडणवीस
            </h4>
            <p className="text-sm text-hero-grey text-center">
              मुख्यमंत्री, महाराष्ट्र राज्य
            </p>
          </div>

          {/* Right Column (35%) - Details & Actions */}
          <div className="p-6 space-y-6 overflow-y-auto border-l border-gray-200">
            
            {/* Event Details */}
            <div>
              <h3 className="text-lg font-bold text-bright-pink mb-4">कार्यक्रमाचा तपशील</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-hero-grey">
                  <Calendar className="w-5 h-5 text-bright-pink flex-shrink-0" />
                  <span className="text-sm">रविवार, १९ ऑक्टोबर २०२५</span>
                </div>
                <div className="flex items-center gap-3 text-hero-grey">
                  <Clock className="w-5 h-5 text-bright-pink flex-shrink-0" />
                  <span className="text-sm">सकाळी १०:०० वा</span>
                </div>
                <div className="flex items-center gap-3 text-hero-grey">
                  <MapPin className="w-5 h-5 text-bright-pink flex-shrink-0" />
                  <span className="text-sm">बालगंधर्व रंगमंदिर, पुणे</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div>
              <h3 className="text-lg font-bold text-bright-pink mb-4">क्रिया</h3>
              <div className="space-y-2">
                <button className="flex items-center gap-3 text-hero-navy hover:text-bright-pink transition-colors w-full text-left">
                  <Share2 className="w-5 h-5" />
                  <span className="text-sm font-medium">Share Event</span>
                </button>
                <button className="flex items-center gap-3 text-hero-navy hover:text-bright-pink transition-colors w-full text-left">
                  <CalendarPlus className="w-5 h-5" />
                  <span className="text-sm font-medium">Add to Calendar</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Guest List */}
        <div className="border-t border-gray-200 bg-white p-6 overflow-y-auto max-h-[300px]">
          
          {/* Chief Presence */}
          <div className="mb-6">
            <h3 className="text-base font-bold text-bright-pink mb-3 uppercase tracking-wide">
              प्रमुख उपस्थिती
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <GuestCard 
                image={guestMurlidhar}
                name="मा. ना. श्री. मुरलीधर मोहोळ"
                title="केंद्रीय राज्य मंत्री, खासदार"
              />
              <GuestCard 
                image={guestRamesh}
                name="मा. श्री. रमेश नाईक"
                title="मुख्यमंत्री सहा. निधी कक्ष प्रमुख"
              />
            </div>
          </div>

          {/* President of Conclave */}
          <div className="mb-6">
            <h3 className="text-base font-bold text-bright-pink mb-3 uppercase tracking-wide">
              संमेलनाध्यक्ष
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <GuestCard 
                image={guestSanjay}
                name="मा. डॉ. संजय ओक"
                title="१ले आरोग्य साहित्य संमेलन, पुणे"
              />
            </div>
          </div>

          {/* Honorable Presence */}
          <div>
            <h3 className="text-base font-bold text-bright-pink mb-3 uppercase tracking-wide">
              सन्माननीय उपस्थिती
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <GuestCard 
                image={guestMohan}
                name="डॉ. मोहन आगाशे"
                title="जेष्ठ अभिनेते"
              />
              <GuestCard 
                image={guestPrasanna}
                name="मा. प्रसन्न पाटील"
                title="विश्वस्त, डी. वाय. पाटील हॉस्पिटल, पिंपरी"
              />
              <GuestCard 
                image={guestMeghraj}
                name="श्री. मेघराजराजे भोसले"
                title="अध्यक्ष, अ. भा. चित्रपट महामंडळ"
              />
              <GuestCard 
                image={guestSiddharth}
                name="श्री. सिद्धार्थ शिरोळे"
                title="आमदार"
              />
              <GuestCard 
                image={guestSunil}
                name="श्री. सुनील कुलकर्णी"
                title="अध्यक्ष, ग्रँड मेडिकल फाऊंडेशन"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventDetailsModal;
