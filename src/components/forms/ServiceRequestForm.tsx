import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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

    const subject = `Service Request: ${formData.service}`;
    const body = [
      "New service request from heliosdigitaltechnology.com",
      "",
      `Full Name: ${formData.name}`,
      `Email Address: ${formData.email}`,
      `Company Name: ${formData.company || "Not provided"}`,
      `Phone Number: ${formData.phone || "Not provided"}`,
      `Service Required: ${formData.service}`,
      `Budget Range: ${formData.budget || "Not provided"}`,
      `Project Timeline: ${formData.timeline || "Not provided"}`,
      "",
      "Project Description:",
      formData.description,
    ].join("\n");

    const mailtoLink = `mailto:${SERVICE_REQUEST_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Email draft prepared",
      description: `Your email app should open a draft addressed to ${SERVICE_REQUEST_EMAIL}. Send that email to complete the request.`,
    });

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
    }, 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <Card className="p-12 text-center bg-card/50 backdrop-blur-sm border-primary/30">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-gradient-to-br from-primary to-accent">
            <CheckCircle className="w-12 h-12 text-primary-foreground" />
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-3">Thank You!</h3>
        <p className="text-muted-foreground">
          Your email draft is ready. Please send it from your email app so our team receives your request.
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
