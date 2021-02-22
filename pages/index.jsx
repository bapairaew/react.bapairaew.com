import { NextSeo } from "next-seo";
import AboutFeatured from "~/components/about/AboutFeatured";
import AboutHero from "~/components/about/AboutHero";
import Footer from "~/components/common/Footer";
import Header from "~/components/common/Header";
import { getAllPhotos, getAllPosts, getAllProjects } from "~/libs/data";
import { getOgImgeUrlObject } from "~/libs/image";

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
          images: getOgImgeUrlObject("Narudom"),
          site_name: "Narudom",
        }}
      />
      <Header />
      <AboutHero />
      <AboutFeatured projects={projects} posts={posts} photos={photos} />
      <Footer />
    </>
  );
}
