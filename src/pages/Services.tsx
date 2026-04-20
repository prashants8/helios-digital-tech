import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServicesGrid from "@/components/sections/ServicesGrid";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Cloud, Shield, Database, Code, Stethoscope } from "lucide-react";

const Services = () => {
  const categories = [
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      description: "AWS, Azure, GCP deployment and management",
      services: ["Cloud Migration", "DevOps", "Infrastructure Management"],
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Protect your business with enterprise-grade security",
      services: ["Security Audits", "Compliance Management", "Penetration Testing"],
    },
    {
      icon: Database,
      title: "Data & Analytics",
      description: "Turn data into actionable business insights",
      services: ["Business Intelligence", "Data Warehousing", "Predictive Analytics"],
    },
    {
      icon: Code,
      title: "Development Services",
      description: "Custom software solutions for your unique needs",
      services: ["Web Development", "Mobile Apps", "API Integration"],
    },
    {
      icon: Stethoscope,
      title: "Healthcare Recruitment",
      description: "Specialized recruitment for the healthcare sector with a focus on GP placement in Canada",
      services: ["GP Placement", "Credential Verification", "Relocation Services", "Global Talent Sourcing"],
      href: "https://med-journey-eight.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-card/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Our Services
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Comprehensive IT solutions designed to accelerate your business growth. 
                From consulting to implementation, we're your trusted technology partner.
              </p>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Service Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card
                    key={category.title}
                    className={`p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 ${
                      index === categories.length - 1 ? "md:col-span-2 max-w-3xl w-full mx-auto" : ""
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent shrink-0">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold">{category.title}</h3>
                        <p className="text-muted-foreground">{category.description}</p>
                        <ul className="space-y-2">
                          {category.services.map((service) => (
                            <li key={service} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              <span className="text-muted-foreground">{service}</span>
                            </li>
                          ))}
                        </ul>
                        {category.href ? (
                          <p className="pt-2 text-sm text-muted-foreground">
                            Explore our healthcare platform{" "}
                            <a
                              href={category.href}
                              target="_blank"
                              rel="noreferrer"
                              className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-opacity hover:opacity-80"
                            >
                              Helios MedJourney
                            </a>
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* All Services Grid */}
        <ServicesGrid />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-card/30 to-background">
          <div className="container mx-auto px-4">
            <Card className="p-12 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-primary/20">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">
                  Need a Custom Solution?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our team of experts is ready to design and implement tailored solutions 
                  that perfectly match your business requirements.
                </p>
                <Link to="/request-service">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold px-8 py-6 shadow-glow"
                  >
                    Get Started Today
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
