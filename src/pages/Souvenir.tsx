import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User } from "lucide-react";
import devendaraImage from "@/assets/devandra-0904_d_PhotoGrid-removebg-preview.png";
import sanjayOakImage from "@/assets/guest-sanjay-oak.png";
import umeshChavanImage from "@/assets/umesh-chavan-new.png";
import pravinPatilImage from "@/assets/speaker-pravin-patil-new.png";
import milindBhoiImage from "@/assets/speaker-milind-bhoi.jpg";
import amolDevlekarImage from "@/assets/stress-amol-devlekar.png";

interface Article {
  id: string;
  number: string;
  topic: string;
  author: string;
  authorImage?: string;
  filterKey: string;
}

const articles: Article[] = [
  {
    id: "1",
    number: "०१",
    topic: "शुभेच्छा संदेश",
    author: "मुख्यमंत्री देवेंद्र फडणवीस",
    authorImage: devendaraImage,
    filterKey: "शुभेच्छा संदेश - मुख्यमंत्री देवेंद्र फडणवीस"
  },
  {
    id: "2",
    number: "०२",
    topic: "संपादकीय",
    author: "डॉ. अविनाश भोंडवे",
    filterKey: "संपादकीय - डॉ. अविनाश भोंडवे"
  },
  {
    id: "3",
    number: "०३",
    topic: "अध्यक्षीय भाषण",
    author: "डॉ. संजय ओक, संमेलनाध्यक्ष",
    authorImage: sanjayOakImage,
    filterKey: "अध्यक्षीय भाषण - डॉ. संजय ओक, संमेलनाध्यक्ष"
  },
  {
    id: "4",
    number: "०४",
    topic: "रुग्ण हक्क परिषदेच्या रुग्णांच्या सेवेसाठी एक सामाजिक क्रांती",
    author: "उमेश चव्हाण, स्वागताध्यक्ष",
    authorImage: umeshChavanImage,
    filterKey: "रुग्ण हक्क परिषदेच्या रुग्णांच्या सेवेसाठी एक सामाजिक क्रांती - उमेश चव्हाण, स्वागताध्यक्ष"
  },
  {
    id: "5",
    number: "०५",
    topic: "आरोग्याच्या सुरक्षा कवचाचे नाईन वॉट",
    author: "डॉ. केयुर सोनि",
    filterKey: "आरोग्याच्या सुरक्षा कवचाचे नाईन वॉट - डॉ. केयुर सोनि"
  },
  {
    id: "6",
    number: "०६",
    topic: "वजन कमी नाही, आनंदी वाढवा महत्त्वाचे",
    author: "ऋजुता दिवेकर",
    filterKey: "वजन कमी नाही, आनंदी वाढवा महत्त्वाचे - ऋजुता दिवेकर"
  },
  {
    id: "7",
    number: "०७",
    topic: "व्यक्तिमत्वमागील आधारस्तंभ भूल-तज्ञ",
    author: "दीपक पारेख",
    filterKey: "व्यक्तिमत्वमागील आधारस्तंभ भूल-तज्ञ - दीपक पारेख"
  },
  {
    id: "8",
    number: "०८",
    topic: "शासनाच्या अनेक योजनांची प्रभावी घोडदौड",
    author: "डॉ. नितीन बोरा",
    filterKey: "शासनाच्या अनेक योजनांची प्रभावी घोडदौड - डॉ. नितीन बोरा"
  },
  {
    id: "9",
    number: "०९",
    topic: "अंमली पदार्थाच्या विळख्यात शिकलेला...",
    author: "प्रविण पाटील (आय.पी.एस.)",
    authorImage: pravinPatilImage,
    filterKey: "अंमली पदार्थाच्या विळख्यात शिकलेला... - प्रविण पाटील (आय.पी.एस.)"
  },
  {
    id: "10",
    number: "१०",
    topic: "बदलते विकार व त्यावर होमिओपॅथी उपचार",
    author: "डॉ. हेमंत भार्गवकर",
    filterKey: "बदलते विकार व त्यावर होमिओपॅथी उपचार - डॉ. हेमंत भार्गवकर"
  },
  {
    id: "11",
    number: "११",
    topic: "अंमली पदार्थांपासून शिकाऊ डॉक्टर...",
    author: "श्रीरंग पिंपळवटकर",
    filterKey: "अंमली पदार्थांपासून शिकाऊ डॉक्टर... - श्रीरंग पिंपळवटकर"
  },
  {
    id: "12",
    number: "१२",
    topic: "उत्तम आरोग्याची गुरुकिल्ली",
    author: "वेध व वेत्रा श्रध्दा बर्वे",
    filterKey: "उत्तम आरोग्याची गुरुकिल्ली - वेध व वेत्रा श्रध्दा बर्वे"
  },
  {
    id: "13",
    number: "१३",
    topic: "आयुर्वेदिक सौंदर्यशास्त्र",
    author: "डॉ. अश्विनी गुणाजन बोडके",
    filterKey: "आयुर्वेदिक सौंदर्यशास्त्र - डॉ. अश्विनी गुणाजन बोडके"
  },
  {
    id: "14",
    number: "१४",
    topic: "आत्महत्येच्या दिला...",
    author: "सुहास गायकवाड",
    filterKey: "आत्महत्येच्या दिला... - सुहास गायकवाड"
  },
  {
    id: "15",
    number: "१५",
    topic: "लहान मुलांवर होणारे लैंगिक अत्याचार",
    author: "प्रा.डॉ. मिलिंद भोई",
    authorImage: milindBhoiImage,
    filterKey: "लहान मुलांवर होणारे लैंगिक अत्याचार - प्रा.डॉ. मिलिंद भोई"
  },
  {
    id: "16",
    number: "१६",
    topic: "मुख्याध्यापकांनी...",
    author: "डॉ. केदार भोईर",
    filterKey: "मुख्याध्यापकांनी... - डॉ. केदार भोईर"
  },
  {
    id: "17",
    number: "१७",
    topic: "काव्य विभाग",
    author: "कॉलिन्स डेव्हिड जोगी",
    filterKey: "काव्य विभाग - कॉलिन्स डेव्हिड जोगी"
  },
  {
    id: "18",
    number: "१८",
    topic: "आरोग्यातील पर्यटन - कलर्स डेव्हिड जोगी",
    author: "कॉलिन्स डेव्हिड जोगी",
    filterKey: "आरोग्यातील पर्यटन - कलर्स डेव्हिड जोगी - कॉलिन्स डेव्हिड जोगी"
  },
  {
    id: "19",
    number: "१९",
    topic: "डॉ. फेरेटी मंडले",
    author: "डॉ. फेरेटी मंडले",
    filterKey: "डॉ. फेरेटी मंडले - डॉ. फेरेटी मंडले"
  },
  {
    id: "20",
    number: "२०",
    topic: "डॉ. अमोल देवळेकर (एम.डी.)",
    author: "(लेखक)",
    authorImage: amolDevlekarImage,
    filterKey: "डॉ. अमोल देवळेकर (एम.डी.) - (लेखक)"
  },
  {
    id: "21",
    number: "२१",
    topic: "अंमलीमुक्त तुरुंग",
    author: "लक्ष्मण शिंदे",
    filterKey: "अंमलीमुक्त तुरुंग - लक्ष्मण शिंदे"
  },
  {
    id: "22",
    number: "२२",
    topic: "डेहराडून - किशोर गोयल",
    author: "किशोर गोयल",
    filterKey: "डेहराडून - किशोर गोयल - किशोर गोयल"
  },
  {
    id: "23",
    number: "२३",
    topic: "आरोग्यम् धनसंपदा",
    author: "बाळकृष्ण बाचल",
    filterKey: "आरोग्यम् धनसंपदा - बाळकृष्ण बाचल"
  },
  {
    id: "24",
    number: "२४",
    topic: "पाळणे चालती हॉस्टेलची वाट",
    author: "(लेखक)",
    filterKey: "पाळणे चालती हॉस्टेलची वाट - (लेखक)"
  }
];

