import Image from "next/image";
import { AspectRatio, Box, Card, Flex, Heading, Link } from "theme-ui";

export default function ArtistCard({ artist, titleAs = "h3" }) {
  return (
    <Link
      href={artist.external_urls.spotify}
      target="_blank"
      rel="noopener noreferrer"
      sx={{ textDecoration: "none" }}
    >
      <Card sx={{ height: "100%" }}>
        <Flex
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            textDecoration: "none",
            color: "text",
          }}
        >
          <AspectRatio
            ratio={1 / 1}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "full",
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
          <Box my={2}>
            <Heading
              as={titleAs}
              sx={{ textAlign: "center", fontSize: 2, fontWeight: "body" }}
              my={2}
            >
              {artist.name}
            </Heading>
          </Box>
        </Flex>
      </Card>
    </Link>
  );
}
