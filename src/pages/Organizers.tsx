import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Organizers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8">आयोजक आणि प्रायोजक</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-muted-foreground mb-6">
            आयोजक आणि प्रायोजकांची माहिती येथे येईल...
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Organizers;
