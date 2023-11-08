import { useMemo } from "react";
import { useStore } from "../../store";
import { validUrl } from "../../lib";

export const WebPage: React.FC = () => {
  const { url, webviewRef } = useStore();

  const properUrl = useMemo(() => validUrl(url), [url]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {properUrl && (
        <webview ref={webviewRef} style={{ width: "100%", height: "100%" }} src={properUrl} />
      )}
    </div>
  );
};
