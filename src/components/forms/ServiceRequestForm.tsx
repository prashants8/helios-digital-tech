import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface ServiceRequestFormProps {
  initialService?: string;
}

const SERVICE_REQUEST_EMAIL = "info@heliosdigitaltechnology.com";

const ServiceRequestForm = ({ initialService = "" }: ServiceRequestFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: initialService,
    budget: "",
    timeline: "",
    description: "",
  });

  const services = [
    "IT Consulting",
    "Technical Support",
    "HR Outsourcing",
    "Network Support",
    "Web Development",
    "Web Design",
    "Application Development",
    "Software Testing",
    "Business Analytics",
    "Virtual Assistance",
    "Healthcare Recruitment",
    "Cloud Services",
    "Cybersecurity",
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000 - $100,000",
    "Above $100,000",
  ];

  const timelines = [
    "Immediate (ASAP)",
    "Within 1 week",
    "Within 1 month",
    "Within 3 months",
    "Flexible",
  ];

  useEffect(() => {
    if (!initialService) {
      return;
    }

    setFormData((prev) => ({ ...prev, service: initialService }));
  }, [initialService]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.service) {
      setIsSubmitting(false);
      toast({
        title: "Select a service",
        description: "Please choose the service you need before submitting your request.",
        variant: "destructive",
      });
      return;
    }
    // 1. Try to log to Supabase (optional, fails gracefully)
    try {
      const { error: dbError } = await supabase
        .from("service_requests" as any)
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            phone: formData.phone,
            service: formData.service,
            budget: formData.budget,
            timeline: formData.timeline,
            description: formData.description,
          },
        ]);

      if (dbError) {
        console.warn("Supabase database insert warning:", dbError.message);
      }
    } catch (dbErr) {
      console.warn("Could not save to Supabase database backup:", dbErr);
    }

    const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const emailJsAdminTemplate = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID;
    const emailJsCustomerTemplate = import.meta.env.VITE_EMAILJS_CUSTOMER_TEMPLATE_ID;

    const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

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
              company: formData.company || "Not provided",
              phone: formData.phone || "Not provided",
              service: formData.service,
              budget: formData.budget || "Not provided",
              timeline: formData.timeline || "Not provided",
              description: formData.description,
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
              service: formData.service,
            },
          }),
        });

        if (!customerResponse.ok) {
          console.warn("Autoresponder warning: Could not send automated confirmation to customer.");
        }

        setIsSubmitted(true);
        toast({
          title: "Service Request Submitted!",
          description: "Thank you. Your request has been successfully submitted.",
        });
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
            subject: `New Service Request from ${formData.name} - ${formData.service}`,
            from_name: "Helios Digital Technology website",
            name: formData.name,
            email: formData.email,
            company: formData.company || "Not provided",
            phone: formData.phone || "Not provided",
            service: formData.service,
            budget: formData.budget || "Not provided",
            timeline: formData.timeline || "Not provided",
            description: formData.description,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to submit form using Web3Forms.");
        }

        setIsSubmitted(true);
        toast({
          title: "Service Request Submitted!",
          description: "Thank you. Your request has been successfully submitted.",
        });
      } else {
        // Fallback to mailto
        const subject = encodeURIComponent(`Service Request: ${formData.service} from ${formData.name}`);
        const body = encodeURIComponent(
          `Name: ${formData.name}\n` +
          `Email: ${formData.email}\n` +
          `Company: ${formData.company || "Not provided"}\n` +
          `Phone: ${formData.phone || "Not provided"}\n` +
          `Service: ${formData.service}\n` +
          `Budget: ${formData.budget || "Not provided"}\n` +
          `Timeline: ${formData.timeline || "Not provided"}\n\n` +
          `Description:\n${formData.description}`
        );

        window.location.href = `mailto:info@heliosdigitaltechnology.com?subject=${subject}&body=${body}`;

        toast({
          title: "Email Client Opened",
          description: "Pre-filled your email application to send the request details directly.",
        });
      }

      // Reset form on success
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: initialService,
          budget: "",
          timeline: "",
          description: "",
        });
        setIsSubmitted(false);
      }, 5000);
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

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <Card className="p-12 text-center bg-card/50 backdrop-blur-sm border-primary/30 animate-fade-in">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-gradient-to-br from-primary to-accent">
            <CheckCircle className="w-12 h-12 text-primary-foreground" />
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-3">Thank You!</h3>
        <p className="text-muted-foreground">
          We have received your service request and our team will get back to you within 24 hours.
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="John Doe"
              className="bg-background/50"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="john@company.com"
              className="bg-background/50"
            />
          </div>

          {/* Company */}
          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => handleChange("company", e.target.value)}
              placeholder="Your Company Inc."
              className="bg-background/50"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="+1 (555) 123-4567"
              className="bg-background/50"
            />
          </div>

          {/* Service */}
          <div className="space-y-2">
            <Label htmlFor="service">Service Required *</Label>
            <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Budget */}
          <div className="space-y-2">
            <Label htmlFor="budget">Budget Range</Label>
            <Select value={formData.budget} onValueChange={(value) => handleChange("budget", value)}>
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                {budgetRanges.map((budget) => (
                  <SelectItem key={budget} value={budget}>
                    {budget}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Timeline */}
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="timeline">Project Timeline</Label>
            <Select value={formData.timeline} onValueChange={(value) => handleChange("timeline", value)}>
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder="When do you need this completed?" />
              </SelectTrigger>
              <SelectContent>
                {timelines.map((timeline) => (
                  <SelectItem key={timeline} value={timeline}>
                    {timeline}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Description */}
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="description">Project Description *</Label>
            <Textarea
              id="description"
              required
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              placeholder="Please describe your project requirements, goals, and any specific needs..."
              className="min-h-[150px] bg-background/50"
            />
          </div>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold py-6 text-lg shadow-glow hover:shadow-glow transition-all duration-300"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              Submitting...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="w-5 h-5" />
              Submit Service Request
            </span>
          )}
        </Button>
      </form>
    </Card>
  );
};

export default ServiceRequestForm;
