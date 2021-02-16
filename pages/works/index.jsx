import Header from "~/components/common/Header";
import Footer from "~/components/common/Footer";
import { getAllWorks } from "~/libs/data";
import { Box, Container, Grid, Heading } from "theme-ui";
import WorkCard from "~/components/works/WorkCard";
import { NextSeo } from "next-seo";

export const getStaticProps = async () => {
  const works = await getAllWorks();
  return {
    props: { works },
  };
};

export default function Works({ works }) {
  return (
    <>
      <NextSeo
        title="Works | Narudom"
        description="(Almost) all Narudom's software engineering projects."
        openGraph={{
          title: "Works | Narudom",
          description: "(Almost) all Narudom's software engineering projects.",
          images: [],
          site_name: "Narudom",
        }}
      />
      <Header />
      <Container>
        <Heading as="h1" sx={{ fontWeight: "display" }}>
          Works
        </Heading>
      </Container>
      <Grid px={3} gap={2} columns={["1fr", "1fr 1fr", "1fr 1fr 1fr 1fr"]}>
        {works
          .sort((a, b) => b.slug.localeCompare(a.slug))
          .map((work) => (
            <Box key={work.slug}>
              <WorkCard work={work} />
            </Box>
          ))}
      </Grid>
      <Footer />
    </>
  );
}
