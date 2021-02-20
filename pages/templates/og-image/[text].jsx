import { readFileSync } from "fs";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { Box, Flex, Heading } from "theme-ui";

export const getServerSideProps = async ({ query }) => {
  // Make sure font is loaded prior of screenshot being taken
  const font = readFileSync("public/fonts/inter-var-latin.woff2").toString(
    "base64"
  );
  return {
    props: { text: query.text || "Narudom", font },
  };
};

export default function OgImage({ text, font }) {
  return (
    <>
      <NextSeo
        noindex={true}
        title="Open Graph Image | Narudom"
        openGraph={{
          title: "Open Graph Image | Narudom",
          site_name: "Narudom",
        }}
      />
      <Head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
                @font-face {
                  font-family: 'Inter';
                  font-style: normal;
                  font-weight: 100 900;
                  font-display: optional;
                  src: url(data:font/woff2;charset=utf-8;base64,${font}) format('woff2');
                  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
                    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
                    U+FEFF, U+FFFD;
                }`,
          }}
        />
      </Head>
      <Flex
        px={6}
        sx={{
          minHeight: "100vh",
          alignItems: "center",
        }}
      >
        <Heading as="h1" sx={{ fontWeight: "display", fontSize: "7vw" }}>
          {text}
        </Heading>
        <Box
          sx={{
            position: "absolute",
            bottom: 4,
            right: 4,
            px: "20px",
            py: "10px",
            border: "5px solid",
            borderColor: "text",
          }}
        >
          <Heading as="span" sx={{ fontSize: "4vw" }} title="Narudom">
            N.
          </Heading>
        </Box>
      </Flex>
    </>
  );
}
