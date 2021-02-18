import { AspectRatio, Flex, Text, Box } from "theme-ui";
import Image from "next/image";

export default function TrackCard({ track }) {
  return (
    <Flex sx={{ flexDirection: "column", justifyContent: "center" }}>
      <AspectRatio
        ratio={1 / 1}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Image
          layout="fill"
          objectFit="cover"
          src={track.album.images[0].url}
          alt={track.name}
        />
      </AspectRatio>
      <Box my={1}>
        <Text>{track.name}</Text>
        <Text variant="subtitle">
          {track.artists.map((a) => a.name).join(", ")}
        </Text>
      </Box>
    </Flex>
  );
}
