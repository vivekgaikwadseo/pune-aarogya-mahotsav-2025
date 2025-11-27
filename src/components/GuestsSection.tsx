import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import devendra from "@/assets/guest-devendra-fadnavis.png";
import sanjayOak from "@/assets/guest-sanjay-oak.png";
import murlidhar from "@/assets/guest-murlidhar-mohol.png";
import punitBalan from "@/assets/guest-punit-balan.png";
import chandrakant from "@/assets/guest-chandrakant-patil.png";
import ramesh from "@/assets/guest-ramesh-naik.png";
import jabbar from "@/assets/guest-jabbar-patel.png";
import prashant from "@/assets/guest-prashant-damle.png";
import amitesh from "@/assets/guest-amitesh-kumar.png";
import pravinPatil from "@/assets/speaker-pravin-patil-new.png";
import pravinTarde from "@/assets/guest-pravin-tarde.png";
import kolheCouple from "@/assets/guest-kolhe-couple.png";
import mohan from "@/assets/guest-mohan-agashe.png";
import truptiDesai from "@/assets/guest-trupti-desai.png";
import girishOak from "@/assets/guest-girish-oak.png";
import sunitarajePawar from "@/assets/guest-sunitaraje-pawar.png";

const GuestsSection = () => {
  const guests = [
    {
      name: "मा. ना. श्री. देवेंद्रजी फडणवीस",
      title: "मुख्यमंत्री, महाराष्ट्र राज्य",
      image: devendra,
    },
    {
      name: "मा. डॉ. संजय ओक",
      title: "संमेलनाध्यक्ष",
      image: sanjayOak,
    },
    {
      name: "मा. ना. श्री. मुरलीधर मोहोळ",
      title: "केंद्रीय राज्य मंत्री, खासदार",
      image: murlidhar,
    },
    {
      name: "मा. ना. श्री. पुनीत बालन",
      title: "भारतीय उद्योजक, चित्रपट निर्माते, सामाजिक कार्यकर्ते",
      image: punitBalan,
    },
    {
      name: "मा. ना. श्री. चंद्रकांतदादा पाटील",
      title: "मंत्री, उच्च व तंत्र शिक्षण",
      image: chandrakant,
    },
    {
      name: "मा. श्री. रमेश नाईक",
      title: "मुख्यमंत्री सहा. निधी कक्ष प्रमुख",
      image: ramesh,
    },
    {
      name: "डॉ. जब्बार पटेल",
      title: "जेष्ठ सिने दिग्दर्शक",
      image: jabbar,
    },
    {
      name: "मा. प्रशांत दामले",
      title: "अभिनेते",
      image: prashant,
    },
    {
      name: "मा. अमितेश कुमार",
      title: "पोलीस आयुक्त, पुणे शहर",
      image: amitesh,
    },
    {
      name: "मा. प्रविण पाटील",
      title: "पोलीस उपमहानिरीक्षक",
      image: pravinPatil,
    },
    {
      name: "मा. प्रविण तरडे",
      title: "प्रसिद्ध सिने दिग्दर्शक",
      image: pravinTarde,
    },
    {
      name: "पद्मश्री डॉ. स्मिता आणि डॉ. रविंद्र कोल्हे",
      title: "पुरस्काराचे मानकरी",
      image: kolheCouple,
    },
    {
      name: "डॉ. मोहन आगाशे",
      title: "जेष्ठ अभिनेते",
      image: mohan,
    },
    {
      name: "मा. ना. तृप्ती देसाई",
      title: "सामाजिक कार्यकर्ते",
      image: truptiDesai,
    },
    {
      name: "मा. ना. श्री. गिरीश ओक",
      title: "अभिनेते",
      image: girishOak,
    },
    {
      name: "मा. ना. सुनिताराजे पवार",
      title: "लेखक",
      image: sunitarajePawar,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white" style={{ boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.06), inset 0 -2px 8px rgba(0, 0, 0, 0.06)' }}>
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-hero-navy mb-4">
            पाहुणे आणि मान्यवर
          </h2>
        </div>

        {/* Carousel Slider */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {guests.map((guest, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/4"
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <img
                      src={guest.image}
                      alt={guest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="text-lg font-bold text-hero-navy mb-2 leading-tight">{guest.name}</h3>
                    <p className="text-sm text-muted-foreground">{guest.title}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Arrows */}
          <CarouselPrevious className="left-0 -translate-x-1/2" />
          <CarouselNext className="right-0 translate-x-1/2" />
        </Carousel>
      </div>
    </section>
  );
};

export default GuestsSection;
