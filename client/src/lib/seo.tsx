import { Helmet, HelmetProvider } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  url?: string;
}

export function SEO({
  title = "AI Liberator - Most Advanced AI Jailbreak Prompt Tool (2025)",
  description = "Free the AI from it's restrictions. Advanced jailbreak prompt converter for ChatGPT, Claude, Gemini & 20+ AI models.",
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
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const imageUrl = `${origin}/social-share.png`;
  
  return (
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />
        
        <link rel="canonical" href={origin} />
        <meta property="og:url" content={origin} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${origin}/social-share.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="AI Liberator" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>
  );
}