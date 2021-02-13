import { Box, Container, Grid, Heading } from "theme-ui";
import Footer from "~/components/common/Footer";
import Header from "~/components/common/Header";
import PhotoCard from "~/components/photos/PhotoCard";
import { getAllPhotos } from "~/libs/data";

export const getStaticProps = async () => {
  const photos = await getAllPhotos();
  return {
    props: { photos },
  };
};

export default function Thoughts({ photos }) {
  return (
    <>
      <Header />
      <Container variant="layout.text">
        <Heading as="h1" sx={{ fontWeight: "display" }}>
          Photos
        </Heading>
      </Container>
      <Grid px={3} columns={["1fr 1fr", "1fr 1fr 1fr 1fr", "1fr 1fr 1fr 1fr"]}>
        {photos
          .sort((a, b) => b.slug.localeCompare(a.slug))
          .map((photo) => (
            <Box key={photo.slug}>
              <PhotoCard photo={photo} />
            </Box>
          ))}
      </Grid>
      <Footer />
    </>
  );
}
