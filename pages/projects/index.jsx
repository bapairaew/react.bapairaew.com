import Header from "~/components/common/Header";
import Footer from "~/components/common/Footer";
import { getAllProjects } from "~/libs/data";
import { Box, Container, Grid, Heading } from "theme-ui";
import ProjectCard from "~/components/projects/ProjectCard";
import { NextSeo } from "next-seo";

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
          images: [],
          site_name: "Narudom",
        }}
      />
      <Header />
      <Container>
        <Heading as="h1" sx={{ fontWeight: "display" }}>
          Projects
        </Heading>
        <Grid mt={3} columns={["1fr", "1fr 1fr", "1fr 1fr 1fr 1fr"]}>
          {projects
            .sort((a, b) => b.slug.localeCompare(a.slug))
            .map((project) => (
              <Box key={project.slug}>
                <ProjectCard project={project} />
              </Box>
            ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
