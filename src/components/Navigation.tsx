
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrolled(position > 30);

      // Get all section elements
      const sections = document.querySelectorAll("section[id]");
      
      // Find the section that's most in view
      let current = "";
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (position >= sectionTop && position < sectionTop + sectionHeight) {
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
    const targetId = href.substring(1); // Remove the # from the href
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Smooth scroll to the element
      targetElement.scrollIntoView({ behavior: 'smooth' });
      
      // Update URL without reloading the page
      window.history.pushState(null, '', href);
      setActiveSection(href);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 backdrop-blur-lg transition-all duration-300",
        scrolled ? "bg-white/80 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center space-x-4">
            <a href="#" className="text-lg font-medium bg-gradient-to-r from-primary to-blue-700 bg-clip-text text-transparent">
              Evernorth API
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  activeSection === item.href
                    ? "text-primary"
                    : "text-foreground/70"
                )}
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
