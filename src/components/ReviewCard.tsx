import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface ReviewCardProps {
  slug: string;
  image: string;
  name: string;
  cuisine: string;
  rating: number;
  excerpt: string;
  cashbackTip: string;
  cashbackPercent: string;
  date: string;
}

const ReviewCard = ({
  slug,
  image,
  name,
  cuisine,
  rating,
  excerpt,
  cashbackTip,
  cashbackPercent,
  date,
}: ReviewCardProps) => {
  return (
    <Link to={`/review/${slug}`}>
      <article className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={image}
          alt={name}
          className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <Badge variant="golden" className="gap-1 px-3 py-1.5">
            <span className="text-sm">{cashbackPercent}</span>
          </Badge>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Badge variant="terracotta">{cuisine}</Badge>
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>
        
        <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < rating ? "fill-golden text-golden" : "text-muted"}
            />
          ))}
        </div>
        
        <p className="text-muted-foreground leading-relaxed line-clamp-2">
          {excerpt}
        </p>
        
        <div className="pt-2 border-t border-border">
          <p className="text-sm">
            <span className="font-semibold text-primary">💰 Secret: </span>
            <span className="text-muted-foreground">{cashbackTip}</span>
          </p>
        </div>
      </div>
    </article>
    </Link>
  );
};

export default ReviewCard;
