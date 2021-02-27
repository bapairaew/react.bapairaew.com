import { ThemeProvider } from "theme-ui";
import useAnalytics from "~/libs/analytics";
import components from "~/theme/components";
import theme from "~/theme/tokens";

export default function App({ Component, pageProps }) {
  useAnalytics();

  return (
    <ThemeProvider components={components} theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
