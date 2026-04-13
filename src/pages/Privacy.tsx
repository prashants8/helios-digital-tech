import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <section className="py-20 bg-gradient-to-b from-card/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Privacy Policy
                </span>
              </h1>
              <Card className="p-8 md:p-10 bg-card/50 backdrop-blur-sm border-border/50 space-y-6">
                <p className="text-muted-foreground">
                  Helios Digital Technology respects your privacy and only uses the
                  information you share to respond to service requests, communicate
                  about projects, and improve service delivery.
                </p>
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold">Information We Collect</h2>
                  <p className="text-muted-foreground">
                    We may collect contact details, company information, project
                    requirements, and communication history when you contact us or
                    submit a service request.
                  </p>
                </div>
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold">How We Use Information</h2>
                  <p className="text-muted-foreground">
                    We use your information to review requests, provide quotations,
                    deliver services, and share relevant updates about your engagement
                    with our team.
                  </p>
                </div>
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold">Data Protection</h2>
                  <p className="text-muted-foreground">
                    We take reasonable technical and organizational measures to protect
                    your data from unauthorized access, disclosure, or misuse.
                  </p>
                </div>
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold">Contact</h2>
                  <p className="text-muted-foreground">
                    For privacy-related questions, contact us at
                    {" "}info@heliosdigital.tech.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
