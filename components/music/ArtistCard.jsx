import Image from "next/image";
import { AspectRatio, Box, Flex, Heading } from "theme-ui";

export default function ArtistCard({ artist, titleAs = "h3" }) {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        textDecoration: "none",
        color: "text",
      }}
      as="a"
      href={artist.external_urls.spotify}
      target="_blank"
      rel="noopener noreferrer"
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
        <Heading
          as={titleAs}
          sx={{ textAlign: "center", fontSize: 2, fontWeight: "body" }}
          my={2}
        >
          {artist.name}
        </Heading>
      </Box>
    </Flex>
  );
}
