import { ThemeProvider } from "theme-ui";
import useAnalytics from "~/libs/analytics";
import components from "~/theme-ui/mdxComponents";
import theme from "~/theme-ui/theme";

export default function App({ Component, pageProps }) {
  useAnalytics();

  return (
    <ThemeProvider components={components} theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
