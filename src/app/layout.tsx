import "../index.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Providers from "./providers";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Helios Digital Technology - Empowering Businesses with IT Solutions",
  description: "Helios Digital Technology offers scalable, cost-effective IT solutions including consulting, development, cloud services, and business analytics",
  authors: [{ name: "Prashant Shukla" }],
  openGraph: {
    title: "Helios Digital Technology - IT Services & Solutions",
    description: "Transform your business with our comprehensive IT services including consulting, development, cloud infrastructure, and business intelligence",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.jpg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Helios Digital Technology",
              "url": "https://www.heliosdigitaltechnology.com/",
              "logo": "https://www.heliosdigitaltechnology.com/src/assets/helios-logo.jpg",
              "description": "Helios Digital Technology offers scalable, cost-effective IT solutions including consulting, development, cloud services, and business analytics.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ahmedabad",
                "addressRegion": "Gujarat",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "info@heliosdigitaltechnology.com",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://twitter.com/helios_digitech",
                "https://instagram.com/helios_digitech"
              ]
            }),
          }}
        />
      </head>
      <body>
        <Providers>
          <div className="min-h-screen bg-background text-foreground flex flex-col">
            <Header />
            <main className="flex-grow pt-20">
              {children}
            </main>
            <Footer />
            <FloatingCTA />
            <SpeedInsights />
          </div>
        </Providers>
      </body>
    </html>
  );
}
