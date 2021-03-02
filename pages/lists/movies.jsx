import dateformat from "dateformat";
import { NextSeo } from "next-seo";
import Link from "next/link";
import {
  Box,
  Container,
  Divider,
  Grid,
  Heading,
  Link as A,
  NavLink,
  Text,
} from "theme-ui";
import Footer from "~/components/common/Footer";
import Header from "~/components/common/Header";
import MoiveCard from "~/components/movies/MovieCard";
import { getOgImgeUrlObject } from "~/libs/ogimage";
import { getMovies } from "~/libs/imdb";

export const getStaticProps = async () => {
  const movies = (await getMovies()) || [];
  return {
    props: { movies, lastUpdated: new Date().toJSON() },
    revalidate: 60 * 60, // Update every hour
  };
};

export default function Movies({ movies, lastUpdated }) {
  return (
    <>
      <NextSeo
        title="Movies | Narudom"
        description="An engineer's top watched movies from IMDB."
        openGraph={{
          title: "Movies | Narudom",
          description: "An engineer's top watched movies from IMDB.",
          images: getOgImgeUrlObject("Movies"),
          site_name: "Narudom",
        }}
      />
      <Header />
      <Container>
        <Link href="/lists" passHref>
          <NavLink sx={{ mb: 4, color: "gray" }}>
            <Text>← Lists</Text>
          </NavLink>
        </Link>
        <Heading as="h1" variant="display" mb={3}>
          Movies
        </Heading>
        <Text
          as="p"
          variant="subtitle"
          target="_blank"
          rel="noopener noreferrer"
        >
          Automatically scraped from{" "}
          <A
            href="https://www.imdb.com/user/ur129926199/watchlist"
            target="_blank"
            rel="noopener noreferrer"
          >
            IMDB Watchlist ↗
          </A>{" "}
          on {dateformat(new Date(lastUpdated), "dd mmm yyyy HH:MM")}
        </Text>
        <Divider />
        <Grid
          as="ul"
          p={0}
          mt={4}
          columns={["1fr 1fr", "1fr 1fr 1fr 1fr", "1fr 1fr 1fr 1fr 1fr 1fr"]}
        >
          {movies.map((movie) => (
            <Box key={movie.id} as="li" sx={{ listStyleType: "none" }}>
              <MoiveCard titleAs="h3" movie={movie} />
            </Box>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
