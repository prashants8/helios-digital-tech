import RequestServiceContent from "./RequestServiceContent";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Request a Service - Get a Custom IT Quote | Helios Digital Technology",
  description: "Tell us about your project requirements and receive a custom IT proposal and budget estimate within 24 hours from Helios Digital Technology.",
  keywords: "request service, it project proposal, hire web developers, cloud setup quote",
};

export default function RequestServicePage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-20 text-center text-muted-foreground">Loading form...</div>}>
      <RequestServiceContent />
    </Suspense>
  );
}
