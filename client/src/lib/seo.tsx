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
  const gtmId = import.meta.env.VITE_GTM_ID;
  const gtagId = import.meta.env.VITE_GTAG_ID;

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
        <meta property="og:image" content={`${url}/social-share.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${url}/social-share.png`} />

        {/* Additional SEO */}
        <link rel="canonical" href={url} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="AI Liberator" />

        {/* Google Tag Manager */}
        <script>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-${gtmId}');
          `}
        </script>

        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`} />
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtagId}');
          `}
        </script>
      </Helmet>
    </HelmetProvider>
  );
}