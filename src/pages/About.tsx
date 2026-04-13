import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/sections/AboutSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Globe, Users, TrendingUp } from "lucide-react";

const About = () => {
  const milestones = [
    { year: "2018", event: "20+ Clients", description: "Reached our first major milestone" },
    { year: "2020", event: "Cloud Excellence", description: "Became certified partners with AWS, Azure" },
    { year: "2022", event: "120+ Projects", description: "Successfully delivered across industries" },
  ];

  const leadership = [
    {
      name: "Prashant Shukla",
      role: "CEO & Founder",
      description: "5+ years in IT Industry",
    },
    {
      name: "Yogesh Purohit",
      role: "CO-Founder & Head of Healthcare Department",
      description: "5+ years in Healthcare Recruitment Industry",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* About Section with Mission & Values */}
        <AboutSection />

        {/* Company Journey */}
        <section className="py-12 bg-gradient-to-b from-card/30 to-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Our Journey
              </span>
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary" />
                
                {/* Milestones */}
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <div key={milestone.year} className="flex gap-6 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-2xl">
                          {index + 1}
                        </div>
                        {/* Connection dot */}
                        <div className="absolute top-1/2 -translate-y-1/2 -right-3 w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <Card className="flex-1 p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                        <h3 className="font-semibold text-lg mb-1">{milestone.event}</h3>
                        <p className="text-muted-foreground text-sm">{milestone.description}</p>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Leadership Team
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {leadership.map((leader) => (
                <Card key={leader.name} className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg">{leader.name}</h3>
                  <p className="text-sm text-primary mb-2">{leader.role}</p>
                  <p className="text-sm text-muted-foreground">{leader.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-gradient-to-b from-card/30 to-background">
          <div className="container mx-auto px-4">
            <Card className="p-12 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-primary/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <Users className="w-12 h-12 mx-auto mb-3 text-secondary" />
                  <div className="text-3xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">20+</div>
                  <p className="text-muted-foreground">Happy Clients</p>
                </div>
                <div>
                  <Globe className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">120+</div>
                  <p className="text-muted-foreground">Projects Delivered</p>
                </div>
                <div>
                  <TrendingUp className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">98%</div>
                  <p className="text-muted-foreground">Client Retention</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join hundreds of companies that trust Helios Digital for their technology needs
            </p>
            <Link to="/contact">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold px-8 py-6 shadow-glow"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
