import { AspectRatio, Flex, Text, Box, Heading } from "theme-ui";
import Image from "next/image";

export default function TrackCard({ track, titleAs = "h3" }) {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        textDecoration: "none",
        color: "text",
      }}
      as="a"
      href={track.external_urls.spotify}
      target="_blank"
      rel="noopener noreferrer"
    >
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
        <Heading as={titleAs} sx={{ fontSize: 2, fontWeight: "body" }}>
          {track.name}
        </Heading>
        <Text as="p" variant="subtitle">
          {track.artists.map((a) => a.name).join(", ")}
        </Text>
      </Box>
    </Flex>
  );
}
