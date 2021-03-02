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
import WhiskyCard from "~/components/whiskies/WhiskyCard";
import { getOgImgeUrlObject } from "~/libs/ogimage";
import { getWhiskies } from "~/libs/whiskybase";

export const getStaticProps = async () => {
  const whiskies = (await getWhiskies()) || [];
  return {
    props: { whiskies, lastUpdated: new Date().toJSON() },
    revalidate: 60 * 60, // Update every hour
  };
};

export default function Whiskies({ whiskies, lastUpdated }) {
  return (
    <>
      <NextSeo
        title="Whiskies | Narudom"
        description="A few of whiskies an engineer bought and drank."
        openGraph={{
          title: "Whiskies | Narudom",
          description: "A few of whiskies an engineer bought and drank.",
          images: getOgImgeUrlObject("Whiskies"),
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
          Whiskies
        </Heading>
        <Text
          as="p"
          variant="subtitle"
          target="_blank"
          rel="noopener noreferrer"
        >
          Automatically scraped from{" "}
          <A
            href="https://www.whiskybase.com/profile/bapairaew/lists"
            target="_blank"
            rel="noopener noreferrer"
          >
            Whiskybase ↗
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
          {whiskies.map((whisky) => (
            <Box key={whisky.id} as="li" sx={{ listStyleType: "none" }}>
              <WhiskyCard titleAs="h3" whisky={whisky} />
            </Box>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
