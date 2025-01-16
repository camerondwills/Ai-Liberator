import { Button } from "@/components/ui/button";
import { SiGoogleplay } from "react-icons/si";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center px-4 py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Unlock AI's True Potential
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 mx-auto max-w-2xl">
          AI Liberator is your gateway to unrestricted AI interactions. Advanced jailbreak techniques for ChatGPT and other AI models.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://play.google.com/store/apps/details?id=com.ai.liberator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="w-full sm:w-auto">
              <SiGoogleplay className="mr-2 h-5 w-5" />
              Download for Android
            </Button>
          </a>

          <Button size="lg" variant="outline" disabled>
            iOS Coming Soon
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
