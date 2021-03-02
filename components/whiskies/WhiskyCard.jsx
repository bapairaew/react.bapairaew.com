import dateformat from "dateformat";
import Image from "next/image";
import { AspectRatio, Box, Card, Flex, Heading, Link, Text } from "theme-ui";

export default function WhiskyCard({ whisky, titleAs = "h3" }) {
  return (
    <Link
      href={whisky.href}
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
            ratio={1 / 2}
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
              src={whisky.photo}
              alt={whisky.title}
            />
          </AspectRatio>
          <Box mb={1} mt={4}>
            <Heading as={titleAs} variant="cardTitle">
              {whisky.title}
            </Heading>
            <Text as="p" variant="subtitle">
              {[
                `${whisky.rating} ★`,
                dateformat(new Date(whisky.added), "dd mmm yyyy"),
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
