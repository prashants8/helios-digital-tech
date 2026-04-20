import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import heliosLogo from "@/assets/helios-logo.jpg";
import HeroSphere from "@/components/sections/HeroSphere";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card/30 to-background" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-accent/5" />
      <div className="hidden md:block">
        <HeroSphere side="left" />
        <HeroSphere side="right" />
      </div>
      
      {/* Animated gradient orbs */}
      <div className="absolute left-6 top-16 h-48 w-48 rounded-full bg-primary/12 blur-3xl sm:left-10 sm:top-20 sm:h-72 sm:w-72 lg:h-96 lg:w-96 lg:animate-float" />
      <div
        className="absolute bottom-16 right-6 h-44 w-44 rounded-full bg-accent/12 blur-3xl sm:bottom-20 sm:right-10 sm:h-72 sm:w-72 lg:h-96 lg:w-96 lg:animate-float"
        style={{ animationDelay: "2s" }}
      />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(214,176,74,0.06)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")` }} />

      <div className="container mx-auto px-4 py-10 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-5">
          {/* Logo Animation */}
          <div className="flex justify-center mb-4 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent blur-xl opacity-50 animate-pulse" />
              <div className="relative w-28 h-28 rounded-full overflow-hidden ring-4 ring-primary/30 shadow-glow">
                <img 
                  src={heliosLogo} 
                  alt="Helios Digital Technology" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Next-Generation IT Solutions
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-bold leading-tight animate-fade-in md:text-6xl lg:text-7xl" style={{ animationDelay: "0.2s" }}>
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Empowering Businesses
            </span>
            <br />
            <span className="text-foreground">
              with Scalable, Cost-Effective
            </span>
            <br />
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              IT Solutions
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto max-w-3xl text-base text-muted-foreground animate-fade-in sm:text-lg md:text-xl" style={{ animationDelay: "0.4s" }}>
            Transform your digital infrastructure with our comprehensive suite of IT services. 
            From cloud solutions to business intelligence, we deliver innovation that drives growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Link to="/request-service">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-glow hover:shadow-glow transition-all duration-300 group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                size="lg"
                variant="outline" 
                className="border-primary/50 hover:border-primary hover:bg-primary/10 px-8 py-6 text-lg font-semibold"
              >
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
