import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Facebook, X, Share2, User, FileDown, ChevronRight, Instagram, ChevronLeft } from "lucide-react";
import emblemImage from "@/assets/emblem-of-india-new.png";
import featuredImage from "@/assets/devendra-fadnavis-featured.png";
import devendaraFadnavisImage from "@/assets/devendra-fadnavis-new.png";
import sanjayOakImage from "@/assets/guest-sanjay-oak.png";
import umeshChavanImage from "@/assets/umesh-chavan-new.png";
import avinashBhondweImage from "@/assets/award-avinash-bhondwe.png";
import rameshNaikImage from "@/assets/guest-ramesh-naik.png";

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
  },
  "sampadakiya": {
    id: "2",
    topic: "संपादकीय",
    author: "डॉ. अविनाश भोंडवे",
    authorTitle: "मुख्य संपादक",
    authorImage: avinashBhondweImage,
    featuredImage: avinashBhondweImage,
    authorBio: "डॉ. अविनाश भोंडवे हे पहिल्या आरोग्य साहित्य संमेलनाचे मुख्य संपादक आहेत.",
    date: "१९ ऑक्टोबर २०२५",
    content: `साहित्य म्हणजे समाजाचं आरसा असतो आणि आरोग्य हे त्या समाजाच्या जीवनशक्तीचं प्रतिबिंब असते. या दोन्ही घटकांचा संगम घडवणारे 'आरोग्य साहित्य संमेलन' हा उपक्रम म्हणजे केवळ एक कार्यक्रम नव्हे, तर समाजप्रबोधनाचा एक सशक्त प्रयत्न आहे.

आजवर जी वैद्यकीय साहित्य संमेलने झाली, ती डॉक्टरांनी, डॉक्टरांसाठी आयोजित केलेली डॉक्टरांची संमेलने होती. मात्र १९ ऑक्टोबर २०२५ रोजी, पुण्याच्या बालगंधर्व रंगमंदिरात साजऱ्या होणार्या या आरोग्य साहित्य संमेलनात, सर्व सामान्य जनतेला, रुग्णांना, त्यांच्या आरोग्य विषयक गरजांना, उपचारात येणाऱ्या अडचणींना सामोरे ठेवून, जनसामान्यांच्या समस्यांची उकल करणारा एक बहुद्देशी व्यापक प्रयत्न आहे.

रुग्ण हक्क परिषद, महाराष्ट्र प्रदेश यांच्या पुढाकाराने, मुख्यमंत्री सहायता निधी व धर्मादाय रुग्णालय मदत कक्ष, अखिल भारतीय मराठी चित्रपट महामंडळ, अखिल भारतीय मराठी नाट्य परिषद, बाल गंधर्व परिवार ट्रस्ट, पुणे महानगरपालिका, महाराष्ट्र साहित्य परिषद, ग्रॅन्ड पृथ्वी मेडिकल फाउंडेशन अशा विविध सामाजिक आणि सांस्कृतिक संस्थांच्या सहकार्याने आयोजित केलेल्या या संमेलनाने आरोग्य आणि साहित्य यांच्यातील नात्याला एक नवी दिशा दिली आहे.

संमेलनाचे उद्घाटन महाराष्ट्राचे मुख्यमंत्री मा. देवेंद्र जी फडणवीस यांच्या शुभ हस्ते होत आहे, ही एक भूषणाची बाब आहे. या संमेलनाचे अध्यक्ष नामवंत बाल शस्त्रक्रियातज्ञ आणि लेखक, डॉ. संजय ओक करणार आहेत, हा दुग्धशर्करा योग आहे. त्यांच्या वैद्यकीय क्षेत्रातील अनुभव, वैद्यकीय महाविद्यालयांचे डीन म्हणून केलेल्या नवनवीन प्रयोगांच्या प्रचितीची मेजवानी, सर्व उपस्थितांना या संमेलनात मिळणार हे नक्कीच.

या संमेलनात आरोग्यविषयक जनजागृती आणि साहित्यिक अभिव्यक्ती यांचा सुरेख मिलाफ अनुभवायला मिळणार आहे. आरोग्य तपासणी शिबिर, रक्तदान, व्याख्यानं, चर्चासत्रं आणि सांस्कृतिक कार्यक्रम यांचा समावेश असलेल्या या महोत्सवाने विविध वयोगटातील आणि पार्श्वभूमीतील लोकांना एकत्र आणले आहे. विविध वैद्यकीय चाचण्या करणाऱ्या आरोग्य शिबिरासारख्या उपक्रमांचा या उपक्रमात समावेश आहे, त्याच सोबत अत्याधुनिक तपासण्या, विविध विशेषज्ञांच्या सेवा, आणि गरजू रुग्णांसाठी मोफत शस्त्रक्रिया यामुळे आरोग्यसेवेचा खरा उद्देश साध्य होणार आहे. अशा उपक्रमांमधून समाजातील दुर्लक्षित घटकांना आधार मिळतो आणि आरोग्य ही केवळ वैद्यकीय सेवा न राहता एक सामाजिक बांधिलकी बनते.

सकाळी ९ वाजल्यापासून मध्यरात्र उलटेपर्यंत चालणाऱ्या या कार्यक्रमात, साहित्यिकांचे आरोग्यविषयक अनुभव, कथा, कविता आणि लेखांच्या माध्यमातून मनोविकार, मानसिक आरोग्य, जीवनशैली आणि सामाजिक आरोग्य यावर प्रकाश टाकला जाणार आहे. या अभिव्यक्तींमधून आरोग्यविषयक संवेदनशीलता वाढवण्याचा प्रयत्न होतो आहे. साहजिकच हे साहित्य संमेलन हे केवळ मनोरंजन नव्हे, तर उपचाराचं एक माध्यम ठरते आहे, ही बाब अधोरेखित झाली आहे.

कार्यक्रमाचे स्वागताध्यक्ष श्री उमेश चव्हाण आणि सर्व संयोजक मंडळाने या संमेलनाला एक व्यापक सामाजिक दृष्टिकोन दिला आहे. त्यांच्या नेतृत्वाखाली आरोग्य आणि साहित्य यांचे एकत्रीकरण हे केवळ संकल्पना नव्हे, तर कृतीत उतरलेले स्वप्न ठरले आहे.

या स्मरणिकेच्या माध्यमातून आम्ही या संमेलनातील प्रत्येक क्षण, प्रत्येक विचार, आणि प्रत्येक प्रयत्न जतन करू इच्छितो. कारण आरोग्य आणि साहित्य यांचा हा संगम म्हणजे समाजाच्या उज्वल भविष्याची पायाभरणी ठरणार आहे. हे संमेलन म्हणजे एक सुरुवात आहे, जिथे शब्दांनी आरोग्य साकारले जातेय आणि आरोग्याने साहित्याला अर्थ दिला जातोय.

सर्व साहित्य रसिकांना दीपावलीच्या हार्दिक शुभेच्छा!`
  },
  "adhyakshiya-bhashan": {
    id: "3",
    topic: "अध्यक्षीय मनोगत",
    author: "डॉ. संजय ओक",
    authorTitle: "संमेलनाध्यक्ष",
    authorImage: sanjayOakImage,
    featuredImage: sanjayOakImage,
    authorBio: "डॉ. संजय ओक हे नामवंत बाल शस्त्रक्रियातज्ञ आणि लेखक आहेत. पहिल्या आरोग्य साहित्य संमेलनाचे ते अध्यक्ष आहेत.",
    date: "१९ ऑक्टोबर २०२५",
    content: `महाराष्ट्र राज्याचे लोकाभिमुख मुख्यमंत्री; श्री. देवेंद्रजी फडणवीस; व्यासपीठावर आणि सभागृहात उपस्थित असलेले सर्व मान्यवर लोकप्रतिनिधी; वृत्त आणि दृकश्राव्य माध्यमकर्मी; सह व्यावसायिक डॉक्टर; मुख्यमंत्री सहाय्यता निधीत गेली अनेक वर्षे तळमळीने काम करणारे सहकारी; रुग्ण हक्क परिषद आणि धर्मार्थ रुग्णालयांचे सूसुत्रीकरण करणारे सहसंवेदक पहिल्या मराठी आरोग्य संमेलनाच्या अध्यक्षपदाचा सन्मान आपण मला दिलात याबद्दल मी आपला शतशः ऋणी आहे.

पहिल्या वहिल्या आयोजनाची महती काही औरच असते. उत्कंठा; जिज्ञासा; सर्वसमावेशकतेचा आग्रह आणि कधी काही टीका आणि टोचरे प्रश्न या साऱ्यांना आपल्याला सामोरे जावे लागते. गेल्या ४२ वर्षांच्या माझ्या सर्जिकल कारकीर्दीत मी अनेक परिषदा आणि संमेलनाचा आयोजक राहिलेलो आहे आणि प्रत्येक वेळी मला नसलेल्या मुलीच्या वधूपित्याची भूमिका मी निभावली आहे. मुळात मराठी शारदेचा दरवर्षी दिमाखात साजरा होणारा साहित्य संमेलनाचा उत्सव असताना; वैद्यकविश्वाने आरोग्य साहित्य संमेलनाची वेगळी चूल का पेटवावी? असाही सूर कानावर आला. माझ्या मते speciality आणि super speciality यातलं जे नातं आहे तेच इथेही अंतर्भूत आहे. नव्या फांद्या आल्यावर वृक्ष बळकट होतो हे विसरता येणार नाही. त्यातच आजचा दिवस केवळ विचारांचा नसून प्रत्यक्ष रुग्णसेवेच्या आचारांचाही आहे हे या संमेलनाचे विशेष आहे.

संमेलनानिमित्त पुण्याला येणे होते आहे हे माझ्यासाठी अगदी मर्मबंधातली ठेव आहे. शिशुविहार ते मॉर्डन हायस्कूल आणि तद्नंतर आबासाहेब गरवारे महाविद्यालय असा तब्बल सतरा वर्षांचा पूर्व वैद्यकीय प्रवास मी पुण्यात केला आहे. सर्व बोळ आणि पेठांमधून पु.लं.च्या भाषेत सायकल हाणत गेलो आहे. या शहराने माझ्यावर शालेय आणि महाविद्यालयीन संस्कार केले; रानडे आणि पुरुषोत्तमचे वक्तृत्व आणि अभिनयाचे बाळकडू पाजले आणि वैद्यकीय शिक्षणासाठी मिरजेच्या वैद्यक पंढरीचा रस्ता दाखविला. मिरजेचे सुप्रसिद्ध कवी राम गोसावी यांच्या "अंधार" हा विषय धरुन रचलेल्या कवितांचे रसग्रहण करणारा लेख हा माझा मराठी छापील वाङ्ग‌यातले पहिले पाऊल होता. पुढची अनेक वर्षे surgery एके surgery हाच श्वास राहिल्यामुळे लिखाण झाले नाही पण २००३ साली लोकसत्तामध्ये वैद्यक विषयाला अनुसरुन लेखमाला लिहा असा आदेश संपादक कुमार केतकरांनी दिला आणि मी लिहिता झालो. त्यानंतर वैद्यकाचे अंतरंग उलगडून दाखविणारे "तन-मन"; इतिहासाचा धांडोळा घेणारे "अवनत होई माथा"; आधुनिक वैद्यकाची नाळ सुश्रुत आणि चरक संहितेशी जोडणारे "वैद्यकश्रुती" असा सुरु झालेला प्रवास आता "बात निकलेगी तो" ह्या चौतिसाव्या मराठी पुस्तकाप्रत येऊन पोहचला आहे.

आरोग्य मराठी साहित्याचे मी चार प्रकारांत वर्गीकरण करू इच्छितो. पाच हजार वर्षांपूर्वी जन्माला आलेल्या सुश्रुत आणि चरक ऋषींच्या संहिता लिखित स्वरुपात आणण्याचे महत्कार्य त्यांच्या उत्तराधिकाऱ्यांनी आणि विद्यार्थ्यांनी केले आणि देववाणीत आरोग्य साहित्याची पहिली निर्मिती झाले. ग्रीक; रोमन; इजिप्शियन आणि अरेबिक-मुस्लिम समाज व्यवस्थेतही अशा स्वरूपाचे तत्कालीन संदर्भ हाती लागतात. या सर्वांचा शोध घेऊन परस्परसंबंध लावून "from papyrus to paperless" अर्थात झाडाच्या सालीवरच्या लेखनापासून; पृष्ठविरहिताकडे आज" असा एक शोधनिबंध मी आंतरराष्ट्रीय जर्नलमध्ये प्रसृत केला होता तेव्हा वेगवेगळे आजार; उपचार आणि औषधे याविषयी मराठीत झालेले लिखाण हे माझ्या दृष्टीने वैद्यकातील महत्वाचे साहित्य आहे. माहितीचा प्रसार सोप्या भाषेत, सर्वसामान्यांना समजेल असा करण्याचे या साहित्याचे उद्देश त्याला अग्र मानांकित स्थान देतात. मधुमेहाचा आजार; उपचार; स्थूलत्व; मानसिक विकार; ताणतणाव; हृदविकार आणि रक्तदाब; वाढत्या वयातील प्रश्नांची उकल आणि सहजीवनापासून कामजीवनापर्यंत विविध विषयांनी वाहिलेल्या पुस्तकांचा समावेश ह्या वर्गवारीत मी प्रथम क्रमांकात करेन.

दुसऱ्या प्रकारच्या साहित्यात अनेक डॉक्टर सहकाऱ्यांनी आपला वैद्यकीय प्रवास वर्णिला आहे. शाळेपासून, महाविद्यालयापर्यंतच्या खालेल्या खस्ता आहेत; व्यावसायिक टक्के टोणपे आहेत; मामलेदार रुग्णांच्या सुरस कथा आहेत आणि जीवन-मृत्यु या दोन टिंबांना जोडणाऱ्या एका नागमोड्या सरळ रेषेचा आलेख आहे. हे साहित्य रंजक आहे; उद्बोधक आहे, स्फूर्तीदायक आहे; पुढच्या पिढीला प्रेरणा देणार आहे; कधी डोळ्यात अंजन घालणारे आहे तर कधी दिव्यत्वाचा साक्षात्कार घडविणारे आहे. ऑगस्ट १९७८ मध्ये डॉ. अरुण लिमयेंचे "क्लोरोफॉर्म" प्रसिद्ध झाले तेव्हा मी First M.B.B.S चा विद्यार्थी होतो. आपण कोणत्या विश्वात प्रवेश करतो आहोत याचे भान देणारे असे ते लेखन होते; पुढच्या काळात अनेक नामांकित कर्मयोगी डॉक्टरांचे साहित्य वाचण्याचे भाग्य मला लाभले.

तिसरा प्रकार कोरोनाच्या काळात उदयास आला. कोरोना विषाणुने आम्हाला श्वसनसंस्थेचा आजार आणि आमच्यातील लेखक साहित्यिकांना लेखनाच्या विविध विषयांचा नवा श्वास दिला. एवढ्याशा विषाणुवर खूप लिहिले गेले आणि कपाटाचा एक रॅकच नव्हे तर अख्खे कपाट भरेल एव्हढी साहित्यनिर्मिती झाली.

आरोग्य मराठी साहित्याचा जो चौथा वर्ग आहे तो दृक्-श्राव्य माध्यमातून आणि ई-Books च्या सदरात मोडणारा आहे. एकंदरच वाचक वर्ग आणि वाचनाची सवय कमी झाली आहे हे कटु सत्य आहे.

मला इथे हटकून गुलजार आठवितात - किताबें झांकती है बंद अलमारी के शीशों से, बडी हसरत से तकती है महीनों अब मुलाकाते नहीं होती, जो शामें उनकी सोहबत में कटा करती थी, अब, अक्सर गुजर जाती है, कम्युटर के पर्दो पर बडी बेचैन रहती है किताबें...

आरोग्य या विषयाचे माझ्या दृष्टीने महत्व काय ? मी जरी नावाने संजय असलो आणि विविध विषयांवर वृत्तनिवेदन आणि विश्लेषण करण्याचा माझा जन्मदत्त अधिकार मला माझ्या आई-वडिलांनी दिला असला तरी मी कर्माने आणि कणाकणाने अर्जुनाच्या रुपातला Surgeon आहे. Pen is mightier than surgical scalpel यावर माझा विश्वास आहे. गेल्या चार दशकांत आणि विशेष करून २०१२ सालापासून आजपर्यंत महाराष्ट्राच्या कानाकोपऱ्यात; गावोगावी जाऊन शल्यक्रियेची शिबीरे घडवून आणताना मला रुग्ण आणि रुग्णसंवेदना मिळाल्या आहेत.

जेव्हा एखाद्या गरजू व्यक्तीस उपचारासाठी लाखो रुपयांची मदत दिली जाते, आणि तो रुग्ण हात जोडून डोळ्यात अश्रू घेऊन आभार मानतो, तेव्हा ती भावना शब्दांत मांडता येत नाही. अशा हजारो रुग्णांचे तुम्ही आमच्यासाठी देवदूत आहात असे शब्द सर्वात मोठा पुरस्कार ठरतो.

आज संमेलनाच्या रुपाने वृक्ष संवर्धनासाठी एकत्र येताना आपण आपल्या बिया नीट रुजतील अशा खोलवर-दूरवर पेरण्याचा संकल्प करूया.`
  },
  "rugna-hakka-parishad": {
    id: "4",
    topic: "रुग्ण हक्क परिषद: रुग्णांच्या सशक्तीकरणासाठी एक सामाजिक क्रांती",
    author: "उमेश चव्हाण",
    authorTitle: "संस्थापक अध्यक्ष",
    authorImage: umeshChavanImage,
    featuredImage: umeshChavanImage,
    authorBio: "उमेश चव्हाण हे रुग्ण हक्क परिषद, महाराष्ट्र राज्याचे संस्थापक अध्यक्ष आहेत. त्यांनी रुग्णांच्या हक्कांसाठी अथक संघर्ष केला आहे.",
    date: "१९ ऑक्टोबर २०२५",
    content: `पुणे आरोग्य महोत्सव आणि पहिल्या आरोग्य साहित्य संमेलनाच्या निमित्ताने, 'स्वास्थ्य संदेश' या स्मरणिकेमार्फत आपणा सर्वांचे हार्दिक स्वागत! रुग्ण हक्क परिषद, महाराष्ट्र राज्य, मुख्यमंत्री सहायता निधी व धर्मदाय रुग्णालय मदत कक्ष, मंत्रालय, मुंबई आणि अखिल भारतीय मराठी चित्रपट महामंडळ यांच्या संयुक्त विद्यमाने आयोजित हा महोत्सव १९ ऑक्टोबर २०२५ रोजी बालगंधर्व रंगमंदिर, पुणे येथे साजरा होत आहे. स्वागताध्यक्ष आणि मुख्य संयोजक म्हणून, मला या ऐतिहासिक उपक्रमाचा संयोजक असण्याचा अभिमान वाटतो.

पुणे, हे सांस्कृतिक आणि शैक्षणिक राजधानी म्हणून ओळखले जाणारे शहर, आज आरोग्य आणि साहित्य यांच्या संगमाचे साक्षीदार होत आहे. पुणेकरांमध्ये आरोग्य जागरूकता वाढवणे, आधुनिक उपचार पद्धती सर्वसामान्यांपर्यंत पोहोचवणे आणि २५,००० ते ४०,००० नागरिकांना मोफत आरोग्य तपासणी व मार्गदर्शनाचा लाभ मिळवून देणे, हे प्रथम वर्षीचे आव्हान आम्ही पेलले आहे.

या स्मरणिकेतून, मी रुग्ण हक्क परिषदेच्या कार्याचा आढावा मांडत आहे, जी रुग्णांच्या हक्कांसाठी आणि सामाजिक न्यायासाठी लढणारी एक व्यापक चळवळ आहे. रुग्ण हक्क परिषद, महाराष्ट्र राज्य संघटनेची स्थापना २०१२ मध्ये करण्यात आली. जेव्हा मी स्वतः संघटना स्थापित करण्यासाठी एका रुग्णाच्या 'अन्यायग्रस्त' अनुभवातून प्रेरित झालो.

आज, परिषद महाराष्ट्रातील ३५ जिल्ह्यांमध्ये कार्यरत आहे, आणि १० लाखांहून अधिक रुग्णांना थेट किंवा अप्रत्यक्षपणे आम्ही मदत केली आहे. प्रत्येक रुग्णाला त्याचे कायदेशीर हक्क माहित असावेत आणि ते मागण्याची हिंमत असावी. भारताच्या घटनेच्या कलम २१ नुसार, जीवन जगण्याचा हक्क हा मूलभूत आहे, आणि त्यात दर्जेदार वैद्यकीय सेवा भारतीय संविधानात समाविष्ट आहे.

रुग्ण हक्क परिषदेला अनेक आव्हाने पेलावी लागत आहेत. खासगी रुग्णालयांची लॉबी, ग्रामीण भागातील जागरूकतेचा अभाव आणि कायद्याची कमकुवत अंमलबजावणी हे आरोग्य चळवळी पुढील प्रमुख अडथळे आहेत.

पहिल्या आरोग्य साहित्य संमेलनाचा स्वागत अध्यक्ष या नात्याने मी सांगतो की, रुग्ण हक्क परिषद ही केवळ एक संस्था नाही, तर लाखो रुग्णांचा आवाज ठरलेली आहे. या पुण्याईचा पराक्रम रचनाऱ्या चळवळीत सामील व्हा, असे आवाहन मी आपणास करतो.

संमेलनात सहभागी झालेल्या प्रत्येकाचे स्वागत करतो आणि आपले आभार मानतो! धन्यवाद!`
  },
  "arogyacha-sakha": {
    id: "5",
    topic: "आरोग्याचा सखा: रामेश्वर नाईक साहेब",
    author: "डॉ. केयुर धनंजयराव चौधरी",
    authorTitle: "लेखक",
    authorImage: undefined,
    featuredImage: rameshNaikImage,
    authorBio: "डॉ. केयुर धनंजयराव चौधरी यांनी रामेश्वर नाईक साहेबांच्या आरोग्य सेवा कार्याचे सुंदर वर्णन केले आहे.",
    date: "१९ ऑक्टोबर २०२५",
    content: `जामनेर तालुक्यातील गोद्री हे एक साधे गाव. मातीचा सुगंध, हिरव्यागार शेते, आणि साधेपणात गुंतलेले लोक. या गावातच जन्म झाला रामेश्वर नाईक यांचा. लहानपणापासूनच त्यांनी पाहिले की गावातील गरीब लोकांना योग्य आरोग्यसेवा मिळणे किती कठीण असते.

तरुणपणातच रामेश्वर नाईक समाजसेवेत सामील झाले. त्यांनी मा. मंत्री नामदार गिरीशभाऊ महाजन यांच्या मार्गदर्शनाखाली काम सुरू केले. जामनेर मतदारसंघातून सलग सहा वेळा विधानसभेवर निवडून आलेले हे लोकप्रतिनिधी. पण त्यांची ओळख केवळ एका मंत्री म्हणून नाही, तर एका आरोग्यसेवेच्या अखंड साधकाच्या रूपात आहे.

हळूहळू गांवागावातील रूग्ण मुंबईला सोबत घेवून जाऊन त्यांना मदत करू लागले. रुग्णाला दवाखान्यात दाखल करण्यापासून ते त्याला जेवणाची सोय, सोबत व्यक्तीला राहण्याची सोय व सर्व उपचार होईपर्यंत मदत करणे, आणि उपचार झाल्यावर रुग्ण व त्याच्या नातेवाईकांना रेल्वेत बसवून देण्यापर्यंत, काहींना तर रेल्वेचे तिकिट काढून देऊन आपल्या घरी पोहोचण्याचे काम केले. लोक त्यांच्यावर विश्वास ठेवू लागले.

त्यांच्या कार्याची दखल राज्यस्तरावर घेतली गेली. आणि एके दिवशी त्यांना एक मोठी जबाबदारी मिळाली मुख्यमंत्री सहाय्यता कक्ष, मुंबई येथे कक्षप्रमुख म्हणून नियुक्ती.

मा. मुख्यमंत्री देवेद्रजी फडणवीस यांच्या विचारानुसार मुख्यमंत्री सहायता निधीचा मुख्य उद्देश म्हणजे शेवटच्या, दुर्लक्षित आणि गरजू रुग्णाला वैद्यकीय मदत मिळावी. यातून अनेक रुग्णांनाः मोफत शस्त्रक्रिया, कॅन्सर व हृदयरोग उपचार, बालकांसाठी यकृत व मेंदूच्या आजारावर उपचार, तातडीच्या केसेससाठी त्वरित निधी.

आजपर्यंत श्री. रामेश्वर नाईक यांच्या मार्गदर्शनाखालीः ५० लाखांहून अधिक रुग्णांना मदत पोहोचवली गेली. ग्रामीण, आदिवासी आणि दुर्लक्षित भागात मोफत उपचार सेवा. हजारो गरीब रुग्णांना मोफत बेड, औषधे, शस्त्रक्रिया यांचा लाभ मिळाला.

मा. मुख्यमंत्री देवेंद्रजी फडणवीस यांच्या दूरदृष्टीमुळे आणि जनहितैषी धोरणांमुळे मुख्यमंत्री सहायता निधी कक्षाचा कारभार प्रभावी बनवला गेला. त्यांच्या नेतृत्वामुळेच ही योजना शासनाच्या कागदावर न राहता, जनतेच्या जीवनात उतरली.

श्री. रामेश्वर नाईक हे या कक्षाचे हृदय आहेत. प्रशासकीय शिस्त, मानवी संवेदना आणि टीमचे योग्य नेतृत्व हे त्यांच्या कार्यशैलीचे वैशिष्ट्य आहे. गोद्री गावातून मुंबई मंत्रालयापर्यंतचा हा प्रवास हा आशा, विश्वास आणि समर्पणाचा प्रवास आहे.`
  }
};

