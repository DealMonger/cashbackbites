import { ChefHat, Mail, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="about" className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ChefHat className="h-8 w-8 text-golden" />
              <span className="font-serif text-xl font-bold">Savory Secrets</span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed">
              A food lover's guide to dining well while earning cash back and rewards on every meal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-golden transition-colors">
                  Latest Reviews
                </a>
              </li>
              <li>
                <a href="#secrets" className="text-primary-foreground/70 hover:text-golden transition-colors">
                  Rewards Secrets
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-golden transition-colors">
                  Best Credit Cards
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-golden transition-colors">
                  Cash Back Apps
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-primary-foreground/70 mb-4">
              Get the latest reviews and rewards tips in your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-golden"
              />
              <button className="bg-golden hover:bg-golden-light text-accent-foreground px-4 py-2 rounded-lg font-medium transition-colors">
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2026 Savory Secrets. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-primary-foreground/50 hover:text-golden transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-primary-foreground/50 hover:text-golden transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
