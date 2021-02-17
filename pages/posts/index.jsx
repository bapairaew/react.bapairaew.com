import { Box, Container, Grid, Heading } from "theme-ui";
import Footer from "~/components/common/Footer";
import Header from "~/components/common/Header";
import PostCard from "~/components/posts/PostCard";
import { getAllPosts } from "~/libs/data";
import { NextSeo } from "next-seo";

export const getStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: { posts },
  };
};

export default function Posts({ posts }) {
  return (
    <>
      <NextSeo
        title="Posts | Narudom"
        description="An engineer's (random) thoughts on things."
        openGraph={{
          title: "Posts | Narudom",
          description: "An engineer's (random) thoughts on things.",
          images: [],
          site_name: "Narudom",
        }}
      />
      <Header />
      <Container variant="layout.text">
        <Heading as="h1" sx={{ fontWeight: "display" }}>
          Posts
        </Heading>
        <Grid mt={3} columns={"1fr"}>
          {posts
            .sort((a, b) => b.slug.localeCompare(a.slug))
            .map((post) => (
              <Box key={post.slug}>
                <PostCard post={post} />
              </Box>
            ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
