import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import heliosLogo from "@/assets/helios-logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/business-intelligence", label: "BI & Analytics" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const homeNavigationState = { scrollToTop: "smooth" as const };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleHomeClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/") {
      event.preventDefault();
      scrollToTop();
    }
  };

  const handleMobileNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setIsMenuOpen(false);

    if (href === "/" && location.pathname === "/") {
      event.preventDefault();
      scrollToTop();
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm md:bg-background/80 md:backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            state={homeNavigationState}
            onClick={handleHomeClick}
            className="group flex min-w-0 items-center gap-3"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/50 group-hover:ring-primary transition-all duration-300">
              <img 
                src={heliosLogo} 
                alt="Helios Digital Technology" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="max-w-[13rem] text-base font-bold leading-tight text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-clip-text sm:max-w-none sm:text-lg lg:text-xl">
              Helios Digital Technology
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                state={link.href === "/" ? homeNavigationState : undefined}
                onClick={link.href === "/" ? handleHomeClick : undefined}
                className={`relative py-2 text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  isActive(link.href) ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent animate-fade-in" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/request-service">
              <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold px-6 shadow-glow hover:shadow-glow transition-all duration-300">
                Request Service
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 transition-colors hover:bg-muted md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute left-0 top-20 w-full border-b border-border bg-background md:hidden">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  state={link.href === "/" ? homeNavigationState : undefined}
                  onClick={(event) => handleMobileNavClick(event, link.href)}
                  className={`block py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-muted hover:text-primary ${
                    isActive(link.href) ? "bg-muted text-primary" : "text-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/request-service"
                onClick={() => setIsMenuOpen(false)}
                className="block mt-4"
              >
                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold shadow-glow">
                  Request Service
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
