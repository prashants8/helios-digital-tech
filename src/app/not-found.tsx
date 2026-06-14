"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  const pathname = usePathname();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname
    );
  }, [pathname]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="space-y-6 max-w-md">
        <div className="relative">
          <h1 className="text-9xl font-extrabold text-transparent bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text">
            404
          </h1>
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-20 blur-3xl -z-10 rounded-full w-48 h-48 mx-auto" />
        </div>
        
        <h2 className="text-3xl font-bold tracking-tight">Oops! Page not found</h2>
        
        <p className="text-muted-foreground">
          The page you are looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link href="/">
            <Button className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold px-6 shadow-glow transition-all duration-300">
              <Home className="w-4 h-4 mr-2" />
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
