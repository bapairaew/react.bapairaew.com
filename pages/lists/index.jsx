import { NextSeo } from "next-seo";
import Link from "next/link";
import {
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

const lists = [{ title: "Music", href: "/lists/music" }];

export default function Lists() {
  return (
    <>
      <NextSeo
        title="Lists | Narudom"
        description="Lists of random things that I enjoy."
        openGraph={{
          title: "Lists | Narudom",
          description: "Lists of things that I enjoy.",
          images: [],
          site_name: "Narudom",
        }}
      />
      <Header />
      <Container variant="layout.text">
        <Heading as="h1" sx={{ fontWeight: "display" }}>
          Lists
        </Heading>
        <Divider />
        <Grid mt={4} columns={["1fr", "1fr 1fr"]}>
          {lists.map((item) => (
            <Link href={item.href} passHref>
              <A>
                <Card key={item.title}>
                  <Flex sx={{ justifyContent: "space-between" }}>
                    <Heading>{item.title}</Heading>
                    <Heading>→</Heading>
                  </Flex>
                </Card>
              </A>
            </Link>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
