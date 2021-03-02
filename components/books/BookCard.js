import dateformat from "dateformat";
import Image from "next/image";
import { AspectRatio, Box, Card, Flex, Heading, Link, Text } from "theme-ui";

export default function BookCard({ book, titleAs = "h3" }) {
  return (
    <Link
      href={book.href}
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
            ratio={315 / 475}
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
              src={book.cover}
              alt={book.title}
            />
          </AspectRatio>
          <Box my={2}>
            <Heading as={titleAs} variant="cardTitle">
              {book.title}
            </Heading>
            <Text as="p" variant="subtitle">
              {book.author}
            </Text>
            <Text mt={1} as="p" variant="subtitle">
              {[
                `${book.rating} ★`,
                dateformat(new Date(book.added), "dd mmm yyyy"),
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
