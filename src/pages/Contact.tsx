import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@heliosdigital.tech",
      action: "mailto:info@heliosdigital.tech",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "24/7 Support Available",
      action: null,
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

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
                  Get in Touch
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Let's discuss how we can help transform your business with our IT solutions
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="How can we help?"
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project..."
                      className="min-h-[150px] bg-background/50"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold py-6 shadow-glow"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    {contactInfo.map((info) => {
                      const Icon = info.icon;
                      return (
                        <div key={info.title} className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent shrink-0">
                            <Icon className="w-5 h-5 text-primary-foreground" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{info.title}</h3>
                            {info.action ? (
                              <a 
                                href={info.action}
                                className="text-muted-foreground hover:text-primary transition-colors"
                              >
                                {info.details}
                              </a>
                            ) : (
                              <p className="text-muted-foreground">{info.details}</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Card>

                {/* Office Location */}
                <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
                  <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Headquarters</h3>
                      <p className="text-muted-foreground">
                        Ahmedabad<br />
                        Gujarat<br />
                        India
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Social Media */}
                <Card className="p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-primary/20">
                  <h3 className="font-semibold mb-4">Connect With Us</h3>
                  <p className="text-muted-foreground text-sm">
                    Follow @helios_digitech on social media for updates, tech insights, and industry news
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section (Placeholder) */}
        <section className="py-20 bg-gradient-to-b from-card/30 to-background">
          <div className="container mx-auto px-4">
            <Card className="h-96 bg-card/50 backdrop-blur-sm border-border/50 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
                <p className="text-muted-foreground">Interactive Map</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Ahmedabad, Gujarat, India
                </p>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;