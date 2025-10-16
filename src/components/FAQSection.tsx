import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "या कार्यक्रमासाठी प्रवेश शुल्क आहे का?",
      answer: "नाही, हा कार्यक्रम सर्वांसाठी पूर्णपणे विनामूल्य आहे."
    },
    {
      question: "आरोग्य शिबिरासाठी येताना कोणती कागदपत्रे आणावीत?",
      answer: "कृपया आपले आधार कार्ड आणि रेशनिंग कार्ड सोबत आणावे. जुने वैद्यकीय रिपोर्ट्स असल्यास तेही सोबत ठेवा."
    },
    {
      question: "कार्यक्रमाचे स्थळ कुठे आहे?",
      answer: "सर्व कार्यक्रम बालगंधर्व रंगमंदिर, पुणे येथे आयोजित केले आहेत."
    },
    {
      question: "नोंदणी करणे आवश्यक आहे का?",
      answer: "आरोग्य शिबिराचा लाभ घेण्यासाठी पूर्व-नोंदणी करणे सोयीचे ठरेल, जेणेकरून तुमचा वेळ वाचेल."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl font-bold text-hero-navy text-center mb-12">
            वारंवार विचारले जाणारे प्रश्न
          </h2>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-md border-0 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-50 transition-colors">
                  <span className="text-lg font-semibold text-hero-navy pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-hero-grey leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
