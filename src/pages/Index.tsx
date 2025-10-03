import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-purple bg-clip-text text-transparent">
              पुणे आरोग्य महोत्सव २०२५
            </h1>
            <p className="text-xl md:text-2xl text-foreground mb-8 font-medium">
              पुण्यातील सर्वात मोठा आरोग्य आणि निरोगी जीवनशैली महोत्सव
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/events">
                <Button size="lg" className="text-lg px-8 bg-accent hover:bg-accent/90">
                  कार्यक्रम पहा
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  संपर्क साधा
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            महोत्सवाची वैशिष्ट्ये
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-card border-2 border-border hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏥</span>
              </div>
              <h3 className="text-xl font-bold mb-3">भव्य आरोग्य शिबिर</h3>
              <p className="text-muted-foreground">
                मोफत आरोग्य तपासणी आणि तज्ञ डॉक्टरांचे मार्गदर्शन
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-card border-2 border-border hover:border-secondary transition-colors">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎤</span>
              </div>
              <h3 className="text-xl font-bold mb-3">प्रख्यात वक्ते</h3>
              <p className="text-muted-foreground">
                आरोग्य क्षेत्रातील तज्ञांचे प्रेरणादायी भाषण
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-card border-2 border-border hover:border-accent transition-colors">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎪</span>
              </div>
              <h3 className="text-xl font-bold mb-3">विविध कार्यक्रम</h3>
              <p className="text-muted-foreground">
                योग, व्यायाम, पोषण आणि निरोगी जीवनशैलीचे कार्यशाळा
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
