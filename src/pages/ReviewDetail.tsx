import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowLeft, CreditCard, Percent, Calendar, MapPin } from "lucide-react";

import italianImage from "@/assets/restaurant-italian.jpg";
import ramenImage from "@/assets/restaurant-ramen.jpg";
import tacosImage from "@/assets/restaurant-tacos.jpg";

const reviewsData: Record<string, {
  id: number;
  image: string;
  name: string;
  cuisine: string;
  rating: number;
  location: string;
  date: string;
  cashbackPercent: string;
  intro: string;
  fullReview: string[];
  dishes: { name: string; description: string; price: string }[];
  rewardsBreakdown: { method: string; percent: string; details: string; icon: string }[];
  tips: string[];
}> = {
  "osteria-bella-vista": {
    id: 1,
    image: italianImage,
    name: "Osteria Bella Vista",
    cuisine: "Italian",
    rating: 5,
    location: "123 Main Street, Downtown",
    date: "January 5, 2026",
    cashbackPercent: "8%",
    intro: "The carbonara here is the real deal—silky, peppery, and absolutely divine. Worth every penny, especially when you know the secret to getting 8% back.",
    fullReview: [
      "Walking into Osteria Bella Vista feels like stepping into a cozy trattoria in Rome. The warm lighting, exposed brick walls, and the gentle hum of Italian conversation create an atmosphere that immediately puts you at ease.",
      "We started with the burrata appetizer—creamy, fresh, and drizzled with the most fragrant olive oil I've tasted outside of Italy. The bread basket that accompanied it was still warm from the oven.",
      "The star of the evening was undoubtedly the carbonara. Made the traditional Roman way with guanciale (not bacon!), pecorino Romano, and perfectly emulsified egg yolks, each bite was a masterclass in Italian simplicity. The pasta was cooked al dente, with just enough starchy pasta water worked into the sauce to create that signature silky texture.",
      "For dessert, the tiramisu was light yet indulgent, with the perfect balance of espresso-soaked ladyfingers and mascarpone cream. A fitting end to an exceptional meal."
    ],
    dishes: [
      { name: "Burrata Appetizer", description: "Fresh burrata with heirloom tomatoes and basil", price: "$18" },
      { name: "Carbonara", description: "Classic Roman style with guanciale and pecorino", price: "$24" },
      { name: "Tiramisu", description: "House-made with espresso and mascarpone", price: "$12" }
    ],
    rewardsBreakdown: [
      { method: "Chase Sapphire Preferred", percent: "3x", details: "3x points on dining (worth ~4.5% toward travel)", icon: "💳" },
      { method: "Rakuten Dining", percent: "5%", details: "Link your card and earn 5% cash back at participating restaurants", icon: "🛒" },
      { method: "Chase Offers", percent: "Bonus", details: "Check for targeted 10% back offers on Italian restaurants", icon: "🎯" }
    ],
    tips: [
      "Book through Rakuten Dining for an extra 5% cash back on top of your credit card rewards",
      "Chase Sapphire cardholders can stack with Chase Offers for potential 10%+ total returns",
      "Visit during Restaurant Week for prix fixe menus at a discount",
      "Sign up for their email list—they send 15% off coupons for birthdays"
    ]
  },
  "menya-ichiban": {
    id: 2,
    image: ramenImage,
    name: "Menya Ichiban",
    cuisine: "Japanese",
    rating: 4,
    location: "456 Noodle Lane, Japantown",
    date: "January 2, 2026",
    cashbackPercent: "6%",
    intro: "Rich tonkotsu broth with perfectly chewy noodles. The chashu melts in your mouth. A hidden gem with even more hidden savings.",
    fullReview: [
      "Menya Ichiban is the kind of ramen shop that ramen purists dream about. Tucked away in a nondescript corner of Japantown, it's easy to miss—but once you find it, you'll never forget the way.",
      "The tonkotsu broth here is simmered for over 24 hours, resulting in a creamy, pork-bone richness that coats your palate without being overwhelmingly heavy. It's the kind of broth that makes you want to drink every last drop.",
      "The noodles are made fresh daily, with that perfect chewy texture that Japanese call 'koshi.' You can customize your noodle firmness, but I recommend 'kata' (firm) for the best experience.",
      "The chashu pork is braised to perfection—fatty yet not greasy, with a caramelized edge from the torch. Add a perfectly soft-boiled ajitama egg, and you have ramen nirvana."
    ],
    dishes: [
      { name: "Tonkotsu Ramen", description: "24-hour pork bone broth with chashu", price: "$16" },
      { name: "Ajitama Egg", description: "Soft-boiled marinated egg", price: "$2" },
      { name: "Gyoza", description: "Pan-fried pork dumplings", price: "$8" }
    ],
    rewardsBreakdown: [
      { method: "Amex Gold Card", percent: "4x", details: "4x Membership Rewards on restaurants worldwide", icon: "💳" },
      { method: "Seated App", percent: "2-30%", details: "Earn rewards for dining at participating restaurants", icon: "📱" },
      { method: "Amex Offers", percent: "Varies", details: "Check for targeted offers on Japanese restaurants", icon: "🎯" }
    ],
    tips: [
      "Use the Seated app to book and earn up to 30% back in gift cards",
      "Amex Gold gives 4x points on dining—pair with Seated for double-dipping",
      "Visit during lunch for slightly lower prices on the same quality ramen",
      "Ask about their stamp card—10 visits gets you a free bowl"
    ]
  },
  "taqueria-la-gloria": {
    id: 3,
    image: tacosImage,
    name: "Taqueria La Gloria",
    cuisine: "Mexican",
    rating: 5,
    location: "789 Salsa Street, Mission District",
    date: "December 28, 2025",
    cashbackPercent: "4%",
    intro: "Authentic al pastor with fresh pineapple and the perfect char. The salsa verde alone is worth the trip. Plus, Tuesday deals make it even sweeter.",
    fullReview: [
      "La Gloria doesn't try to be fancy—and that's exactly what makes it exceptional. This is authentic Mexican street food elevated to an art form, served in a no-frills setting that lets the food do all the talking.",
      "The al pastor here is carved fresh from the trompo, each slice carrying that perfect balance of spiced pork, caramelized pineapple, and smoky char. Topped with fresh cilantro and diced onion, nestled in a warm corn tortilla—it's taco perfection.",
      "Don't skip the salsa bar. The salsa verde has a bright, tomatillo tang with just enough heat to wake up your taste buds, while the habanero salsa is for those who like to live dangerously. Both are made fresh daily.",
      "The horchata is house-made and perfectly sweet, with real cinnamon that complements the spicier dishes beautifully."
    ],
    dishes: [
      { name: "Al Pastor Tacos (3)", description: "Spit-roasted pork with pineapple", price: "$9" },
      { name: "Carnitas Plate", description: "Slow-braised pork with rice and beans", price: "$14" },
      { name: "Horchata", description: "House-made rice drink with cinnamon", price: "$4" }
    ],
    rewardsBreakdown: [
      { method: "Capital One Savor", percent: "4%", details: "4% cash back on dining and entertainment", icon: "💳" },
      { method: "Taco Tuesday Special", percent: "20% off", details: "Discounted tacos every Tuesday", icon: "🌮" },
      { method: "Capital One Offers", percent: "Bonus", details: "Check for targeted local restaurant offers", icon: "🎯" }
    ],
    tips: [
      "Visit on Taco Tuesday for 20% off all tacos",
      "Capital One Savor gives a flat 4% back on all dining—no rotating categories",
      "They have a punch card: buy 10 tacos, get 3 free",
      "Follow them on Instagram for flash deals and secret menu items"
    ]
  }
};

const ReviewDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const review = slug ? reviewsData[slug] : null;

  if (!review) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-6 py-20 text-center">
          <h1 className="font-serif text-3xl font-bold text-foreground mb-4">Review Not Found</h1>
          <p className="text-muted-foreground mb-8">Sorry, we couldn't find that review.</p>
          <Link to="/" className="text-primary hover:underline">← Back to Home</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Image */}
        <div className="relative h-[50vh] overflow-hidden">
          <img 
            src={review.image} 
            alt={review.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <Link to="/#reviews" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors">
                <ArrowLeft size={16} />
                <span>Back to Reviews</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="container mx-auto px-6 py-12 max-w-4xl">
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="terracotta">{review.cuisine}</Badge>
              <Badge variant="golden" className="gap-1">
                <Percent size={12} />
                {review.cashbackPercent} Back
              </Badge>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              {review.name}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span>{review.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>{review.date}</span>
              </div>
            </div>

            <div className="flex items-center gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className={i < review.rating ? "fill-golden text-golden" : "text-muted"}
                />
              ))}
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-6">
              {review.intro}
            </p>
          </header>

          {/* Full Review */}
          <section className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">The Full Experience</h2>
            <div className="prose prose-lg max-w-none">
              {review.fullReview.map((paragraph, idx) => (
                <p key={idx} className="text-foreground/90 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* What We Ordered */}
          <section className="mb-12 bg-muted/30 rounded-2xl p-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">What We Ordered</h2>
            <div className="space-y-4">
              {review.dishes.map((dish, idx) => (
                <div key={idx} className="flex justify-between items-start border-b border-border pb-4 last:border-0 last:pb-0">
                  <div>
                    <h3 className="font-semibold text-foreground">{dish.name}</h3>
                    <p className="text-sm text-muted-foreground">{dish.description}</p>
                  </div>
                  <span className="font-semibold text-primary">{dish.price}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Rewards Breakdown */}
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <CreditCard className="text-primary" size={24} />
              <h2 className="font-serif text-2xl font-bold text-foreground">Rewards Breakdown</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {review.rewardsBreakdown.map((reward, idx) => (
                <div key={idx} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">{reward.icon}</div>
                  <h3 className="font-semibold text-foreground mb-1">{reward.method}</h3>
                  <p className="text-2xl font-bold text-primary mb-2">{reward.percent}</p>
                  <p className="text-sm text-muted-foreground">{reward.details}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pro Tips */}
          <section className="bg-primary/10 rounded-2xl p-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">💰 Pro Tips to Maximize Savings</h2>
            <ul className="space-y-3">
              {review.tips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-foreground/90">{tip}</span>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ReviewDetail;
