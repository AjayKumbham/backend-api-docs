import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Code2 } from "lucide-react";

type NavItem = {
  title: string;
  href: string;
  isActive?: boolean;
};

const navItems: NavItem[] = [
  { title: "Authentication", href: "#authentication" },
  { title: "Profile", href: "#profile" },
  { title: "Payment", href: "#payment" },
  { title: "Address", href: "#address" },
  { title: "Health", href: "#health" },
  { title: "Allergy", href: "#allergy" },
  { title: "Dependents", href: "#dependents" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get all section elements
      const sections = document.querySelectorAll("section[id]");

      // Find the section that's most in view
      let current = "";
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 150;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          current = `#${section.getAttribute("id") || ""}`;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
      setActiveSection(href);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 sm:top-6 left-4 sm:left-6 z-50 lg:hidden p-2.5 sm:p-3 rounded-full glass-card hover:bg-muted/50 transition-all duration-300 shadow-lg hover:shadow-xl"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <X className="h-5 w-5 sm:h-6 sm:w-6" />
        ) : (
          <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
        )}
      </button>

      {/* Sidebar Navigation */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-screen w-64 sm:w-72 bg-sidebar-background/95 backdrop-blur-xl border-r border-sidebar-border z-40 transition-all duration-300 ease-in-out overflow-y-auto scrollbar-hide shadow-2xl",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Logo/Header */}
        <div className="p-4 sm:p-6 border-b border-sidebar-border sticky top-0 bg-sidebar-background/95 backdrop-blur-xl z-10">
          <a href="#" className="flex items-center gap-3 group">
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <Code2 className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold gradient-text">
                Evernorth API
              </h1>
              <p className="text-xs text-sidebar-foreground/60">
                Documentation
              </p>
            </div>
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="p-3 sm:p-4 space-y-1">
          <div className="mb-3 sm:mb-4">
            <p className="px-3 text-xs font-semibold text-sidebar-foreground/50 uppercase tracking-wider">
              API Sections
            </p>
          </div>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={cn(
                "flex items-center px-3 py-2.5 sm:py-3 rounded-lg text-sm font-medium transition-all duration-200 group",
                activeSection === item.href
                  ? "bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-l-2 border-primary shadow-md"
                  : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent hover:shadow-sm"
              )}
            >
              <span className={cn(
                "w-1.5 h-1.5 rounded-full mr-3 transition-all duration-200",
                activeSection === item.href
                  ? "bg-primary scale-125 shadow-lg shadow-primary/50"
                  : "bg-sidebar-foreground/30 group-hover:bg-sidebar-foreground/50 group-hover:scale-110"
              )} />
              {item.title}
            </a>
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 border-t border-sidebar-border bg-sidebar-background/95 backdrop-blur-xl">
          <a
            href="https://github.com/AjayKumbham/evernorth-backend-api"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs sm:text-sm text-sidebar-foreground/60 hover:text-sidebar-foreground transition-all duration-200 hover:gap-3"
          >
            <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span className="hidden sm:inline">View on GitHub</span>
            <span className="sm:hidden">GitHub</span>
          </a>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
