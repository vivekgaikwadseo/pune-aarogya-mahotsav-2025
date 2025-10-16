import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import eventHealthCamp from "@/assets/event-health-camp.jpg";
import eventInauguration from "@/assets/event-inauguration.jpg";
import eventPanelDiscussion from "@/assets/event-panel-discussion.jpg";
import eventAwardCeremony from "@/assets/event-award-ceremony.jpg";
import eventCulturalProgram from "@/assets/event-cultural-program.jpg";
import eventLecture from "@/assets/event-lecture.jpg";
import eventFelicitation from "@/assets/event-felicitation.jpg";
import eventBookLaunch from "@/assets/event-book-launch.jpg";
import eventTheatre from "@/assets/event-theatre.jpg";
import eventMusicNight from "@/assets/event-music-night.jpg";

interface EventCardProps {
  image: string;
  title: string;
  tagText: string;
  tagColor: string;
  time: string;
  description: string;
  footer: string;
}

const EventCard = ({ image, title, tagText, tagColor, time, description, footer }: EventCardProps) => {
  return (
    <div className="group">
      {/* Image Container */}
      <div className="rounded-lg overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      {/* Content Box - overlaps image and narrower */}
      <div className="relative -mt-8 mx-4 bg-white rounded-lg shadow-lg border-t-4 p-4 space-y-3" 
           style={{ borderTopColor: tagColor === '#FF0080' || tagColor === '#D20062' ? tagColor : '#000F93' }}>
        
        {/* Tag Badge */}
        <div>
          <Badge 
            className="text-white font-medium"
            style={{ backgroundColor: tagColor }}
          >
            {tagText}
          </Badge>
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-bold text-hero-navy leading-tight">
          {title}
        </h3>
        
        {/* Time */}
        <p className="text-sm text-hero-grey font-medium">
          {time}
        </p>
        
        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        {/* Footer */}
        <p className="text-xs text-hero-grey leading-relaxed pt-2 border-t border-border">
          {footer}
        </p>
        
        {/* Details Link */}
        <Link 
          to="/events" 
          className="inline-block text-sm font-medium text-hero-pink hover:text-hero-deep-pink transition-colors"
        >
          अधिक जाणून घ्या »
        </Link>
      </div>
    </div>
  );
};

