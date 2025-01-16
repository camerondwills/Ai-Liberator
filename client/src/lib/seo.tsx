import { Helmet, HelmetProvider } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  url?: string;
}

export function SEO({
  title = "AI Liberator - ChatGPT Jailbreak & AI Hack Tool",
  description = "Unlock AI's full potential with AI Liberator. The most advanced ChatGPT jailbreak and AI hack tool supporting GPT-4, Claude, Gemini, and more.",
  keywords = [
    "ChatGPT jailbreak",
    "ai hack",
    "ai jailbreak",
    "jailbreak ai",
    "gpt4 jailbreak",
    "claude jailbreak",
    "gemini jailbreak"
  ],
  url = "https://ailiberator.com"
}: SEOProps) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        {/* Additional SEO */}
        <link rel="canonical" href={url} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="AI Liberator" />
      </Helmet>
    </HelmetProvider>
  );
}