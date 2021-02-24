import { NextSeo } from "next-seo";
import Link from "next/link";
import {
  Box,
  Container,
  Divider,
  Grid,
  Heading,
  NavLink as A,
  Text,
} from "theme-ui";
import Footer from "~/components/common/Footer";
import Header from "~/components/common/Header";
import ArtistCard from "~/components/music/ArtistCard";
import TrackCard from "~/components/music/TrackCard";
import { getOgImgeUrlObject } from "~/libs/image";
import { getTopArtists, getTopTracks } from "~/libs/spotify";

export const getStaticProps = async () => {
  const { items: tracks } = await getTopTracks();
  const { items: artists } = await getTopArtists();
  return {
    props: { tracks, artists },
    revalidate: 60 * 60, // Update every hour
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
        <Link href="/lists" passHref>
          <A sx={{ mb: 4, color: "gray" }}>
            <Text>← Lists</Text>
          </A>
        </Link>
        <Heading as="h1" variant="display" mb={3}>
          Music
        </Heading>
        <Divider />
        <Box my={4}>
          <Heading as="h2" variant="display" mb={3}>
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
          <Heading as="h2" variant="display" mb={3}>
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
