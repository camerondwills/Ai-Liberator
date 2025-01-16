import { Helmet } from "react-helmet";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>AI Liberator - ChatGPT Jailbreak & AI Hack Tool</title>
        <meta name="description" content="AI Liberator - The ultimate ChatGPT jailbreak and AI hack tool. Unlock AI's full potential with our advanced jailbreak techniques." />
      </Helmet>
      
      <main className="min-h-screen bg-gradient-to-b from-background to-primary/10">
        <Hero />
        <Features />
        <Download />
        <Footer />
      </main>
    </>
  );
}
