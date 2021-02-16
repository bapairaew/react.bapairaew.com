import { ThemeProvider } from "theme-ui";
import components from "~/theme/components";
import theme from "~/theme/config";
import { useEffect } from "react";
import { useRouter } from "next/router";
import ga from "react-ga";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    ga.initialize("UA-131730401-1");

    const logPageView = (url) => {
      ga.pageview(url);
    };

    router.events.on("routeChangeComplete", logPageView);
    return () => {
      router.events.off("routeChangeComplete", logPageView);
    };
  }, []);
  return (
    <ThemeProvider components={components} theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
