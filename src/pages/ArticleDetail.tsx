import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Share2, User, FileDown, ChevronRight } from "lucide-react";
import emblemImage from "@/assets/emblem-of-india-new.png";
import featuredImage from "@/assets/devendra-fadnavis-featured.png";
import devendaraFadnavisImage from "@/assets/devendra-fadnavis-new.png";
import sanjayOakImage from "@/assets/guest-sanjay-oak.png";
import umeshChavanImage from "@/assets/umesh-chavan-new.png";

// Define the Article interface
interface Article {
  id: string;
  topic: string;
  author: string;
  authorTitle?: string;
  authorImage?: string;
  authorBio?: string;
  date: string;
  content: string;
  pdfLink?: string;
  featuredImage?: string;
}

// Mock article data - in real app, this would come from a backend/CMS
const articles: Record<string, Article> = {
  "shubhechha-sandesh": {
    id: "1",
    topic: "शुभेच्छा संदेश",
    author: "देवेंद्र फडणवीस",
    authorTitle: "मुख्यमंत्री, महाराष्ट्र राज्य",
    authorImage: devendaraFadnavisImage,
    featuredImage: featuredImage,
    authorBio: "माननीय देवेंद्र फडणवीस हे महाराष्ट्राचे मुख्यमंत्री आहेत. त्यांनी राज्याच्या विकासासाठी अनेक महत्त्वाचे उपक्रम राबवले आहेत.",
    date: "१९ ऑक्टोबर २०२५",
    content: `पुणे येथे 'पहिले आरोग्य साहित्य संमेलन' आयोजित करण्यात आले आहे, याचा मला अतिशय आनंद झाला आहे.

आरोग्य म्हणजे केवळ शारीरिक निरोगीपणा नव्हे, तर मानसिक, सामाजिक आणि भावनिक समतोल असलेली एक संपूर्ण स्थिती आहे. हे संमेलन आरोग्य आणि साहित्य या दोन महत्त्वाच्या क्षेत्रांना एकत्र आणणारे एक अनोखे प्रयत्न आहे.

साहित्याच्या माध्यमातून आरोग्यविषयक माहिती सामान्य जनतेपर्यंत पोहोचवणे, त्यांना आरोग्याविषयी जागरूक करणे आणि त्यांच्या जीवनात सकारात्मक बदल घडवून आणणे हा या संमेलनाचा उद्देश आहे.

महाराष्ट्र शासन नेहमीच आरोग्य सेवेच्या विकासासाठी प्रयत्नशील राहिले आहे. आम्ही आरोग्य सेवा अधिक सुलभ, परवडणारी आणि गुणवत्तापूर्ण बनवण्यासाठी विविध योजना राबवत आहोत.

या संमेलनाद्वारे आरोग्य जागृती निर्माण होईल, लोकांमध्ये आरोग्याविषयी चांगली समज निर्माण होईल आणि आरोग्यपूर्ण जीवनशैलीचा स्वीकार वाढेल, अशी माझी आशा आहे.

या संमेलनाच्या आयोजकांचे मी मनःपूर्वक अभिनंदन करतो आणि या संमेलनाच्या यशासाठी माझ्या शुभेच्छा!`,
    pdfLink: "/pdfs/shubhechha-devendra-fadnavis.pdf"
  }
};

