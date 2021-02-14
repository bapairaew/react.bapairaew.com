import { NextSeo } from "next-seo";
import AboutFeatured from "~/components/about/AboutFeatured";
import AboutHeader from "~/components/about/AboutHeader";
import AboutHero from "~/components/about/AboutHero";
import Footer from "~/components/common/Footer";
import { getAllPhotos, getAllThoughts, getAllWorks } from "~/libs/data";

export const getStaticProps = async () => {
  const works = await getAllWorks();
  const thoughts = await getAllThoughts();
  const photos = await getAllPhotos();
  return {
    props: { works, thoughts, photos },
  };
};

export default function Home({ works, thoughts, photos }) {
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
      <AboutFeatured works={works} thoughts={thoughts} photos={photos} />
      <Footer />
    </>
  );
}
