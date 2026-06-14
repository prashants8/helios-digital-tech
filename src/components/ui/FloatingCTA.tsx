import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MessageCircle, FileText, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCTA = () => {
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "919999999999"; // Replace with real number or set in env
  const whatsappMessage = encodeURIComponent(
    "Hi Helios Digital, I visited your website and would like to inquire about your IT & Business Intelligence services."
  );

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Hide the floating CTA on the Request Service page itself to avoid redundancy
  if (location.pathname === "/request-service") {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3 animate-fade-in pointer-events-none">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto p-3 rounded-full bg-background/80 hover:bg-background border border-border text-foreground shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-glow flex items-center justify-center group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
        </button>
      )}

      {/* WhatsApp Quick Chat */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noreferrer"
        className="pointer-events-auto relative p-4 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg hover:shadow-glow transition-all duration-300 hover:-translate-y-1 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute right-full mr-3 px-3 py-1 rounded-md bg-card/90 text-card-foreground text-xs font-medium border border-border shadow-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none backdrop-blur-sm">
          Chat with us
        </span>
        {/* Pulsing outer ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping -z-10 group-hover:hidden" />
        <MessageCircle className="w-6 h-6 fill-current" />
      </a>

      {/* Floating Request Service (Mobile Only) */}
      <Link
        to="/request-service"
        className="pointer-events-auto md:hidden relative p-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg hover:shadow-glow transition-all duration-300 hover:-translate-y-1 flex items-center justify-center group"
        aria-label="Request a service"
      >
        <span className="absolute right-full mr-3 px-3 py-1 rounded-md bg-card/90 text-card-foreground text-xs font-medium border border-border shadow-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none backdrop-blur-sm">
          Request Service
        </span>
        <FileText className="w-6 h-6" />
      </Link>
    </div>
  );
};

export default FloatingCTA;
