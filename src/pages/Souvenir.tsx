import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User } from "lucide-react";
import devendaraImage from "@/assets/devandra-0904_d_PhotoGrid-removebg-preview.png";
import sanjayOakImage from "@/assets/guest-sanjay-oak.png";

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
                <SelectContent className="bg-white">
                  <SelectItem value="all">सर्व लेख</SelectItem>
                  <SelectItem value="शुभेच्छा संदेश - मुख्यमंत्री देवेंद्र फडणवीस">शुभेच्छा संदेश - मुख्यमंत्री देवेंद्र फडणवीस</SelectItem>
                  <SelectItem value="संपादकीय - डॉ. अविनाश भोंडवे">संपादकीय - डॉ. अविनाश भोंडवे</SelectItem>
                  <SelectItem value="अध्यक्षीय भाषण - डॉ. संजय ओक, संमेलनाध्यक्ष">अध्यक्षीय भाषण - डॉ. संजय ओक, संमेलनाध्यक्ष</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Article Cards List */}
            <div className="space-y-8">
              {filteredArticles.map((article) => (
                <div 
                  key={article.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow py-3 px-6 flex items-center gap-4 md:gap-6"
                >
                  {/* Number Circle */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FF0080] flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{article.number}</span>
                  </div>

                  {/* Topic Title */}
                  <div className="flex-shrink-0 min-w-[140px]">
                    <h3 className="text-lg md:text-xl font-bold text-hero-navy font-heading">
                      {article.topic}
                    </h3>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 flex-1 min-w-0">
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
                    <span className="text-sm md:text-base text-gray-700 truncate">
                      {article.author}
                    </span>
                  </div>

                  {/* Read More Link */}
                  <a 
                    href="#" 
                    className="flex-shrink-0 text-[#000F93] font-semibold hover:underline whitespace-nowrap text-sm md:text-base"
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
