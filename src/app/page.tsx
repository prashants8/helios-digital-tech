import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Empowering Businesses with IT Solutions | Helios Digital Technology",
  description: "Helios Digital Technology offers scalable, cost-effective IT solutions including consulting, development, cloud services, and business analytics.",
  keywords: "it consulting, web development, cloud services, business analytics, software testing, helios digital",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesGrid />
      <WhyChooseUs />
      
      {/* Call to Action Section */}
      <section className="py-12 bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ready to Get Started?
            </span>
          </h2>
          <p className="text-muted-foreground mb-5 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our IT solutions
          </p>
          <Link href="/request-service">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-glow hover:shadow-glow transition-all duration-300 group"
            >
              Request a Service
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
