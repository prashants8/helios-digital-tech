import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServiceRequestForm from "@/components/forms/ServiceRequestForm";
import { Card } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Shield } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const RequestService = () => {
  const [searchParams] = useSearchParams();
  const selectedService = searchParams.get("service") ?? "";
  const process = [
    {
      icon: CheckCircle,
      title: "Submit Request",
      description: "Fill out the form with your project details",
    },
    {
      icon: Users,
      title: "Expert Review",
      description: "Our team reviews and analyzes your requirements",
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "Receive a detailed proposal within 24 hours",
    },
    {
      icon: Shield,
      title: "Start Project",
      description: "Begin your journey with full support",
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
                  Request a Service
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Tell us about your project and let our experts craft the perfect solution for you
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {process.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.title} className="text-center">
                      <div className="relative">
                        <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary to-accent mb-4">
                          <Icon className="w-8 h-8 text-primary-foreground" />
                        </div>
                        {index < process.length - 1 && (
                          <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent -translate-y-1/2" />
                        )}
                      </div>
                      <h3 className="font-semibold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ServiceRequestForm initialService={selectedService} />
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gradient-to-b from-card/30 to-background">
          <div className="container mx-auto px-4">
            <Card className="p-12 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-primary/20">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">
                  Why Work With Us?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                  <div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                      24hr
                    </div>
                    <p className="text-muted-foreground">Response Time</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent mb-2">
                      100%
                    </div>
                    <p className="text-muted-foreground">Satisfaction Guarantee</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent mb-2">
                      50+
                    </div>
                    <p className="text-muted-foreground">Expert Consultants</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RequestService;
