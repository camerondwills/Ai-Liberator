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
  ],
  url = "https://ailiberator.com"
}: SEOProps) {
  const gtmId = import.meta.env.VITE_GTM_ID;
  const gtagId = import.meta.env.VITE_GTAG_ID;

  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />

        {/* Open Graph */}
        <meta property="og:site_name" content="AI Liberator" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${url}/social-share.png`} />
        <meta property="og:image:url" content={`${url}/social-share.png`} />
        <meta property="og:image:secure_url" content={`${url}/social-share.png`} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="AI Liberator - Advanced AI Jailbreak Tool" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${url.replace(/\/$/, "")}/social-share.png`} />

        {/* Additional SEO */}
        <link rel="canonical" href={url} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="AI Liberator" />

        

        {/* GA4 is initialized in index.html */}
      </Helmet>
    </HelmetProvider>
  );
}