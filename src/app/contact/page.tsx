import ContactContent from "./ContactContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Support & Business Inquiries | Helios Digital Technology",
  description: "Get in touch with Helios Digital Technology. Email us at info@heliosdigitaltechnology.com or send a message for 24/7 technical support and custom IT project inquiries.",
  keywords: "contact helios, tech support email, business inquiry form, helios digital office",
};

export default function ContactPage() {
  return <ContactContent />;
}
