import { NextSeo } from "next-seo";
import Link from "next/link";
import {
  Box,
  Card,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  NavLink as A,
} from "theme-ui";
import Footer from "~/components/common/Footer";
import Header from "~/components/common/Header";
import { getOgImgeUrlObject } from "~/libs/ogimage";

const lists = [
  { title: "Music", href: "/lists/music" },
  { title: "Movies", href: "/lists/movies" },
  { title: "Whiskies", href: "/lists/whiskies" },
];

export default function Lists() {
  return (
    <>
      <NextSeo
        title="Lists | Narudom"
        description="Lists of random things that an software engineer enjoy."
        openGraph={{
          title: "Lists | Narudom",
          description:
            "Lists of random things that an software engineer enjoy.",
          images: getOgImgeUrlObject("Lists"),
          site_name: "Narudom",
        }}
      />
      <Header />
      <Container variant="layout.text">
        <Heading as="h1" variant="display">
          Lists
        </Heading>
        <Divider />
        <Grid as="ul" p={0} mt={4} columns={["1fr", "1fr 1fr"]}>
          {lists.map((item) => (
            <Box key={item.title} as="li" sx={{ listStyleType: "none" }}>
              <Link href={item.href} passHref>
                <A sx={{ width: "100%" }}>
                  <Card>
                    <Flex
                      sx={{
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Heading as="h2">{item.title}</Heading>
                      <Heading as="div" sx={{ fontSize: 3 }}>
                        →
                      </Heading>
                    </Flex>
                  </Card>
                </A>
              </Link>
            </Box>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
