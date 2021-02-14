import { AspectRatio, Flex, Text, Box } from "theme-ui";
import Image from "next/image";

export default function PhotoCard({ photo }) {
  return (
    <Flex sx={{ flexDirection: "column", justifyContent: "center" }}>
      <AspectRatio
        ratio={1 / 1}
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
        <Text variant="subtitle" sx={{ textAlign: "center" }}>
          {[photo.place, photo.camera && `on ${photo.camera}`, ,]
            .filter((x) => x)
            .join(" ")}
        </Text>
        <Text variant="subtitle" sx={{ textAlign: "center" }}>
          {photo.date && new Date(photo.date).toLocaleDateString()}
        </Text>
      </Box>
    </Flex>
  );
}
