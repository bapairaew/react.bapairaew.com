import { NextSeo } from "next-seo";
import { Container, Heading, Text } from "theme-ui";
import Footer from "~/components/common/Footer";
import Header from "~/components/common/Header";
import { parseWork } from "~/libs/parser";

export default function WorkLayout({ children, frontMatter }) {
  const work =
    frontMatter &&
    parseWork({ data: frontMatter, path: frontMatter.__resourcePath });

  const tagsMap = work.tags.reduce((map, tag) => {
    return { ...map, [tag.type]: [...(map[tag.type] || []), tag.text] };
  }, {});

  const techStack = [
    [...(tagsMap["App type"] || []), ...(tagsMap.Layer || [])].join(" · "),
    [...(tagsMap.Framework || []), ...(tagsMap.Database || [])].join(" · "),
    tagsMap.Platform?.join(" · "),
    tagsMap.Language?.join(" · "),
    tagsMap.Other?.join(" · "),
  ]
    .filter((x) => x)
    .join(" / ");

  return (
    <>
      <Header />
      <NextSeo {...frontMatter} />
      <Container variant="layout.text">
        <Text my={2} variant="subtitle">
          {[work.year, tagsMap.Company?.[0]].filter((x) => x).join(" · ")}
        </Text>
        <Heading as="h1" sx={{ fontWeight: "display" }}>
          {work.title}
        </Heading>
        <Text sx={{ fontSize: 3 }}>{work.subtitle}</Text>
        <Text my={2} variant="subtitle">
          {techStack}
        </Text>
      </Container>
      {children}
      <Footer />
    </>
  );
}
