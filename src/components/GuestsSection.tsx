import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import devendra from "@/assets/devendra-fadnavis-new.png";
import murlidhar from "@/assets/guest-murlidhar-mohol.png";
import sanjay from "@/assets/guest-sanjay-oak.png";
import ramesh from "@/assets/guest-ramesh-naik.png";
import kolhe from "@/assets/award-recipients-kolhe.png";
import chandrakant from "@/assets/award-chandrakant-patil.png";
import ramdas from "@/assets/award-ramdas-athawale.png";
import jabbar from "@/assets/award-jabbar-patel.png";
import prashant from "@/assets/award-prashant-damle.png";
import amitesh from "@/assets/speaker-amitesh-kumar.png";
import pravinPatil from "@/assets/speaker-pravin-patil.png";
import pravinTarde from "@/assets/speaker-pravin-tarde.jpg";
import jagannath from "@/assets/speaker-jagannath-dixit.png";
import pramodJog from "@/assets/speaker-pramod-jog.png";
import pradeep from "@/assets/speaker-pradeep-avte.png";
import madhuri from "@/assets/felicitation-madhuri-misal.png";
import bhagwan from "@/assets/felicitation-bhagwan-pawar.png";
import hemant from "@/assets/felicitation-hemant-rasane.png";
import dheeraj from "@/assets/felicitation-dheeraj-ghate.png";
import sunita from "@/assets/book-launch-sunita-pawar.png";
import vijayBaviskar from "@/assets/panel2-vijay-baviskar.png";
import suresh from "@/assets/panel2-suresh-vishwakarma.png";
import rameshPardeshi from "@/assets/panel2-ramesh-pardeshi.png";
import jitendra from "@/assets/concluding-jitendra-dudi.png";
import megha from "@/assets/concluding-megha-kulkarni.png";
import navkishor from "@/assets/concluding-navkishor-ram.png";
import mohan from "@/assets/guest-mohan-agashe.png";
import meghraj from "@/assets/guest-meghraj-bhosale.png";
import siddharth from "@/assets/guest-siddharth-shirole.png";
import sunilKulkarni from "@/assets/guest-sunil-kulkarni.png";

const GuestsSection = () => {
  const guests = [
    {
      name: "मा. ना. श्री. देवेंद्रजी फडणवीस",
      title: "मुख्यमंत्री, महाराष्ट्र राज्य",
      image: devendra,
    },
    {
      name: "मा. ना. श्री. मुरलीधर मोहोळ",
      title: "केंद्रीय राज्य मंत्री, खासदार",
      image: murlidhar,
    },
    {
      name: "मा. डॉ. संजय ओक",
      title: "संमेलनाध्यक्ष",
      image: sanjay,
    },
    {
      name: "मा. श्री. रमेश नाईक",
      title: "मुख्यमंत्री सहा. निधी कक्ष प्रमुख",
      image: ramesh,
    },
    {
      name: "पद्मश्री डॉ. स्मिता कोल्हे",
      title: "पुरस्कार मानकरी",
      image: kolhe,
    },
    {
      name: "पद्मश्री डॉ. रविंद्र कोल्हे",
      title: "पुरस्कार मानकरी",
      image: kolhe,
    },
    {
      name: "मा. ना. श्री. चंद्रकांतदादा पाटील",
      title: "मंत्री, उच्च व तंत्र शिक्षण",
      image: chandrakant,
    },
    {
      name: "मा. डॉ. रामदास आठवले",
      title: "केंद्रीय राज्यमंत्री",
      image: ramdas,
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
      name: "डॉ. जगन्नाथ दीक्षित",
      title: "प्रसिद्ध आहारतज्ञ",
      image: jagannath,
    },
    {
      name: "डॉ. प्रमोद जोग",
      title: "प्रसिद्ध बालरोगतज्ञ",
      image: pramodJog,
    },
    {
      name: "डॉ. प्रदिप आवटे",
      title: "सहा. आरोग्य संचालक",
      image: pradeep,
    },
    {
      name: "मा. ना. माधुरीताई मिसाळ",
      title: "राज्यमंत्री, महाराष्ट्र राज्य",
      image: madhuri,
    },
    {
      name: "डॉ. भगवान पवार",
      title: "उपसंचालक, आरोग्य मंत्रालय",
      image: bhagwan,
    },
    {
      name: "मा. श्री. हेमंत रासने",
      title: "आमदार, कसबा",
      image: hemant,
    },
    {
      name: "मा. श्री. धीरज घाटे",
      title: "शहराध्यक्ष, भाजपा, पुणे",
      image: dheeraj,
    },
    {
      name: "मा. सुनीताताई पवार",
      title: "प्रमुख कार्यवाह म. सा. परिषद",
      image: sunita,
    },
    {
      name: "मा. विजय बाविस्कर",
      title: "समूह संपादक, लोकमत",
      image: vijayBaviskar,
    },
    {
      name: "मा. सुरेश विश्वकर्मा",
      title: "सिने अभिनेते",
      image: suresh,
    },
    {
      name: "मा. रमेश परदेशी",
      title: "सिने अभिनेते",
      image: rameshPardeshi,
    },
    {
      name: "मा. जितेंद्र डुडी",
      title: "जिल्हाधिकारी, पुणे",
      image: jitendra,
    },
    {
      name: "मा. प्रा. मेघाताई कुलकर्णी",
      title: "उपाध्यक्ष, भाजपा",
      image: megha,
    },
    {
      name: "मा. नवकिशोर राम",
      title: "आयुक्त, पुणे मनपा",
      image: navkishor,
    },
    {
      name: "डॉ. मोहन आगाशे",
      title: "जेष्ठ अभिनेते",
      image: mohan,
    },
    {
      name: "श्री. मेघराजराजे भोसले",
      title: "अध्यक्ष, अ. भा. चित्रपट महामंडळ",
      image: meghraj,
    },
    {
      name: "श्री. सिद्धार्थ शिरोळे",
      title: "आमदार",
      image: siddharth,
    },
    {
      name: "श्री. सुनील कुलकर्णी",
      title: "अध्यक्ष, ग्रँड मेडिकल फाऊंडेशन",
      image: sunilKulkarni,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="container mx-auto px-4">
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
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  {/* Large Top Image - 70% */}
                  <div className="relative h-64 overflow-hidden rounded-t-2xl">
                    <img
                      src={guest.image}
                      alt={guest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Bottom White Box - 30% */}
                  <div className="bg-white p-4 rounded-b-2xl">
                    <div className="flex items-start gap-3">
                      {/* Small Circular Avatar */}
                      <div className="flex-shrink-0">
                        <img
                          src={guest.image}
                          alt={guest.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
                        />
                      </div>

                      {/* Name and Title */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-hero-navy leading-tight mb-1 line-clamp-2">
                          {guest.name}
                        </h3>
                        <p className="text-xs text-gray-600 leading-tight line-clamp-2">
                          {guest.title}
                        </p>
                      </div>
                    </div>
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
