import { ThemeProvider } from "theme-ui";
import components from "~/theme-ui/mdxComponents";
import theme from "~/theme-ui/theme";
import PlausibleProvider from "next-plausible";

const { NEXT_PUBLIC_PLAUSIBLE_DOMAIN: domain } = process.env;

export default function App({ Component, pageProps }) {
  return (
    <PlausibleProvider enabled={!!domain} domain={domain}>
      <ThemeProvider components={components} theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </PlausibleProvider>
  );
}
