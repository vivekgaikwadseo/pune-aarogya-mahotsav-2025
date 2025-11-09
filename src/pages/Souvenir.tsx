import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Souvenir = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Header Section */}
        <section className="relative bg-navy py-20 overflow-hidden">
          {/* Dot pattern overlay */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center font-heading">
              आरोग्य संदेश स्मरणिका
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-navy text-center mb-12 font-heading">
              "आरोग्य, सेवा आणि साहित्य यांचा भव्य संगम"
            </h2>
            
            {/* Article cards will be added here */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Souvenir;
