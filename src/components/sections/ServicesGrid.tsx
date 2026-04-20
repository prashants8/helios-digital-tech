import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { 
  Monitor, 
  Headphones, 
  Users, 
  Network, 
  Globe, 
  Palette, 
  Smartphone, 
  TestTube, 
  BarChart3, 
  UserCheck,
  Stethoscope,
  ArrowRight
} from "lucide-react";

const services = [
  {
    id: "it-consulting",
    title: "IT Consulting",
    description: "Strategic technology guidance to align IT with your business goals",
    icon: Monitor,
  },
  {
    id: "technical-support",
    title: "Technical Support",
    description: "24/7 expert support to keep your systems running smoothly",
    icon: Headphones,
  },
  {
    id: "hr-outsourcing",
    title: "HR Outsourcing",
    description: "Streamline your HR operations with our comprehensive solutions",
    icon: Users,
  },
  {
    id: "network-support",
    title: "Network Support",
    description: "Secure and optimize your network infrastructure",
    icon: Network,
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies",
    icon: Globe,
  },
  {
    id: "web-design",
    title: "Web Design",
    description: "Beautiful, user-centric designs that drive engagement",
    icon: Palette,
  },
  {
    id: "app-development",
    title: "Application Development",
    description: "Native and cross-platform mobile applications",
    icon: Smartphone,
  },
  {
    id: "software-testing",
    title: "Software Testing",
    description: "Comprehensive QA and testing services for reliable software",
    icon: TestTube,
  },
  {
    id: "business-analytics",
    title: "Business Analytics",
    description: "Data-driven insights to power informed decisions",
    icon: BarChart3,
  },
  {
    id: "virtual-assistance",
    title: "Virtual Assistance",
    description: "Professional remote support for your business operations",
    icon: UserCheck,
  },
  {
    id: "healthcare-recruitment",
    title: "Healthcare Recruitment",
    description: "Specialized hiring support for GP placement, verification, and relocation",
    icon: Stethoscope,
    href: "https://med-journey-eight.vercel.app/",
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const cardContent = (
              <Card 
                className="relative h-full overflow-hidden border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                {/* Icon */}
                <div className="mb-3 inline-flex rounded-lg bg-gradient-to-br from-primary to-accent p-2.5 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                
                {/* Content */}
                <h3 className="mb-2 text-base font-semibold transition-colors group-hover:text-primary">
                  {service.title}
                </h3>
                <p className="mb-3 text-sm text-muted-foreground">
                  {service.description}
                </p>

                {service.href ? (
                  <p className="mb-3 text-sm text-muted-foreground">
                    Visit{" "}
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text font-semibold text-transparent">
                      Helios MedJourney
                    </span>
                  </p>
                ) : null}
                
                {/* Arrow */}
                <div className="flex items-center text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span className="mr-1 text-xs font-medium">
                    {service.href ? "Visit website" : "Learn more"}
                  </span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>
              </Card>
            );

            if (service.href) {
              return (
                <a
                  key={service.id}
                  href={service.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group"
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <Link
                key={service.id}
                to={`/request-service?service=${encodeURIComponent(service.title)}`}
                className="group"
              >
                {cardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
