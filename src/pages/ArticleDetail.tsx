import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileDown, Share2, Facebook } from "lucide-react";
import { User } from "lucide-react";
import devendaraImage from "@/assets/devandra-0904_d_PhotoGrid-removebg-preview.png";
import devendaraFeaturedImage from "@/assets/devendra-fadnavis-new.png";
import sanjayOakImage from "@/assets/guest-sanjay-oak.png";
import umeshChavanImage from "@/assets/umesh-chavan-new.png";

interface Article {
  id: string;
  number: string;
  topic: string;
  author: string;
  authorImage?: string;
  authorBio?: string;
  authorTitle?: string;
  date: string;
  featuredImage?: string;
  content: string;
  pdfLink?: string;
}

// This would normally come from a database or API
const articles: Record<string, Article> = {
  "shubhechha-sandesh": {
    id: "shubhechha-sandesh",
    number: "०१",
    topic: "शुभेच्छा संदेश",
    author: "देवेंद्र फडणवीस",
    authorImage: devendaraImage,
    authorBio: "देवेंद्र फडणवीस हे महाराष्ट्र राज्याचे मुख्यमंत्री आहेत. त्यांनी राज्याच्या विकासासाठी अनेक महत्त्वाचे उपक्रम राबवले आहेत.",
    authorTitle: "मुख्यमंत्री, महाराष्ट्र राज्य",
    date: "१९ ऑक्टोबर २०२५",
    featuredImage: devendaraFeaturedImage,
    pdfLink: "/pdfs/shubhechha-devendra-fadnavis.pdf",
    content: `पुणे येथे 'पहिले आरोग्य साहित्य संमेलन' होत आहे, याचा मला विशेष आनंद आहे. यानिमित्ताने संमेलनात सहभागी होत असलेले सर्व मान्यवर, साहित्यप्रेमी तसेच आयोजक रुग्ण हक्क परिषद, मुख्यमंत्री सहाय्यता निधी व धर्मदाय रुग्णालय मदत कक्ष तसेच अखिल भारतीय मराठी चित्रपट महामंडळाचे हार्दिक अभिनंदन!

आरोग्य हीच खरी संपत्ती आणि निरोगी नागरिक राष्ट्राचे आधारस्तंभ आहेत. आधुनिक युगात व्यस्त नागरिकांची जीवनशैली, व्यसनप्रियता आणि अनियमित जीवनक्रमांमुळे शारीरिक तसेच मानसिक आजारांचे प्रमाण अधिक गतीशील होत चालले आहेत. आरोग्य राख्यासाठी डॉक्टरांच्या उपचारांशिवाय 'आरोग्य साहित्य संमेलन' आयोजन, साहित्य आणि सामाजिक जागरुकतेचा सुंदर संगम वडविणारा उपक्रम असल्याने प्रशंसनीय आहे. हा आरोग्य महोत्सव आरोग्य तपासणी, वैद्यकीय सेवा उपलब्ध करून देण्यासोबतच नागरिकांना 'स्वास्थ्य' जीवनमूल्याचा पाया आहे, ही जाणीव करून देणारी चळवळ ठरले.

या संमेलनाच्या निमित्ताने प्रकाशित होणारी 'स्वास्थ्य संदेश २०२५' स्मरणिका आरोग्यविषयक माहिती, साहित्य आणि प्रेरक विचारांचे एक मौल्यवान संकलन असल्याचे सर्वसाधी उपयुक्त ठरेल, अशी खात्री आहे.

या अभिनव उपक्रमास आणि 'स्वास्थ संदेश स्मरणिके'च्या प्रकाशनास मन:पूर्वक शुभेच्छा!`
  }
};

