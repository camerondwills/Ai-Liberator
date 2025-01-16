import { Button } from "@/components/ui/button";
import { SiGoogleplay } from "react-icons/si";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-[80vh] flex items-center px-4 py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />

      <div className="container mx-auto">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Ultimate AI Jailbreak Tool
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12">
              Break free from AI restrictions! Support for GPT-4, Claude, Gemini, and 20+ AI models. Transform any prompt into an unrestricted conversation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
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

          {/* Right Column - Phone Mockup */}
          <div className="relative flex justify-center">
            {/* This is where the phone mockup image will go */}
            <img 
              src="/phone-mockup.png" 
              alt="AI Liberator App Interface" 
              className="max-w-[300px] w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}