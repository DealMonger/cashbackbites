import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import SearchBar from "@/components/SearchBar";
import ReviewCard from "@/components/ReviewCard";
import AffiliateLinks from "@/components/AffiliateLinks";
import Footer from "@/components/Footer";

import italianImage from "@/assets/restaurant-italian.jpg";
import ramenImage from "@/assets/restaurant-ramen.jpg";
import tacosImage from "@/assets/restaurant-tacos.jpg";

const reviews = [
  {
    id: 1,
    slug: "osteria-bella-vista",
    image: italianImage,
    name: "Osteria Bella Vista Review: Amazing Carbonara + How I Saved $12",
    cuisine: "Italian",
    excerpt: "The carbonara here is the real deal—silky, peppery, and absolutely divine. But the best part? I walked out paying $12 less than the menu price.",
    savings: "$12.40",
    date: "Jan 5, 2026",
  },
  {
    id: 2,
    slug: "menya-ichiban",
    image: ramenImage,
    name: "Menya Ichiban: The Best Ramen in Town + $8 in Savings",
    cuisine: "Japanese",
    excerpt: "This tiny ramen shop serves the most authentic tonkotsu I've had outside Japan. And yes, I found ways to save even on a $26 meal.",
    savings: "$8.20",
    date: "Jan 2, 2026",
  },
  {
    id: 3,
    slug: "taqueria-la-gloria",
    image: tacosImage,
    name: "Taqueria La Gloria: $9 Tacos That Taste Like $20 (Plus My Savings)",
    cuisine: "Mexican",
    excerpt: "The best al pastor tacos in the city, hands down. And if you time it right, you can save 20%+ on every visit.",
    savings: "$6.50",
    date: "Dec 28, 2025",
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredReviews = useMemo(() => {
    if (!searchQuery.trim()) return reviews;
    const query = searchQuery.toLowerCase();
    return reviews.filter(
      (review) =>
        review.name.toLowerCase().includes(query) ||
        review.cuisine.toLowerCase().includes(query) ||
        review.excerpt.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <IntroSection />
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        
        {/* Reviews Section */}
        <section id="reviews" className="py-12">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
              Latest Reviews
            </h2>
            <p className="text-muted-foreground mb-8">
              Real restaurants, real savings. Click any review to see exactly how I saved.
            </p>

            <div>
              {filteredReviews.length > 0 ? (
                filteredReviews.map((review) => (
                  <ReviewCard key={review.id} {...review} />
                ))
              ) : (
                <p className="text-muted-foreground text-center py-8">
                  No reviews found matching "{searchQuery}"
                </p>
              )}
            </div>
          </div>
        </section>

        <AffiliateLinks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
