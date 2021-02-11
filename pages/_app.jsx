import { ThemeProvider } from "theme-ui";
import components from "~/theme/components";
import theme from "~/theme/config";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider components={components} theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
