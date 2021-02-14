import { NextSeo } from "next-seo";
import Link from "next/link";
import { Container, Heading, Text, NavLink as A } from "theme-ui";
import Footer from "~/components/common/Footer";
import Header from "~/components/common/Header";
import { parseThought } from "~/libs/parser";

export default function ThoughtLayout({ children, frontMatter }) {
  const thought =
    frontMatter &&
    parseThought({ data: frontMatter, path: frontMatter.__resourcePath });
  return (
    <>
      <Header />
      <NextSeo
        {...frontMatter}
        title={`${frontMatter.title} | Narudom`}
        description={frontMatter.description}
        openGraph={{
          title: `${frontMatter.title} | Narudom`,
          description: frontMatter.description,
          images: frontMatter.images || [],
          site_name: "Narudom",
        }}
      />
      <Container variant="layout.text">
        <Link href="/thoughts">
          <A sx={{ mb: 4, color: "gray" }}>
            <Text>← Back</Text>
          </A>
        </Link>
        <Heading as="h1" sx={{ fontWeight: "display" }}>
          {thought.title}
        </Heading>
        <Text my={3} variant="subtitle">
          {[
            new Date(thought.publishedTime).toLocaleDateString(undefined, {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
            thought.keywords,
          ]
            .filter((x) => x)
            .join(" · ")}
        </Text>
      </Container>
      {children}
      <Footer />
    </>
  );
}
