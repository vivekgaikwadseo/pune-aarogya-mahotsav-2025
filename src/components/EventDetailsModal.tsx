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
      className="w-12 h-12 rounded-full object-cover border-[3px] border-white flex-shrink-0"
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
        <div className="grid md:grid-cols-[35%_30%_35%] gap-6 bg-gray-50 p-6">
          
          {/* Left Column (35%) - Image Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-[500px]">
            <img 
              src={eventInauguration} 
              alt="उद्घाटन सोहळा"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Center Column (30%) - Main Person Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-[500px]">
            <h3 className="text-lg font-bold text-bright-pink px-4 pt-4 pb-2">
              उद्घाटक
            </h3>
            <div className="flex-shrink-0">
              <img 
                src={guestDevendra}
                alt="देवेंद्र फडणवीस"
                className="w-full h-[280px] object-cover"
              />
            </div>
            <div className="p-4 flex flex-col items-center justify-center flex-1 bg-white">
              <h4 className="font-bold text-hero-navy text-center text-base mb-2">
                मा. ना. श्री. देवेंद्रजी फडणवीस
              </h4>
              <p className="text-sm text-hero-grey text-center">
                मुख्यमंत्री, महाराष्ट्र राज्य
              </p>
            </div>
          </div>

          {/* Right Column (35%) - Details Card */}
          <div className="bg-white rounded-lg shadow-md p-6 space-y-6 h-[500px] flex flex-col">
            
            <h3 className="text-lg font-bold text-bright-pink">
              कार्यक्रमाचा तपशील
            </h3>

            {/* Event Details */}
            <div className="space-y-1 flex-1">
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-start gap-4">
                  <Calendar className="w-8 h-8 text-bright-pink flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs font-bold text-hero-grey uppercase mb-1">तारीख</p>
                    <p className="text-sm text-hero-navy">रविवार, १९ ऑक्टोबर २०२५</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex items-start gap-4">
                  <Clock className="w-8 h-8 text-bright-pink flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs font-bold text-hero-grey uppercase mb-1">वेळ</p>
                    <p className="text-sm text-hero-navy">सकाळी १०:०० वा</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-bright-pink flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs font-bold text-hero-grey uppercase mb-1">स्थळ</p>
                    <p className="text-sm text-hero-navy">बालगंधर्व रंगमंदिर, पुणे</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Links */}
            <div className="border-t border-gray-200 pt-4 space-y-3">
              <button className="flex items-center gap-3 text-bright-pink hover:text-hero-navy transition-colors w-full">
                <Share2 className="w-5 h-5" />
                <span className="text-sm font-semibold">Share Event</span>
              </button>
              <button className="flex items-center gap-3 text-bright-pink hover:text-hero-navy transition-colors w-full">
                <CalendarPlus className="w-5 h-5" />
                <span className="text-sm font-semibold">Add to Calendar</span>
              </button>
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
