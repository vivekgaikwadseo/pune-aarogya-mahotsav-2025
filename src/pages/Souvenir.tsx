import { useState } from "react";
import { Link } from "react-router-dom";
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
import rituparnaShinde from "@/assets/stress-rituparna-shinde.png";

interface Article {
  id: string;
  number: string;
  topic: string;
  author: string;
  authorImage?: string;
  filterKey: string;
  slug?: string;
}

const articles: Article[] = [
  {
    id: "1",
    number: "०१",
    topic: "शुभेच्छा संदेश",
    author: "मुख्यमंत्री देवेंद्र फडणवीस",
    authorImage: devendaraImage,
    filterKey: "शुभेच्छा संदेश - मुख्यमंत्री देवेंद्र फडणवीस",
    slug: "shubhechha-sandesh"
  },
  {
    id: "2",
    number: "०२",
    topic: "संपादकीय",
    author: "डॉ. अविनाश भोंडवे",
    filterKey: "संपादकीय - डॉ. अविनाश भोंडवे",
    slug: "sampadakiya"
  },
  {
    id: "3",
    number: "०३",
    topic: "अध्यक्षीय भाषण",
    author: "डॉ. संजय ओक, संमेलनाध्यक्ष",
    authorImage: sanjayOakImage,
    filterKey: "अध्यक्षीय भाषण - डॉ. संजय ओक, संमेलनाध्यक्ष",
    slug: "adhyakshiya-bhashan"
  },
  {
    id: "4",
    number: "०४",
    topic: "रुग्ण हक्क परिषदेच्या रुग्णांच्या सेवेसाठी एक सामाजिक क्रांती",
    author: "उमेश चव्हाण, स्वागताध्यक्ष",
    authorImage: umeshChavanImage,
    filterKey: "रुग्ण हक्क परिषदेच्या रुग्णांच्या सेवेसाठी एक सामाजिक क्रांती - उमेश चव्हाण, स्वागताध्यक्ष",
    slug: "rugna-hakka-parishad"
  },
  {
    id: "5",
    number: "०५",
    topic: "आरोग्याचा सखा: रामेश्वर नाईक साहेब",
    author: "डॉ. केयुर धनंजयराव चौधरी",
    filterKey: "आरोग्याचा सखा: रामेश्वर नाईक साहेब - डॉ. केयुर धनंजयराव चौधरी",
    slug: "arogyacha-sakha"
  },
  {
    id: "6",
    number: "०६",
    topic: "वजन कमी नाही, आरोग्य वाढवणे महत्त्वाचे",
    author: "डॉ. ऋतुपर्ण शिंदे",
    authorImage: rituparnaShinde,
    filterKey: "वजन कमी नाही, आरोग्य वाढवणे महत्त्वाचे - डॉ. ऋतुपर्ण शिंदे",
    slug: "vajan-kami-nahi-arogya-vadhvane"
  },
  {
    id: "7",
    number: "०७",
    topic: "शस्त्रक्रियेतील आधारस्तंभ - भूल - समज, गैरसमज",
    author: "डॉ. दीपक पोमण",
    authorImage: sanjayOakImage,
    filterKey: "शस्त्रक्रियेतील आधारस्तंभ - भूल - समज, गैरसमज - डॉ. दीपक पोमण",
    slug: "shastrakriyeteel-aadharsatmbha"
  },
  {
    id: "8",
    number: "०८",
    topic: "शाळांमध्ये अंमली पदार्थांचा प्रवेश: धोक्याची घंटा",
    author: "डॉ. नितिन बोरा",
    authorImage: rituparnaShinde,
    filterKey: "शाळांमध्ये अंमली पदार्थांचा प्रवेश: धोक्याची घंटा - डॉ. नितिन बोरा",
    slug: "shamli-padarthacha-pravesh"
  },
  {
    id: "9",
    number: "०९",
    topic: "अमली पदार्थाचा शिरकाव शालेय जीवनात धोकादायक",
    author: "श्री. प्रवीण पाटील (आय.पी.एस.)",
    authorImage: pravinPatilImage,
    filterKey: "अमली पदार्थाचा शिरकाव शालेय जीवनात धोकादायक - श्री. प्रवीण पाटील (आय.पी.एस.)",
    slug: "amli-padarthacha-shirkav"
  },
  {
    id: "10",
    number: "१०",
    topic: "सर्दीचे विकार व त्यावर होमिओपॅथिक उपचार",
    author: "डॉ. इंद्रयानील बावडेकर",
    authorImage: umeshChavanImage,
    filterKey: "सर्दीचे विकार व त्यावर होमिओपॅथिक उपचार - डॉ. इंद्रयानील बावडेकर",
    slug: "sardiche-viker-homeopathic-upchar"
  },
  {
    id: "11",
    number: "११",
    topic: "उपचारापेक्षा सावधानी बाळगा",
    author: "डॉ. श्रीधर चिपळुणकर",
    authorImage: sanjayOakImage,
    filterKey: "उपचारापेक्षा सावधानी बाळगा - डॉ. श्रीधर चिपळुणकर",
    slug: "upachar-peksha-saavdhani"
  },
  {
    id: "12",
    number: "१२",
    topic: "उत्तम आरोग्याची गुरुकिल्ली",
    author: "वैद्य आनंद बर्वे आणि वैद्या ऋचा बर्वे",
    authorImage: umeshChavanImage,
    filterKey: "उत्तम आरोग्याची गुरुकिल्ली - वैद्य आनंद बर्वे आणि वैद्या ऋचा बर्वे",
    slug: "uttam-arogya-gurukilli"
  },
  {
    id: "13",
    number: "१३",
    topic: "आयुर्वेदिय सौंदर्यप्रसाधने",
    author: "डॉ. अश्विनी गुलाबराव बोदडे",
    authorImage: rituparnaShinde,
    filterKey: "आयुर्वेदिय सौंदर्यप्रसाधने - डॉ. अश्विनी गुलाबराव बोदडे",
    slug: "ayurvedic-saundaryaprasadhane"
  },
  {
    id: "14",
    number: "१४",
    topic: "आरोग्याचा दिवा : स्त्रियांची जागरुकता",
    author: "श्री. डॉ. राहुल गारुडकर",
    authorImage: sanjayOakImage,
    filterKey: "आरोग्याचा दिवा : स्त्रियांची जागरुकता - श्री. डॉ. राहुल गारुडकर",
    slug: "arogyacha-diva-striyanchi-jagrukta"
  },
  {
    id: "15",
    number: "१५",
    topic: "लहान मुलांवर होणारे लैंगिक अत्याचार",
    author: "प्रा.डॉ. मिलिंद भोई",
    authorImage: milindBhoiImage,
    filterKey: "लहान मुलांवर होणारे लैंगिक अत्याचार - प्रा.डॉ. मिलिंद भोई",
    slug: "lahan-mulanvar-honaare-laingik-atyachar"
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
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow py-3 px-6 grid grid-cols-1 md:grid-cols-[60px_2fr_1.2fr_auto] gap-4 items-center"
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
                  {article.slug ? (
                    <Link 
                      to={`/article/${article.slug}`}
                      className="text-[#000F93] font-semibold hover:underline whitespace-nowrap text-sm md:text-base text-right"
                    >
                      पुढे वाचा »
                    </Link>
                  ) : (
                    <span className="text-gray-400 whitespace-nowrap text-sm md:text-base text-right">
                      लवकरच येत आहे
                    </span>
                  )}
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
