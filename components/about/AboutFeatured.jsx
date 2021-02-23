import Link from "next/link";
import {
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  NavLink as A,
  Text,
} from "theme-ui";
import ProjectCard from "~/components/projects/ProjectCard";
import PostCard from "~/components/posts/PostCard";
import PhotoCard from "~/components/photography/PhotoCard";

export default function AboutFeatured({ projects, posts, photos }) {
  const tools = projects
    .reduce((tools, w) => {
      for (const tool of w.tags.filter((t) =>
        ["Framework", "Language", "Platform", "Database"].includes(t.type)
      )) {
        const matched = tools.find((t) => t.text === tool.text);
        if (matched) {
          matched.count++;
        } else {
          tools.push({ text: tool.text, count: 1 });
        }
      }
      return tools;
    }, [])
    .sort((a, b) => (a.count > b.count ? -1 : 1));

  const featuredProjects = projects
    ?.sort((a, b) => b.slug.localeCompare(a.slug))
    .slice(0, 8);

  const featuredPosts = posts
    ?.sort((a, b) => b.slug.localeCompare(a.slug))
    .slice(0, 4);

  const featuredPhotos = photos
    ?.sort((a, b) => b.slug.localeCompare(a.slug))
    .slice(0, 8);

  return (
    <Container>
      <Box my={4}>
        <Flex id="projects" variant="layout.text" mb={4}>
          <Box sx={{ flex: "1 1 auto" }}>
            <Heading as="h2" sx={{ fontWeight: "display" }}>
              Projects
            </Heading>
          </Box>
          <Box sx={{ display: ["none", "block"] }}>
            <Link href="/projects" passHref>
              <A>All projects →</A>
            </Link>
          </Box>
        </Flex>
        <Grid
          as="ul"
          p={0}
          gap={2}
          columns={["1fr", "1fr 1fr", "1fr 1fr 1fr 1fr"]}
        >
          {featuredProjects.map((project) => (
            <Box key={project.slug} as="li" sx={{ listStyleType: "none" }}>
              <ProjectCard titleAs="h3" project={project} />
            </Box>
          ))}
        </Grid>
        <Box p={4} sx={{ display: ["block", "none"], textAlign: "center" }}>
          <Link href="/projects" passHref>
            <A>All projects →</A>
          </Link>
        </Box>
      </Box>
      <Divider />
      <Box my={4}>
        <Heading
          id="tools"
          as="h2"
          variant="layout.text"
          mb={4}
          sx={{ fontWeight: "display" }}
        >
          Tools
        </Heading>
        <Grid
          as="ul"
          p={0}
          gap={1}
          columns={[
            "1fr 1fr 1fr",
            "1fr 1fr 1fr 1fr",
            "1fr 1fr 1fr 1fr 1fr 1fr",
          ]}
        >
          {tools.map((t) => (
            <Flex
              key={t.text}
              p={2}
              as="li"
              sx={{
                flexDirection: "column",
                justifyContent: "center",
                borderStyle: "solid",
                borderColor: "muted",
                borderWidth: 1,
                listStyleType: "none",
              }}
            >
              <Heading
                as="h3"
                sx={{
                  fontSize: 2,
                  textAlign: "center",
                  fontWeight: "display",
                }}
              >
                {t.text}
              </Heading>
              <Text as="p" variant="subtitle" sx={{ textAlign: "center" }}>
                {t.count} project{t.count > 1 ? "s" : ""}
              </Text>
            </Flex>
          ))}
        </Grid>
      </Box>
      <Divider />
      <Box my={4}>
        <Flex id="posts" variant="layout.text" mb={4}>
          <Box sx={{ flex: "1 1 auto" }}>
            <Heading as="h2" sx={{ fontWeight: "display" }}>
              Posts
            </Heading>
          </Box>
          <Box sx={{ display: ["none", "block"] }}>
            <Link href="/posts" passHref>
              <A>All posts →</A>
            </Link>
          </Box>
        </Flex>
        <Grid
          as="ul"
          p={0}
          gap={2}
          columns={["1fr", "1fr 1fr", "1fr 1fr"]}
          sx={{ alignContent: "center" }}
        >
          {featuredPosts?.map((post) => (
            <Box key={post.slug} as="li" sx={{ listStyleType: "none" }}>
              <PostCard titleAs="h3" post={post} />
            </Box>
          ))}
        </Grid>
        <Box p={4} sx={{ display: ["block", "none"], textAlign: "center" }}>
          <Link href="/posts" passHref>
            <A>All posts →</A>
          </Link>
        </Box>
      </Box>
      <Divider />
      <Box my={4}>
        <Flex id="photos" variant="layout.text" mb={4}>
          <Box sx={{ flex: "1 1 auto" }}>
            <Heading as="h2" sx={{ fontWeight: "display" }}>
              Photography
            </Heading>
          </Box>
          <Box sx={{ display: ["none", "block"] }}>
            <Link href="/photography" passHref>
              <A>All photos →</A>
            </Link>
          </Box>
        </Flex>
        <Grid
          as="ul"
          p={0}
          columns={["1fr 1fr", "1fr 1fr 1fr 1fr", "1fr 1fr 1fr 1fr"]}
        >
          {featuredPhotos?.map((photo) => (
            <Box key={photo.slug} as="li" sx={{ listStyleType: "none" }}>
              <PhotoCard titleAs="h3" photo={photo} />
            </Box>
          ))}
        </Grid>
        <Box p={4} sx={{ display: ["block", "none"], textAlign: "center" }}>
          <Link href="/photography" passHref>
            <A>All photos →</A>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
