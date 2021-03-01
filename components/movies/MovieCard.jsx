import dateformat from "dateformat";
import Image from "next/image";
import { AspectRatio, Box, Card, Flex, Heading, Link, Text } from "theme-ui";

export default function MoiveCard({ movie, titleAs = "h3" }) {
  return (
    <Link
      href={movie.href}
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
            ratio={96 / 142}
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
              src={movie.poster}
              alt={movie.title}
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
              {movie.title}
            </Heading>
            <Text as="p" variant="subtitle">
              {[
                `${movie.rating} ★`,
                dateformat(new Date(movie.added), "dd mmm yyyy"),
              ]
                .filter((x) => x)
                .join(" · ")}
            </Text>
          </Box>
        </Flex>
      </Card>
    </Link>
  );
}
