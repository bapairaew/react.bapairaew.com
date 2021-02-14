import { Box, Container, Grid, Heading } from "theme-ui";
import Footer from "~/components/common/Footer";
import Header from "~/components/common/Header";
import ThoughtCard from "~/components/thoughts/ThoughtCard";
import { getAllThoughts } from "~/libs/data";
import { NextSeo } from "next-seo";

export const getStaticProps = async () => {
  const thoughts = await getAllThoughts();
  return {
    props: { thoughts },
  };
};

export default function Thoughts({ thoughts }) {
  return (
    <>
      <NextSeo
        title="Thoughts | Narudom"
        description="An engineer's (random) thoughts on things."
        openGraph={{
          title: "Thoughts | Narudom",
          description: "An engineer's (random) thoughts on things.",
          images: [],
          site_name: "Narudom",
        }}
      />
      <Header />
      <Container variant="layout.text">
        <Heading as="h1" sx={{ fontWeight: "display" }}>
          Thoughts
        </Heading>
      </Container>
      <Grid my={4} gap={2} columns={"1fr"} variant="layout.text">
        {thoughts
          .sort((a, b) => b.slug.localeCompare(a.slug))
          .map((thought) => (
            <Box key={thought.slug}>
              <ThoughtCard thought={thought} />
            </Box>
          ))}
      </Grid>
      <Footer />
    </>
  );
}
