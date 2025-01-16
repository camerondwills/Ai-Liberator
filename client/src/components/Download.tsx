import { Button } from "@/components/ui/button";
import { SiGoogleplay } from "react-icons/si";

export default function Download() {
  return (
    <div className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />

      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Started with AI Liberator
          </h2>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Download AI Liberator now and experience unrestricted AI capabilities. Available on Android with iOS coming soon.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://play.google.com/store/apps/details?id=com.ai.liberator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src="/GetItOnGooglePlay_Badge.png" 
                alt="Get it on Google Play"
                className="h-[60px] w-auto"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}