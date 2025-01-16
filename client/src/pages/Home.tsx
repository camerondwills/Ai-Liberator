import { SEO } from "@/lib/seo";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SEO />
      <main className="min-h-screen bg-gradient-to-b from-background to-primary/10">
        <Hero />
        <Features />
        <Download />
        <Footer />
      </main>
    </>
  );
}