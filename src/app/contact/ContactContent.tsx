"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export default function ContactContent() {
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
      details: "info@heliosdigitaltechnology.com",
      action: "mailto:info@heliosdigitaltechnology.com",
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

    // 1. Try to log to Supabase (optional, fails gracefully)
    try {
      const { error: dbError } = await (supabase as any)
        .from("contact_inquiries")
        .insert([
          {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
        ]);

      if (dbError) {
        console.warn("Supabase database insert warning:", dbError.message);
      }
    } catch (dbErr) {
      console.warn("Could not save to Supabase database backup:", dbErr);
    }

    const emailJsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const emailJsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const emailJsAdminTemplate = process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID;
    const emailJsCustomerTemplate = process.env.NEXT_PUBLIC_EMAILJS_CUSTOMER_TEMPLATE_ID;

    const web3FormsAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "85f08253-7e4e-485f-9122-93af19cbf6ee";

    try {
      if (emailJsPublicKey && emailJsServiceId && emailJsAdminTemplate && emailJsCustomerTemplate) {
        // Send via EmailJS
        const adminResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: emailJsServiceId,
            template_id: emailJsAdminTemplate,
            user_id: emailJsPublicKey,
            template_params: {
              name: formData.name,
              email: formData.email,
              subject: formData.subject,
              message: formData.message,
            },
          }),
        });

        if (!adminResponse.ok) {
          const errText = await adminResponse.text();
          throw new Error(errText || "Failed to send email notification to admin.");
        }

        const customerResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: emailJsServiceId,
            template_id: emailJsCustomerTemplate,
            user_id: emailJsPublicKey,
            template_params: {
              name: formData.name,
              email: formData.email,
              subject: formData.subject,
            },
          }),
        });

        if (!customerResponse.ok) {
          console.warn("Autoresponder warning: Could not send automated confirmation to customer.");
        }

        toast({
          title: "Message Sent!",
          description: "Thank you. We have received your inquiry and sent a confirmation email to you.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else if (web3FormsAccessKey) {
        // Send via Web3Forms
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({
            access_key: web3FormsAccessKey,
            subject: `Contact Inquiry: ${formData.subject} from ${formData.name}`,
            from_name: "Helios Digital Technology website",
            name: formData.name,
            email: formData.email,
            subject_field: formData.subject,
            message: formData.message,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to submit form using Web3Forms.");
        }

        toast({
          title: "Message Sent!",
          description: "Thank you. Your message has been sent successfully.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        // Fallback to mailto
        const mailSubject = encodeURIComponent(`Contact Inquiry: ${formData.subject}`);
        const mailBody = encodeURIComponent(
          `Name: ${formData.name}\n` +
          `Email: ${formData.email}\n\n` +
          `Message:\n${formData.message}`
        );

        window.location.href = `mailto:info@heliosdigitaltechnology.com?subject=${mailSubject}&body=${mailBody}`;

        toast({
          title: "Email Client Opened",
          description: "Pre-filled your email application to send the inquiry details directly.",
        });
      }
    } catch (error: any) {
      console.error("Submission error:", error);
      toast({
        title: "Submission Failed",
        description: error.message || "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
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
    </>
  );
}
