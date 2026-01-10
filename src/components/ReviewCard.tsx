import { Link } from "react-router-dom";

interface ReviewCardProps {
  slug: string;
  image: string;
  name: string;
  cuisine: string;
  excerpt: string;
  savings: string;
  date: string;
}

const ReviewCard = ({
  slug,
  image,
  name,
  cuisine,
  excerpt,
  savings,
  date,
}: ReviewCardProps) => {
  return (
    <Link to={`/review/${slug}`}>
      <article className="group flex gap-6 py-6 border-b border-border hover:bg-muted/30 transition-colors -mx-4 px-4 rounded-lg">
        <div className="flex-shrink-0">
          <img
            src={image}
            alt={name}
            className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium uppercase tracking-wide text-primary">
              {cuisine}
            </span>
            <span className="text-muted-foreground">·</span>
            <span className="text-xs text-muted-foreground">{date}</span>
          </div>
          
          <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
            {name}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed line-clamp-2 mb-3 text-sm md:text-base">
            {excerpt}
          </p>
          
          <p className="text-sm font-medium text-primary">
            💰 Saved {savings}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default ReviewCard;
