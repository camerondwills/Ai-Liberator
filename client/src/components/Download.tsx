import { Button } from "@/components/ui/button";
import { SiGoogleplay } from "react-icons/si";

export default function Download() {
  return (
    <section className="py-20 px-4 bg-primary/5">
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
            <Button size="lg" className="w-full sm:w-auto">
              <SiGoogleplay className="mr-2 h-5 w-5" />
              Download on Google Play
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
