import { NextSeo } from "next-seo";
import Link from "next/link";
import { Heading, Text, Flex, Container, Link as A, Button } from "theme-ui";
import Footer from "~/components/common/Footer";
import Header from "~/components/common/Header";

export default function NotFound() {
  return (
    <Flex sx={{ minHeight: "100vh", flexDirection: "column" }}>
      <NextSeo
        noindex={true}
        title="Page not found | Narudom"
        description="A software engineer portfolio."
        openGraph={{
          title: "Page not found | Narudom",
          description: "A software engineer portfolio..",
          images: [],
          site_name: "Narudom",
        }}
      />
      <Header />
      <Container
        variant="layout.text"
        sx={{
          flex: "1 1 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Heading as="h1" sx={{ fontWeight: "display" }}>
          Page not found
        </Heading>
        <Text my={3}>
          Well, this URL seems wrong. Either it has already been changed or it
          is misspelt. If you are still not sure what is wrong maybe try to find
          the page from the start.
        </Text>
        <Link href="/">
          <A>
            <Button>Return home</Button>
          </A>
        </Link>
      </Container>
      <Footer />
    </Flex>
  );
}
