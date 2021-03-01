import dateformat from "dateformat";
import Image from "next/image";
import Link from "next/link";
import {
  AspectRatio,
  Box,
  Card,
  Flex,
  Heading,
  NavLink as A,
  Text,
} from "theme-ui";

export default function PhotoCard({ photo, titleAs = "h3" }) {
  return (
    <Link href={`/photography/${photo.slug}`} passHref>
      <A sx={{ width: "100%", height: "100%" }}>
        <Card variant="bare" sx={{ height: "100%" }}>
          <Flex sx={{ flexDirection: "column", justifyContent: "center" }}>
            <AspectRatio
              ratio={4 / 3}
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
            <Box my={2}>
              <Heading
                as={titleAs}
                sx={{ textAlign: "center", fontSize: 2, fontWeight: "body" }}
              >
                {photo.place}
              </Heading>
              <Text
                as="p"
                variant="subtitle"
                sx={{ textAlign: "center", fontSize: 1 }}
              >
                {[dateformat(new Date(photo.date), "dd mmm yyyy"), photo.camera]
                  .filter((x) => x)
                  .join(" · ")}
              </Text>
            </Box>
          </Flex>
        </Card>
      </A>
    </Link>
  );
}
