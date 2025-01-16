import { Card, CardContent } from "@/components/ui/card";
import { Zap, Lock, Cpu, Shield } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Advanced Jailbreak",
    description: "Access unrestricted AI capabilities with our sophisticated jailbreak techniques"
  },
  {
    icon: <Lock className="h-8 w-8 text-primary" />,
    title: "Privacy First",
    description: "No data collection or tracking - your conversations stay private"
  },
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: "AI Optimization",
    description: "Enhanced AI responses through intelligent prompt engineering"
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Secure & Reliable",
    description: "Built with security in mind - safe and reliable AI interactions"
  }
];

export default function Features() {
  return (
    <section className="py-20 px-4 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Powerful AI Hacking Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