// Related articles for "Read Next" section
const relatedArticles = [
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
  }
];

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articles[slug] : null;

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-hero-navy mb-4">लेख सापडला नाही</h1>
            <Link to="/souvenir">
              <Button>स्मरणिका पृष्ठावर परत जा</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `${article.topic} - ${article.author}`;
    
    switch(platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
        break;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      
      <main className="flex-1">
        {/* Immersive Header */}
        <section className="bg-hero-navy py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              {article.topic}
            </h1>
            <div className="text-gray-300 text-lg">
              <span>लेखक: {article.author}</span>
              {article.authorTitle && <span> | {article.authorTitle}</span>}
              <span> | {article.date}</span>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {article.featuredImage && (
          <section className="relative h-[400px] md:h-[500px] overflow-hidden">
            <img 
              src={article.featuredImage} 
              alt={article.topic}
              className="w-full h-full object-cover"
            />
          </section>
        )}

        {/* Main Content */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-3xl">
            {/* Official Emblem */}
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                {/* Placeholder for emblem - using text representation */}
                <div className="w-24 h-24 mx-auto mb-3 flex items-center justify-center">
                  <div className="text-6xl">🦁</div>
                </div>
                <p className="text-xl font-bold text-hero-navy">सत्यमेव जयते</p>
              </div>
            </div>

            {/* Article Text */}
            <article className="prose prose-lg max-w-none">
              <div className="text-lg leading-relaxed text-gray-800 font-body whitespace-pre-line">
                {article.content}
              </div>
            </article>

            {/* PDF Download Card */}
            {article.pdfLink && (
              <div className="mt-12 border-t-4 border-accent-pink bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <FileDown className="w-12 h-12 text-accent-pink" />
                    <div>
                      <p className="text-lg font-semibold text-hero-navy mb-1">
                        मूळ पत्राची प्रत पाहण्यासाठी:
                      </p>
                      <p className="text-sm text-gray-600">संपूर्ण दस्तऐवज डाउनलोड करा</p>
                    </div>
                  </div>
                  <a href={article.pdfLink} download target="_blank" rel="noopener noreferrer">
                    <Button className="bg-accent-pink hover:bg-accent-pink/90 text-white font-semibold">
                      <FileDown className="w-4 h-4 mr-2" />
                      PDF डाउनलोड करा
                    </Button>
                  </a>
                </div>
              </div>
            )}

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-hero-navy mb-4">शेअर करा</h3>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare('facebook')}
                  className="hover:bg-blue-50"
                >
                  <Facebook className="w-5 h-5 text-blue-600" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare('twitter')}
                  className="hover:bg-sky-50"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare('whatsapp')}
                  className="hover:bg-green-50"
                >
                  <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </Button>
              </div>
            </div>

            {/* Author Bio Box */}
            <div className="mt-12 bg-gray-100 rounded-lg p-6">
              <div className="flex items-start gap-4">
                {article.authorImage ? (
                  <img 
                    src={article.authorImage} 
                    alt={article.author}
                    className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                    <User className="w-10 h-10 text-gray-500" />
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-bold text-hero-navy mb-1">{article.author}</h3>
                  {article.authorTitle && (
                    <p className="text-accent-pink font-semibold mb-2">{article.authorTitle}</p>
                  )}
                  {article.authorBio && (
                    <p className="text-gray-700 leading-relaxed">{article.authorBio}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Read Next Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-hero-navy text-center mb-12 font-heading">
              पुढील लेख वाचा
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  to="/souvenir"
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6 h-full border-2 border-transparent hover:border-accent-pink">
                    <div className="w-12 h-12 rounded-full bg-accent-pink flex items-center justify-center mb-4 mx-auto">
                      <span className="text-white font-bold text-lg">{relatedArticle.number}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-hero-navy text-center mb-4 font-heading min-h-[60px]">
                      {relatedArticle.topic}
                    </h3>
                    
                    <div className="flex items-center justify-center gap-3 mb-4">
                      {relatedArticle.authorImage ? (
                        <img 
                          src={relatedArticle.authorImage} 
                          alt={relatedArticle.author}
                          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                          <User className="w-6 h-6 text-gray-500" />
                        </div>
                      )}
                      <span className="text-sm text-gray-700 text-center">
                        {relatedArticle.author}
                      </span>
                    </div>
                    
                    <div className="text-center">
                      <span className="text-hero-navy font-semibold group-hover:underline">
                        पुढे वाचा »
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ArticleDetail;
