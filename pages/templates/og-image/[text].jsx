import { NextSeo } from "next-seo";
import { Box, Flex, Heading } from "theme-ui";

export const getServerSideProps = async ({ query }) => {
  return {
    props: { text: query.text || "Narudom" },
  };
};

export default function OgImage({ text }) {
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
