import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <section className="py-20 bg-gradient-to-b from-card/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Terms of Service
                </span>
              </h1>
              <Card className="p-8 md:p-10 bg-card/50 backdrop-blur-sm border-border/50 space-y-6">
                <p className="text-muted-foreground">
                  These terms govern the use of Helios Digital Technology services and
                  website content. By engaging with our team, you agree to the terms
                  described here.
                </p>
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold">Service Scope</h2>
                  <p className="text-muted-foreground">
                    Project scope, timelines, and deliverables are defined during the
                    engagement process and may be updated by mutual agreement.
                  </p>
                </div>
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold">Client Responsibilities</h2>
                  <p className="text-muted-foreground">
                    Clients are responsible for providing accurate requirements,
                    approvals, and access needed for successful project delivery.
                  </p>
                </div>
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold">Intellectual Property</h2>
                  <p className="text-muted-foreground">
                    Ownership of final deliverables, source assets, and supporting
                    materials is handled according to the signed project agreement.
                  </p>
                </div>
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold">Contact</h2>
                  <p className="text-muted-foreground">
                    For questions about these terms, contact
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

export default Terms;