// All articles in order for navigation
const allArticles = [
  {
    slug: "shubhechha-sandesh",
    number: "०१",
    topic: "शुभेच्छा संदेश",
    author: "देवेंद्र फडणवीस",
    excerpt: "महाराष्ट्राचे मुख्यमंत्री देवेंद्र फडणवीस यांचा पहिल्या आरोग्य साहित्य संमेलनासाठी शुभेच्छा संदेश...",
    authorImage: devendaraFadnavisImage
  },
  {
    slug: "sampadakiya",
    number: "०२",
    topic: "संपादकीय",
    author: "डॉ. अविनाश भोंडवे",
    excerpt: "साहित्य म्हणजे समाजाचं आरसा असतो आणि आरोग्य हे त्या समाजाच्या जीवनशक्तीचं प्रतिबिंब...",
    authorImage: avinashBhondweImage
  },
  {
    slug: "adhyakshiya-bhashan",
    number: "०३",
    topic: "अध्यक्षीय मनोगत",
    author: "डॉ. संजय ओक",
    excerpt: "पहिल्या मराठी आरोग्य संमेलनाच्या अध्यक्षपदाचा सन्मान मिळाल्याबद्दल आभार...",
    authorImage: sanjayOakImage
  },
  {
    slug: "rugna-hakka-parishad",
    number: "०४",
    topic: "रुग्ण हक्क परिषद",
    author: "उमेश चव्हाण",
    excerpt: "रुग्णांच्या हक्कांसाठी आणि सामाजिक न्यायासाठी लढणारी एक व्यापक चळवळ...",
    authorImage: umeshChavanImage
  },
  {
    slug: "arogyacha-sakha",
    number: "०५",
    topic: "आरोग्याचा सखा",
    author: "डॉ. केयुर धनंजयराव चौधरी",
    excerpt: "मुख्यमंत्री सहाय्यता कक्षाचे प्रमुख रामेश्वर नाईक यांच्या आरोग्य सेवा कार्याचे वर्णन...",
    authorImage: rameshNaikImage
  }
];

