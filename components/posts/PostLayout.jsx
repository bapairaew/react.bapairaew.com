import { NextSeo } from "next-seo";
import Link from "next/link";
import { Container, Heading, Text, NavLink as A } from "theme-ui";
import Footer from "~/components/common/Footer";
import Header from "~/components/common/Header";
import { getOgImgeUrlObject } from "~/libs/image";
import { parsePost } from "~/libs/parser";

export default function PostLayout({ children, frontMatter }) {
  const post =
    frontMatter &&
    parsePost({ data: frontMatter, path: frontMatter.__resourcePath });
  return (
    <>
      <Header />
      <NextSeo
        title={`${frontMatter.title} | Narudom`}
        description={frontMatter.description}
        keywords={frontMatter.keywords}
        openGraph={{
          title: `${frontMatter.title} | Narudom`,
          description: frontMatter.description,
          images: frontMatter.images || getOgImgeUrlObject(frontMatter.title),
          site_name: "Narudom",
          type: "article",
          article: {
            publishedTime: frontMatter.publishedTime,
            modifiedTime: frontMatter.modifiedTime,
            tags: frontMatter.keywords?.split(", "),
          },
        }}
      />
      <Container variant="layout.text">
        <Link href="/posts" passHref>
          <A sx={{ mb: 4, color: "gray" }}>
            <Text>← Posts</Text>
          </A>
        </Link>
        <Heading as="h1" variant="display">
          {post.title}
        </Heading>
        <Text as="p" my={3} variant="subtitle">
          {[
            new Date(post.publishedTime).toLocaleDateString(undefined, {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
            post.keywords,
          ]
            .filter((x) => x)
            .join(" · ")}
        </Text>
      </Container>
      <article>{children}</article>
      <Footer />
    </>
  );
}
