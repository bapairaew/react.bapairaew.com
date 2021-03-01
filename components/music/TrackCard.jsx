import Image from "next/image";
import { AspectRatio, Box, Card, Flex, Heading, Text, Link } from "theme-ui";

export default function TrackCard({ track, titleAs = "h3" }) {
  return (
    <Link
      href={track.external_urls.spotify}
      target="_blank"
      rel="noopener noreferrer"
      sx={{ textDecoration: "none" }}
    >
      <Card variant="compact" sx={{ height: "100%" }}>
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
              overflow: "hidden",
              borderRadius: "default",
            }}
          >
            <Image
              layout="fill"
              objectFit="cover"
              src={track.album.images[0].url}
              alt={track.name}
            />
          </AspectRatio>
          <Box my={2}>
            <Heading
              as={titleAs}
              sx={{
                fontSize: 2,
                fontWeight: "body",
              }}
            >
              {track.name}
            </Heading>
            <Text as="p" variant="subtitle">
              {track.artists.map((a) => a.name).join(", ")}
            </Text>
          </Box>
        </Flex>
      </Card>
    </Link>
  );
}
