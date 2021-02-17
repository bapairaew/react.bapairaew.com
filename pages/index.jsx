import { NextSeo } from "next-seo";
import AboutFeatured from "~/components/about/AboutFeatured";
import AboutHeader from "~/components/about/AboutHeader";
import AboutHero from "~/components/about/AboutHero";
import Footer from "~/components/common/Footer";
import { getAllPhotos, getAllPosts, getAllProjects } from "~/libs/data";

export const getStaticProps = async () => {
  const projects = await getAllProjects();
  const posts = await getAllPosts();
  const photos = await getAllPhotos();
  return {
    props: { projects, posts, photos },
  };
};

export default function Home({ projects, posts, photos }) {
  return (
    <>
      <NextSeo
        title="Narudom"
        description="A software engineer portfolio."
        openGraph={{
          title: "Narudom",
          description: "A software engineer portfolio.",
          images: [],
          site_name: "Narudom",
        }}
      />
      <AboutHeader />
      <AboutHero />
      <AboutFeatured projects={projects} posts={posts} photos={photos} />
      <Footer />
    </>
  );
}
