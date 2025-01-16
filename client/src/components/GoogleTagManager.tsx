export function GoogleTagManagerNoScript() {
  const gtmId = import.meta.env.VITE_GTM_ID;
  
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=GTM-${gtmId}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
}
