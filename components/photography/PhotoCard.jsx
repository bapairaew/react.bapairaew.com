import { AspectRatio, Flex, Text, Box, Heading } from "theme-ui";
import Image from "next/image";

export default function PhotoCard({ photo, titleAs = "h3" }) {
  return (
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
      <Box my={1}>
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
          {[
            photo.date && new Date(photo.date).toLocaleDateString(),
            photo.camera,
          ]
            .filter((x) => x)
            .join(" · ")}
        </Text>
      </Box>
    </Flex>
  );
}
