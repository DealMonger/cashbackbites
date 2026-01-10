import { ExternalLink } from "lucide-react";

const affiliateLinks = [
  {
    name: "Chase Sapphire Preferred",
    description: "Earn 3x points on dining + $50 annual hotel credit",
    url: "#",
  },
  {
    name: "American Express Gold",
    description: "4x points at restaurants worldwide",
    url: "#",
  },
  {
    name: "Capital One SavorOne",
    description: "3% cash back on dining with no annual fee",
    url: "#",
  },
  {
    name: "Rakuten",
    description: "Up to 10% cash back at select restaurants",
    url: "#",
  },
];

const AffiliateLinks = () => {
  return (
    <section className="py-12 border-t border-border">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
          My Favorite Rewards Tools
        </h2>
        <p className="text-muted-foreground mb-6">
          These are the cards and apps I use to maximize savings. Using these links supports the blog.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {affiliateLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors group"
            >
              <div className="flex-1">
                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {link.name}
                </h3>
                <p className="text-sm text-muted-foreground">{link.description}</p>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AffiliateLinks;
