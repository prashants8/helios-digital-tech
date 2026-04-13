import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BarChart3, LineChart, PieChart, TrendingUp, Database, Lightbulb } from "lucide-react";

const BusinessIntelligence = () => {
  const tools = [
    { name: "Power BI", expertise: "95%" },
    { name: "Tableau", expertise: "90%" },
    { name: "Looker", expertise: "85%" },
    { name: "QlikView", expertise: "80%" },
  ];

  const solutions = [
    {
      icon: BarChart3,
      title: "Interactive Dashboards",
      description: "Real-time data visualization with drill-down capabilities",
    },
    {
      icon: LineChart,
      title: "Predictive Analytics",
      description: "Forecast trends and anticipate business outcomes",
    },
    {
      icon: PieChart,
      title: "Custom Reports",
      description: "Tailored reporting solutions for your specific KPIs",
    },
    {
      icon: TrendingUp,
      title: "Performance Metrics",
      description: "Track and optimize business performance indicators",
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Unify data from multiple sources into single truth",
    },
    {
      icon: Lightbulb,
      title: "Advanced Insights",
      description: "Discover patterns and opportunities through deeper analytics",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-50" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(214,176,74,0.08)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")` }} />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  Business Intelligence & Analytics
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Transform raw data into actionable insights that drive strategic decisions
                and accelerate business growth
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Sample Analytics Dashboard
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-4 bg-gradient-to-br from-primary/10 to-transparent border-primary/30">
                  <p className="text-sm text-muted-foreground mb-2">Total Revenue</p>
                  <p className="text-2xl font-bold text-primary">$2.4M</p>
                  <p className="text-xs text-green-500">Up 12% from last month</p>
                </Card>

                <Card className="p-4 bg-gradient-to-br from-secondary/10 to-transparent border-secondary/30">
                  <p className="text-sm text-muted-foreground mb-2">Active Users</p>
                  <p className="text-2xl font-bold text-secondary">15,234</p>
                  <p className="text-xs text-green-500">Up 8% from last month</p>
                </Card>

                <Card className="p-4 bg-gradient-to-br from-accent/10 to-transparent border-accent/30">
                  <p className="text-sm text-muted-foreground mb-2">Conversion Rate</p>
                  <p className="text-2xl font-bold text-accent">3.2%</p>
                  <p className="text-xs text-green-500">Up 0.5% from last month</p>
                </Card>

                <div className="md:col-span-2">
                  <Card className="p-6 h-64 bg-background/50 flex items-center justify-center">
                    <LineChart className="w-12 h-12 text-primary/30 mr-3" />
                    <span className="text-muted-foreground">Interactive Line Chart</span>
                  </Card>
                </div>

                <Card className="p-6 h-64 bg-background/50 flex items-center justify-center">
                  <PieChart className="w-12 h-12 text-secondary/30 mr-3" />
                  <span className="text-muted-foreground">Pie Chart</span>
                </Card>

                <div className="md:col-span-3">
                  <Card className="p-6 h-32 bg-background/50 flex items-center justify-center">
                    <BarChart3 className="w-12 h-12 text-accent/30 mr-3" />
                    <span className="text-muted-foreground">Monthly Performance Bar Chart</span>
                  </Card>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-card/30 to-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Our BI Solutions
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {solutions.map((solution) => {
                const Icon = solution.icon;
                return (
                  <Card key={solution.title} className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-secondary to-primary shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{solution.title}</h3>
                        <p className="text-sm text-muted-foreground">{solution.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Platform Expertise
              </h2>

              <div className="space-y-6">
                {tools.map((tool) => (
                  <div key={tool.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{tool.name}</span>
                      <span className="text-sm text-muted-foreground">{tool.expertise}</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-secondary to-primary rounded-full transition-all duration-1000 animate-fade-in"
                        style={{ width: tool.expertise }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-card/30 to-background">
          <div className="container mx-auto px-4">
            <Card className="p-12 bg-gradient-to-r from-secondary/10 via-primary/10 to-accent/10 border-primary/20">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Unlock Your Data's Potential?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Let our experts design a custom BI solution that transforms your data
                  into competitive advantage
                </p>
                <Link to="/request-service">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 text-primary-foreground font-semibold px-8 py-6 shadow-glow"
                  >
                    Start Your BI Journey
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

export default BusinessIntelligence;