const Souvenir = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filteredArticles = selectedFilter === "all" 
    ? articles 
    : articles.filter(article => article.filterKey === selectedFilter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Header Section */}
        <section className="relative bg-hero-navy py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center font-heading">
              आरोग्य संदेश स्मरणिका
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-hero-navy text-center mb-12 font-heading">
              "आरोग्य, सेवा आणि साहित्य यांचा भव्य संगम"
            </h2>
            
            {/* Filter Dropdown */}
            <div className="flex justify-center mb-8">
              <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                <SelectTrigger className="w-full max-w-md bg-white border-2 border-hero-navy/20 text-hero-navy font-semibold">
                  <SelectValue placeholder="सर्व लेख" />
                </SelectTrigger>
                <SelectContent className="bg-white max-h-[400px]">
                  <SelectItem value="all">सर्व लेख</SelectItem>
                  {articles.map((article) => (
                    <SelectItem key={article.id} value={article.filterKey}>
                      {article.filterKey}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Article Cards List */}
            <div className="space-y-8">
              {filteredArticles.map((article) => (
                <div 
                  key={article.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow py-3 px-6 grid grid-cols-1 md:grid-cols-[10%_50%_30%_10%] gap-4 items-center"
                >
                  {/* Column 1: Number Circle (10%) */}
                  <div className="w-12 h-12 rounded-full bg-[#FF0080] flex items-center justify-center mx-auto">
                    <span className="text-white font-bold text-lg">{article.number}</span>
                  </div>

                  {/* Column 2: Topic Title (50%) */}
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-hero-navy font-heading break-words">
                      {article.topic}
                    </h3>
                  </div>

                  {/* Column 3: Author Info (30%) */}
                  <div className="flex items-center gap-3">
                    {article.authorImage ? (
                      <img 
                        src={article.authorImage} 
                        alt={article.author}
                        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                        <User className="w-6 h-6 text-gray-500" />
                      </div>
                    )}
                    <span className="text-sm md:text-base text-gray-700 break-words">
                      {article.author}
                    </span>
                  </div>

                  {/* Column 4: Read More Link (10%) */}
                  <a 
                    href="#" 
                    className="text-[#000F93] font-semibold hover:underline whitespace-nowrap text-sm md:text-base text-right"
                  >
                    पुढे वाचा »
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Souvenir;
