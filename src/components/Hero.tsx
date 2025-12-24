import { ChevronDown, Sparkles } from "lucide-react";

export function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 animated-gradient-bg opacity-50" />

      {/* Gradient Orbs - Responsive sizing */}
      <div className="absolute top-10 sm:top-20 -left-10 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary/30 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-10 sm:bottom-20 -right-10 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 glass-card rounded-full animate-fade-in">
            <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium tracking-wide gradient-text">
              API DOCUMENTATION
            </span>
          </div>

          {/* Main Heading - Improved responsive sizing */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-foreground animate-fade-in leading-tight px-2">
            Evernorth Backend API
          </h1>

          {/* Subtitle - Better mobile readability */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-10 md:mb-12 leading-relaxed animate-slide-in max-w-3xl mx-auto px-4">
            Comprehensive documentation for the backend API developed as part of a case study.
            Featuring best practices in API development, security, and scalability.
          </p>

          {/* CTA Buttons - Better mobile layout */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 animate-fade-in mb-12 sm:mb-14 md:mb-16 px-4">
            <a
              href="#authentication"
              onClick={(e) => handleScroll(e, "authentication")}
              className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              Explore APIs
              <ChevronDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="https://github.com/AjayKumbham/evernorth-backend-api"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full glass-card font-semibold hover:bg-muted/50 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              <svg className="mr-2 h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="hidden xs:inline">GitHub Repository</span>
              <span className="xs:hidden">GitHub</span>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <a
              href="#authentication"
              onClick={(e) => handleScroll(e, "authentication")}
              className="inline-flex items-center justify-center p-2.5 sm:p-3 rounded-full glass-card hover:bg-muted/50 transition-all"
            >
              <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
