import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FlipBookViewer from "@/components/FlipBookViewer";
import { FileDown, AlertTriangle } from "lucide-react";
import { useState } from "react";

const PDF_URL = "https://drive.google.com/uc?export=view&id=1Uk1Suvn08EDTmxHRTpao5L8ZcTvIAbRT";
const DOWNLOAD_URL = "https://drive.google.com/uc?export=download&id=1Uk1Suvn08EDTmxHRTpao5L8ZcTvIAbRT";

const Karyavruttant = () => {
  const [viewerError, setViewerError] = useState(false);
  const [showViewer, setShowViewer] = useState(false);

  return (
    <div className="min-h-screen bg-muted/30">
      <Navigation />

      {/* Hero Header */}
      <div className="relative bg-hero-navy text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-heading">
            कार्यवृतांत
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            पुणे आरोग्य महोत्सव २०२५ कार्यवृतांत वाचा आणि डाउनलोड करा
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-8 relative z-10 pb-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Intro Section */}
          <div className="text-center py-8 px-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
              कार्यवृतांत वाचा आणि डाउनलोड करा
            </h2>
            <p className="text-muted-foreground mb-2 max-w-2xl mx-auto">
              पुणे आरोग्य महोत्सव २०२५ चा संपूर्ण कार्यवृतांत खाली पाहा
            </p>
          </div>

          {/* Large file notice + optional viewer */}
          <div className="text-center py-8 px-6 bg-amber-50 border border-amber-200 rounded-2xl mb-8">
            <AlertTriangle className="w-10 h-10 text-amber-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">मोठी फाइल सूचना</h3>
            <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
              हा कार्यवृतांत PDF खूप मोठा (१.५ GB) आहे. सर्वोत्तम अनुभवासाठी, कृपया PDF डाउनलोड करा.
            </p>
            {!showViewer && (
              <button
                onClick={() => setShowViewer(true)}
                className="text-sm text-primary underline hover:no-underline"
              >
                तरीही ऑनलाइन पाहण्याचा प्रयत्न करा (हळू लोड होऊ शकते)
              </button>
            )}
          </div>

          {/* Interactive FlipBook Viewer - shown on demand */}
          {showViewer && !viewerError && (
            <div className="w-full overflow-hidden">
              <FlipBookViewer pdfUrl={PDF_URL} />
            </div>
          )}

          {/* Download Button */}
          <div className="text-center mt-16 py-8">
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: "#FF0080" }}
            >
              <FileDown className="w-6 h-6" />
              कार्यवृतांत PDF डाउनलोड करा
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Karyavruttant;
