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
            <Heading>Projects</Heading>
          </Box>
          <Box sx={{ display: ["none", "block"] }}>
            <Link href="/projects" passHref>
              <A>See all →</A>
            </Link>
          </Box>
        </Flex>
        <Grid gap={2} columns={["1fr", "1fr 1fr", "1fr 1fr 1fr 1fr"]}>
          {featuredProjects.map((project) => (
            <Box key={project.slug}>
              <ProjectCard project={project} />
            </Box>
          ))}
        </Grid>
        <Box p={4} sx={{ display: ["block", "none"], textAlign: "center" }}>
          <Link href="/projects" passHref>
            <A>See all →</A>
          </Link>
        </Box>
      </Box>
      <Divider />
      <Box my={4}>
        <Heading
          id="tools"
          variant="layout.text"
          mb={4}
          sx={{ fontWeight: "display" }}
        >
          Tools
        </Heading>
        <Grid
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
              sx={{
                flexDirection: "column",
                justifyContent: "center",
                borderStyle: "solid",
                borderColor: "muted",
                borderWidth: 1,
              }}
            >
              <Heading
                as="h4"
                sx={{
                  textAlign: "center",
                  fontWeight: "display",
                }}
              >
                {t.text}
              </Heading>
              <Text variant="subtitle" sx={{ textAlign: "center" }}>
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
            <Heading sx={{ fontWeight: "display" }}>Posts</Heading>
          </Box>
          <Box sx={{ display: ["none", "block"] }}>
            <Link href="/posts" passHref>
              <A>See all →</A>
            </Link>
          </Box>
        </Flex>
        <Grid
          gap={2}
          columns={["1fr", "1fr 1fr", "1fr 1fr"]}
          sx={{ alignContent: "center" }}
        >
          {featuredPosts?.map((post) => (
            <Box key={post.slug}>
              <PostCard post={post} />
            </Box>
          ))}
        </Grid>
        <Box p={4} sx={{ display: ["block", "none"], textAlign: "center" }}>
          <Link href="/posts" passHref>
            <A>See all →</A>
          </Link>
        </Box>
      </Box>
      <Divider />
      <Box my={4}>
        <Flex id="photos" variant="layout.text" mb={4}>
          <Box sx={{ flex: "1 1 auto" }}>
            <Heading sx={{ fontWeight: "display" }}>Photography</Heading>
          </Box>
          <Box sx={{ display: ["none", "block"] }}>
            <Link href="/photography" passHref>
              <A>See all →</A>
            </Link>
          </Box>
        </Flex>
        <Grid columns={["1fr 1fr", "1fr 1fr 1fr 1fr", "1fr 1fr 1fr 1fr"]}>
          {featuredPhotos?.map((photo) => (
            <Box key={photo.slug}>
              <PhotoCard photo={photo} />
            </Box>
          ))}
        </Grid>
        <Box p={4} sx={{ display: ["block", "none"], textAlign: "center" }}>
          <Link href="/photography" passHref>
            <A>See all →</A>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