// Related articles data for "Read Next" section
const relatedArticles = [{
  id: "2",
  number: "०२",
  topic: "संपादकीय",
  author: "डॉ. अविनाश भोंडवे",
  excerpt: "संपादक डॉ. अविनाश भोंडवे यांचे आरोग्य साहित्य संमेलनाबद्दल विचार आणि या उपक्रमाचे महत्त्व...",
  image: "/placeholder.svg",
  authorImage: null
}, {
  id: "3",
  number: "०३",
  topic: "अध्यक्षीय भाषण",
  author: "डॉ. संजय ओक, संमेलनाध्यक्ष",
  excerpt: "संमेलनाध्यक्ष डॉ. संजय ओक यांचे आरोग्य क्षेत्रातील सेवा आणि अनुभवावर आधारित विचार...",
  image: "/placeholder.svg",
  authorImage: sanjayOakImage
}, {
  id: "4",
  number: "०४",
  topic: "रुग्ण हक्क परिषदेच्या रुग्णांच्या सेवेसाठी एक सामाजिक क्रांती",
  author: "उमेश चव्हाण, स्वागताध्यक्ष",
  excerpt: "स्वागताध्यक्ष उमेश चव्हाण यांचे रुग्ण हक्क परिषदेच्या सामाजिक कार्यावर विचार...",
  image: "/placeholder.svg",
  authorImage: umeshChavanImage
}];
const ArticleDetail = () => {
  const {
    slug
  } = useParams();
  const article = slug ? articles[slug] : null;
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = article ? `${article.topic} - ${article.author}` : "";
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
        break;
    }
  };
  if (!article) {
    return <div className="min-h-screen flex flex-col bg-white">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-hero-navy mb-4">लेख सापडला नाही</h1>
            <Link to="/souvenir">
              <Button>स्मरणिका पृष्ठावर परत जा</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>;
  }
  return <div className="min-h-screen flex flex-col bg-[#F8F9FA]">
      <Navigation />
      
      <main className="flex-1 bg-[#F8F9FA]">
        {/* Hero Header Section with Dark Navy Background */}
        <section className="relative bg-hero-navy pt-20 pb-32 px-4 overflow-hidden">
          {/* Square Pattern Overlay */}
          <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px),
                               repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px)`
        }} />
          
          {/* Content */}
          <div className="container mx-auto max-w-4xl relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              {article.topic}
            </h1>
            
            {/* Author Info - Redesigned with circular photo */}
            <div className="flex items-center justify-center gap-4 text-white/90">
              {/* Circular Author Photo */}
              {article.authorImage && <img src={article.authorImage} alt={article.author} className="w-12 h-12 rounded-full object-cover border-2 border-white/30" />}
              
              {/* Metadata */}
              <div className="text-left">
                <div className="text-sm md:text-base">
                  <span className="font-semibold">लेखक: {article.author}</span>
                </div>
                {article.authorTitle && <div className="text-xs md:text-sm text-white/70">
                    {article.authorTitle} | {article.date}
                  </div>}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image - Overlapping Hero */}
        {article.featuredImage && <div className="mx-auto max-w-[800px] -mt-24 relative z-20">
            <div className="bg-white overflow-hidden">
              <img src={article.featuredImage} alt={article.topic} className="block w-full h-auto max-h-[400px] object-contain" />
            </div>
          </div>}

      {/* Main Content Container - Light Grey Background */}
      <div className="mx-auto max-w-[800px] pt-0 pb-12">
        <div className="bg-white rounded-b-2xl rounded-t-none shadow-lg p-8 md:p-12">
          {/* Official Emblem */}
          <div className="text-center mb-8">
            <img src={emblemImage} alt="Emblem of India" className="w-20 h-20 mx-auto mb-2 object-contain" />
            <p className="text-lg font-bold text-hero-navy">सत्यमेव जयते</p>
          </div>

          {/* Article Content */}
          <div className="bg-white rounded-lg p-6 md:p-8 mb-8">
            <div className="prose prose-lg max-w-none">
              {article.content.split('\n\n').map((paragraph, index) => <p key={index} className="text-gray-700 leading-relaxed mb-4 text-justify">
                  {paragraph}
                </p>)}
            </div>
          </div>

          {/* PDF Embed Section */}
          {article.pdfLink && <div className="bg-white rounded-lg border-t-4 border-accent-pink p-6 mb-8 shadow-md">
              <h3 className="text-lg font-semibold text-hero-navy mb-4">
                मूळ पत्राची प्रत पाहण्यासाठी:
              </h3>
              
              {/* Embedded PDF */}
              <div className="w-full h-[600px] border border-gray-200 rounded-lg overflow-hidden mb-4">
                <iframe src={article.pdfLink} className="w-full h-full" title="शुभेच्छा पत्र" />
              </div>
              
              {/* Download Link */}
              <div className="text-center">
                  <a href={article.pdfLink} download target="_blank" rel="noopener noreferrer" className="text-accent-pink hover:text-accent-pink/80 font-semibold inline-flex items-center gap-2">
                    <FileDown className="w-5 h-5" />
                    PDF डाउनलोड करा
                  </a>
                </div>
              </div>}

          {/* Share Section */}
          <div className="bg-white rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-hero-navy mb-4">शेअर करा</h3>
            <div className="flex gap-4">
              <Button onClick={() => handleShare('facebook')} className="bg-[#1877F2] hover:bg-[#1877F2]/90 text-white">
                <Facebook className="w-5 h-5 mr-2" />
                Facebook
              </Button>
              <Button onClick={() => handleShare('twitter')} className="bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 text-white">
                <Twitter className="w-5 h-5 mr-2" />
                Twitter
              </Button>
              <Button onClick={() => handleShare('whatsapp')} className="bg-[#25D366] hover:bg-[#25D366]/90 text-white">
                <Share2 className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Author Bio Box */}
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-hero-navy mb-4">लेखकाबद्दल</h3>
            <div className="flex items-start gap-4">
              {article.authorImage ? <div className="w-20 h-20 rounded-full bg-[#F8F9FA] p-1 flex items-center justify-center flex-shrink-0">
                  <img src={article.authorImage} alt={article.author} className="w-full h-full rounded-full object-cover" />
                </div> : <div className="w-20 h-20 rounded-full bg-[#F8F9FA] flex items-center justify-center flex-shrink-0">
                  <User className="w-10 h-10 text-gray-400" />
                </div>}
              <div>
                <h3 className="text-xl font-bold text-[#FF0080] mb-1">{article.author}</h3>
                {article.authorTitle && <p className="font-semibold mb-2 text-[#555555]">{article.authorTitle}</p>}
                {article.authorBio && <p className="text-gray-700 leading-relaxed">{article.authorBio}</p>}
              </div>
            </div>
          </div>

          {/* Read Next Section - Moved Inside White Container */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-hero-navy text-center mb-8 font-heading">
              पुढील लेख वाचा
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.slice(0, 2).map(relatedArticle => <div key={relatedArticle.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all overflow-hidden group border border-gray-100 flex flex-col">
                  {/* Card Image */}
                  <div className="h-40 overflow-hidden">
                    <img src={relatedArticle.image} alt={relatedArticle.topic} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-5 flex flex-col flex-1">
                    {/* Article Title - Bright Pink */}
                    <h3 className="text-lg font-bold text-[#FF0080] mb-2 font-heading line-clamp-2">
                      {relatedArticle.topic}
                    </h3>
                    
                    {/* Excerpt - Grey for readability */}
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {relatedArticle.excerpt}
                    </p>
                    
                    {/* Author Info */}
                    <div className="flex items-center gap-2 mb-3">
                      {relatedArticle.authorImage ? <img src={relatedArticle.authorImage} alt={relatedArticle.author} className="w-8 h-8 rounded-full object-cover" /> : <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <User className="w-4 h-4 text-gray-400" />
                        </div>}
                      {/* Author Name - Dark Navy */}
                      <span className="text-sm text-hero-navy font-medium">
                        {relatedArticle.author}
                      </span>
                    </div>
                    
                    {/* Read More Link - Grey */}
                    <Link to="/souvenir" className="text-[#555555] hover:text-[#555555]/80 font-medium text-sm transition-colors inline-flex items-center gap-1 mt-auto my-0 mx-0 px-0 py-[10px]">
                      पुढे वाचा
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
      </main>

      <Footer />
    </div>;
};
export default ArticleDetail;