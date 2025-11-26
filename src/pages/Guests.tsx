import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { UserCircle } from "lucide-react";
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

const Guests = () => {
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
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Page Header Banner */}
      <section className="relative bg-hero-navy py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">पाहुणे आणि मान्यवर</h1>
        </div>
      </section>

      {/* Guests Grid Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {guests.map((guest, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  {guest.image ? (
                    <img
                      src={guest.image}
                      alt={guest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <UserCircle className="w-32 h-32 text-gray-400" />
                  )}
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold text-hero-navy mb-2 leading-tight">{guest.name}</h3>
                  <p className="text-sm text-muted-foreground">{guest.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Guests;