// Function to get next articles based on current slug
const getNextArticles = (currentSlug: string | undefined) => {
  if (!currentSlug) return [];
  
  const currentIndex = allArticles.findIndex(article => article.slug === currentSlug);
  if (currentIndex === -1) return [];
  
  // Get next 2 articles, wrapping around if needed
  const nextArticles = [];
  for (let i = 1; i <= 2; i++) {
    const nextIndex = (currentIndex + i) % allArticles.length;
    nextArticles.push(allArticles[nextIndex]);
  }
  
  return nextArticles;
};
const ArticleDetail = () => {
  const {
    slug
  } = useParams();
  const article = slug ? articles[slug] : null;
  const relatedArticles = getNextArticles(slug);
  
  // Get current article number
  const currentArticleIndex = allArticles.findIndex(a => a.slug === slug);
  const currentArticleNumber = currentArticleIndex !== -1 ? allArticles[currentArticleIndex].number : "";
  const totalArticles = "०५";
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = article ? `${article.topic} - ${article.author}` : "";
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'x':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
        break;
      case 'instagram':
        // Instagram doesn't have a direct share URL, so we copy to clipboard
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard! Share it on Instagram.');
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
            {/* Progress Indicator */}
            {currentArticleNumber && (
              <div className="mb-4">
                <span className="inline-block bg-[#FF0080] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  लेख {currentArticleNumber} / {totalArticles}
                </span>
              </div>
            )}
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              {article.topic}
            </h1>
            
            {/* Author Info - Single line with circular photo */}
            <div className="flex items-center justify-center gap-3 text-white/90 text-sm md:text-base mb-6">
              {/* Circular Author Photo */}
              {article.authorImage && <img src={article.authorImage} alt={article.author} className="w-12 h-12 rounded-full object-cover border-2 border-white/30" />}
              
              {/* Metadata - All on one line */}
              <div className="flex items-center gap-2">
                <span className="font-semibold">लेखक: {article.author}</span>
                {article.authorTitle && (
                  <>
                    <span className="text-white/50">•</span>
                    <span className="text-white/80">{article.authorTitle}</span>
                  </>
                )}
                <span className="text-white/50">|</span>
                <span className="text-white/80">{article.date}</span>
              </div>
            </div>

            {/* Breadcrumb Navigation */}
            <div className="flex justify-center">
              <Link 
                to="/souvenir" 
                className="text-[#FF0080] hover:text-[#FF0080]/80 hover:underline text-sm font-medium inline-flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                स्मरणिका मुख्य पान
              </Link>
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
          {/* Official Emblem - Only for Chief Minister's article */}
          {slug === "shubhechha-sandesh" && (
            <div className="text-center mb-8">
              <img src={emblemImage} alt="Emblem of India" className="w-20 h-20 mx-auto mb-2 object-contain" />
              <p className="text-lg font-bold text-hero-navy">सत्यमेव जयते</p>
            </div>
          )}

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
              <div className="w-full h-[800px] border border-gray-200 rounded-lg overflow-hidden mb-4">
                <iframe 
                  src={`${article.pdfLink}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`} 
                  className="w-full h-full" 
                  title="शुभेच्छा पत्र" 
                />
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
          <div className="flex gap-4 flex-wrap">
              <Button onClick={() => handleShare('facebook')} size="lg" className="bg-[#1877F2] hover:bg-[#1877F2]/90 text-white rounded-full min-w-[140px]">
                <Facebook className="w-5 h-5 mr-2" />
                Facebook
              </Button>
              <Button onClick={() => handleShare('x')} size="lg" className="bg-black hover:bg-black/90 text-white rounded-full min-w-[140px]">
                <X className="w-5 h-5 mr-2" />
                X
              </Button>
              <Button onClick={() => handleShare('whatsapp')} size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-full min-w-[140px]">
                <Share2 className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
              <Button onClick={() => handleShare('instagram')} size="lg" className="bg-[#E4405F] hover:bg-[#E4405F]/90 text-white rounded-full min-w-[140px]">
                <Instagram className="w-5 h-5 mr-2" />
                Instagram
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
              {relatedArticles.map(relatedArticle => <div key={relatedArticle.slug} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all overflow-hidden group border border-gray-100 flex flex-col">
                  {/* Card Image */}
                  <div className="h-40 overflow-hidden bg-gradient-to-br from-hero-navy to-[#1a1a4a]">
                    {relatedArticle.authorImage && (
                      <img 
                        src={relatedArticle.authorImage} 
                        alt={relatedArticle.topic} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80" 
                      />
                    )}
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-5 flex flex-col flex-1">
                    {/* Article Number Badge */}
                    <div className="w-8 h-8 rounded-full bg-[#FF0080] flex items-center justify-center mb-3">
                      <span className="text-white font-bold text-sm">{relatedArticle.number}</span>
                    </div>
                    
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
                    <Link 
                      to={`/article/${relatedArticle.slug}`}
                      className="text-[#555555] hover:text-[#555555]/80 font-medium text-sm transition-colors inline-flex items-center gap-1 mt-auto my-0 mx-0 px-0 py-[10px]"
                    >
                      पुढे वाचा
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>)}
            </div>
            
            {/* Bottom Navigation Button */}
            <div className="text-center mt-8">
              <Link to="/souvenir">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-[#000F93] text-[#000F93] hover:bg-[#000F93] hover:text-white font-semibold px-8"
                >
                  सर्व लेख पहा
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </main>

      <Footer />
    </div>;
};
export default ArticleDetail;