import { NextSeo } from "next-seo";
import { Box, Container, Divider, Grid, Heading } from "theme-ui";
import Footer from "~/components/common/Footer";
import Header from "~/components/common/Header";
import ProjectCard from "~/components/projects/ProjectCard";
import { getAllProjects } from "~/libs/data";
import { getOgImgeUrlObject } from "~/libs/image";

export const getStaticProps = async () => {
  const projects = await getAllProjects();
  return {
    props: { projects },
  };
};

export default function Projects({ projects }) {
  return (
    <>
      <NextSeo
        title="Projects | Narudom"
        description="(Almost) all Narudom's software engineering projects."
        openGraph={{
          title: "Projects | Narudom",
          description: "(Almost) all Narudom's software engineering projects.",
          images: getOgImgeUrlObject("Projects"),
          site_name: "Narudom",
        }}
      />
      <Header />
      <Container>
        <Heading as="h1" sx={{ fontWeight: "display" }}>
          Projects
        </Heading>
        <Divider />
        <Grid
          as="ul"
          p={0}
          mt={4}
          columns={["1fr", "1fr 1fr", "1fr 1fr 1fr 1fr"]}
        >
          {projects
            .sort((a, b) => b.slug.localeCompare(a.slug))
            .map((project) => (
              <Box key={project.slug} as="li" sx={{ listStyleType: "none" }}>
                <ProjectCard titleAs="h2" project={project} />
              </Box>
            ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
