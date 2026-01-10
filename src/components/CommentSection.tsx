import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

interface Comment {
  id: number;
  name: string;
  date: string;
  content: string;
  reply?: {
    content: string;
    date: string;
  };
}

interface CommentSectionProps {
  comments: Comment[];
}

const CommentSection = ({ comments: initialComments }: CommentSectionProps) => {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !content.trim()) return;

    const newComment: Comment = {
      id: Date.now(),
      name: name.trim(),
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      content: content.trim(),
    };

    setComments([...comments, newComment]);
    setName("");
    setContent("");
  };

  return (
    <section className="border-t border-border pt-12">
      <div className="flex items-center gap-2 mb-8">
        <MessageCircle className="text-primary" size={24} />
        <h2 className="font-serif text-2xl font-bold text-foreground">
          Comments ({comments.length})
        </h2>
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="bg-muted/30 rounded-xl p-6 mb-8">
        <p className="text-muted-foreground mb-4">
          Have questions about the rewards strategy? Drop a comment and I'll reply with specific steps and referral links!
        </p>
        <div className="space-y-4">
          <Input
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-background"
          />
          <Textarea
            placeholder="Ask about credit card recommendations, sign-up bonuses, or how to stack rewards..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={3}
            className="bg-background resize-none"
          />
          <Button type="submit" className="gap-2">
            <Send size={16} />
            Post Comment
          </Button>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b border-border pb-6 last:border-0">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-medium text-primary">
                  {comment.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <span className="font-medium text-foreground">{comment.name}</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-sm text-muted-foreground">{comment.date}</span>
            </div>
            <p className="text-foreground/90 ml-10">{comment.content}</p>

            {/* Author Reply */}
            {comment.reply && (
              <div className="ml-10 mt-4 pl-4 border-l-2 border-primary/30">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-xs font-medium text-primary-foreground">S</span>
                  </div>
                  <span className="font-medium text-primary">Savory Secrets</span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">Author</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-sm text-muted-foreground">{comment.reply.date}</span>
                </div>
                <p className="text-foreground/90">{comment.reply.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {comments.length === 0 && (
        <p className="text-center text-muted-foreground py-8">
          No comments yet. Be the first to ask a question!
        </p>
      )}
    </section>
  );
};

export default CommentSection;
