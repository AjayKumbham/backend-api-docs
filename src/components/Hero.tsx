
import { ChevronDown } from "lucide-react";

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
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-3 py-1 bg-blue-50 rounded-full text-blue-700 text-xs font-medium tracking-wide">
            API DOCUMENTATION
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-foreground animate-fade-in">
            Evernorth Backend API
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed animate-slide-in">
            Comprehensive documentation for the backend API developed as part of a case study.
            Featuring best practices in API development, security, and scalability.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 animate-fade-in">
            <a
              href="#authentication"
              onClick={(e) => handleScroll(e, "authentication")}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Explore APIs
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors"
            >
              GitHub Repository
            </a>
          </div>
          <div className="mt-16 animate-bounce">
            <a
              href="#authentication"
              onClick={(e) => handleScroll(e, "authentication")}
              className="inline-flex items-center justify-center p-2 rounded-full bg-secondary text-secondary-foreground"
            >
              <ChevronDown className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
