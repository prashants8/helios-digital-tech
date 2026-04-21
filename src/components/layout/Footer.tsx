import { Link } from "react-router-dom";
import { Mail, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import heliosLogo from "@/assets/helios-logo.jpg";

const Footer = () => {
  const services = [
    "IT Consulting",
    "Technical Support",
    "Web Development",
    "Cloud Services",
    "Business Analytics",
    "Cybersecurity",
  ];

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
    { href: "/request-service", label: "Request Service" },
  ];

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/30">
                <img
                  src={heliosLogo}
                  alt="Helios Digital Technology"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Helios Digital
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Empowering businesses with scalable, cost-effective IT solutions.
              Simplifying technology for startups, SMEs, and enterprises.
            </p>
            <div className="flex gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg bg-muted hover:bg-primary/20 hover:text-primary transition-all duration-200">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com/helios_digitech" target="_blank" rel="noreferrer" aria-label="X / Twitter" className="p-2 rounded-lg bg-muted hover:bg-primary/20 hover:text-primary transition-all duration-200">
                <Twitter size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="p-2 rounded-lg bg-muted hover:bg-primary/20 hover:text-primary transition-all duration-200">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com/helios_digitech" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 rounded-lg bg-muted hover:bg-primary/20 hover:text-primary transition-all duration-200">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  info@heliosdigitaltechnology.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Ahmedabad, Gujarat<br />
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              Copyright 2024 Helios Digital Technology. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
