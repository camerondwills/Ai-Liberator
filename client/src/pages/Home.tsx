import { SEO } from "@/lib/seo";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SupportedModels from "@/components/SupportedModels";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SEO 
        title="AI Liberator - Most Advanced AI Jailbreak Prompt Tool (2025)"
        description="Ultimate AI jailbreak tool for ChatGPT, Claude, Gemini & 20+ models. Transform any prompt into a jailbroken one using the latest techniques."
      />
      <main className="min-h-screen bg-gradient-to-b from-background to-primary/10">
        <Hero />
        <Features />
        <SupportedModels />
        <Download />
        <Footer />
      </main>
    </>
  );
}