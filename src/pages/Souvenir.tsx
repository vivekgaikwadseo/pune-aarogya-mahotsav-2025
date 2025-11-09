import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Souvenir = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">स्मरणिका</h1>
          {/* Content will be added here */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Souvenir;
