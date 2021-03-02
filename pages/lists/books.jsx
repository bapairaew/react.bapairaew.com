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
import BookCard from "~/components/books/BookCard";
import Footer from "~/components/common/Footer";
import Header from "~/components/common/Header";
import { getBooks } from "~/libs/goodreads";
import { getOgImgeUrlObject } from "~/libs/ogimage";

export const getStaticProps = async () => {
  const books = (await getBooks()) || [];
  return {
    props: { books, lastUpdated: new Date().toJSON() },
    revalidate: 60 * 60, // Update every hour
  };
};

export default function Books({ books, lastUpdated }) {
  return (
    <>
      <NextSeo
        title="Books | Narudom"
        description="List of books read by an engineer."
        openGraph={{
          title: "Books | Narudom",
          description: "List of books read by an engineer.",
          images: getOgImgeUrlObject("Books"),
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
          Books
        </Heading>
        <Text
          as="p"
          variant="subtitle"
          target="_blank"
          rel="noopener noreferrer"
        >
          Automatically scraped from{" "}
          <A
            href="https://www.goodreads.com/review/list_rss/131278257"
            target="_blank"
            rel="noopener noreferrer"
          >
            Goodreads RSS ↗
          </A>{" "}
          on {dateformat(new Date(lastUpdated), "dd mmm yyyy HH:MM")}
        </Text>
        <Divider />
        <Grid
          as="ul"
          p={0}
          mt={4}
          columns={["1fr 1fr", "1fr 1fr 1fr", "1fr 1fr 1fr 1fr 1fr 1fr"]}
        >
          {books.map((book) => (
            <Box key={book.id} as="li" sx={{ listStyleType: "none" }}>
              <BookCard titleAs="h3" book={book} />
            </Box>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