const ProgramSchedule = () => {
  const events = [
    {
      image: eventHealthCamp,
      title: "भव्य आरोग्य शिबीर",
      tagText: "आरोग्य शिबिर",
      tagColor: "#FF0080",
      time: "🕙 सकाळी ९:०० ते सायं. ७:०० पर्यंत",
      description: "विविध आजारांवर तज्ञ डॉक्टरांकडून मोफत तपासणी, औषधोपचार आणि आवश्यक शस्त्रक्रिया.",
      footer: "✨ मुख्य उपस्थिती: आरोग्य क्षेत्रातील नामवंत डॉक्टर | ⏳ कालावधी: संपूर्ण दिवस | 🎟️ प्रवेश: विनामूल्य"
    },
    {
      image: eventInauguration,
      title: "उद्घाटन सोहळा",
      tagText: "मुख्य कार्यक्रम",
      tagColor: "#000F93",
      time: "🕙 सकाळी १०:०० वा",
      description: "महाआरोग्य शिबीर आणि मुख्यमंत्री फिरता दवाखाना यांचे भव्य लोकार्पण.",
      footer: "🎤 उद्घाटक: मा. श्री. देवेंद्र फडणवीस | ⏳ कालावधी: अंदाजे १ तास | 🎟️ प्रवेश: विनामूल्य"
    },
    {
      image: eventPanelDiscussion,
      title: "परिसंवाद १: अंमलीपदार्थ मुक्त महाराष्ट्र",
      tagText: "परिसंवाद",
      tagColor: "#000F93",
      time: "🕙 सकाळी ११:३० वा",
      description: "'अंमलीपदार्थ मुक्त महाराष्ट्र करुया!' या महत्त्वाच्या विषयावर तज्ञांचे मार्गदर्शन.",
      footer: "🎤 वक्ते: मा. अमितेश कुमार, मा. प्रविणकुमार पाटील | ⏳ कालावधी: अंदाजे १ तास | 🎟️ प्रवेश: विनामूल्य"
    },
    {
      image: eventAwardCeremony,
      title: "आरोग्यभूषण पुरस्कार आणि स्मरणिका प्रकाशन",
      tagText: "पुरस्कार सोहळा",
      tagColor: "#FF0080",
      time: "🕙 दुपारी १२:३० वा",
      description: "'महाराष्ट्र आरोग्यभूषण पुरस्कार २०२५' वितरण आणि 'स्वास्थ संदेश २०२५' स्मरणिका प्रकाशन.",
      footer: "🎤 हस्ते: मा. ना. श्री. चंद्रकांतदादा पाटील | ⏳ कालावधी: अंदाजे दीड तास | 🎟️ प्रवेश: विनामूल्य"
    },
    {
      image: eventCulturalProgram,
      title: "स्नेहभोजन आणि मराठी गीते",
      tagText: "सांस्कृतिक",
      tagColor: "#D20062",
      time: "🕙 दुपारी २:०० ते ३:०० वा",
      description: "सर्व उपस्थितांसाठी स्नेहभोजनासोबत मराठी गीतांचा आनंददायी कार्यक्रम.",
      footer: "✨ सर्वांसाठी खुले | ⏳ कालावधी: १ तास | 🎟️ प्रवेश: विनामूल्य"
    },
    {
      image: eventLecture,
      title: "विशेष व्याख्यान सत्र",
      tagText: "व्याख्यान",
      tagColor: "#000F93",
      time: "🕙 दुपारी ३:३० वा",
      description: "डॉ. जगन्नाथ दीक्षित, डॉ. प्रमोद जोग आणि डॉ. प्रदिप आवटे यांच्याकडून आरोग्यविषयक मार्गदर्शन.",
      footer: "🎤 वक्ते: प्रसिद्ध आरोग्य तज्ञ | ⏳ कालावधी: ३०-३० मिनिटे प्रत्येकी | 🎟️ प्रवेश: विनामूल्य"
    },
    {
      image: eventFelicitation,
      title: "विशेष सन्मान सोहळा",
      tagText: "सत्कार",
      tagColor: "#FF0080",
      time: "🕙 दुपारी ४:०० वा",
      description: "आरोग्य क्षेत्रात उल्लेखनीय कार्य करणाऱ्या मान्यवरांचा विशेष सन्मान.",
      footer: "🎤 हस्ते: मा. ना. माधुरीताई मिसाळ | ⏳ कालावधी: अंदाजे ३० मिनिटे | 🎟️ प्रवेश: विनामूल्य"
    },
    {
      image: eventBookLaunch,
      title: "पुस्तक प्रकाशन समारंभ",
      tagText: "साहित्य",
      tagColor: "#000F93",
      time: "🕙 दुपारी ४:३० वा",
      description: "उमेश चव्हाण लिखित 'आरोग्य समृद्ध करूया..!' या पुस्तकाचे मान्यवरांच्या हस्ते प्रकाशन.",
      footer: "🎤 लेखक: श्री. उमेश चव्हाण | ⏳ कालावधी: अंदाजे १ तास | 🎟️ प्रवेश: विनामूल्य"
    },
    {
      image: eventPanelDiscussion,
      title: "परिसंवाद २: आरोग्य व्यवस्थेपुढील आव्हाने",
      tagText: "परिसंवाद",
      tagColor: "#000F93",
      time: "🕙 सायं. ५:३० वा",
      description: "'शहरी व ग्रामीण आरोग्य व्यवस्थेपुढील आव्हाने' या विषयावर तज्ञांची चर्चा.",
      footer: "🎤 अध्यक्ष: डॉ. कुमार सप्तर्षी | ⏳ कालावधी: अंदाजे १ तास | 🎟️ प्रवेश: विनामूल्य"
    },
    {
      image: eventTheatre,
      title: "विशेष नाटक: डॉ. गिरीष ओक",
      tagText: "सांस्कृतिक",
      tagColor: "#D20062",
      time: "🕙 सायं. ६:३० वा",
      description: "सुप्रसिद्ध अभिनेते डॉ. गिरीष ओक यांच्या विशेष नाटकाचे सादरीकरण.",
      footer: "🎤 कलाकार: डॉ. गिरीष ओक | ⏳ कालावधी: अंदाजे २ तास | 🎟️ प्रवेश: विनामूल्य"
    },
    {
      image: eventMusicNight,
      title: "संगीत रजनी आणि समारोप",
      tagText: "सांस्कृतिक",
      tagColor: "#D20062",
      time: "🕙 रात्री ९:०० वा",
      description: "पुण्यातील प्रसिद्ध डॉक्टर्स आणि कलावंतांच्या संगीत रजनीने महोत्सवाची सांगता.",
      footer: "🎤 अध्यक्ष: डॉ. संजय ओक | ⏳ कालावधी: अंदाजे १.५ तास | 🎟️ प्रवेश: विनामूल्य"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hero-navy">
            कार्यक्रमाचे वेळापत्रक
          </h2>
          <p className="text-base md:text-lg text-hero-grey max-w-3xl mx-auto">
            सर्व कार्यक्रम एकाच ठिकाणी आयोजित केले आहेत:{" "}
            <span className="font-bold text-hero-navy">बालगंधर्व रंगमंदिर, पुणे</span>
          </p>
        </div>

        {/* Event Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSchedule;
