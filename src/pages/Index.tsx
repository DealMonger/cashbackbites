import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ReviewCard from "@/components/ReviewCard";
import RewardsHighlight from "@/components/RewardsHighlight";
import Footer from "@/components/Footer";

import italianImage from "@/assets/restaurant-italian.jpg";
import ramenImage from "@/assets/restaurant-ramen.jpg";
import tacosImage from "@/assets/restaurant-tacos.jpg";

const reviews = [
  {
    id: 1,
    slug: "osteria-bella-vista",
    image: italianImage,
    name: "Osteria Bella Vista",
    cuisine: "Italian",
    rating: 5,
    excerpt: "The carbonara here is the real deal—silky, peppery, and absolutely divine. Worth every penny, especially when you know the secret to getting 8% back.",
    cashbackTip: "Use Chase Sapphire Preferred + Rakuten for 8% back",
    cashbackPercent: "8% Back",
    date: "Jan 5, 2026",
  },
  {
    id: 2,
    slug: "menya-ichiban",
    image: ramenImage,
    name: "Menya Ichiban",
    cuisine: "Japanese",
    rating: 4,
    excerpt: "Rich tonkotsu broth with perfectly chewy noodles. The chashu melts in your mouth. A hidden gem with even more hidden savings.",
    cashbackTip: "Stack Amex Gold (4x) + Seated app for bonus rewards",
    cashbackPercent: "6% Back",
    date: "Jan 2, 2026",
  },
  {
    id: 3,
    slug: "taqueria-la-gloria",
    image: tacosImage,
    name: "Taqueria La Gloria",
    cuisine: "Mexican",
    rating: 5,
    excerpt: "Authentic al pastor with fresh pineapple and the perfect char. The salsa verde alone is worth the trip. Plus, Tuesday deals make it even sweeter.",
    cashbackTip: "Visit on Taco Tuesday + Capital One Savor for 4% back",
    cashbackPercent: "4% Back",
    date: "Dec 28, 2025",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        
        {/* Reviews Section */}
        <section id="reviews" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">
                Fresh from the Table
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Latest Restaurant Reviews
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Honest takes on the best (and sometimes not-so-best) spots in town, 
                complete with strategies to maximize your rewards.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review) => (
                <ReviewCard key={review.id} {...review} />
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all">
                View All Reviews
              </button>
            </div>
          </div>
        </section>

        <RewardsHighlight />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
