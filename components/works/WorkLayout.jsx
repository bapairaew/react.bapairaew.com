import { NextSeo } from "next-seo";
import { Container, Heading, Text } from "theme-ui";
import Footer from "~/components/common/Footer";
import Header from "~/components/common/Header";
import { parseWork } from "~/libs/parser";

export default function WorkLayout({ children, frontMatter }) {
  const work =
    frontMatter &&
    parseWork({ data: frontMatter, path: frontMatter.__resourcePath });

  return (
    <>
      <Header />
      <NextSeo {...frontMatter} />
      <Container variant="layout.text">
        <Heading>{work.title}</Heading>
        <Text variant="subtitle">{work.subtitle}</Text>
      </Container>
      {children}
      <Footer />
    </>
  );
}
