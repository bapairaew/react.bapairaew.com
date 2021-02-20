import Document, { Main, NextScript, Head, Html } from "next/document";
import { InitializeColorMode } from "theme-ui";

const googleFontsUrl =
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap";

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* https://csswizardry.com/2020/05/the-fastest-google-fonts/ */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preload" as="style" href={googleFontsUrl} />
          <link
            rel="stylesheet"
            href={googleFontsUrl}
            media="print"
            onload="this.media='all'"
          />
        </Head>
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
