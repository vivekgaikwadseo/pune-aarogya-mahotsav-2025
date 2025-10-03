const Footer = () => {
  return (
    <footer className="border-t bg-card mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">
              पुणे आरोग्य महोत्सव २०२५
            </h3>
            <p className="text-muted-foreground">
              पुण्यातील सर्वात मोठा आरोग्य आणि निरोगी जीवनशैली महोत्सव
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">द्रुत दुवे</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/" className="hover:text-primary transition-colors">मुखपृष्ठ</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors">आमच्या विषयी</a></li>
              <li><a href="/events" className="hover:text-primary transition-colors">कार्यक्रम</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">संपर्क</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">संपर्क माहिती</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>पुणे, महाराष्ट्र</p>
              <p>ईमेल: info@punehealthfest.com</p>
              <p>फोन: +91 XXXXXXXXXX</p>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>© २०२५ पुणे आरोग्य महोत्सव. सर्व हक्क राखीव.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
