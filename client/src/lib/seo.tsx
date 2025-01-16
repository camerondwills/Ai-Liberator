import { Helmet } from "react-helmet";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  url?: string;
}

export function SEO({
  title = "AI Liberator - ChatGPT Jailbreak & AI Hack Tool",
  description = "AI Liberator - The ultimate ChatGPT jailbreak and AI hack tool. Unlock AI's full potential with our advanced jailbreak techniques.",
  keywords = ["ChatGPT jailbreak", "ai hack", "ai jailbreak", "jailbreak ai"],
  url = "https://ailiberator.com"
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
