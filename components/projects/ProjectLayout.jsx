import { NextSeo } from "next-seo";
import Link from "next/link";
import { Container, Heading, Text, NavLink as A } from "theme-ui";
import Footer from "~/components/common/Footer";
import Header from "~/components/common/Header";
import { parseProject } from "~/libs/parser";

export default function ProjectLayout({ children, frontMatter }) {
  const project =
    frontMatter &&
    parseProject({ data: frontMatter, path: frontMatter.__resourcePath });

  const tagsMap = project.tags.reduce((map, tag) => {
    return { ...map, [tag.type]: [...(map[tag.type] || []), tag.text] };
  }, {});

  const techStack = [
    tagsMap["App type"]?.join(" · "),
    tagsMap.Layer?.join(" · "),
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
      <NextSeo
        title={`${frontMatter.title} | Narudom`}
        description={frontMatter.description}
        keywords={frontMatter.keywords}
        openGraph={{
          title: `${frontMatter.title} | Narudom`,
          description: frontMatter.description,
          images: frontMatter.images || [],
          site_name: "Narudom",
        }}
      />
      <Container variant="layout.text">
        <Link href="/projects" passHref>
          <A sx={{ mb: 4, color: "gray" }}>
            <Text>← Back</Text>
          </A>
        </Link>
        <Text my={3} variant="subtitle">
          {[project.year, tagsMap.Company?.[0]].filter((x) => x).join(" · ")}
        </Text>
        <Heading as="h1" sx={{ fontWeight: "display" }}>
          {project.title}
        </Heading>
        <Text my={3} sx={{ fontSize: 3 }}>
          {project.subtitle}
        </Text>
        <Text my={3} variant="subtitle">
          {techStack}
        </Text>
      </Container>
      {children}
      <Footer />
    </>
  );
}
