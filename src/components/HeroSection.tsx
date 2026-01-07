import heroImage from "@/assets/hero-food.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautifully plated gourmet dish"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <p className="text-golden font-medium tracking-widest uppercase text-sm mb-4 animate-fade-in">
          Eat Smart. Earn More.
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Savor Every Bite,
          <br />
          <span className="text-gradient-golden">Save Every Time</span>
        </h1>
        <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          Honest restaurant reviews paired with insider secrets on earning cash back and rewards. 
          Because great food should come with great savings.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-warm">
            Explore Reviews
          </button>
          <button className="bg-golden hover:bg-golden-light text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-golden">
            View Rewards Secrets
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
