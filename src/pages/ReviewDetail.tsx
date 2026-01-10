import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommentSection from "@/components/CommentSection";
import { ArrowLeft, DollarSign } from "lucide-react";

import italianImage from "@/assets/restaurant-italian.jpg";
import ramenImage from "@/assets/restaurant-ramen.jpg";
import tacosImage from "@/assets/restaurant-tacos.jpg";

const reviewsData: Record<string, {
  id: number;
  image: string;
  name: string;
  cuisine: string;
  location: string;
  date: string;
  totalSpent: string;
  totalSaved: string;
  intro: string;
  fullReview: string[];
  savingsBreakdown: string;
  comments: { id: number; name: string; date: string; content: string; reply?: { content: string; date: string } }[];
}> = {
  "osteria-bella-vista": {
    id: 1,
    image: italianImage,
    name: "Osteria Bella Vista Review: Amazing Carbonara + How I Saved $12",
    cuisine: "Italian",
    location: "Downtown",
    date: "January 5, 2026",
    totalSpent: "$54",
    totalSaved: "$12.40",
    intro: "The carbonara here is the real deal—silky, peppery, and absolutely divine. But the best part? I walked out paying $12 less than the menu price.",
    fullReview: [
      "Osteria Bella Vista has been on my list for months, and it absolutely lived up to the hype. The atmosphere is cozy and authentic, with exposed brick and soft Italian music setting the perfect mood.",
      "I ordered the burrata appetizer ($18), the carbonara ($24), and tiramisu ($12). Total bill came to $54 before tip.",
      "But here's where it gets good—I didn't actually pay $54."
    ],
    savingsBreakdown: `**My exact savings breakdown:**

• **Chase Sapphire Preferred:** 3x points on the $54 = 162 points (worth ~$2.43 toward travel)
• **Rakuten Dining:** Had my card linked, earned 5% = $2.70 cash back  
• **Chase Offer:** There was a targeted 15% back offer for this restaurant = $8.10
• **Birthday signup:** Signed up for their email list last month, got a $2 off coupon

**Total saved: $12.40** (about 23% off my meal!)

Want the same setup? Drop a comment below and I'll send you my referral links for Chase Sapphire and Rakuten—you'll get bonus points/cash when you sign up.`,
    comments: [
      {
        id: 1,
        name: "Mike T.",
        date: "Jan 6, 2026",
        content: "This is awesome! How do I get the Rakuten Dining thing set up? Never heard of it.",
        reply: {
          content: "Hey Mike! Rakuten Dining is super easy—you link your credit card and it automatically tracks when you eat at participating restaurants. Here's my referral link: [rakuten.com/r/SAVORY123] You'll get $30 bonus after your first $30 purchase. Let me know if you have questions!",
          date: "Jan 6, 2026"
        }
      },
      {
        id: 2,
        name: "Sarah K.",
        date: "Jan 7, 2026",
        content: "Is Chase Sapphire worth the annual fee? I'm on the fence about signing up.",
        reply: {
          content: "Great question Sarah! The $95 annual fee is easily worth it if you spend at least $200/month on dining and travel. The 60k signup bonus alone is worth $900+ in travel. I can share my referral link which gives you the best current offer—just reply here or DM me!",
          date: "Jan 7, 2026"
        }
      }
    ]
  },
  "menya-ichiban": {
    id: 2,
    image: ramenImage,
    name: "Menya Ichiban: The Best Ramen in Town + $8 in Savings",
    cuisine: "Japanese",
    location: "Japantown",
    date: "January 2, 2026",
    totalSpent: "$26",
    totalSaved: "$8.20",
    intro: "This tiny ramen shop serves the most authentic tonkotsu I've had outside Japan. And yes, I found ways to save even on a $26 meal.",
    fullReview: [
      "Menya Ichiban is a hidden gem tucked away in Japantown. The line can get long during peak hours, but it's worth every minute of waiting.",
      "I went with the tonkotsu ramen ($16), added an ajitama egg ($2), and split a plate of gyoza ($8) with my friend. My portion came to $26.",
      "Here's how I made that even more affordable:"
    ],
    savingsBreakdown: `**My savings breakdown:**

• **Amex Gold Card:** 4x Membership Rewards = 104 points (worth ~$2.08)
• **Seated App:** Booked through Seated, earned 20% = $5.20 in gift card rewards
• **Stamp card:** This was my 10th visit, so I'm getting a free bowl next time ($16 value building up!)

**Total immediate savings: $8.20** (about 32% back!)

The Seated app is underrated for places like this. Comment below if you want my strategy for finding Seated restaurants in your area.`,
    comments: [
      {
        id: 1,
        name: "Jenny L.",
        date: "Jan 3, 2026",
        content: "I didn't know Seated worked for ramen places! How do you find which restaurants are on there?",
        reply: {
          content: "Jenny! The Seated app lets you search by location and cuisine. I always check it before going out to eat. Here's my referral: [seated.app/r/SAVORY] You'll get $5 toward your first meal. Pro tip: the rewards change daily, so sometimes you can get 30%+ back!",
          date: "Jan 3, 2026"
        }
      }
    ]
  },
  "taqueria-la-gloria": {
    id: 3,
    image: tacosImage,
    name: "Taqueria La Gloria: $9 Tacos That Taste Like $20 (Plus My Savings)",
    cuisine: "Mexican",
    location: "Mission District",
    date: "December 28, 2025",
    totalSpent: "$27",
    totalSaved: "$6.50",
    intro: "The best al pastor tacos in the city, hands down. And if you time it right, you can save 20%+ on every visit.",
    fullReview: [
      "La Gloria doesn't look like much from the outside, but step inside and you'll see the massive trompo spinning with al pastor pork. That's how you know it's legit.",
      "I got 3 al pastor tacos ($9), a carnitas plate ($14), and a horchata ($4). Total: $27.",
      "But I've been coming here strategically:"
    ],
    savingsBreakdown: `**My savings breakdown:**

• **Capital One Savor:** 4% dining cash back = $1.08
• **Taco Tuesday:** I specifically came on Tuesday for 20% off tacos = $1.80 saved
• **Punch card:** Buy 10 tacos, get 3 free. I'm at 7 now, so building toward $9 value
• **Instagram flash deal:** Showed their story for a free horchata = $4 saved

**Total saved: $6.50** (24% off!)

Taco Tuesday + the Instagram deals are the real hack here. They post flash deals every week. Comment if you want tips on finding the best local restaurant deals!`,
    comments: [
      {
        id: 1,
        name: "Carlos M.",
        date: "Dec 29, 2025",
        content: "Bro I live near here and never knew about the Taco Tuesday deal! Do they have any other weekly specials?",
        reply: {
          content: "Carlos! Yes! They do Margarita Monday (half-price margs) and Free Chip Friday if you follow them on Instagram. The IG flash deals are random but usually 1-2x per week. Turn on notifications for their account!",
          date: "Dec 29, 2025"
        }
      },
      {
        id: 2,
        name: "Amanda R.",
        date: "Dec 30, 2025",
        content: "Is Capital One Savor better than Chase Sapphire for restaurants?",
        reply: {
          content: "Great question Amanda! It depends on your goals. Savor is 4% flat cash back—simple and no transfer hassle. Sapphire is 3x points but those points can be worth 4.5%+ if you transfer to travel partners. I use both! Savor for quick cash back, Sapphire when I'm saving for a trip. Want referral links for either? Happy to share!",
          date: "Dec 30, 2025"
        }
      }
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
      <main className="pt-20">
        <article className="container mx-auto px-6 py-12 max-w-3xl">
          {/* Back Link */}
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft size={16} />
            <span>Back to all reviews</span>
          </Link>

          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-medium uppercase tracking-wide text-primary">
                {review.cuisine}
              </span>
              <span className="text-muted-foreground">·</span>
              <span className="text-sm text-muted-foreground">{review.location}</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-sm text-muted-foreground">{review.date}</span>
            </div>
            
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              {review.name}
            </h1>

            {/* Savings Summary */}
            <div className="flex items-center gap-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <div className="flex items-center gap-2">
                <DollarSign className="text-primary" size={20} />
                <div>
                  <p className="text-sm text-muted-foreground">Spent</p>
                  <p className="font-semibold text-foreground">{review.totalSpent}</p>
                </div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <p className="text-sm text-muted-foreground">Saved</p>
                <p className="font-semibold text-primary">{review.totalSaved}</p>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <img 
            src={review.image} 
            alt={review.name}
            className="w-full aspect-video object-cover rounded-lg mb-8"
          />

          {/* Intro */}
          <p className="text-lg text-foreground/90 leading-relaxed mb-8">
            {review.intro}
          </p>

          {/* Full Review */}
          <div className="prose prose-lg max-w-none mb-12">
            {review.fullReview.map((paragraph, idx) => (
              <p key={idx} className="text-foreground/80 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Savings Breakdown */}
          <div className="bg-muted/50 rounded-xl p-6 mb-12">
            <h2 className="font-serif text-xl font-bold text-foreground mb-4">💰 How I Saved</h2>
            <div className="prose prose-sm max-w-none text-foreground/80 whitespace-pre-line">
              {review.savingsBreakdown.split('\n').map((line, idx) => {
                if (line.startsWith('**') && line.endsWith('**')) {
                  return <p key={idx} className="font-semibold text-foreground mt-4 mb-2">{line.replace(/\*\*/g, '')}</p>;
                }
                if (line.startsWith('•')) {
                  return <p key={idx} className="ml-4 mb-1">{line}</p>;
                }
                return <p key={idx} className="mb-2">{line}</p>;
              })}
            </div>
          </div>

          {/* Comments Section */}
          <CommentSection comments={review.comments} />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ReviewDetail;
