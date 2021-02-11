import { NextSeo } from "next-seo";
import { Container } from "@theme-ui/components";

export default function BlogsLayout({ children, frontMatter }) {
  return (
    <>
      <NextSeo {...frontMatter} />
      <Container>{children}</Container>
    </>
  );
}
