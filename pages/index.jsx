import { NextSeo } from "next-seo";
import AboutFeatured from "~/components/about/AboutFeatured";
import AboutHeader from "~/components/about/AboutHeader";
import AboutHero from "~/components/about/AboutHero";
import Footer from "~/components/common/Footer";
import { getAllPhotos, getAllPosts, getAllWorks } from "~/libs/data";

export const getStaticProps = async () => {
  const works = await getAllWorks();
  const posts = await getAllPosts();
  const photos = await getAllPhotos();
  return {
    props: { works, posts, photos },
  };
};

export default function Home({ works, posts, photos }) {
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
      <AboutFeatured works={works} posts={posts} photos={photos} />
      <Footer />
    </>
  );
}
