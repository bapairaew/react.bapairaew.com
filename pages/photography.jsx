import { Box, Container, Grid, Heading } from "theme-ui";
import Footer from "~/components/common/Footer";
import Header from "~/components/common/Header";
import PhotoCard from "~/components/photography/PhotoCard";
import { getAllPhotos } from "~/libs/data";
import { NextSeo } from "next-seo";

export const getStaticProps = async () => {
  const photos = await getAllPhotos();
  return {
    props: { photos },
  };
};

export default function Photography({ photos }) {
  return (
    <>
      <NextSeo
        title="Photography | Narudom"
        description="Some photos (badly) taken by a software engineer."
        openGraph={{
          title: "Photography | Narudom",
          description: "Some photos (badly) taken by a software engineer.",
          images: [],
          site_name: "Narudom",
        }}
      />
      <Header />
      <Container>
        <Heading as="h1" sx={{ fontWeight: "display" }} mb={3}>
          Photography
        </Heading>
        <Grid
          mt={3}
          columns={["1fr 1fr", "1fr 1fr 1fr 1fr", "1fr 1fr 1fr 1fr"]}
        >
          {photos
            .sort((a, b) => b.slug.localeCompare(a.slug))
            .map((photo) => (
              <Box key={photo.slug}>
                <PhotoCard photo={photo} />
              </Box>
            ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
