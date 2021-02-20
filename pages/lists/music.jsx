import { NextSeo } from "next-seo";
import { Box, Container, Divider, Grid, Heading } from "theme-ui";
import Footer from "~/components/common/Footer";
import Header from "~/components/common/Header";
import ArtistCard from "~/components/music/ArtistCard";
import TrackCard from "~/components/music/TrackCard";
import { getOgImgeUrlObject } from "~/libs/og-image";
import { getTopArtists, getTopTracks } from "~/libs/spotify";

export const getStaticProps = async () => {
  const { items: tracks } = await getTopTracks();
  const { items: artists } = await getTopArtists();
  return {
    props: { tracks, artists },
    revalidate: 24 * 60 * 60, // Update once a day max
  };
};

export default function Music({ tracks, artists }) {
  return (
    <>
      <NextSeo
        title="Music | Narudom"
        description="An engineer's Top listened music from Spotify"
        openGraph={{
          title: "Music | Narudom",
          description: "An engineer's Top listened music from Spotify",
          images: getOgImgeUrlObject("Music"),
          site_name: "Narudom",
        }}
      />
      <Header />
      <Container>
        <Heading as="h1" sx={{ fontWeight: "display" }} mb={3}>
          Music
        </Heading>
        <Divider />
        <Box my={4}>
          <Heading as="h2" sx={{ fontWeight: "display" }} mb={3}>
            Artists
          </Heading>
          <Grid
            as="ul"
            p={0}
            mt={4}
            columns={[
              "1fr 1fr 1fr",
              "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
              "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
            ]}
          >
            {artists.map((artist) => (
              <Box key={artist.id} as="li" sx={{ listStyleType: "none" }}>
                <ArtistCard titleAs="h3" artist={artist} />
              </Box>
            ))}
          </Grid>
        </Box>
        <Divider />
        <Box my={4}>
          <Heading as="h2" sx={{ fontWeight: "display" }} mb={3}>
            Tracks
          </Heading>
          <Grid
            as="ul"
            p={0}
            mt={4}
            columns={["1fr 1fr", "1fr 1fr 1fr 1fr", "1fr 1fr 1fr 1fr 1fr"]}
          >
            {tracks.map((track) => (
              <Box key={track.id} as="li" sx={{ listStyleType: "none" }}>
                <TrackCard titleAs="h3" track={track} />
              </Box>
            ))}
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
