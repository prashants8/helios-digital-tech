import { Card } from "@/components/ui/card";
import { TrendingDown, Rocket, Globe, Clock, Award, HeartHandshake } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Cost Reduction",
      description: "Reduce operational costs by up to 40% with our efficient solutions",
      stat: "40%",
      statLabel: "Cost Savings",
    },
    {
      icon: Rocket,
      title: "Rapid Deployment",
      description: "Get your projects live faster with our agile methodologies",
      stat: "2x",
      statLabel: "Faster Delivery",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "24/7 offshore support across multiple time zones",
      stat: "24/7",
      statLabel: "Availability",
    },
    {
      icon: Clock,
      title: "Time to Market",
      description: "Accelerate your product launch with our expert teams",
      stat: "50%",
      statLabel: "Faster Launch",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Industry-leading standards and best practices",
      stat: "99.9%",
      statLabel: "Uptime SLA",
    },
    {
      icon: HeartHandshake,
      title: "Dedicated Support",
      description: "Personal account managers and technical experts",
      stat: "100%",
      statLabel: "Commitment",
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-card/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Why Choose Helios Digital?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your business with proven benefits and measurable results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={benefit.title}
                className="relative p-5 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow overflow-hidden group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative space-y-3">
                  {/* Icon and Stat */}
                  <div className="flex items-start justify-between">
                    <div className="p-2.5 rounded-lg bg-gradient-to-br from-primary to-accent inline-block">
                      <Icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {benefit.stat}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {benefit.statLabel}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-base font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
