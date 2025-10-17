import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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

interface GuestProfileProps {
  image: string;
  name: string;
  title: string;
}

const GuestProfile = ({ image, name, title }: GuestProfileProps) => (
  <div className="flex items-center gap-3 mb-4">
    <img 
      src={image} 
      alt={name}
      className="w-16 h-16 rounded-full object-cover border-2 border-bright-pink"
    />
    <div>
      <h4 className="font-bold text-hero-navy text-sm">{name}</h4>
      <p className="text-xs text-hero-grey">{title}</p>
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
      <DialogContent className="max-w-6xl w-[90vw] max-h-[90vh] overflow-y-auto p-0">
        <div className="grid md:grid-cols-5 gap-0">
          {/* Left Column - 40% (2/5) */}
          <div className="md:col-span-2 relative">
            <img 
              src={eventInauguration} 
              alt="उद्घाटन सोहळा"
              className="w-full h-full object-cover min-h-[300px] md:min-h-full"
            />
          </div>

          {/* Right Column - 60% (3/5) */}
          <div className="md:col-span-3 relative p-6 md:p-8 bg-white overflow-hidden">
            {/* Background Abstract Shape */}
            <div 
              className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5"
              style={{ 
                background: 'radial-gradient(circle, #F0F2F5 0%, transparent 70%)',
                transform: 'translate(25%, -25%)'
              }}
            />

            {/* Content */}
            <div className="relative z-10">
              <DialogHeader className="mb-6">
                <DialogTitle className="text-3xl md:text-4xl font-bold leading-tight">
                  <span style={{ color: '#0B083E' }}>भव्य </span>
                  <span style={{ color: '#FF0080' }}>उद्घाटन सोहळा</span>
                </DialogTitle>
              </DialogHeader>

              {/* Date and Time */}
              <div className="mb-6 space-y-2">
                <p className="text-hero-grey font-medium">
                  🗓️ रविवार, १९ ऑक्टोबर २०२५
                </p>
                <p className="text-hero-grey font-medium">
                  🕙 सकाळी १०:०० वा
                </p>
              </div>

              {/* Key Personalities Section */}
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-hero-navy mb-4">
                  या कार्यक्रमाचे प्रमुख पाहुणे
                </h3>

                {/* Inaugurator */}
                <div>
                  <h4 className="text-sm font-bold text-bright-pink mb-3 uppercase tracking-wide">
                    उद्घाटक
                  </h4>
                  <GuestProfile 
                    image={guestDevendra}
                    name="मा. ना. श्री. देवेंद्रजी फडणवीस"
                    title="मुख्यमंत्री, महाराष्ट्र राज्य"
                  />
                </div>

                {/* Chief Presence */}
                <div>
                  <h4 className="text-sm font-bold text-bright-pink mb-3 uppercase tracking-wide">
                    प्रमुख उपस्थिती
                  </h4>
                  <GuestProfile 
                    image={guestMurlidhar}
                    name="मा. ना. श्री. मुरलीधर मोहोळ"
                    title="केंद्रीय राज्य मंत्री, खासदार"
                  />
                  <GuestProfile 
                    image={guestRamesh}
                    name="मा. श्री. रमेश नाईक"
                    title="मुख्यमंत्री सहा. निधी कक्ष प्रमुख"
                  />
                </div>

                {/* President of Conclave */}
                <div>
                  <h4 className="text-sm font-bold text-bright-pink mb-3 uppercase tracking-wide">
                    संमेलनाध्यक्ष
                  </h4>
                  <GuestProfile 
                    image={guestSanjay}
                    name="मा. डॉ. संजय ओक"
                    title="१ले आरोग्य साहित्य संमेलन, पुणे"
                  />
                </div>

                {/* Honorable Presence */}
                <div>
                  <h4 className="text-sm font-bold text-bright-pink mb-3 uppercase tracking-wide">
                    सन्माननीय उपस्थिती
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                    <GuestProfile 
                      image={guestMohan}
                      name="डॉ. मोहन आगाशे"
                      title="जेष्ठ अभिनेते"
                    />
                    <GuestProfile 
                      image={guestPrasanna}
                      name="मा. प्रसन्न पाटील"
                      title="विश्वस्त, डी. वाय. पाटील हॉस्पिटल, पिंपरी"
                    />
                    <GuestProfile 
                      image={guestMeghraj}
                      name="श्री. मेघराजराजे भोसले"
                      title="अध्यक्ष, अ. भा. चित्रपट महामंडळ"
                    />
                    <GuestProfile 
                      image={guestSiddharth}
                      name="श्री. सिद्धार्थ शिरोळे"
                      title="आमदार"
                    />
                    <GuestProfile 
                      image={guestSunil}
                      name="श्री. सुनील कुलकर्णी"
                      title="अध्यक्ष, ग्रँड मेडिकल फाऊंडेशन"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventDetailsModal;
