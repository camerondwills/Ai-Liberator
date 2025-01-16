import { Link } from "wouter";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="py-8 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AI Liberator. All rights reserved.
            </div>
            <div className="text-sm text-muted-foreground">
              Special thanks to{" "}
              <a 
                href="https://github.com/elder-plinius" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                pliny
              </a>{" "}
              for his work.
            </div>
          </div>

          <div className="flex gap-6">
            <Link href="/privacy">
              <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Privacy Policy
              </span>
            </Link>
            <a 
              href="mailto:hello@ailiberator.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}