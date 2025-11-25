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
      className="py-16 md:py-20 scroll-mt-20 animate-fade-in"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
            {description}
          </p>
        </div>

        {/* Section Divider */}
        <div className="section-divider mb-10" />

        {/* Section Content - Always Visible */}
        <div className="space-y-8">
          {children}
        </div>
      </div>
    </section>
  );
}
