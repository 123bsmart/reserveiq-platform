interface GoogleTagManagerNoScriptProps {
  gtmId?: string;
}

export const GoogleTagManagerNoScript = ({ gtmId }: GoogleTagManagerNoScriptProps): JSX.Element | null => {
  if (!gtmId) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
        title="Google Tag Manager NoScript"
      />
    </noscript>
  );
};
