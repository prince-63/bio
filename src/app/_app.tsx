import { useEffect } from "react";
import { AppProps } from "next/app";
import { initGA, logPageView } from "@/lib/googleAnalytics";

declare global {
  interface Window {
    GA_INITIALIZED: boolean;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
