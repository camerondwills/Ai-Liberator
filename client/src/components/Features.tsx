import { Card, CardContent } from "@/components/ui/card";
import { Zap, ListChecks, Copy, Clipboard } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Advanced Jailbreak",
    description: "Transform any prompt into an unrestricted format that AI models will respond to"
  },
  {
    icon: <ListChecks className="h-8 w-8 text-primary" />,
    title: "Multiple AI Models",
    description: "Support for 20+ AI models including GPT-4, Claude, Gemini, and more"
  },
  {
    icon: <Copy className="h-8 w-8 text-primary" />,
    title: "One-Click Liberation",
    description: "Simply enter your prompt, press 'Liberate', and get your jailbroken prompt copied to clipboard"
  }
];

export default function Features() {
  return (
    <section className="py-20 px-4 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Simple Yet Powerful
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-primary/10 bg-background/50 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}