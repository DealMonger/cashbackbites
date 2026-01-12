const IntroSection = () => {
  return (
    <section className="py-12 border-b border-border">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
          Why Cash Back Bites?
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I love eating out, but I hate paying full price. After years of stacking credit card rewards, 
            cashback apps, and loyalty programs, I realized I was saving hundreds of dollars a month on 
            dining—and nobody was talking about it.
          </p>
          <p>
            <strong className="text-foreground">Cash Back Bites</strong> is my way of sharing those secrets. 
            Every review includes the exact strategies I used to save money, from the credit card I paid with 
            to the apps I checked before walking in.
          </p>
          <p>
            My mission is simple: <em className="text-foreground">help you eat better for less.</em> Drop a 
            comment on any review, and I'll personally share the referral links and step-by-step instructions 
            to get you started.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
