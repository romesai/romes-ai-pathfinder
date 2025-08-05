import { Heart, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
              Romes
            </div>
            <p className="text-background/80 mb-6 max-w-md">
              Empowering F-1 students to navigate their immigration journey with confidence. Built by immigrants, for immigrants.
            </p>
            <div className="flex items-center gap-2 text-background/60">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Made with love for the immigrant community</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#features" className="hover:text-background transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-background transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="hover:text-background transition-colors">Pricing</a></li>
              <li><a href="#faq" className="hover:text-background transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Contact</h4>
            <ul className="space-y-3 text-background/80">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:help@romes.com" className="hover:text-background transition-colors">
                  help@romes.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-background/60 text-sm">
            © 2024 Romes. All rights reserved.
          </div>
          <div className="flex gap-6 text-background/60 text-sm">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-background transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;