import { CreditCard, Percent, Gift, TrendingUp } from "lucide-react";

const rewards = [
  {
    icon: CreditCard,
    title: "Credit Card Stacking",
    description: "Combine the right cards for up to 10% back on dining",
  },
  {
    icon: Percent,
    title: "Cash Back Apps",
    description: "Stack Rakuten, Dosh, and more for hidden savings",
  },
  {
    icon: Gift,
    title: "Loyalty Programs",
    description: "Maximize points from restaurant loyalty programs",
  },
  {
    icon: TrendingUp,
    title: "Timing Secrets",
    description: "When to dine for the best rewards multipliers",
  },
];

const RewardsHighlight = () => {
  return (
    <section id="secrets" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">
            The Insider Guide
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Secrets to Earning More
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every review includes my tried-and-tested strategies for maximizing cash back and rewards at that restaurant.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rewards.map((reward, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-warm hover:shadow-golden transition-all duration-300 border border-border group hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-golden/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-golden/30 transition-colors">
                <reward.icon className="h-6 w-6 text-golden" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {reward.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reward.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RewardsHighlight;
