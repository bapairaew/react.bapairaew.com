import Link from "next/link";
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  NavLink as A,
  Text,
} from "theme-ui";
import WorkCard from "~/components/works/WorkCard";
import PostCard from "~/components/posts/PostCard";
import PhotoCard from "~/components/photography/PhotoCard";

export default function AboutFeatured({ works, posts, photos }) {
  const tools = works
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

  const featuredWorks = works
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
        <Flex id="works" variant="layout.text" mb={4}>
          <Box sx={{ flex: "1 1 auto" }}>
            <Heading>Works</Heading>
          </Box>
          <Box sx={{ display: ["none", "block"] }}>
            <Link href="/works" passHref>
              <A>See all →</A>
            </Link>
          </Box>
        </Flex>
        <Grid gap={2} columns={["1fr", "1fr 1fr", "1fr 1fr 1fr 1fr"]}>
          {featuredWorks.map((work) => (
            <Box key={work.slug}>
              <WorkCard work={work} />
            </Box>
          ))}
        </Grid>
        <Box p={4} sx={{ display: ["block", "none"], textAlign: "center" }}>
          <Link href="/works" passHref>
            <A>See all →</A>
          </Link>
        </Box>
      </Box>
      <Box my={5}>
        <Heading
          id="tools"
          variant="layout.text"
          mb={4}
          sx={{ fontWeight: "display" }}
        >
          Tools
        </Heading>
        <Grid
          gap={0}
          columns={[
            "1fr 1fr 1fr",
            "1fr 1fr 1fr 1fr",
            "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
          ]}
        >
          {tools.map((t) => (
            <Box
              key={t.text}
              p={2}
              sx={{
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
            </Box>
          ))}
        </Grid>
      </Box>
      <Box my={5}>
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
      <Box my={5}>
        <Flex id="photos" variant="layout.text" mb={4}>
          <Box sx={{ flex: "1 1 auto" }}>
            <Heading sx={{ fontWeight: "display" }}>Photography</Heading>
          </Box>
          <Box sx={{ display: ["none", "block"] }}>
            <Link href="/photos" passHref>
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
          <Link href="/photos" passHref>
            <A>See all →</A>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
