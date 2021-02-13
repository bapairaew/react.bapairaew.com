import { NextSeo } from "next-seo";
import { Container } from "theme-ui";
import Footer from "~/components/common/Footer";
import Header from "~/components/common/Header";

export default function ThoughtLayout({ children, frontMatter }) {
  return (
    <>
      <Header />
      <NextSeo {...frontMatter} />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}
