import { ReactNode } from "react";

interface ApiSectionProps {
  id: string;
  title: string;
  description: string;
  children: ReactNode;
}

export function ApiSection({ id, title, description, children }: ApiSectionProps) {
  return (
    <section
      id={id}
      className="py-12 sm:py-16 md:py-20 lg:py-24 scroll-mt-20 animate-fade-in"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 gradient-text">
            {title}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
            {description}
          </p>
        </div>

        {/* Section Content - Always Visible */}
        <div className="space-y-6 sm:space-y-8 md:space-y-10">
          {children}
        </div>
      </div>
    </section>
  );
}
