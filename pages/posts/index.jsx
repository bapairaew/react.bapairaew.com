import { NextSeo } from "next-seo";
import { Box, Container, Divider, Grid, Heading } from "theme-ui";
import Footer from "~/components/common/Footer";
import Header from "~/components/common/Header";
import PostCard from "~/components/posts/PostCard";
import { getAllPosts } from "~/libs/data";
import { getOgImgeUrlObject } from "~/libs/image";

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
          images: getOgImgeUrlObject("Posts"),
          site_name: "Narudom",
        }}
      />
      <Header />
      <Container variant="layout.text">
        <Heading as="h1" variant="display">
          Posts
        </Heading>
        <Divider />
        <Grid as="ul" p={0} mt={4} columns={"1fr"}>
          {posts
            .sort((a, b) => b.slug.localeCompare(a.slug))
            .map((post) => (
              <Box key={post.slug} as="li" sx={{ listStyleType: "none" }}>
                <PostCard titleAs="h2" post={post} />
              </Box>
            ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
