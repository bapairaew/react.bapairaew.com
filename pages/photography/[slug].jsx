import dateformat from "dateformat";
import exifr from "exifr";
import fs from "fs";
import * as sizeOf from "image-size";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import {
  AspectRatio,
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  NavLink as A,
  Text,
} from "theme-ui";
import { promisify } from "util";
import Footer from "~/components/common/Footer";
import Header from "~/components/common/Header";
import { getAllPhotos } from "~/libs/data";
import { getPhotoUrlObject } from "~/libs/image";
import { parsePhoto } from "~/libs/parser";

export const getStaticPaths = async () => {
  const photos = await getAllPhotos();
  return {
    paths: photos.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const path = `public/photos/${slug}.jpeg`;
  const size = sizeOf(path);
  const photo = parsePhoto({
    path,
    exif: await promisify(fs.readFile)(path).then(exifr.parse),
  });
  return {
    props: { photo, size },
  };
};

export default function SinglePhotography({ photo, size }) {
  const title = `${photo.place} | Narudom`;
  const description = [
    photo.place,
    dateformat(new Date(photo.date), "dd mmm yyyy"),
    photo.camera,
  ]
    .filter((x) => x)
    .join(" · ");

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          images: getPhotoUrlObject(photo.slug),
          site_name: "Narudom",
        }}
      />
      <Header />
      <Container>
        <Link href="/photography" passHref>
          <A sx={{ mb: 4, color: "gray" }}>
            <Text>← Photography</Text>
          </A>
        </Link>
        <Flex sx={{ flexDirection: ["column", "row"] }}>
          <Box sx={{ flexBasis: ["auto", 600, 800] }}>
            <AspectRatio
              ratio={size.width / size.height}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                layout="fill"
                objectFit="cover"
                src={`/photos/${photo.slug}.jpeg`}
                alt={photo.place}
              />
            </AspectRatio>
          </Box>
          <Box sx={{ py: 3, px: [0, 4] }}>
            <Heading as="h1" sx={{ fontSize: [3, 4] }}>
              {photo.place}
            </Heading>
            <Grid as="dl" my={3} gap={3} columns="50% 50%">
              <Box>
                <Text as="dt" variant="subtitle">
                  Date
                </Text>
                <Text as="dd">
                  {dateformat(new Date(photo.date), "dd mmm yyyy")}
                </Text>
              </Box>
              <Box>
                <Text as="dt" variant="subtitle">
                  Camera
                </Text>
                <Text as="dd">{photo.camera}</Text>
              </Box>
              <Box>
                <Text as="dt" variant="subtitle">
                  Aperture
                </Text>
                <Text as="dd">ƒ / {photo.fnumber}</Text>
              </Box>
              <Box>
                <Text as="dt" variant="subtitle">
                  Exposure Time
                </Text>
                <Text as="dd">1 / {(1 / photo.exposureTime).toFixed(0)}</Text>
              </Box>
              <Box>
                <Text as="dt" variant="subtitle">
                  Focal Length
                </Text>
                <Text as="dd">{photo.focalLength.toFixed(1)} mm</Text>
              </Box>
              <Box>
                <Text as="dt" variant="subtitle">
                  ISO
                </Text>
                <Text as="dd">{photo.iso}</Text>
              </Box>
            </Grid>
          </Box>
        </Flex>
      </Container>
      <Footer />
    </>
  );
}
