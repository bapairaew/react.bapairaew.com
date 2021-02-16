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
import ThoughtCard from "~/components/thoughts/ThoughtCard";
import PhotoCard from "~/components/photos/PhotoCard";

export default function AboutFeatured({ works, thoughts, photos }) {
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

  const featuredThoughts = thoughts
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
        <Flex id="thoughts" variant="layout.text" mb={4}>
          <Box sx={{ flex: "1 1 auto" }}>
            <Heading sx={{ fontWeight: "display" }}>Thoughts</Heading>
          </Box>
          <Box sx={{ display: ["none", "block"] }}>
            <Link href="/thoughts" passHref>
              <A>See all →</A>
            </Link>
          </Box>
        </Flex>
        <Grid
          gap={2}
          columns={["1fr", "1fr 1fr", "1fr 1fr"]}
          sx={{ alignContent: "center" }}
        >
          {featuredThoughts?.map((thought) => (
            <Box key={thought.slug}>
              <ThoughtCard thought={thought} />
            </Box>
          ))}
        </Grid>
        <Box p={4} sx={{ display: ["block", "none"], textAlign: "center" }}>
          <Link href="/thoughts" passHref>
            <A>See all →</A>
          </Link>
        </Box>
      </Box>
      <Box my={5}>
        <Flex id="photos" variant="layout.text" mb={4}>
          <Box sx={{ flex: "1 1 auto" }}>
            <Heading sx={{ fontWeight: "display" }}>Photos</Heading>
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
