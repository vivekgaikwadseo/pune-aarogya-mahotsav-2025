import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Guests = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8">पाहुणे आणि मान्यवर</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-muted-foreground mb-6">
            पाहुणे आणि मान्यवरांची माहिती येथे येईल...
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Guests;
