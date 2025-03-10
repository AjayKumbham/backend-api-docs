
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface ApiSectionProps {
  id: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

export function ApiSection({ id, title, description, children }: ApiSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(true);
    // After expanding, we can scroll a bit to show more content
    setTimeout(() => {
      window.scrollBy({
        top: 100,
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <section
      id={id}
      className="py-16 md:py-20 border-b border-border/50 scroll-mt-20 animate-fade-in"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-foreground">
            {title}
          </h2>
          <p className="text-muted-foreground mb-8 md:text-lg leading-relaxed">
            {description}
          </p>
          <div 
            className={cn(
              "overflow-hidden transition-all duration-500",
              isExpanded ? "max-h-[5000px]" : "max-h-[500px]"
            )}
          >
            {children}
          </div>
          {!isExpanded && (
            <button
              onClick={toggleExpand}
              className="mt-4 flex items-center justify-center w-full py-3 text-primary hover:text-primary/80 transition-colors"
              aria-expanded={isExpanded}
              aria-controls={`content-${id}`}
            >
              <span className="mr-2">View More</span>
              <ChevronDown size={16} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
