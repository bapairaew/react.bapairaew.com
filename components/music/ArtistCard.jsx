import { AspectRatio, Flex, Text, Box } from "theme-ui";
import Image from "next/image";

export default function ArtistCard({ artist }) {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <AspectRatio
        ratio={1 / 1}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        <Image
          layout="fill"
          objectFit="cover"
          src={artist.images[0].url}
          alt={artist.name}
        />
      </AspectRatio>
      <Box my={1}>
        <Text sx={{ textAlign: "center" }}>{artist.name}</Text>
      </Box>
    </Flex>
  );
}
