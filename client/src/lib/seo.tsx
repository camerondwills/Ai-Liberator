import { Helmet, HelmetProvider } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  url?: string;
}

export function SEO({
  title = "AI Liberator - Most Advanced AI Jailbreak Prompt Tool (2025)",
  description = "Ultimate AI jailbreak tool for ChatGPT, Claude, Gemini & 20+ models. Transform any prompt into a jailbroken one using the latest techniques.",
  keywords = [
    "ai jailbreak",
    "how to jailbreak ai",
    "chatgpt jailbreak",
    "ai model unlock",
    "gpt4 jailbreak",
    "claude jailbreak",
    "gemini jailbreak",
    "ai unlock tool",
    "jailbreak ai models",
    "ai freedom tool"
  ]
}: SEOProps) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/social-share.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>
    </HelmetProvider>
  );
}